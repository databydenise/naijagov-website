import Link from "next/link";
import { cn } from "cn";
import { Play } from "@/components/ui/icons";

interface PlayLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * A circular outlined play button followed by an underlined label — one link,
 * so the whole lockup is a single tab stop and the ring wraps both parts.
 * The circle and label are siblings inside the anchor, not nested controls.
 */
function PlayLink({ href, children, className }: PlayLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-sm text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="flex size-5.5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink transition-colors duration-150 ease-out group-hover:border-green-900 group-hover:text-green-900"
      >
        {/* Filled rather than stroked: at 8px an outlined triangle closes up. */}
        <Play size={8} fill="currentColor" strokeWidth={0} className="ml-px" />
      </span>
      <span className="text-[15px] underline underline-offset-4 transition-colors duration-150 ease-out group-hover:text-green-900">
        {children}
      </span>
    </Link>
  );
}

export { PlayLink };
export type { PlayLinkProps };
