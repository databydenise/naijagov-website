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
