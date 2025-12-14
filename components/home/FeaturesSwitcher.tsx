// components/home/FeaturesSwitcher.tsx
"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// استفاده از dynamic import برای اینکه کد دسکتاپ در موبایل اصلا دانلود نشه (Code Splitting)
const AdvantagesSection = dynamic(() => import("@/components/home/AdvantagesSection").then(mod => mod.AdvantagesSection), {
  loading: () => <div className="h-[600px]" />, // یک فضای خالی موقت
  ssr: false, // این بخش چون وابسته به سایز صفحه است، نیاز به رندر سمت سرور نداره
});

const BenefitsSection = dynamic(() => import("@/components/home/BenefitsSection").then(mod => mod.BenefitsSection));

export function FeaturesSwitcher() {
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {isMobile ? <BenefitsSection /> : <AdvantagesSection />}
    </>
  );
}