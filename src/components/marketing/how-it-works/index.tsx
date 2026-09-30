import { WATCH_VIDEO_HREF } from "@/components/layout/nav-links";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PlayLink } from "@/components/ui/play-link";
import { Step } from "./step";
import { STEPS } from "./steps";

/**
 * The four-step row, with Watch Video pinned right behind a vertical rule.
 * Unlike the hero mockup this is real content, so the steps are a genuine
 * <ol> that reads as an ordered list.
 *
 * Two nested grids rather than one flat `repeat(4, 1fr) 1px auto`: the flat
 * version needs `display: contents` on the <ol> to lift the items into the
 * outer grid, and that still strips list semantics in WebKit. Nesting keeps
 * the list intact and produces identical column widths — four equal tracks
 * and five gaps either way. It also lets the rule and the link leave the grid
 * entirely below 900px instead of being hidden inside it.
 */
function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-18 border-b border-rule bg-bg-page py-9 stack:py-18"
    >
      <Container>
        <Eyebrow as="h2">How it works</Eyebrow>

        <div className="mt-8 nav:grid nav:grid-cols-[1fr_1px_auto] nav:gap-7 stack:gap-10">
          <ol className="grid grid-cols-1 gap-7 narrow:grid-cols-2 narrow:gap-9 nav:grid-cols-4 nav:gap-7 stack:gap-10">
            {STEPS.map((step, index) => (
              <Step
                key={step.title}
                icon={step.icon}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </ol>

          {/* Only exists from 900px up, so below that it costs neither a
              column track nor a gap. */}
          <div aria-hidden="true" className="hidden bg-rule nav:block" />

          <PlayLink
            href={WATCH_VIDEO_HREF}
            className="nav:mt-15 nav:self-start"
          >
            Watch Video
          </PlayLink>
        </div>
      </Container>
    </section>
  );
}

export { HowItWorks };
