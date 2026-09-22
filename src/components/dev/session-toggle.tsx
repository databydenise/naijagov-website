"use client"

import { useSession } from "@/lib/auth/session-context"

/**
 * Dev-only switch for the simulated session, so the signed-in header can be
 * seen without any auth existing. Rendered by the root layout outside
 * production, and never shipped as product UI.
 */
function SessionToggle() {
  const { user, toggleSession } = useSession()

  return (
    <button
      type="button"
      onClick={toggleSession}
      className="fixed bottom-4 left-4 z-50 rounded-md border border-rule bg-bg-surface px-3 py-2 text-xs font-medium text-ink-muted shadow-[0_8px_24px_-12px_rgb(0_0_0/0.18)] transition-colors duration-150 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      dev: {user ? "signed in" : "signed out"}
    </button>
  )
}

export { SessionToggle }
