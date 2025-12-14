import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Globe, BarChart3, Smile } from "lucide-react";

const advantages = [
  { text: "هوش مصنوعی پیشرفته", icon: <Zap className="w-5 h-5" /> },
  { text: "پشتیبانی ۲۴ ساعته", icon: <ShieldCheck className="w-5 h-5" /> },
  { text: "محتوای آموزشی به‌روز", icon: <Globe className="w-5 h-5" /> },
  { text: "گزارش‌گیری هوشمند", icon: <BarChart3 className="w-5 h-5" /> },
  { text: "رابط کاربری ساده", icon: <Smile className="w-5 h-5" /> },
  { text: "قیمت‌گذاری منصفانه", icon: <Check className="w-5 h-5" /> },
];

export function AdvantagesSection() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden rounded-[40px]" dir="rtl">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#46988F]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Layout Container --- */}
        <div className="relative min-h-[600px] flex items-center justify-center">
            
            {/* 1. Mobile/Tablet View (Vertical Grid) */}
            <div className="block lg:hidden w-full max-w-md mx-auto space-y-8">
                <div className="text-center mb-12">
                     <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-black text-white mb-4"
                    >
                        مزایای <span className="text-[#46988F]">پرسینو</span>
                    </motion.h2>
                    <p className="text-gray-400">همه چیزهایی که برای موفقیت نیاز دارید</p>
                </div>
                
                <div className="grid gap-4">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#46988F]/20 flex items-center justify-center text-[#46988F]">
                                {item.icon}
                            </div>
                            <span className="text-gray-200 font-bold">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>


            {/* 2. Desktop View (Radial/Orbital Layout) */}
            <div className="hidden lg:flex relative w-full h-[600px] items-center justify-center">
                
                {/* Orbital Rings (Decorative) */}
                <div className="absolute border border-white/5 rounded-full w-[400px] h-[400px] animate-pulse"></div>
                <div className="absolute border border-[#46988F]/10 rounded-full w-[550px] h-[550px]"></div>

                {/* Central Hub */}
                <div className="relative z-20">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-64 h-64 bg-gradient-to-br from-gray-900 to-[#0A0A0A] rounded-full border border-[#46988F]/30 flex items-center justify-center shadow-[0_0_50px_rgba(70,152,143,0.15)] z-20"
                    >
                        {/* Spinning Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#46988F]/20 animate-[spin_20s_linear_infinite]"></div>
                        
                        <div className="text-center p-6">
                            <h2 className="text-4xl font-black text-white tracking-tight">
                                مزایای<br/>
                                <span className="text-[#46988F] drop-shadow-lg">پرسینو</span>
                            </h2>
                        </div>
                    </motion.div>
                    
                    {/* Glow behind center */}
                    <div className="absolute inset-0 bg-[#46988F]/20 blur-3xl -z-10 rounded-full"></div>
                </div>

{/* Orbiting Items */}
{advantages.map((advantage, index) => {
  const totalItems = advantages.length;
  const angle = (index / totalItems) * 2 * Math.PI - Math.PI / 2; // شروع از بالا
  const radiusX = 320;
  const radiusY = 220;

  const x = Math.cos(angle) * radiusX;
  const y = Math.sin(angle) * radiusY;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      className="absolute flex items-center gap-3 bg-white/5 hover:bg-[#46988F]/10 backdrop-blur-md border border-white/10 hover:border-[#46988F]/40 px-5 py-3 rounded-full cursor-default transition-colors group z-30"
      style={{
        left: "50%",
        top: "50%",
        // دیگه transform رشته‌ای نمی‌ذاریم، فقط x و y فرامر موشن:
        x,
        y,
        // برای این‌که خودِ باج وسط اون نقطه قرار بگیره:
        marginLeft: "-100px",
      }}
    >
      <div className="w-8 h-8 rounded-full bg-[#46988F]/20 flex items-center justify-center text-[#46988F] group-hover:scale-110 transition-transform">
        {advantage.icon}
      </div>
      <span className="text-lg font-bold text-gray-200 whitespace-nowrap group-hover:text-white transition-colors">
        {advantage.text}
      </span>
    </motion.div>
  );
})}

            </div>

        </div>
      </div>

    </section>
  );
}