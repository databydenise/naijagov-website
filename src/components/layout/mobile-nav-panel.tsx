import Link from "next/link"
import { Container } from "@/components/ui/container"
import { SITE_LINKS } from "./nav-links"

interface MobileNavPanelProps {
  /** Closes the panel — selecting anything in it dismisses it. */
  onNavigate: () => void
}

const itemClass =
  "flex min-h-11 items-center rounded-sm text-[15px] text-ink transition-colors duration-150 outline-none hover:text-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"

/**
 * The collapsed navigation, shown below 900px. It is an inline panel that
 * pushes the page down — no overlay, no scroll lock, nothing modal about it.
 */
function MobileNavPanel({ onNavigate }: MobileNavPanelProps) {
  return (
    <div className="border-b border-rule bg-bg-page py-4">
      <Container>
        <nav aria-label="Site" className="flex flex-col">
          {SITE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className={itemClass}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  )
}

export { MobileNavPanel }
export type { MobileNavPanelProps }
