import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Award, Lightbulb, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: <Sparkles className="w-8 h-8 text-[#46988F]" />,
    title: "یادگیری عمیق",
    text: "فهم عمیق مطالب به جای حفظ کردن سطحی",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "بازدهی حداکثری",
    text: "افزایش تمرکز و بهره‌وری در زمان مطالعه",
  },
  {
    icon: <Award className="w-8 h-8 text-purple-400" />,
    title: "تضمین پیشرفت",
    text: "بهبود مستمر نمرات و تراز آزمون‌ها",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
    title: "صرفه‌جویی هوشمند",
    text: "مدیریت بهینه زمان و انرژی ذهنی",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function BenefitsSection() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden block md:hidden" dir="rtl">
      
      {/* --- Background Effects --- */}
      {/* Dark Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#46988F]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#46988F]/30 bg-[#46988F]/10 text-[#46988F] text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-6"
          >
            <CheckCircle2 className="w-3 h-3" />
            چرا پرسینو؟
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6"
          >
            مزایایی که <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46988F] to-teal-200">تفاوت ایجاد می‌کنند</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            ما فقط یک ابزار آموزشی نیستیم؛ پرسینو طراحی شده تا استانداردهای یادگیری شما را ارتقا دهد.
          </motion.p>
        </div>

        {/* --- Grid Cards --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#46988F]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#46988F]/10 overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#46988F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#46988F]/20 group-hover:border-[#46988F]/30 transition-all duration-300 shadow-lg">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#46988F] transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm">
                  {benefit.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}