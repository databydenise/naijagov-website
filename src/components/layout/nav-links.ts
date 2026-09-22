/** The install targets, shared by the desktop dropdown and the mobile panel. */
export const INSTALL_LINKS = [
  { label: "Chrome", href: "/install#chrome" },
  { label: "Edge", href: "/install#edge" },
  { label: "Brave", href: "/install#brave" },
] as const

/** Where the primary call to action goes until the extension itself exists. */
export const GET_EXTENSION_HREF = "/install"
