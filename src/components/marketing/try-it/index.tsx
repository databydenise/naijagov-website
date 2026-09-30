import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Info } from "@/components/ui/icons";
import { TestPageCard } from "./test-page-card";

const TEST_PAGES = [
  {
    label: "Portal home page",
    href: "https://nigeriadriverslicence.frsc.gov.ng",
    try: "Open the side panel and ask what the site is for, or where to start.",
  },
  {
    label: "Login page",
    href: "https://nigeriadriverslicence.frsc.gov.ng/login",
    try: "See each field on the form explained in plain language, and watch the assistant hand control back to you at the password.",
  },
] as const;

const LOOK_FOR = [
  "It explains what the page is asking for in plain English.",
  "It fills ordinary fields using details you have given it — nothing it made up.",
  "It stops at sensitive steps like passwords, one-time codes and payments, and leaves them to you.",
] as const;

/**
 * Where to see the installed extension working. The extension only runs on
 * the portal it has permission for, so these are the pages to test on.
 */
function TryIt() {
  return (
    <section
      id="try-it"
      aria-labelledby="try-it-heading"
      className="scroll-mt-18 border-b border-rule bg-bg-page py-12 stack:py-20"
    >
      <Container>
        <Eyebrow>Try it</Eyebrow>
        <h2
          id="try-it-heading"
          className="mt-4 text-[32px] text-ink stack:text-[44px]"
        >
          Test it on a live portal
        </h2>
        <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.6] text-ink-muted stack:text-base">
          This build runs on the Nigerian driver&apos;s licence portal. Once
          the extension is installed, open either page below and click the
          NaijaGov icon in your toolbar.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-4 nav:grid-cols-2 nav:gap-6">
          {TEST_PAGES.map((page) => (
            <li key={page.href}>
              <TestPageCard label={page.label} href={page.href}>
                {page.try}
              </TestPageCard>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid grid-cols-1 gap-8 stack:grid-cols-[7fr_5fr] stack:gap-16">
          <div>
            <h3 className="text-[18px] leading-tight font-bold tracking-[-0.01em] text-ink">
              What to look for
            </h3>
            <ul className="mt-4 space-y-3">
              {LOOK_FOR.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-[1.6] text-ink-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-green-900"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="flex gap-3 self-start rounded-md border border-rule bg-bg-surface p-4 text-sm leading-[1.55] text-ink-muted">
            <Info
              size={18}
              aria-hidden="true"
              className="mt-px shrink-0 text-green-900"
            />
            <span>
              These are real government pages. NaijaGov is an independent tool
              and is not affiliated with the FRSC or any government agency. You
              don&apos;t need to submit anything to see the extension work.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}

export { TryIt };
