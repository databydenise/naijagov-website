/** The install targets, shared by the desktop dropdown and the mobile panel. */
export const INSTALL_LINKS = [
  { label: "Chrome", href: "/install#chrome" },
  { label: "Edge", href: "/install#edge" },
  { label: "Brave", href: "/install#brave" },
] as const

/** Where the primary call to action goes until the extension itself exists. */
export const GET_EXTENSION_HREF = "/install"

/** Placeholder until the video exists — the hero and "How It Works" share it. */
export const WATCH_VIDEO_HREF = "#"

/**
 * Where Log in and Sign up go. There is no auth flow: the /app guard starts the
 * mock session on arrival, so reviewers land straight on the profile.
 */
export const DEMO_ENTRY_HREF = "/app/profile"
