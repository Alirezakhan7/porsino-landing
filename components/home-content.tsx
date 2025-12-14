// components/home-content.tsx
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectOverviewSection } from "@/components/home/ProjectOverviewSection";
import { SupportSection } from "@/components/home/SupportSection";
import CtaSection from "./home/Section";
import ReviewsLazy from "@/components/ReviewsLazy.client";
import { FeaturesSwitcher } from "@/components/home/FeaturesSwitcher"; // ایمپورت کامپوننت جدید

export default function HomeContent() {
  return (
    <div className="flex min-h-screen flex-col" dir="rtl">
      {/* هیرو سکشن که کدش رو بهینه کردیم */}
      <HeroSection />

      {/* این کامپوننت کلاینتی تصمیم میگیره چی نشون بده */}
      <FeaturesSwitcher />

      <ProjectOverviewSection />
      <SupportSection />
      <ReviewsLazy />
      <section>
        <CtaSection />
      </section>
    </div>
  );
}