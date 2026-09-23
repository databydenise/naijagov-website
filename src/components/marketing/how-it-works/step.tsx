import type { Icon } from "@/components/ui/icons";

interface StepProps {
  icon: Icon;
  number: number;
  title: string;
  description: string;
}

/**
 * One step: icon tile, numbered title, description. The number lives inside
 * the title text rather than in a badge — the tile already carries the visual
 * weight, and a badge on top of it would be a second competing marker.
 *
 * The icon is decorative, since the title names the step.
 */
function Step({ icon: StepIcon, number, title, description }: StepProps) {
  return (
    // Single column below 600px, where a left-aligned 44px tile over one line
    // of text reads as ragged; from the 2 x 2 grid up it goes back to left.
    <li className="text-center narrow:text-left">
      <div className="mx-auto flex size-11 items-center justify-center rounded-lg bg-green-50 narrow:mx-0">
        <StepIcon size={20} className="text-green-900" aria-hidden="true" />
      </div>
      {/* The base h1/h2/h3 rule is display type — 800 at -0.03em. These titles
          sit at body scale, so they take their own weight and tracking. */}
      <h3 className="mt-4 text-[20px] leading-tight font-bold tracking-[-0.01em] text-ink-muted">
        {number}. {title}
      </h3>
      <p className="mx-auto mt-2 max-w-[32ch] text-sm leading-[1.55] text-ink-muted narrow:mx-0">
        {description}
      </p>
    </li>
  );
}

export { Step };
export type { StepProps };
