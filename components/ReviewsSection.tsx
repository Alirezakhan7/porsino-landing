"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from "lucide-react";
import { motion, PanInfo } from "framer-motion";

const ReviewsSection = () => {
  // --- 1. State Management ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // داده‌های اصلی نظرات
  const reviews = [
    {
      name: "سارا محمدی",
      role: "دانش‌آموز پایه دوازدهم",
      text: "همیشه توی زیست عقب می‌افتادم و نمی‌دونستم از کجا شروع کنم. پرسینو برام مسیر خوندن رو مشخص کرد و بالاخره از سردرگمی دراومدم.",
      initials: "SM"
    },
    {
      name: "علی رضایی",
      role: "دانش‌آموز پایه یازدهم",
      text: "فکر می‌کردم زیست رو بلدم، ولی پرسینو دقیقاً نشون داد کجاها اشکال دارم. تمرکزم رفت روی همون ضعف‌ها و نتیجه‌ام خیلی بهتر شد.",
      initials: "AR"
    },
    {
      name: "مریم احمدی",
      role: "دانش‌آموز پایه دوازدهم",
      text: "مشکل من حفظ کردن بدون فهم بود. توضیح‌های پرسینو کمک کرد مفهومی بخونم و دیگه مطالب یادم نره.",
      initials: "MA"
    },
    {
      name: "محمد حسینی",
      role: "دانش‌آموز پایه دهم",
      text: "اوایل زیست برام خیلی سنگین بود. پرسینو مبحث‌ها رو ساده و مرحله‌به‌مرحله توضیح داد و ترسم از این درس ریخت.",
      initials: "MH"
    },
    {
      name: "نگین خادمی",
      role: "دانش‌آموز پایه یازدهم",
      text: "استرسم بیشتر به‌خاطر سوال‌های بی‌جوابم بود. با پرسینو هر وقت گیر می‌کردم سریع جواب می‌گرفتم و خیالم راحت‌ شد.",
      initials: "NK"
    },
    {
      name: "پارسا نوروزی",
      role: "دانش‌آموز پایه دوازدهم",
      text: "مشکل اصلی من کمبود وقت بود. پرسینو برام برنامه‌ای چید که دقیقاً با تایم خالی‌ام جور بود و دیگه عقب نمی‌مونم.",
      initials: "PN"
    },
    {
      name: "الهام کریمی",
      role: "دانش‌آموز پایه دهم",
      text: "بعضی مبحث‌های زیست رو اصلاً نمی‌فهمیدم. پرسینو با مثال و توضیح ساده کاری کرد که بالاخره جا بیفته.",
      initials: "EK"
    },
    {
      name: "رضا احمدیان",
      role: "دانش‌آموز پایه دوازدهم",
      text: "توی آزمون‌ها همیشه از نوع سوالات ضربه می‌خوردم. تمرین‌هایی که پرسینو داد باعث شد سر جلسه غافلگیر نشم.",
      initials: "RA"
    }
  ];

  // --- 2. Responsive Logic ---
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setItemsPerPage(3);
      else if (w >= 640) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- 3. Navigation Logic ---
  
  // دکمه راست (Next) -> برو به اسلاید بعدی
  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = reviews.length - itemsPerPage;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  // دکمه چپ (Prev) -> برو به اسلاید قبلی
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = reviews.length - itemsPerPage;
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  // هندلر برای پایان درگ کردن (Drag End)
  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeDistance = info.offset.x;
    const threshold = 50;

    // کشیدن به چپ (منفی) = مثل دکمه راست (بعدی)
    if (swipeDistance < -threshold) {
      handleNext();
    } 
    // کشیدن به راست (مثبت) = مثل دکمه چپ (قبلی)
    else if (swipeDistance > threshold) {
      handlePrev();
    }
  };

  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden" dir="rtl">
      
      {/* Background Decor (Hidden on mobile for performance) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:16px_16px] opacity-20 pointer-events-none" />
      <div className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] bg-[#46988F]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#46988F]/10 text-[#46988F] text-xs font-bold mb-4 border border-[#46988F]/20"
          >
            <Sparkles className="w-3 h-3" />
            <span>نظرات کاربران</span>
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-3xl md:text-5xl font-black text-white mb-2"
          >
            تجربه <span className="text-[#46988F]">رتبه‌برترها</span>
          </motion.h2>
        </div>

        {/* --- Slider Container --- */}
        <div className="relative group">
          
          {/* دکمه سمت راست (Next) - قبلاً Prev بود */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/60 hover:bg-[#46988F] border border-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-95 translate-x-1/2 md:translate-x-0 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* دکمه سمت چپ (Prev) - قبلاً Next بود */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/60 hover:bg-[#46988F] border border-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-95 -translate-x-1/2 md:translate-x-0 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* پنجره نمایش (Viewport) - LTR forced for math logic */}
          <div className="overflow-hidden px-2 py-4" dir="ltr">
            <motion.div
              className="flex touch-pan-y"
              
              // انیمیشن جابجایی
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              
              // تنظیمات درگ
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={onDragEnd}
              
              style={{ width: "100%" }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="relative px-2 flex-shrink-0"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  {/* کارت اصلی (محتوا دوباره راست‌چین شود) */}
                  <div 
                    dir="rtl"
                    className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#46988F]/40 transition-colors flex flex-col justify-between select-none text-right"
                  >
                    
                    {/* Hover Effect */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-[#46988F]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#46988F]/10 flex items-center justify-center text-[#46988F] mb-6">
                         <Quote className="w-6 h-6 fill-current" />
                      </div>
                      
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-medium relative z-10">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 border-t border-white/5 pt-4 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#46988F] to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow-inner shrink-0">
                        {review.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-bold text-sm">{review.name}</p>
                        <p className="text-[#46988F] text-xs font-bold truncate">{review.role}</p>
                      </div>
                      <div className="mr-auto flex shrink-0">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* نقاط پایین (Indicators) */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.slice(0, reviews.length - (itemsPerPage - 1)).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-6 bg-[#46988F]" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;