"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const reviews = [
    {
      name: "سارا محمدی",
      role: "دانش‌آموز پایه دوازدهم",
      text: "پرسینو کمکم کرد برنامه‌ی منظم داشته باشم و در کنکور به هدفم برسم.",
      initials: "SM"
    },
    {
      name: "علی رضایی",
      role: "دانش‌آموز پایه یازدهم",
      text: "هوش مصنوعی پرسینو نقاط ضعف و قوتم را عالی تحلیل کرد.",
      initials: "AR"
    },
    {
      name: "مریم احمدی",
      role: "دانش‌آموز پایه دوازدهم",
      text: "بهترین همراه من در مسیر آمادگی برای کنکور؛ واقعاً کاربردی!",
      initials: "MA"
    },
    {
      name: "محمد حسینی",
      role: "دانش‌آموز پایه دهم",
      text: "با پرسینو نقاط ضعفم را پیدا کردم و نتیجه‌اش فوق‌العاده بود.",
      initials: "MH"
    },
    {
      name: "نگین خادمی",
      role: "دانش‌آموز پایه یازدهم",
      text: "پرسینو استرسم را کم کرد چون هر لحظه می‌توانستم پاسخ سوالم را بگیرم.",
      initials: "NK"
    },
    {
      name: "پارسا نوروزی",
      role: "دانش‌آموز پایه دوازدهم",
      text: "برنامه‌ی شخصی‌سازی شده‌ی پرسینو دقیقاً متناسب با تایم‌ام بود.",
      initials: "PN"
    },
    {
      name: "الهام کریمی",
      role: "دانش‌آموز پایه دهم",
      text: "مبحث‌های سخت فیزیک را با راهنمای گام‌به‌گام AI خیلی سریع یاد گرفتم.",
      initials: "EK"
    },
    {
      name: "رضا احمدیان",
      role: "دانش‌آموز پایه دوازدهم",
      text: "نمونه‌سوال‌های تولیدشده توسط پرسینو دقیقاً شبیه امتحان مدرسه بود!",
      initials: "RA"
    }
  ];

  // Responsive handler to determine how many items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= reviews.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, reviews.length - itemsPerPage) : prev - 1
    );
  };

  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden" dir="rtl">
      
      {/* --- Mosaic Background Effect --- */}
      {/* Small tight grid to simulate mosaic tiles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
      
      {/* Gradient Vignette to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#46988F]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#46988F]/30 bg-[#46988F]/10 text-[#46988F] text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-6"
          >
            <Sparkles className="w-3 h-3" />
            <span className="tracking-wide">نظرات کاربران</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4"
          >
            تجربه دانش‌آموزان <span className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#46988F] to-teal-200">موفق</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center text-lg text-gray-400 font-medium"
          >
            ببینید دیگران چگونه با پرسینو مسیر موفقیت خود را ساختند
          </motion.p>
        </div>

        {/* Custom Navigation Buttons (Visible on Desktop) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 z-20 ">
             <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-[#46988F] hover:border-[#46988F] text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[#46988F]/20 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
             </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-12 z-20 ">
             <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-[#46988F] hover:border-[#46988F] text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[#46988F]/20 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
             </button>
        </div>

        {/* Carousel Window */}
        <div className="relative overflow-hidden px-4 md:px-12 py-8 -my-8">
            <motion.div 
              className="flex gap-0"
              animate={{
                x: `${currentIndex * (100 / itemsPerPage)}%` 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ 
                    width: `${100 / itemsPerPage}%` 
                  }}
                >
                  <div className="h-full bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 border border-white/10 hover:border-[#46988F]/30 hover:bg-white/[0.07] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#46988F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div>
                        {/* Quote Icon */}
                        <div className="w-12 h-12 rounded-xl bg-[#46988F]/10 flex items-center justify-center text-[#46988F] mb-6 group-hover:scale-110 transition-transform duration-300">
                             <Quote className="w-6 h-6 fill-current" />
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed text-lg font-medium mb-6 relative z-10">
                            "{review.text}"
                        </p>
                    </div>

                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 relative z-10">
                        {/* Initials Avatar */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#46988F] to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                             {review.initials || "U"}
                        </div>
                        
                        <div>
                            <p className="font-bold text-white text-base tracking-tight">{review.name}</p>
                            <p className="text-xs text-[#46988F] font-bold uppercase tracking-wider">{review.role}</p>
                        </div>
                        
                        {/* 5 Stars */}
                        <div className="mr-auto flex gap-0.5">
                            {[1,2,3,4,5].map(i => (
                                <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>
        </div>
        
        {/* Mobile Controls (Dots) */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
            {reviews.slice(0, reviews.length - (itemsPerPage - 1)).map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        Math.floor(currentIndex) === idx ? "w-8 bg-[#46988F]" : "w-2 bg-white/20"
                    }`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;