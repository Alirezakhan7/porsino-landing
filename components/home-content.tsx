// components/home-content.tsx  (Server Component)
import { HeroSection } from "@/components/home/HeroSection";
import { WhyPorsinoSection } from "@/components/home/WhyPorsinoSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { ProjectOverviewSection } from "@/components/home/ProjectOverviewSection";
import { SupportSection } from "@/components/home/SupportSection";
import CtaSection from "./home/Section";

import ReviewsLazy from "@/components/ReviewsLazy.client";

export default function HomeContent() {
  return (
    <div className="flex min-h-screen flex-col" dir="rtl">
      <HeroSection />
      <WhyPorsinoSection />
      <BenefitsSection />
      <AdvantagesSection />
      <ProjectOverviewSection />
      <SupportSection />
      <ReviewsLazy />
      <section>
        <CtaSection />
      </section>
    </div>
  );
}
