import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Placeholder until the hero section is built. */}
        <Container as="section" className="py-24">
          <p className="text-eyebrow text-ink-muted uppercase">
            Your government portal co-pilot
          </p>
          <h1 className="mt-6 max-w-[16ch] text-[72px] text-ink">NaijaGov</h1>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-ink-muted">
            Hero section placeholder. The navigation bar above is the built
            piece; everything below it lands in later tasks.
          </p>
        </Container>
      </main>
    </>
  );
}
