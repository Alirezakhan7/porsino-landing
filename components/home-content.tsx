"use client";
import React from 'react';
import ReviewsSection from '@/components/ReviewsSection';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import CtaSection from "./home/Section";
import { HeroSection } from "@/components/home/HeroSection";
import { SubjectsSection } from "@/components/home/SubjectsSection";
import { WhyPorsinoSection } from "@/components/home/WhyPorsinoSection";
import { ProjectOverviewSection } from "@/components/home/ProjectOverviewSection";
import { SupportSection } from "@/components/home/SupportSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";

export default function HomeContent() {
  return (
<div className="flex min-h-screen flex-col" dir="rtl">
    
    {/* Hero Section */}
    <HeroSection />

      {/* Why Porsino Section */}
      <WhyPorsinoSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Comparison Section */}
      <AdvantagesSection />
      
      {/* More About Our Project Section */}
      <ProjectOverviewSection />

      {/* Support Section with Ripple Effect */}
      <SupportSection />


      {/* Reviews Section */}
      <ReviewsSection />



      {/* Final Call to Action */}
        <section>
          <CtaSection />
        </section>
    </div>
  );
}
