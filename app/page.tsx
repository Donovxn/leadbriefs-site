import { DeliverablesSection } from "@/components/sections/Deliverables";
import { FAQSection } from "@/components/sections/FAQ";
import { FooterSection } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/Hero";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";
import { PricingSection } from "@/components/sections/Pricing";
import { ProofSection } from "@/components/sections/Proof";

export default function Home() {
  return (
    <>
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-18 px-4 pb-28 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
        <HeroSection />
        <ProofSection />
        <DeliverablesSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
      </main>
      <FooterSection />
      <MobileCtaBar />
    </>
  );
}
