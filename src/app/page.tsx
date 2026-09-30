import { Header } from "@/components/layout/header";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Install } from "@/components/marketing/install";
import { TryIt } from "@/components/marketing/try-it";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Install />
        <TryIt />
      </main>
    </>
  );
}
