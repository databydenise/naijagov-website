import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";

interface PageHeaderProps {
  /** Sits right of the heading from 600px up, full width below it. */
  action?: ReactNode;
  /** Anything that belongs under the header row, e.g. an action's error. */
  children?: ReactNode;
}

function PageHeader({ action, children }: PageHeaderProps) {
  return (
    <header>
      <div className="flex flex-col gap-5 narrow:flex-row narrow:items-end narrow:justify-between narrow:gap-8">
        <div>
          <Eyebrow>Your account</Eyebrow>
          <h1 className="mt-3 text-[40px] text-ink">Profile</h1>
          <p className="mt-2 text-base leading-relaxed text-ink-muted">
            Your account and contact details.
          </p>
        </div>
        {action}
      </div>
      {children}
    </header>
  );
}

export { PageHeader };
