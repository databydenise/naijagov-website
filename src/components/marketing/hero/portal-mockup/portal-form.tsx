import { Emblem } from "./emblem";

/**
 * The fictional portal page the extension sits on top of. Every "input" here
 * is a <div> — there is no form, nothing is focusable, and nothing can be
 * submitted. The mockup root is aria-hidden.
 *
 * Sizes are the spec's, scaled to about 0.78 so the stack fits the 426px of
 * content height the 720 x 470 canvas leaves below the chrome bar. The spec's
 * literal values overflow it by roughly 120px; the proportions between them
 * are what carries the design, so those are preserved exactly.
 */

const STEPS = [
  { number: "1", label: "Personal Info", current: true },
  { number: "2", label: "Documents", current: false },
  { number: "3", label: "Review", current: false },
] as const;

const FIELDS = [
  { label: "Full Name", placeholder: "Enter your full name" },
  { label: "Email Address", placeholder: "you@example.com" },
  { label: "Phone Number", placeholder: "080 1234 5678" },
] as const;

function PortalForm() {
  return (
    <div className="h-full bg-mock-surface p-5">
      <div className="flex items-center gap-2.5">
        <Emblem />
        <div className="text-[12px] leading-[1.3] font-bold tracking-[0.02em] text-ink uppercase">
          <div>National Services</div>
          <div>Portal — Demo</div>
        </div>
      </div>

      <div className="mt-3.5 border-t border-rule" />

      <div className="mt-3.5 flex items-center">
        {STEPS.map((step, index) => (
          <div
            key={step.number}
            className={
              "flex items-center " +
              (index < STEPS.length - 1 ? "flex-1" : "flex-none")
            }
          >
            <div className="flex items-center gap-1.5">
              <div
                className={
                  "flex size-[26px] shrink-0 items-center justify-center rounded-full text-[12px] font-bold " +
                  (step.current
                    ? "bg-green-900 text-bg-surface"
                    : "bg-mock-step text-ink-muted")
                }
              >
                {step.number}
              </div>
              <span
                className={
                  "text-[12px] whitespace-nowrap " +
                  (step.current
                    ? "font-bold text-ink"
                    : "font-normal text-ink-faint")
                }
              >
                {step.label}
              </span>
            </div>
            {index < STEPS.length - 1 && (
              <div className="mx-2 h-px flex-1 bg-mock-step" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-4.5 text-[17px] leading-none font-bold text-ink">
        Applicant Information
      </div>

      <div className="mt-3.5 flex flex-col gap-3">
        {FIELDS.map((field) => (
          <div key={field.label}>
            <div className="text-[12px] leading-[1.3] font-bold text-ink">
              {field.label} <span className="text-mock-req">*</span>
            </div>
            <div className="mt-1 flex h-8.5 items-center rounded-[5px] border border-rule bg-mock-field px-2.5 text-[12.5px] text-ink-faint">
              {field.placeholder}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex h-9.5 items-center justify-center rounded-[5px] bg-green-900 text-[13px] font-semibold text-bg-surface">
        Continue
      </div>
    </div>
  );
}

export { PortalForm };
