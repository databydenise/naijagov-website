import { EXTENSION_ZIP_HREF } from "@/components/layout/nav-links";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Download } from "@/components/ui/icons";
import { StepList } from "./step-list";
import { Troubleshooting } from "./troubleshooting";

/**
 * Download plus the full unpacked-install walkthrough. The extension isn't in
 * the Web Store, so every step of loading it from a folder is spelled out.
 *
 * From 1000px up the intro and download sit in a left column that stays in
 * view while the steps scroll past; below that everything stacks.
 */
function Install() {
  return (
    <section
      id="install"
      aria-labelledby="install-heading"
      className="scroll-mt-18 border-b border-rule bg-bg-page py-12 stack:py-20"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 stack:grid-cols-[5fr_7fr] stack:gap-16">
          <div className="stack:sticky stack:top-28 stack:self-start">
            <Eyebrow>Install</Eyebrow>
            <h2
              id="install-heading"
              className="mt-4 text-[32px] text-ink stack:text-[44px]"
            >
              Install the extension
            </h2>
            <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.6] text-ink-muted stack:text-base">
              NaijaGov isn&apos;t in the Chrome Web Store yet, so it&apos;s
              loaded straight from a folder. Download the zip, then follow the
              steps.
            </p>

            <Button variant="primary" size="lg" asChild className="mt-7">
              <a href={EXTENSION_ZIP_HREF} download>
                <Download size={18} aria-hidden="true" />
                Download extension
              </a>
            </Button>

            <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
              <dt className="text-ink-muted">File</dt>
              <dd className="text-ink">naijagov-extension.zip · 189 KB</dd>
              <dt className="text-ink-muted">Version</dt>
              <dd className="text-ink">0.1.0</dd>
              <dt className="text-ink-muted">Browser</dt>
              <dd className="text-ink">
                Google Chrome on desktop. Edge and Brave use the same steps.
              </dd>
            </dl>
          </div>

          <div className="space-y-10">
            <StepList />
            <Troubleshooting />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Install };
