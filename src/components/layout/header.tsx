"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Container } from "@/components/ui/container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Close, Menu } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { useSession } from "@/lib/auth/session-context";
import { getInitials } from "@/lib/utils";
import { MobileNavPanel } from "./mobile-nav-panel";
import { DEMO_ENTRY_HREF, GET_EXTENSION_HREF, INSTALL_LINKS } from "./nav-links";

function InstallMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="group">
          How to install
          <ChevronDown
            size={16}
            aria-hidden="true"
            className="transition-transform duration-150 ease-out group-data-[state=open]:rotate-180"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}>
        {INSTALL_LINKS.map((link) => (
          <DropdownMenuItem key={link.href} asChild>
            <Link href={link.href}>{link.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** Log in + Sign up when signed out; a link to the profile when signed in. */
function AuthSlot() {
  const { user } = useSession();

  if (user) {
    return (
      <Link
        href="/app/profile"
        aria-label={`Your profile, ${user.fullName}`}
        className="rounded-full outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <Avatar>
          <AvatarFallback>{getInitials(user.fullName)}</AvatarFallback>
        </Avatar>
      </Link>
    );
  }

  // The pair reads as one group: a tight gap between them, the cluster's full
  // gap before the call to action.
  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" size="sm" asChild>
        <Link href={DEMO_ENTRY_HREF}>Log in</Link>
      </Button>
      <Button variant="secondary" size="sm" asChild className="rounded-sm py-2">
        <Link href={DEMO_ENTRY_HREF}>Sign up</Link>
      </Button>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const [panelPathname, setPanelPathname] = useState(pathname);

  // Navigating away dismisses the panel. Adjusted during render rather than in
  // an effect, so the panel never paints open on the page it just left.
  if (pathname !== panelPathname) {
    setPanelPathname(pathname);
    setOpen(false);
  }

  // Collapsible is not a dismissable layer, so Escape is wired by hand —
  // and focus goes back to the trigger that opened it.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <Collapsible open={open} onOpenChange={setOpen} asChild>
      {/* The bottom hairline sits on the header, outside the content column,
          so it spans the viewport rather than the 1200px column. */}
      <header className="sticky top-0 z-40 border-b border-rule bg-bg-page">
        <Container>
          <div className="flex h-18 items-center justify-between">
            <Logo />

            <nav
              aria-label="Site"
              className="hidden items-center gap-5 nav:flex"
            >
              <InstallMenu />
              <Separator orientation="vertical" className="h-5" />
              <AuthSlot />
              {/* A size up from the auth buttons — the CTA outranks them. */}
              <Button variant="primary" size="md" asChild>
                <Link href={GET_EXTENSION_HREF}>Get Extension</Link>
              </Button>
            </nav>

            <div className="flex items-center gap-2 nav:hidden">
              <Button variant="primary" size="md" asChild>
                <Link href={GET_EXTENSION_HREF}>Get Extension</Link>
              </Button>
              <CollapsibleTrigger asChild>
                <Button
                  ref={triggerRef}
                  variant="ghost"
                  size="icon"
                  aria-label={open ? "Close menu" : "Open menu"}
                  className="hover:bg-green-50 hover:no-underline"
                >
                  {open ? (
                    <Close size={20} aria-hidden="true" />
                  ) : (
                    <Menu size={20} aria-hidden="true" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </Container>

        <CollapsibleContent className="nav:hidden">
          <MobileNavPanel onNavigate={() => setOpen(false)} />
        </CollapsibleContent>
      </header>
    </Collapsible>
  );
}

export { Header };
