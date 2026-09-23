import { Header } from "@/components/layout/header";
import { Hero } from "@/components/marketing/hero";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
    </>
  );
}
