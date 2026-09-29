import type { ReactNode } from "react";

interface DetailRow {
  label: string;
  /** `null` renders as "Not added yet". */
  value: string | null;
}

interface DetailCardProps {
  title: string;
  rows: DetailRow[];
  /** Shown beside the rows, e.g. the avatar in the Account card. */
  leading?: ReactNode;
}

function DetailCard({ title, rows, leading }: DetailCardProps) {
  return (
    <section className="rounded-md border border-rule bg-bg-surface p-6">
      {/* Body-scale heading: opts out of the global display-type rule. */}
      <h2 className="text-lg leading-snug font-bold tracking-[-0.01em] text-ink">
        {title}
      </h2>

      <div className="mt-5 flex flex-col gap-5 narrow:flex-row narrow:items-start">
        {leading}
        <dl className="grid flex-1 gap-x-8 gap-y-5 narrow:grid-cols-2">
          {rows.map((row) => (
            <div key={row.label} className="min-w-0">
              <dt className="text-[13px] font-medium text-ink-muted">
                {row.label}
              </dt>
              {row.value === null ? (
                <dd className="mt-1 text-[15px] text-ink-muted">
                  Not added yet
                </dd>
              ) : (
                <dd className="mt-1 text-[15px] font-medium break-words text-ink">
                  {row.value}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export { DetailCard };
export type { DetailRow };
