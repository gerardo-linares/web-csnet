import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Prices from "@/components/Prices";
import Services from "@/components/Services";
import CtaSecondary from "@/components/CtaSecondary";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Cta />
      <Prices />
      <CtaSecondary />
      <Map />
    </main>
  );
}
