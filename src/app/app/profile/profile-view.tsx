"use client";

import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getInitials } from "@/lib/utils";
import { useProfile } from "../profile-context";
import { DemoButton } from "./demo-button";
import { DemoNotice } from "./demo-notice";
import { DetailCard } from "./detail-card";
import { PageHeader } from "./page-header";

const FILL_ERROR_ID = "demo-fill-error";

function ProfileSkeleton() {
  return (
    <div aria-busy="true" className="mt-8 space-y-6">
      <span className="sr-only">Loading your profile…</span>
      {[3, 3, 4].map((rows, card) => (
        <div
          key={card}
          aria-hidden="true"
          className="rounded-md border border-rule bg-bg-surface p-6"
        >
          <div className="h-4 w-32 rounded-sm bg-green-50" />
          <div className="mt-6 grid gap-x-8 gap-y-5 narrow:grid-cols-2">
            {Array.from({ length: rows }, (_, row) => (
              <div key={row} className="space-y-2">
                <div className="h-3 w-20 rounded-sm bg-green-50" />
                <div className="h-4 w-40 max-w-full rounded-sm bg-green-50" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

interface ProfileErrorProps {
  onRetry: () => void;
}

function ProfileError({ onRetry }: ProfileErrorProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <section className="mt-8 rounded-md border border-rule bg-bg-surface p-6">
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-lg leading-snug font-bold tracking-[-0.01em] text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        We couldn&rsquo;t load your profile.
      </h2>
      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">
        Check your connection, then try again.
      </p>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={onRetry}
        className="mt-5"
      >
        Try again
      </Button>
    </section>
  );
}

function ProfileView() {
  const { status, profile, filling, fillError, retry, fillDemo, clearDemo } =
    useProfile();

  const details = profile?.details ?? null;
  const filled = details !== null;

  // Announce the change whenever the details appear or disappear. Tracked
  // during render so remounting on a filled profile announces nothing.
  const [announcedFilled, setAnnouncedFilled] = useState(filled);
  const [announcement, setAnnouncement] = useState("");
  if (filled !== announcedFilled) {
    setAnnouncedFilled(filled);
    setAnnouncement(filled ? "Demo details added." : "Demo details cleared.");
  }

  if (status === "loading") {
    return (
      <>
        <PageHeader />
        <ProfileSkeleton />
      </>
    );
  }

  if (status === "error" || !profile) {
    return (
      <>
        <PageHeader />
        <ProfileError onRetry={retry} />
      </>
    );
  }

  const { account } = profile;

  return (
    <>
      <PageHeader
        action={
          <DemoButton
            filled={filled}
            filling={filling}
            describedBy={fillError ? FILL_ERROR_ID : undefined}
            onFill={fillDemo}
            onClear={clearDemo}
          />
        }
      >
        {fillError && (
          <p id={FILL_ERROR_ID} className="mt-4 text-sm font-medium text-ink">
            We couldn&rsquo;t load the demo details. Try again.
          </p>
        )}
      </PageHeader>

      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>

      <div className="mt-8 space-y-6">
        {!filled && <DemoNotice />}

        <DetailCard
          title="Account"
          leading={
            <Avatar aria-hidden="true" className="size-14">
              <AvatarFallback className="text-lg">
                {getInitials(account.fullName)}
              </AvatarFallback>
            </Avatar>
          }
          rows={[
            { label: "Full name", value: account.fullName },
            { label: "Email", value: account.email },
            { label: "Member since", value: account.memberSince },
          ]}
        />

        <DetailCard
          title="Personal details"
          rows={[
            { label: "Preferred name", value: details?.preferredName ?? null },
            { label: "Date of birth", value: details?.dateOfBirth ?? null },
            { label: "State of origin", value: details?.stateOfOrigin ?? null },
          ]}
        />

        <DetailCard
          title="Contact and address"
          rows={[
            { label: "Phone", value: details?.phone ?? null },
            { label: "Address", value: details?.addressLine ?? null },
            { label: "City", value: details?.city ?? null },
            { label: "State", value: details?.state ?? null },
          ]}
        />
      </div>
    </>
  );
}

export { ProfileView };
