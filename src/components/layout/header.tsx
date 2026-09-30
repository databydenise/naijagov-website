"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Container } from "@/components/ui/container";
import { Close, Menu } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { MobileNavPanel } from "./mobile-nav-panel";
import { GET_EXTENSION_HREF, SITE_LINKS } from "./nav-links";

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
              <div className="flex items-center gap-1">
                {SITE_LINKS.map((link) => (
                  <Button key={link.href} variant="ghost" size="sm" asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
              <Separator orientation="vertical" className="h-5" />
              {/* A size up from the section links — the CTA outranks them. */}
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
