import type { User } from "@/lib/auth/session-context"

/**
 * Seed fixture. Deliberately fictional: placeholder name, example.com address,
 * and no identifiers of any kind. Nothing here resembles real person data.
 */
export const mockUser: User = {
  id: "usr_000000",
  fullName: "Ada Placeholder",
  email: "ada.placeholder@example.com",
}
