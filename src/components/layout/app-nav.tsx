"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  History,
  IdCard,
  LogOut,
  Settings,
  User,
  type Icon,
} from "@/components/ui/icons";
import { useSession } from "@/lib/auth/session-context";

interface AppNavLink {
  label: string;
  href: string;
  icon: Icon;
}

const APP_NAV_LINKS: AppNavLink[] = [
  { label: "Profile", href: "/app/profile", icon: User },
  { label: "My Information", href: "/app/information", icon: IdCard },
  { label: "Activity", href: "/app/activity", icon: History },
  { label: "Settings", href: "/app/settings", icon: Settings },
];

const rowClass =
  "flex h-10 shrink-0 items-center gap-2.5 rounded-md px-3 text-[15px] font-medium whitespace-nowrap text-ink-muted outline-none transition-colors duration-150 hover:bg-green-50 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

/**
 * The signed-in area's navigation. A vertical sidebar from 900px up; below
 * that, a single row that scrolls sideways under the site header.
 */
function AppNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useSession();

  // Leave first, then drop the session. The /app guard stops signing in once
  // it has seen a user, so the null user in between bounces no one back in.
  const handleSignOut = () => {
    router.push("/");
    signOut();
  };

  return (
    <nav aria-label="Account">
      {/* The padding keeps focus rings clear of the scroller's clipping edge. */}
      <div className="-mx-1 flex items-center gap-1 overflow-x-auto p-1 scrollbar-none nav:mx-0 nav:flex-col nav:items-stretch nav:overflow-visible nav:p-0 [&::-webkit-scrollbar]:hidden">
        <ul className="flex gap-1 nav:flex-col">
          {APP_NAV_LINKS.map(({ label, href, icon: LinkIcon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`${rowClass} aria-[current=page]:bg-green-50 aria-[current=page]:text-green-900`}
                >
                  <LinkIcon size={18} aria-hidden="true" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="ml-1 shrink-0 border-l border-rule pl-1 nav:mt-4 nav:ml-0 nav:border-t nav:border-l-0 nav:pt-4 nav:pl-0">
          <button
            type="button"
            onClick={handleSignOut}
            className={`${rowClass} w-full`}
          >
            <LogOut size={18} aria-hidden="true" />
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
}

export { AppNav };
