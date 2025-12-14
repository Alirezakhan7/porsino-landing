import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowLeft, Zap } from "lucide-react";

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
    console.log("Section visibility:", isVisible);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-[#0A0A0A]"
      dir="rtl"
    >
      {/* --- Background Effects (like ReviewsSection) --- */}

      {/* Mosaic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Gradient vignette to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none" />

      {/* Ambient glows (top-left & bottom-right) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#46988F]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Central ambient glow reacting to visibility (قبلی خودت) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#46988F]/10 blur-[120px] rounded-full pointer-events-none transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-20"
        }`}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative rounded-[3rem] p-12 md:p-20 text-center max-w-4xl mx-auto overflow-hidden transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) border ${
            isVisible
              ? "bg-gradient-to-b from-[#111] to-[#050505] border-[#46988F]/40 shadow-[0_0_100px_-20px_rgba(70,152,143,0.3)] ring-1 ring-[#46988F]/20"
              : "bg-[#0A0A0A] border-white/5 shadow-none ring-1 ring-white/5 grayscale"
          }`}
        >
          {/* --- Internal Active Glow --- */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-[#46988F]/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#46988F]/50 to-transparent"></div>
          </div>

          <div className="relative z-20 flex flex-col items-center">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border mb-8 transition-colors duration-700 ${
                isVisible
                  ? "bg-[#46988F]/10 text-[#46988F] border-[#46988F]/30 backdrop-blur-md shadow-[0_0_15px_rgba(70,152,143,0.2)]"
                  : "bg-white/5 text-gray-500 border-white/10"
              }`}
            >
              <Zap
                className={`w-3.5 h-3.5 fill-current ${
                  isVisible ? "animate-pulse" : ""
                }`}
              />
              <span>شروع مسیر موفقیت</span>
            </div>

            <h2
              className={`text-center text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight transition-colors duration-700 ${
                isVisible ? "text-white" : "text-gray-500"
              }`}
            >
              آماده‌اید که{" "}
              <span
                className={`transition-colors duration-700 ${
                  isVisible
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#46988F] to-teal-200"
                    : ""
                }`}
              >
                شروع کنید؟
              </span>
            </h2>

            <p
              className={`text-center mb-10 text-base md:text-xl font-medium transition-colors duration-700 max-w-2xl mx-auto leading-relaxed ${
                isVisible ? "text-gray-300" : "text-gray-600"
              }`}
            >
              همین حالا به جمع دانش‌آموزان موفق پرسینو بپیوندید و آینده
              تحصیلی خود را تضمین کنید.
            </p>

            <a
              href="https://chat.porsino.org/login?mode=signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group"
            >
              <Button
                className={`relative w-full sm:w-auto px-10 py-8 h-16 text-lg rounded-2xl transition-all duration-500 overflow-hidden shadow-xl ${
                  isVisible
                    ? "bg-[#46988F] text-white font-bold hover:bg-[#3aa398] hover:scale-[1.02] hover:shadow-[#46988F]/40 shadow-[#46988F]/20"
                    : "bg-white/5 text-gray-500 border border-white/10 hover:bg-white/10 hover:text-gray-300"
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  ثبت‌نام در پرسینو
                  <ArrowLeft
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isVisible ? "group-hover:-translate-x-1" : ""
                    }`}
                  />
                </span>

                {/* Shine Effect (Only when visible) */}
                {isVisible && (
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                )}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
