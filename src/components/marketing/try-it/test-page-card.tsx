import { ExternalLink } from "@/components/ui/icons";

interface TestPageCardProps {
  label: string;
  href: string;
  /** What to try once the page is open. */
  children: React.ReactNode;
}

/**
 * A whole-card link to an external test page. It opens in a new tab so the
 * install steps stay open in this one; the screen-reader label says so.
 */
function TestPageCard({ label, href, children }: TestPageCardProps) {
  const displayUrl = href.replace(/^https:\/\//, "");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-lg border border-rule bg-bg-surface p-5 outline-none transition-colors duration-150 hover:border-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring narrow:p-6"
    >
      <span className="flex items-center justify-between gap-4">
        <span className="text-eyebrow font-medium tracking-wider text-ink-muted uppercase">
          {label}
        </span>
        <ExternalLink
          size={18}
          aria-hidden="true"
          className="shrink-0 text-ink-muted transition-colors duration-150 group-hover:text-green-900"
        />
      </span>
      <span className="mt-3 font-mono text-[15px] break-all text-green-900 underline underline-offset-4">
        {displayUrl}
      </span>
      <span className="mt-3 text-sm leading-[1.55] text-ink-muted">
        {children}
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export { TestPageCard };
export type { TestPageCardProps };
