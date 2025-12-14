"use client";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import {
  BookOpen,
  Check,
  Clock,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import type { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const whyPorsinoData = {
  title: "چرا پرسینو؟",
  // --- CHANGE HERE ---
  // فیلد description را با این آبجکت جایگزین کنید
  focusTitle: {
    part1: "در دنیایی که همه به دنبال پوشش همه‌چیز هستند، ما تصمیم گرفتیم روی یک موضوع تمرکز کنیم:",
    highlight: "زیست‌شناسی",
    part2: "این انتخاب به ما اجازه داده تا ابزاری بسازیم که فراتر از یک دستیار ساده است؛ ابزاری که با دقت و کیفیت بی‌نقص، یادگیری را برای شما لذت‌بخش می‌کند."
  },
  // بقیه آبجکت بدون تغییر باقی می‌ماند...
  featureSections: [
    {
      icon: <Clock className="h-6 w-6 text-[#46988F]" />,
      title: "همیشه در دسترس",
      features: [
        "پاسخ‌گویی فوری در هر ساعت از شبانه‌روز",
        "بدون محدودیت زمانی یا نیاز به برنامه‌ریزی",
        "مناسب برای دانش‌آموزانی با سبک مطالعه منعطف یا نامنظم",
      ],
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#46988F]" />,
      title: "محتوای تخصصی و دقیق",
      features: [
        "تمامی پاسخ‌ها بر اساس آخرین تغییرات کتاب درسی زیست‌شناسی است",
        "دیتابیسی جامع از تست‌ها و کنکورهای سال‌های قبل",
        "هر چقدر که دوست داری سوال بپرس، پرسینو تا یادگیری کامل دست برنمی‌داره!",
      ],
    },
  ],
};

export function WhyPorsinoSection() {
  return (

      <section className="relative py-8 overflow-hidden cv">
        {/* حباب‌های پس‌زمینه متحرک */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.5, 0.4] }}
            transition={{ duration: 15, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
            className="absolute -top-28 -right-24 w-72 h-72 bg-[#D5F4EF] rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 20, repeat: Infinity, ease: [0.4, 0, 0.2, 1], delay: 5 }}
            className="absolute top-[30%] -left-24 w-60 h-60 bg-[#BFF0E7] rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.6, 0.5] }}
            transition={{ duration: 25, repeat: Infinity, ease: [0.4, 0, 0.2, 1], delay: 10 }}
            className="absolute bottom-0 right-1/3 w-64 h-64 bg-[#EAFBF8] rounded-full blur-3xl"
          />
        </div>

        {/* محتوای اصلی سکشن */}
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
          >
            {/* عنوان اصلی */}
            <motion.h3
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 text-center"
            >
              {whyPorsinoData.title}
            </motion.h3>

            {/* توضیحات با کلمه کلیدی برجسته */}
            <motion.div
              variants={itemVariants}
              className="mt-6 text-lg text-gray-700 text-center max-w-3xl leading-relaxed"
            >
              <p>{whyPorsinoData.focusTitle.part1}</p>
              
              <motion.span
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                className="block my-10 text-5xl md:text-7xl font-black text-transparent bg-clip-text 
                          bg-gradient-to-r from-[#46988F] to-[#5AB5AC] [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)]"
              >
                {whyPorsinoData.focusTitle.highlight}
              </motion.span>
              
              <p>{whyPorsinoData.focusTitle.part2}</p>
            </motion.div>

            {/* کارت‌های ویژگی‌ها */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {whyPorsinoData.featureSections.map((section, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.07)" }}
                  className="bg-white/50 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      {section.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">{section.title}</h4>
                  </div>

                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-5 text-gray-600"
                  >
                    {section.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        variants={itemVariants}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#46988F]/10 flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-[#46988F]" />
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </section>
      
        );
}