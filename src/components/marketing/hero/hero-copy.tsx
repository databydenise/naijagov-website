import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowRight } from "@/components/ui/icons";
import { PlayLink } from "@/components/ui/play-link";
import {
  GET_EXTENSION_HREF,
  WATCH_VIDEO_HREF,
} from "@/components/layout/nav-links";

function HeroCopy() {
  return (
    <div>
      <Eyebrow>Your government portal co-pilot</Eyebrow>

      {/* One heading, four spans across three visual lines — the second line
          splits so "Complete." can take the muted green on its own. Tracking
          and leading come from the base h1 rule in globals.css.
          Only the wordmark line takes that rule's 800; the two lines under it
          drop to 700, as the reference has them, so the weight steps down with
          the size instead of holding 800 all the way. 600 is not an option —
          Inter Tight is loaded at 400/500/700/800, so it would be synthesised.
          Lines 2 and 3 are 30px, not the spec's 40px: at 40px neither fits the
          46fr column the spec also asks for, and both wrap, which turns three
          lines into five. 30px is what the reference screenshot's headline
          measures when scaled to this content column. */}
      <h1 className="mt-4 text-ink">
        <span className="block text-[44px] stack:text-[76px]">NaijaGov</span>
        <span className="mt-2 block text-ink-muted text-[24px] font-bold stack:text-[30px]">
          <span>Understand. Navigate. </span>
          <span className="text-green-300">Complete.</span>
        </span>
        <span className="mt-1.5 block text-[27px] text-ink-muted font-bold stack:text-[30px]">
          Government Services, Made Easier.
        </span>
      </h1>

      <p className="mt-5 max-w-[46ch] text-[15px] leading-[1.6] text-ink-muted stack:text-base">
        A Chrome extension that helps you make sense of Nigerian government
        portals, guides you through the process, and assists with form filling
        and key tasks — so you can get things done, faster.
      </p>

      <div className="mt-7 flex flex-col items-stretch gap-5 narrow:flex-row narrow:items-center narrow:gap-7">
        <Button variant="primary" size="lg" asChild className="group">
          <Link href={GET_EXTENSION_HREF}>
            Get Extension
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-200 ease-out group-hover:translate-x-0.75"
            />
          </Link>
        </Button>

        <PlayLink
          href={WATCH_VIDEO_HREF}
          className="self-center narrow:self-auto"
        >
          Watch Video
        </PlayLink>
      </div>
    </div>
  );
}

export { HeroCopy };
