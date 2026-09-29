"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useSession } from "@/lib/auth/session-context";

interface AppGuardProps {
  children: ReactNode;
}

/**
 * Starts the mock session for anyone who reaches /app, so reviewers never meet
 * an auth flow. Client-side and decorative: it protects nothing.
 *
 * It signs in only until a user has been seen on this mount. After that a null
 * user means someone signed out, and signing straight back in would beat the
 * navigation away.
 */
function AppGuard({ children }: AppGuardProps) {
  const { user, signIn } = useSession();
  const [hasSignedIn, setHasSignedIn] = useState(Boolean(user));

  // Adjusted during render rather than in an effect, as the header does.
  if (user && !hasSignedIn) {
    setHasSignedIn(true);
  }

  useEffect(() => {
    if (!hasSignedIn) signIn();
  }, [hasSignedIn, signIn]);

  if (user) return children;

  // Signed out: nothing to show while the navigation away completes.
  if (hasSignedIn) return null;

  return (
    <div role="status">
      <span className="sr-only">Loading your account…</span>
      <div aria-hidden="true" className="space-y-4">
        <div className="h-10 w-48 rounded-sm bg-green-50" />
        <div className="h-4 w-72 max-w-full rounded-sm bg-green-50" />
        <div className="mt-8 h-40 rounded-md border border-rule bg-bg-surface" />
      </div>
    </div>
  );
}

export { AppGuard };
