"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const subjects = [
  {
   name: "استاد زیست",
    image: "/assets/zist.webp",
    // --- توضیحات جدید و کامل‌تر ---
    features: [
      "تحلیل خط به خط کتاب درسی",
      "آمادگی کامل برای امتحانات نهایی",
      "پوشش تمام نکات ترکیبی و مفهومی",
      "بانک سوالات تستی و تشریحی",
    ],
    path: "https://chat.porsino.org/",
    status: 'active',
  },
  {
    name: "استاد ریاضی",
    image: "/assets/riazi.webp",
    features: [
      "مسلط به :",
      "تحلیل سریع مسائل",
      "حل معادلات پیچیده",
      "توضیح گام به گام فرمول‌ها",
    ],
    path: "#",
    status: 'inactive', // وضعیت: غیرفعال
  },
  {
    name: "استاد شیمی",
    image: "/assets/shimi.webp",
    features: [
      "مسلط به :",
      "تفسیر واکنش‌های شیمیایی",
      "شبیه‌سازی ترکیبات مولکولی",
      "نکات آزمون ها",
    ],
    path: "#",
    status: 'inactive', // وضعیت: غیرفعال
  },
  {
    name: "استاد فیزیک",
    image: "/assets/physics.webp",
    features: [
      "مسلط به :",
      "تحلیل قوانین فیزیک",
      "توضیح گام به گام",
      "حل تست های مفهومی",
    ],
    path: "#",
    status: 'inactive', // وضعیت: غیرفعال
  },
];

export function SubjectsSection() {
  return (
      <section className="subjects-section pt-12 md-pt-6 lg:pt-2 pb-16" dir="rtl">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
            از کدوم معلم سوال داری؟
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {subjects.map((subject, index) => {
              const isInactive = subject.status === 'inactive';

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group w-full max-w-[280px]"
                >
                  <div className={`relative h-[280px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 ${!isInactive && 'group-hover:scale-[1.02]'}`}>
                    <Image
                      src={subject.image}
                      alt={subject.name}
                      fill
                      sizes="(max-width: 768px) 60vw, (max-width: 1024px) 33vw, 280px"
                      className={`object-cover transition-all duration-300 ${!isInactive ? 'group-hover:blur-[2px]' : 'grayscale'}`}
                    />

                    {!isInactive && (
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}

                    {isInactive && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-not-allowed">
                        <span className="text-white text-2xl font-bold">به زودی</span>
                      </div>
                    )}

                    <div className="absolute top-0 left-0 right-0 p-6 text-center z-10">
                      <h3 className={`text-xl ${!isInactive && 'sm:text-2xl'} font-bold text-white mb-2 [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.8)] text-center transition-all duration-300`}>
                        {subject.name}
                      </h3>
                    </div>

                    {!isInactive && (
                      <>
                        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 text-right">
                          <ul className="space-y-3 text-white/90 text-right">
                            {subject.features.map((feature, idx) => (
                              // --- CHANGE HERE ---
                              // اضافه کردن سایه به متن توضیحات برای خوانایی بهتر
                              <li key={idx} className={`text-xs ${!isInactive && 'sm:text-sm'} font-normal transition-all duration-300 **[text-shadow:_0_1px_2px_rgb(0_0_0_/_0.8)]**`}>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                          <a href={subject.path} target="_blank" rel="noopener noreferrer">
                            <Button className="w-full bg-[#46988F] hover:bg-[#5AB5AC] transition-all duration-300 py-6 text-lg">
                              شروع
                            </Button>
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
        );
}