import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Prices from "@/components/Prices";
import Services from "@/components/Services";
import CtaSecondary from "@/components/CtaSecondary";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Cta />
      <Prices />
      <CtaSecondary />
    </main>
  );
}
