import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Note: Custom styles for swiper navigation are in globals.css

const ReviewsSection = () => {
  // State to store Swiper instance
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  
  // State for custom navigation elements
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const reviews = [
    {
      name: "سارا محمدی",
      role: "دانش‌آموز پایه دوازدهم",
      text: "پرسینو کمکم کرد برنامه‌ی منظم داشته باشم و در کنکور به هدفم برسم."
    },
    {
      name: "علی رضایی",
      role: "دانش‌آموز پایه یازدهم",
      text: "هوش مصنوعی پرسینو نقاط ضعف و قوتم را عالی تحلیل کرد."
    },
    {
      name: "مریم احمدی",
      role: "دانش‌آموز پایه دوازدهم",
      text: "بهترین همراه من در مسیر آمادگی برای کنکور؛ واقعاً کاربردی!"
    },
    {
      name: "محمد حسینی",
      role: "دانش‌آموز پایه دهم",
      text: "با پرسینو نقاط ضعفم را پیدا کردم و نتیجه‌اش فوق‌العاده بود."
    },
    {
      name: "نگین خادمی",
      role: "دانش‌آموز پایه یازدهم",
      text: "پرسینو استرسم را کم کرد چون هر لحظه می‌توانستم پاسخ سوالم را بگیرم."
    },
    {
      name: "پارسا نوروزی",
      role: "دانش‌آموز پایه دوازدهم",
      text: "برنامه‌ی شخصی‌سازی شده‌ی پرسینو دقیقاً متناسب با تایم‌ام بود."
    },
    {
      name: "الهام کریمی",
      role: "دانش‌آموز پایه دهم",
      text: "مبحث‌های سخت فیزیک را با راهنمای گام‌به‌گام AI خیلی سریع یاد گرفتم."
    },
    {
      name: "رضا احمدیان",
      role: "دانش‌آموز پایه دوازدهم",
      text: "نمونه‌سوال‌های تولیدشده توسط پرسینو دقیقاً شبیه امتحان مدرسه بود!"
    }
  ];

  return (
    <section className="reviews-section py-20 relative">
      <div className="container mx-auto px-6">
        {/* عنوان و توضیح */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-4 text-center"
          >
            نظرات دانش‌آموزان
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-center"
          >
            تجربه دانش‌آموزان موفق پرسینو
          </motion.p>
        </div>

        {/* Custom navigation arrows (hidden on mobile) */}
        <div className="relative">
          {/* Previous button - now visible on all devices */}
          <button
            ref={(node) => setPrevEl(node)}
            className="swiper-custom-button-prev flex absolute top-1/2 -translate-y-1/2 left-0 -translate-x-2 md:-translate-x-6 z-10 bg-white p-2 md:p-3 rounded-full shadow-md justify-center items-center"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} className="md:w-5 md:h-5" />
          </button>
          
          {/* Next button - now visible on all devices */}
          <button
            ref={(node) => setNextEl(node)}
            className="swiper-custom-button-next flex absolute top-1/2 -translate-y-1/2 right-0 translate-x-2 md:translate-x-6 z-10 bg-white p-2 md:p-3 rounded-full shadow-md justify-center items-center"
            aria-label="Next slide"
          >
            <ChevronRight size={18} className="md:w-5 md:h-5" />
          </button>

          {/* اسلایدر نظرات */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation={{ prevEl, nextEl }}
            onSwiper={setSwiper}
            mousewheel={false} // Disable mouse wheel scrolling
            simulateTouch={true} // Keep touch/drag functionality
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="swiper-custom-navigation"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  style={{ opacity: 1 }} /* Force full opacity on all slides */
                >
                  <div>
                    <div className="text-[#46988F] text-4xl mb-4">❝</div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{review.text}</p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;