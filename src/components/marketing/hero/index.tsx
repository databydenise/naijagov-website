import { Container } from "@/components/ui/container";
import { HeroCopy } from "./hero-copy";
import { PortalMockup } from "./portal-mockup";

/**
 * The hero: copy on the left, the portal mockup on the right. The bottom
 * hairline sits on the <section>, outside the content column, so it spans the
 * viewport — the same full-bleed rule the header uses. No top rule is needed;
 * the header's own bottom border is directly above.
 *
 * 1000px is the project's `stack` breakpoint. Below it the grid collapses to
 * one column with the copy first, and the vertical padding halves.
 */
function Hero() {
  return (
    <section className="border-b border-rule bg-bg-page py-12 stack:pt-24 stack:pb-22">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 stack:grid-cols-[46fr_54fr] stack:gap-16">
          <HeroCopy />
          <PortalMockup />
        </div>
      </Container>
    </section>
  );
}

export { Hero };
