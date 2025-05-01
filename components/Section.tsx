import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Debugging the visibility state
  useEffect(() => {
    console.log('Section visibility:', isVisible);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`rounded-2xl p-12 text-center max-w-4xl mx-auto transition-colors duration-500 ${
            isVisible
              ? "bg-[#46988F] text-white"
              : "bg-[#CCFBF1] text-[#46988F]"
          }`}
        >
          <h2 className="text-center text-3xl font-bold mb-4">
            آماده‌اید که شروع کنید؟
          </h2>
          <p
            className={`text-center mb-8 text-lg transition-colors duration-500 ${
              isVisible ? "text-white/90" : "text-[#46988F]/90"
            }`}
          >
            همین حالا به جمع هزاران دانش‌آموز موفق پرسینو بپیوندید
          </p>
          <a href="https://chat.porsino.org/" target="_blank" rel="noopener noreferrer">
            <Button
              className={`px-8 py-6 text-lg transition-colors duration-500 ${
                isVisible
                  ? "bg-[#CCFBF1] text-[#46988F] font-bold hover:bg-white/90 hover:text-[#46988F]"
                  : "bg-white text-[#46988F] hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              ثبت‌نام در پرسینو
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
