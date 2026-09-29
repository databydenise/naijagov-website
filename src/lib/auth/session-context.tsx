"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { mockUser } from "@/mocks/user"

export interface User {
  id: string
  fullName: string
  email: string
}

interface SessionValue {
  user: User | null
  /** Starts the mock session. A no-op when already signed in. */
  signIn: () => void
  signOut: () => void
  /** Dev-only switch between the signed-out and signed-in mock. */
  toggleSession: () => void
}

interface SessionProviderProps {
  children: ReactNode
}

/**
 * A simulated session held in memory. Nothing is validated, stored or
 * transmitted, and it grants no access to anything — real auth belongs to a
 * backend this repo deliberately doesn't have.
 */
const SessionContext = createContext<SessionValue | null>(null)

function SessionProvider({ children }: SessionProviderProps) {
  // Signed out is the default state.
  const [user, setUser] = useState<User | null>(null)

  const signIn = () => {
    setUser((current) => current ?? mockUser)
  }

  const signOut = () => {
    setUser(null)
  }

  const toggleSession = () => {
    setUser((current) => (current ? null : mockUser))
  }

  return (
    <SessionContext value={{ user, signIn, signOut, toggleSession }}>
      {children}
    </SessionContext>
  )
}

function useSession(): SessionValue {
  const session = useContext(SessionContext)

  if (!session) {
    throw new Error("useSession must be used inside <SessionProvider>")
  }

  return session
}

export { SessionProvider, useSession }
