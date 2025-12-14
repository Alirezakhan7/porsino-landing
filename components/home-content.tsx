// components/home-content.tsx  (بدون "use client")
import dynamic from "next/dynamic";

import CtaSection from "./home/Section";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyPorsinoSection } from "@/components/home/WhyPorsinoSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { ProjectOverviewSection } from "@/components/home/ProjectOverviewSection";
import { SupportSection } from "@/components/home/SupportSection";

// Reviews را جداگانه Client و Lazy کن
const ReviewsSection = dynamic(() => import("@/components/ReviewsSection"), {
  ssr: false,
  loading: () => null,
});

export default function HomeContent() {
  return (
    <div className="flex min-h-screen flex-col" dir="rtl">
      <HeroSection />
      <WhyPorsinoSection />
      <BenefitsSection />
      <AdvantagesSection />
      <ProjectOverviewSection />
      <SupportSection />
      <ReviewsSection />
      <section>
        <CtaSection />
      </section>
    </div>
  );
}
