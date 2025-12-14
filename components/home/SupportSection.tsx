import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RippleEffect } from "@/components/ui/ripple-effect";
import { Users, Target, BookOpen, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import type { Variants } from "framer-motion";
export function SupportSection() {
  return (
        <section className="bg-[#46988F] relative py-24 overflow-hidden" dir="rtl">
          
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-100 brightness-100 mix-blend-overlay"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              {/* Left Side: Text & CTA */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 1, 1] }}
                className="relative min-h-[400px] flex flex-col justify-center"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-60">
                  <RippleEffect
                    color="rgba(255, 255, 255, 0.15)"
                    size={400}
                    duration={2}
                  />
                </div>
                
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md w-fit">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>مرکز پشتیبانی</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                    پشتیبانی <span className="text-teal-100">۳۶۰ درجه</span>
                  </h2>
                  
                  <p className="text-lg md:text-xl text-teal-50 leading-relaxed font-medium max-w-md">
                    ما اینجا هستیم تا در هر لحظه از مسیر یادگیری، شما را همراهی کنیم! تیمی متخصص آماده پاسخگویی به شماست.
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a href="/faq" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="group relative bg-white text-[#46988F] font-bold hover:bg-teal-50 shadow-2xl shadow-teal-900/20 transition-all duration-300 text-lg px-8 py-6 h-14 rounded-xl overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                            مشاهده سوالات متداول
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        </span>
                        {/* Button Shine */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#46988F]/10 to-transparent z-0"></div>
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side: Grid of Features */}
              <div className="grid grid-cols-2 gap-5 items-stretch justify-center">
                {[
                  { icon: Users, title: "پشتیبانی جامع", desc: "برای تمامی کاربران" },
                  { icon: Target, title: "پاسخ سریع", desc: "زیر ۲ دقیقه" },
                  { icon: BookOpen, title: "راهنمای کامل", desc: "آموزش ویدیویی پلتفرم" },
                  { icon: Sparkles, title: "پشتیبانی ویژه", desc: "مشاوره اختصاصی VIP" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="group h-full flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 hover:bg-white/15 hover:border-white/30 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden shadow-lg"
                  >
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="h-14 w-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5 relative z-10 shadow-inner group-hover:bg-white group-hover:text-[#46988F] transition-colors duration-300">
                      <item.icon className="h-7 w-7 text-white group-hover:text-[#46988F] transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-center text-lg md:text-xl font-bold mb-2 text-white relative z-10 tracking-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-center text-sm md:text-base text-teal-100/80 font-medium relative z-10 group-hover:text-white transition-colors">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
  );
}