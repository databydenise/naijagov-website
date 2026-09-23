import { ExtensionPanel } from "./extension-panel";
import { PortalForm } from "./portal-form";

/**
 * A browser showing the extension panel open over a government form, built in
 * real markup rather than an image so it stays crisp at any zoom and themes
 * from the tokens.
 *
 * The whole thing is decorative: aria-hidden at the root, and every element
 * inside is a <div> or an SVG. Nothing is focusable, nothing is a control.
 *
 * Scaling: the inner layer is authored at exactly 720 x 470 with no responsive
 * rules, and the frame scales it with a transform, so every internal
 * proportion survives every viewport. The scale is
 * `container width / 720`, expressed as `tan(atan2(100cqw, 720px))` because
 * CSS cannot divide one length by another and `scale()` needs a bare number.
 * No JS, no resize listener.
 */

const INTRINSIC_WIDTH = 720;
const INTRINSIC_HEIGHT = 470;

/** Below ~374px of frame the mockup stops shrinking and clips on the right. */
const MIN_SCALE = 0.52;

const TRAFFIC_LIGHTS = ["#f05c54", "#f5be4f", "#5bc45a"];

function ChromeBar() {
  return (
    <div className="absolute inset-x-0 top-0 flex h-11 items-center border-b border-rule bg-chrome-bar">
      <div className="ml-5 flex gap-2">
        {TRAFFIC_LIGHTS.map((colour) => (
          <div
            key={colour}
            className="size-3 rounded-full opacity-90"
            style={{ backgroundColor: colour }}
          />
        ))}
      </div>
      <div className="mr-5 ml-5 flex h-7 flex-1 items-center gap-1.5 rounded-md border border-rule bg-bg-surface px-2.5">
        <svg
          viewBox="0 0 24 24"
          width={12}
          height={12}
          fill="none"
          stroke="var(--ink-muted)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span className="text-[13px] text-ink-muted">
          https://portal.example.gov.ng
        </span>
      </div>
    </div>
  );
}

function PortalMockup() {
  return (
    <div
      aria-hidden="true"
      className="@container relative w-full min-h-[244.4px] overflow-hidden rounded-xl border border-rule shadow-[0_18px_40px_-12px_rgba(26,26,24,0.18)]"
      style={{ aspectRatio: `${INTRINSIC_WIDTH} / ${INTRINSIC_HEIGHT}` }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: INTRINSIC_WIDTH,
          height: INTRINSIC_HEIGHT,
          transform: `scale(max(${MIN_SCALE}, tan(atan2(100cqw, ${INTRINSIC_WIDTH}px))))`,
        }}
      >
        <ChromeBar />

        <div className="absolute inset-x-0 top-11 bottom-0 bg-bg-surface">
          <div className="absolute inset-y-0 left-0 w-[62%]">
            <PortalForm />
          </div>

          {/* The card overlaps the form region's right edge by 8px and clears
              the frame by 12px. That overlap, plus the card's own shadow, is
              what reads as the panel sitting on top of the page. */}
          <div className="absolute top-2 left-109.5 w-67.5">
            <ExtensionPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export { PortalMockup };
