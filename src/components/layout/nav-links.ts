/**
 * The in-page sections, shared by the desktop nav and the mobile panel. Rooted
 * at `/` so they still land on the landing page from inside /app.
 */
export const SITE_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Install", href: "/#install" },
  { label: "Try it", href: "/#try-it" },
] as const

/** Every "Get Extension" goes to the install steps, not straight to the zip. */
export const GET_EXTENSION_HREF = "/#install"

/** The packaged extension build, served from public/. */
export const EXTENSION_ZIP_HREF = "/naijagov-extension.zip"

/** Placeholder until the video exists — the hero and "How It Works" share it. */
export const WATCH_VIDEO_HREF = "#"
