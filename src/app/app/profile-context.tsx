"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getDemoDetails, getProfile, type Profile } from "@/lib/api/profile";

type ProfileStatus = "loading" | "ready" | "error";

interface ProfileValue {
  status: ProfileStatus;
  profile: Profile | null;
  /** True while the demo details are being fetched. */
  filling: boolean;
  /** The last attempt to fill the demo details failed. */
  fillError: boolean;
  retry: () => void;
  fillDemo: () => void;
  clearDemo: () => void;
}

interface ProfileProviderProps {
  children: ReactNode;
}

/**
 * Holds the profile for the whole /app area, so filled details survive moving
 * between its pages. Memory only — a reload starts empty again, and nothing is
 * written to any storage.
 */
const ProfileContext = createContext<ProfileValue | null>(null);

function ProfileProvider({ children }: ProfileProviderProps) {
  const [status, setStatus] = useState<ProfileStatus>("loading");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [filling, setFilling] = useState(false);
  const [fillError, setFillError] = useState(false);
  // Bumped by retry() to run the fetch again.
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;

    getProfile().then(
      (result) => {
        if (cancelled) return;
        setProfile(result);
        setStatus("ready");
      },
      () => {
        if (!cancelled) setStatus("error");
      }
    );

    return () => {
      cancelled = true;
    };
  }, [attempt]);

  const retry = () => {
    setStatus("loading");
    setAttempt((current) => current + 1);
  };

  const fillDemo = () => {
    if (filling) return;

    setFilling(true);
    setFillError(false);

    getDemoDetails()
      .then((details) => {
        setProfile((current) => current && { ...current, details });
      })
      .catch(() => setFillError(true))
      .finally(() => setFilling(false));
  };

  const clearDemo = () => {
    setProfile((current) => current && { ...current, details: null });
    setFillError(false);
  };

  return (
    <ProfileContext
      value={{
        status,
        profile,
        filling,
        fillError,
        retry,
        fillDemo,
        clearDemo,
      }}
    >
      {children}
    </ProfileContext>
  );
}

function useProfile(): ProfileValue {
  const value = useContext(ProfileContext);

  if (!value) {
    throw new Error("useProfile must be used inside <ProfileProvider>");
  }

  return value;
}

export { ProfileProvider, useProfile };
