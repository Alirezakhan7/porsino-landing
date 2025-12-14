"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from "lucide-react";
import { motion, useAnimation, PanInfo } from "framer-motion";

const ReviewsSection = () => {
  // --- 1. State Management ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [width, setWidth] = useState(0);

  // داده‌های نظرات
  const reviews = [
    { name: "سارا محمدی", role: "پایه دوازدهم", text: "همیشه توی زیست عقب می‌افتادم... پرسینو مسیر رو مشخص کرد.", initials: "SM" },
    { name: "علی رضایی", role: "پایه یازدهم", text: "فکر می‌کردم زیست رو بلدم، ولی پرسینو دقیقاً نشون داد کجاها اشکال دارم.", initials: "AR" },
    { name: "مریم احمدی", role: "پایه دوازدهم", text: "مشکل من حفظ کردن بدون فهم بود. توضیح‌های پرسینو عالی بود.", initials: "MA" },
    { name: "محمد حسینی", role: "پایه دهم", text: "اوایل زیست برام خیلی سنگین بود اما الان عاشقش شدم.", initials: "MH" },
    { name: "نگین خادمی", role: "پایه یازدهم", text: "استرسم بیشتر به‌خاطر سوال‌های بی‌جوابم بود که حل شد.", initials: "NK" },
    { name: "پارسا نوروزی", role: "پایه دوازدهم", text: "مشکل اصلی من کمبود وقت بود که با برنامه‌ریزی حل شد.", initials: "PN" },
    { name: "الهام کریمی", role: "پایه دهم", text: "مبحث‌های سخت رو با مثال‌های ساده یاد گرفتم.", initials: "EK" },
    { name: "رضا احمدیان", role: "پایه دوازدهم", text: "توی آزمون‌ها همیشه عالی عمل می‌کنم الان.", initials: "RA" },
  ];

  // --- 2. Responsive Logic ---
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setWidth(w);
      if (w >= 1024) setItemsPerPage(3);
      else if (w >= 640) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- 3. Navigation Logic (The Engine) ---
  
  // دکمه چپ زده شد -> برو به اسلاید بعدی
  const handleNext = () => {
    setCurrentIndex((prev) => {
      // محاسبه آخرین ایندکس ممکن
      const maxIndex = reviews.length - itemsPerPage;
      // اگر به ته رسیدیم، برگرد اول (Loop)
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  // دکمه راست زده شد -> برو به اسلاید قبلی
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = reviews.length - itemsPerPage;
      // اگر اول بودیم، برو ته (Loop)
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  // هندلر برای پایان درگ کردن (Drag End)
  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeDistance = info.offset.x;
    const threshold = 50; // مقدار پیکسلی که باید بکشیم تا اسلاید عوض شود

    // انگشت به چپ کشیده شد (عدد منفی) -> یعنی میخوایم بریم بعدی
    if (swipeDistance < -threshold) {
      handleNext();
    } 
    // انگشت به راست کشیده شد (عدد مثبت) -> یعنی میخوایم بریم قبلی
    else if (swipeDistance > threshold) {
      handlePrev();
    }
  };

  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden" dir="rtl">
      
      {/* Background Decor (Lightweight on mobile) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:16px_16px] opacity-20 pointer-events-none" />
      <div className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] bg-[#46988F]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#46988F]/10 text-[#46988F] text-xs font-bold mb-4 border border-[#46988F]/20">
            <Sparkles className="w-3 h-3" />
            <span>نظرات کاربران</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            تجربه <span className="text-[#46988F]">رتبه‌برترها</span>
          </h2>
        </div>

        {/* --- Slider Container --- */}
        <div className="relative group">
          
          {/* دکمه سمت راست (Previous) */}
          <button
            onClick={handlePrev}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/60 hover:bg-[#46988F] border border-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-95 translate-x-1/2 md:translate-x-0 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* دکمه سمت چپ (Next) */}
          <button
            onClick={handleNext}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/60 hover:bg-[#46988F] border border-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-95 -translate-x-1/2 md:translate-x-0 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* پنجره نمایش (Viewport) */}
          {/* نکته کلیدی: dir="ltr" برای اینکه منطق ریاضی (چپ/راست) درست کار کنه */}
          <div className="overflow-hidden px-2 py-4" dir="ltr">
            <motion.div
              className="flex touch-pan-y"
              
              // انیمیشن جابجایی
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              
              // تنظیمات درگ (Drag)
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
                    className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#46988F]/40 transition-colors flex flex-col justify-between select-none"
                  >
                    <div>
                      <Quote className="w-8 h-8 text-[#46988F]/50 mb-4" />
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#46988F] to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                        {review.initials}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{review.name}</h4>
                        <p className="text-[#46988F] text-xs font-bold">{review.role}</p>
                      </div>
                      <div className="mr-auto flex">
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