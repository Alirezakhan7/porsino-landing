import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Target,
  Users,
  BookOpen,
  Clock,
  TrendingUp,
  Zap,
  CheckCircle2
} from "lucide-react";
import type { Variants } from "framer-motion";

// --- Animations ---
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.4, 0, 1, 1] },
  },
};


const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// --- Data ---
const achievements = [
  {
    title: "افزایش نمرات",
    value: "32٪",
    description: "بهبود عملکرد تحصیلی",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: "کاهش استرس",
    value: "14٪",
    description: "کاهش اضطراب امتحان",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "یادگیری عمیق",
    value: "4x",
    description: "افزایش ماندگاری مطالب",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    title: "صرفه‌جویی زمان",
    value: "27٪",
    description: "مطالعه موثرتر",
    icon: <Clock className="h-6 w-6" />,
  },
];

export function ProjectOverviewSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden" dir="rtl">
      
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        
        {/* --- Header Section --- */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              آینده آموزش با <span className="text-[#46988F]">هوش مصنوعی</span>
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              پرسینو با ترکیب الگوریتم‌های پیشرفته و متدهای نوین آموزشی، مسیر یادگیری شما را کاملاً شخصی‌سازی می‌کند.
            </motion.p>
          </motion.div>
        </div>

        {/* --- Stats / Achievements Grid --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-[#46988F] to-teal-200 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#46988F]/10 flex items-center justify-center text-[#46988F] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-4xl font-black text-gray-900 tracking-tighter">{item.value}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Feature 1: Performance Comparison --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3 h-3" />
              عملکرد تحصیلی
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              افزایش نمرات با یادگیری <span className="text-blue-600">تطبیقی</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              مطالعات نشان می‌دهد دانش‌آموزانی که از سیستم‌های هوشمند استفاده می‌کنند، تا 
              <span className="font-bold text-gray-900 mx-1">۶۲٪</span> 
              عملکرد بهتری دارند. سیستم پرسینو با شناسایی نقاط ضعف شما، تمریناتی را پیشنهاد می‌دهد که دقیقاً همان چیزی است که نیاز دارید.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                "افزایش ۳۰٪ نمرات با سیستم تدریس هوشمند",
                "کاهش ۲۰٪ اضطراب یادگیری و شب امتحان",
                "بهبود مهارت‌های تفکر انتقادی و حل مسئله"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative lg:order-1"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 aspect-[4/3] group">
                <img
                  src="/assets/novin.jpg"
                  alt="Students Learning"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 right-6 text-white text-right">
                  <p className="font-bold text-xl">یادگیری نوین</p>
                  <p className="text-sm text-gray-300">با جدیدترین متدهای هوش مصنوعی</p>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 blur-3xl rounded-full opacity-60" />
          </motion.div>

        </div>

        {/* --- Feature 2: Cost Reduction --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#46988F]/10 text-[#46988F] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3 h-3" />
              صرفه‌جویی
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              آموزش باکیفیت، <span className="text-[#46988F]">بدون هزینه سنگین</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              آموزش عالی نباید لوکس باشد. پرسینو جایگزین ده‌ها کلاس خصوصی و کتاب‌های گران‌قیمت است. با هزینه‌ای اندک، به یک معلم خصوصی ۲۴ ساعته دسترسی داشته باشید.
            </p>
             <ul className="space-y-4 pt-4">
              {[
                "حذف هزینه‌های رفت و آمد و کلاس‌های حضوری",
                "دسترسی نامحدود به تمام دروس و منابع",
                "یک اشتراک برای تمام نیازهای تحصیلی"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-[#46988F]/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#46988F]" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 aspect-[4/3] group">
                <img
                  src="/assets/eco.jpg"
                  alt="Cost Effective Learning"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80" />
                 <div className="absolute bottom-6 right-6 text-white text-right">
                  <p className="font-bold text-xl">اقتصادی و به صرفه</p>
                  <p className="text-sm text-gray-300">مدیریت هوشمند هزینه‌های تحصیل</p>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#46988F]/20 blur-3xl rounded-full opacity-60" />
          </motion.div>

        </div>

        {/* --- Education Plus Callout --- */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 lg:p-16 shadow-2xl"
        >
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#46988F]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
                <Brain className="w-4 h-4 text-[#46988F]" />
                <span className="text-sm font-bold text-white tracking-wide">ویژگی انحصاری</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              آموزش پلاس: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46988F] to-teal-200">یادگیری عمیق</span>، نه سطحی
            </h3>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              در پرسینو، ما ماهی را به شما نمی‌دهیم، ماهیگیری را یادتان می‌دهیم. 
              وقتی سوالی می‌پرسید، هوش مصنوعی بلافاصله جواب نهایی را نمی‌گوید. 
              با پرسیدن سوالات هوشمندانه و ارائه سرنخ، شما را هدایت می‌کند تا <strong className="text-white font-bold">خودتان</strong> به پاسخ برسید. 
              این یعنی یادگیری واقعی که هرگز فراموش نمی‌شود.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-right md:text-center">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-bold text-white mb-1">تفکر انتقادی</h4>
                    <p className="text-sm text-gray-400">تقویت مهارت تحلیل مسائل</p>
                </div>
                 <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-bold text-white mb-1">یادگیری فعال</h4>
                    <p className="text-sm text-gray-400">مشارکت در فرآیند حل مسئله</p>
                </div>
                 <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-bold text-white mb-1">ماندگاری بالا</h4>
                    <p className="text-sm text-gray-400">تثبیت مطالب در حافظه بلندمدت</p>
                </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}