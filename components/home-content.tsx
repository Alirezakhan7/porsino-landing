'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Cpu, Target, Users, BookOpen, Sparkles, Circle, Rocket, Check, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { RippleEffect } from '@/components/ui/ripple-effect';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line
} from 'recharts';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function CustomBarChart({ data = [] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="name"
          padding={{ left: 10, right: 10 }}
          tick={{ fill: '#666' }}
          stroke="#ccc"
        />
        <YAxis
          padding={{ top: 20, bottom: 20 }}
          tick={{ fill: '#666' }}
          stroke="#ccc"
        />
        <Tooltip />
        <Bar 
          dataKey="قبل"
          fill="#94A3B8"
          radius={[4, 4, 0, 0]}
          maxBarSize={50}
        />
        <Bar 
          dataKey="بعد"
          fill="#46988F"
          radius={[4, 4, 0, 0]}
          maxBarSize={50}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

function CustomLineChart({ data = [] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="month"
          padding={{ left: 10, right: 10 }}
          tick={{ fill: '#666' }}
          stroke="#ccc"
        />
        <YAxis
          padding={{ top: 20, bottom: 20 }}
          tick={{ fill: '#666' }}
          stroke="#ccc"
        />
        <Tooltip />
        <Line 
          type="monotone"
          dataKey="users"
          stroke="#46988F"
          strokeWidth={2}
          dot={{ fill: '#46988F', strokeWidth: 2 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const achievements = [
  {
    title: 'افزایش نمرات',
    value: '32٪',
    description: ' بهبود عملکرد نسبت به دانش‌آموزان',
    icon: <Target className="h-6 w-6" />
  },
  {
    title: 'کاهش استرس ',
    value: '14٪',
    description: 'کاهش اضطراب یادگیری و آزمون  ',
    icon: <Users className="h-6 w-6" />
  },
  {
    title: 'یادگیری بهتر ',
    value: '4٪',
    description: ' افزایش توانایی یادگیری',
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    title: ' افزایش زمان مطالعه موثر',
    value: '27٪',
    description: 'از بین بردن زمان های کم فایده',
    icon: <Clock className="h-6 w-6" />
  }
];

const features = [
  {
    icon: <Brain className="h-6 w-6 text-[#46988F]" />,
    title: "یادگیری هوشمند",
    description: "برنامه مطالعاتی شخصی‌سازی شده"
  },
  {
    icon: <Target className="h-6 w-6 text-[#46988F]" />,
    title: "آزمون‌های هدفمند",
    description: "ارزیابی پیشرفت با تست‌های هوشمند"
  },
  {
    icon: <Cpu className="h-6 w-6 text-[#46988F]" />,
    title: "تحلیل لحظه‌ای",
    description: "بازخورد فوری و پیگیری عملکرد"
  },
  {
    icon: <Users className="h-6 w-6 text-[#46988F]" />,
    title: "یادگیری مشارکتی",
    description: "ارتباط با همکلاسی‌ها و مشاوران"
  },
  {
    icon: <BookOpen className="h-6 w-6 text-[#46988F]" />,
    title: "منابع جامع",
    description: "دسترسی به بانک سوالات هوشمند"
  }
];

const subjects = [
  {
    name: "استاد ریاضی",
    image: "https://www.learnworlds.com/app/themes/learnworlds/dist/images/industries/finance/hero.png",
    features: [
      "مسلط به :",
      "تحلیل سریع مسائل",
      "حل معادلات پیچیده",
      "توضیح گام به گام فرمول‌ها"
    ],
    path: "/teachers/math"
  },
  {
    name: "استاد زیست",
    image: "https://www.learnworlds.com/app/themes/learnworlds/dist/images/industries/health/hero.jpg",
    features: [
      "مسلط به :",
      "تمام نکات درسی و کنکوری",
      "امتحانات نهایی",
      "سوالات کنکور سال های قبل"
    ],
    path: "/teachers/biology"
  },
  {
    name: "استاد شیمی",
    image: "https://www.learnworlds.com/app/themes/learnworlds/dist/images/industries/enterprise-lms/hero-image.jpg",
    features: [
      "مسلط به :",
      "تفسیر واکنش‌های شیمیایی",
      "شبیه‌سازی ترکیبات مولکولی",
      "نکات آزمون ها"
    ],
    path: "/teachers/chemistry"
  },
  {
    name: "استاد فیزیک",
    image: "https://www.learnworlds.com/app/themes/learnworlds/dist/images/industries/coaching/coaching-hero-img.jpg",
    features: [
      "مسلط به :",
      "تحلیل قوانین فیزیک",
      "توضیح گام به گام",
      "حل تست های مفهومی"
    ],
    path: "/teachers/physics"
  }
];

const reviews = [
  {
    name: "سارا محمدی",
    role: "دانش‌آموز پایه دوازدهم",
    text: "پرسینو به من کمک کرد تا برنامه مطالعاتی منظمی داشته باشم و در کنکور به هدفم برسم."
  },
  {
    name: "علی رضایی",
    role: "دانش‌آموز پایه یازدهم",
    text: "هوش مصنوعی پرسینو در شناسایی نقاط ضعف و قوت من فوق‌العاده عمل کرد."
  },
  {
    name: "مریم احمدی",
    role: "دانش‌آموز پایه دوازدهم",
    text: "بهترین همراه من در مسیر آمادگی برای کنکور. واقعاً عالی و کاربردیه!"
  },
  {
    name: "محمد حسینی",
    role: "دانش‌آموز پایه دهم",
    text: "با پرسینو تونستم نقاط ضعفم رو شناسایی کنم و روشون کار کنم. نتیجه‌اش عالی بود!"
  }
];

const benefits = [
  {
    icon: "✨",
    text: "یادگیری سریع‌تر و عمیق‌تر با هوش مصنوعی"
  },
  {
    icon: "🎯",
    text: "افزایش تمرکز و بازدهی مطالعه"
  },
  {
    icon: "🚀",
    text: "پیشرفت تحصیلی تضمین شده"
  },
  {
    icon: "⏱️",
    text: "صرفه‌جویی در زمان و انرژی"
  }
];


export default function HomeContent() {
  return (
    <div className="flex min-h-screen flex-col" dir="rtl">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden flex flex-col justify-start md:justify-center items-center text-center py-12 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-5 space-y-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 text-center leading-relaxed">
                پرسینو
                <span className="block mt-3 md:mt-4 lg:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold">
                  پرسش به سبکی نو!
                </span>
              </h1>




              <p className="text-xl font-bold text-gray-600 max-w-xl  text-center">
                اولین دستیار هوش مصنوعی کنکوری
                <span className="block font-normal mt-4">پرسینو یک دستیار تمام عیاره که توی تمام درس ها کمکت میکنه ، سوالات رو جواب میده وبرات نمونه سوال طراحی میکنه و و هزار تا کار دیگه که حتما باید امتحانشون کنی!</span>
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-[#46988F] font-bold  hover:bg-[#5AB5AC] text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
                >
                  همین حالا شروع کن
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-7 relative flex items-center justify-center"
            >
              <div className="w-full max-w-[600px] aspect-[3/4] relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="https://avalai.ir/wp-content/uploads/2024/07/avalai-mobile-app-show-02.webp"
                    alt="پرسینو اپلیکیشن"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    {/* Subjects Section */}
    <section className="subjects-section pt-12 pb-16" dir="rtl">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
          از کدوم معلم سوال داری؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group w-full max-w-[210px]"
            >
              <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-[1.02]">
                <Image
                  src={subject.image}
                  alt={subject.name}
                  fill
                  className="object-cover transition-all duration-300 group-hover:blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* نام استاد - وسط چین */}
                <div className="absolute top-0 left-0 right-0 p-6 text-center z-10">
                  <h3 className="text-xl font-bold text-white mb-2 [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.8)]  text-center">
                    {subject.name}
                  </h3>
                </div>

                {/* توضیحات - راست چین (بولت حذف شده) */}
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 text-right">
                  <ul className="space-y-3 text-white/90 text-right">
                    {subject.features.map((feature, idx) => (
                      <li key={idx} className="text-xs  font-normal" >
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                  <Button className="w-full bg-[#46988F] hover:bg-[#5AB5AC] transition-all duration-300 py-6 text-lg">
                    شروع
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>



{/* More About Our Project Section */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 text-center"
              >
                آینده آموزش با
                <span className="text-7xl md:text-6xl block mt-5 font-black  text-[#46988F]">Porsino AI</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl text-gray-600 "
              >
                پرسینو با ترکیب هوش مصنوعی پیشرفته و متدهای نوین آموزشی، تجربه یادگیری را متحول کرده است.
                ما با استفاده از الگوریتم‌های پیشرفته، مسیر یادگیری هر دانش‌آموز را شخصی‌سازی می‌کنیم.
              </motion.p>
            </div>

            
          {/* Key Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* ردیف آیکون و درصد */}
                  <div className="flex items-center justify-between mb-4">
                    {/* آیکون - سمت راست */}
                    <div className="h-12 w-12 bg-[#46988F]/10 rounded-full flex items-center justify-center">
                      <div className="text-[#46988F]">{achievement.icon}</div>
                    </div>
                    
                    {/* مقدار درصد - سمت چپ */}
                    <div className="text-3xl font-bold text-[#46988F]">
                      {achievement.value}
                    </div>
                  </div>

                  {/* عنوان و توضیحات */}
                  <h3 className="text-xl font-semibold mb-2 text-right">{achievement.title}</h3>
                  <p className="text-gray-600 text-right">{achievement.description}</p>
                </motion.div>
              ))}
            </div>


            {/* Performance Comparison */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">مقایسه عملکرد دانش‌آموزان</h3>
                <p className="text-gray-600 leading-relaxed">
                استفاده از هوش مصنوعی در آموزش باعث بهبود چشمگیر عملکرد دانش‌آموزان شده است. نتایج مطالعات مختلف نشان می‌دهد که:

                دانش‌آموزانی که از پلتفرم‌های یادگیری تطبیقی (Adaptive Learning) استفاده کردند، نمراتشان تا 62٪ افزایش یافت و تا 70٪ بهتر از سایر دانش‌آموزان عمل کردند.

                استفاده از کوییزهای هوشمند و تمرینات مبتنی بر هوش مصنوعی باعث بهبود 15٪ در نمرات آزمون‌های استاندارد شده است.

                سیستم‌های تدریس هوشمند (Intelligent Tutoring Systems) توانستند به‌طور متوسط نمرات دانش‌آموزان را 30٪ افزایش دهند و اضطراب یادگیری را تا 20٪ کاهش دهند.

                دانش‌آموزانی که از تدریس خصوصی دیجیتال مبتنی بر هوش مصنوعی استفاده کردند، 4 درصد بیشتر احتمال داشتند که یک موضوع را کاملاً یاد بگیرند.

                استفاده از ابزارهای هوش مصنوعی برای تقویت مهارت نگارش، باعث بهبود 12٪ در مهارت گرامری و 8٪ در مهارت تفکر انتقادی دانش‌آموزان شد.

                این آمار نشان می‌دهد استفاده درست و هدفمند از هوش مصنوعی در آموزش می‌تواند به طور چشمگیری عملکرد شما را در مدرسه بهبود بخشد.
                </p>
              
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    alt="دانش‌آموزان پرسینو"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 p-8"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        یادگیری نوین
                      </div>
                      <p className="text-gray-600">
                        با استفاده از جدیدترین تکنولوژی‌های هوش مصنوعی
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* User Growth */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="order-2 md:order-1"
              >
             
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6 order-1 md:order-2"
              >
                <h3 className="text-2xl font-bold">رشد روزافزون کاربران</h3>
                <p className="text-gray-600 leading-relaxed">
                  اعتماد روزافزون دانش‌آموزان و خانواده‌ها به پرسینو نشان‌دهنده کیفیت و اثربخشی
                  روش‌های نوین آموزشی ماست. ما با افتخار میزبان بیش از ۱۰,۰۰۰ دانش‌آموز فعال هستیم.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3 space-x-reverse">
                    <div className="h-6 w-6 rounded-full bg-[#46988F]/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#46988F]" />
                    </div>
                    <span>پشتیبانی ۲۴/۷ برای تمام کاربران</span>
                  </li>
                  <li className="flex items-center space-x-3 space-x-reverse">
                    <div className="h-6 w-6 rounded-full bg-[#46988F]/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#46988F]" />
                    </div>
                    <span>به‌روزرسانی مداوم محتوای آموزشی</span>
                  </li>
                  <li className="flex items-center space-x-3 space-x-reverse">
                    <div className="h-6 w-6 rounded-full bg-[#46988F]/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#46988F]" />
                    </div>
                    <span>گزارش‌های تحلیلی پیشرفت</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-[#46988F] hover:bg-[#5AB5AC] text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
              >
                همین حالا شروع کنید
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section with Ripple Effect */}
      <section className="support-section relative py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative min-h-[400px] flex items-center"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                <RippleEffect color="black" size={300} duration={1} />
              </div>
              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl font-bold text-gray-900">پشتیبانی ۳۶۰ درجه</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  ما اینجا هستیم تا در هر لحظه از مسیر یادگیری، شما را همراهی کنیم!
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-[#46988F] hover:bg-[#5AB5AC] text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
                  >
                    مشاهده سوالات متداول
                    <ArrowRight className="mr-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, title: 'پشتیبانی جامع', desc: 'برای تمامی کاربران' },
                { icon: Target, title: 'پاسخ سریع', desc: 'به تمام سوالات' },
                { icon: BookOpen, title: 'راهنمای کامل', desc: 'استفاده از پلتفرم' },
                { icon: Sparkles, title: 'پشتیبانی ویژه', desc: 'خدمات شخصی‌سازی شده' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative"
                >
                  <div className="h-12 w-12 bg-[#46988F]/10 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <item.icon className="h-6 w-6 text-[#46988F]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 relative z-10">{item.title}</h3>
                  <p className="text-gray-600 relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4"
            >
              نظرات دانش‌آموزان
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600"
            >
              تجربه دانش‌آموزان موفق پرسینو
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[#46988F] text-4xl mb-4">❝</div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4"
            >
              مزایای استفاده از پرسینو
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <p className="text-gray-600">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#46988F] rounded-2xl p-12 text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">آماده‌اید که شروع کنید؟</h2>
            <p className="text-white/90 mb-8 text-lg">
              همین حالا به جمع هزاران دانش‌آموز موفق پرسینو بپیوندید
            </p>
            <Button className="bg-white text-[#46988F] hover:bg-white/90 px-8 py-6 text-lg">
              ثبت‌نام در پرسینو
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}