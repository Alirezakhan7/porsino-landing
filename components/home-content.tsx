"use client";
import React, { useRef } from 'react';
import ReviewsSection from '@/components/ReviewsSection';

import 'swiper/css';
import 'swiper/css/navigation';
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Cpu,
  Target,
  Users,
  BookOpen,
  Sparkles,
  Circle,
  Rocket,
  Check,
  Clock,
  Zap,
  Award,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RippleEffect } from "@/components/ui/ripple-effect";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import CtaSection from "./Section";

function CustomBarChart({ data = [] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          padding={{ left: 10, right: 10 }}
          tick={{ fill: "#666" }}
          stroke="#ccc"
        />
        <YAxis
          padding={{ top: 20, bottom: 20 }}
          tick={{ fill: "#666" }}
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
          tick={{ fill: "#666" }}
          stroke="#ccc"
        />
        <YAxis
          padding={{ top: 20, bottom: 20 }}
          tick={{ fill: "#666" }}
          stroke="#ccc"
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#46988F"
          strokeWidth={2}
          dot={{ fill: "#46988F", strokeWidth: 2 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const whyPorsinoData = {
  title: "چرا پرسینو؟",
  // --- CHANGE HERE ---
  // فیلد description را با این آبجکت جایگزین کنید
  focusTitle: {
    part1: "در دنیایی که همه به دنبال پوشش همه‌چیز هستند، ما تصمیم گرفتیم روی یک موضوع تمرکز کنیم:",
    highlight: "زیست‌شناسی",
    part2: "این انتخاب به ما اجازه داده تا ابزاری بسازیم که فراتر از یک دستیار ساده است؛ ابزاری که با دقت و کیفیت بی‌نقص، یادگیری را برای شما لذت‌بخش می‌کند."
  },
  // بقیه آبجکت بدون تغییر باقی می‌ماند...
  featureSections: [
    {
      icon: <Clock className="h-6 w-6 text-[#46988F]" />,
      title: "همیشه در دسترس",
      features: [
        "پاسخ‌گویی فوری در هر ساعت از شبانه‌روز",
        "بدون محدودیت زمانی یا نیاز به برنامه‌ریزی",
        "مناسب برای دانش‌آموزانی با سبک مطالعه منعطف یا نامنظم",
      ],
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#46988F]" />,
      title: "محتوای تخصصی و دقیق",
      features: [
        "تمامی پاسخ‌ها بر اساس آخرین تغییرات کتاب درسی زیست‌شناسی است",
        "دیتابیسی جامع از تست‌ها و کنکورهای سال‌های قبل",
        "هر چقدر که دوست داری سوال بپرس، پرسینو تا یادگیری کامل دست برنمی‌داره!",
      ],
    },
  ],
};

// تعریف انیمیشن‌ها برای Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // انیمیشن آبشاری برای آیتم‌های لیست
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const achievements = [
  {
    title: "افزایش نمرات",
    value: "32٪",
    description: " بهبود عملکرد نسبت به دانش‌آموزان",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "کاهش استرس ",
    value: "14٪",
    description: "کاهش اضطراب یادگیری و آزمون  ",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "یادگیری بهتر ",
    value: "4٪",
    description: " افزایش توانایی یادگیری",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: " افزایش زمان مطالعه موثر",
    value: "27٪",
    description: "از بین بردن زمان های کم فایده",
    icon: <Clock className="h-6 w-6" />,
  },
];

const features = [
  {
    icon: <Brain className="h-6 w-6 text-[#46988F]" />,
    title: "یادگیری هوشمند",
    description: "برنامه مطالعاتی شخصی‌سازی شده",
  },
  {
    icon: <Target className="h-6 w-6 text-[#46988F]" />,
    title: "آزمون‌های هدفمند",
    description: "ارزیابی پیشرفت با تست‌های هوشمند",
  },
  {
    icon: <Cpu className="h-6 w-6 text-[#46988F]" />,
    title: "تحلیل لحظه‌ای",
    description: "بازخورد فوری و پیگیری عملکرد",
  },
  {
    icon: <Users className="h-6 w-6 text-[#46988F]" />,
    title: "یادگیری مشارکتی",
    description: "ارتباط با همکلاسی‌ها و مشاوران",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-[#46988F]" />,
    title: "منابع جامع",
    description: "دسترسی به بانک سوالات هوشمند",
  },
];

const subjects = [
  {
   name: "استاد زیست",
    image: "/assets/zist.jpg",
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
    image: "/assets/riazi.jpg",
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
    image: "/assets/shimi.jpg",
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
    image: "/assets/physics.jpg",
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

const benefits = [
  {
    icon: <Sparkles size={60} className="text-primary" />,
    text: "یادگیری سریع‌تر و عمیق‌تر ",
  },
  {
    icon: <Zap size={60} className=" text-primary" />,
    text: "افزایش تمرکز و بازدهی مطالعه",
  },
  {
    icon: <Award size={60} className="text-primary" />,
    text: "پیشرفت تحصیلی تضمین شده",
  },
  {
    icon: <Lightbulb size={60} className="text-primary" />,
    text: "صرفه‌جویی در زمان و انرژی",
  },
];

const advantages = [
  "هوش مصنوعی پیشرفته",
  "پشتیبانی ۲۴ ساعته",
  "محتوای آموزشی به‌روز",
  "گزارش‌گیری هوشمند",
  "رابط کاربری ساده و کاربردی",
  "قیمت‌گذاری منصفانه",
];

export default function HomeContent() {
  return (
<div className="flex min-h-screen flex-col" dir="rtl">
    {/* Hero Section */}
      <section className="hero-section relative overflow-hidden flex flex-col justify-start md:justify-center items-center text-center py-12 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto px-6 relative z-20">
          {/* --- CHANGE HERE --- */}
          {/* افزودن کلاس justify-items-center برای وسط‌چین کردن کامل آیتم‌ها در گرید */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center justify-items-center">
            
            {/* متن */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-8 space-y-8 mt-10 md:mt-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 text-center leading-snug">
                هوش مصنوعی پرسینو
                <span className="block mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#46988F]">
                  زیست‌شناسی را عمیق و آسان یاد بگیر
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center font-medium">
                دیگر نگران سردرگمی میان جزوه‌ها و کلاس‌های مختلف نباش. پرسینو، دستیار هوشمند تو در یادگیری زیست‌شناسی است. هر سوالی داری بپرس، مفاهیم را قدم‌به‌قدم یاد بگیر و مطمئن شو که همه‌چیز را واقعاً فهمیده‌ای.
              </p>

              <div className="flex justify-center">
                <a
                  href="https://chat.porsino.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-[#46988F] font-bold hover:bg-[#5AB5AC] text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
                  >
                    شروع یادگیری
                    {/* کامپوننت آیکون را بر اساس پروژه خود وارد کنید */}
                    {/* <ArrowRight className="mr-2 h-5 w-5" /> */}
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* عکس */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-4 relative flex items-center justify-center order-first md:order-last"
            >
              <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[520px] aspect-[3/4] relative">
                <motion.div
                  className="relative w-full h-full"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <Image
                    src="/assets/chatbot_porsino.png"
                    alt="اپلیکیشن هوش مصنوعی پرسینو"
                    width={1200}
                    height={1600}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 520px"
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Subjects Section */}
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

      {/* START: Why Porsino Section (The section you want to add) */}
    
      <section className="relative py-8 overflow-hidden cv">
        {/* حباب‌های پس‌زمینه متحرک */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.5, 0.4] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-28 -right-24 w-72 h-72 bg-[#D5F4EF] rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute top-[30%] -left-24 w-60 h-60 bg-[#BFF0E7] rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.6, 0.5] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 10 }}
            className="absolute bottom-0 right-1/3 w-64 h-64 bg-[#EAFBF8] rounded-full blur-3xl"
          />
        </div>

        {/* محتوای اصلی سکشن */}
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
          >
            {/* عنوان اصلی */}
            <motion.h3
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 text-center"
            >
              {whyPorsinoData.title}
            </motion.h3>

            {/* توضیحات با کلمه کلیدی برجسته */}
            <motion.div
              variants={itemVariants}
              className="mt-6 text-lg text-gray-700 text-center max-w-3xl leading-relaxed"
            >
              <p>{whyPorsinoData.focusTitle.part1}</p>
              
              <motion.span
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                className="block my-10 text-5xl md:text-7xl font-black text-transparent bg-clip-text 
                          bg-gradient-to-r from-[#46988F] to-[#5AB5AC] [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)]"
              >
                {whyPorsinoData.focusTitle.highlight}
              </motion.span>
              
              <p>{whyPorsinoData.focusTitle.part2}</p>
            </motion.div>

            {/* کارت‌های ویژگی‌ها */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {whyPorsinoData.featureSections.map((section, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.07)" }}
                  className="bg-white/50 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      {section.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">{section.title}</h4>
                  </div>

                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-5 text-gray-600"
                  >
                    {section.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        variants={itemVariants}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#46988F]/10 flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-[#46988F]" />
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </section>
   


      {/* More About Our Project Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 cv">
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
                        <span className="text-7xl md:text-6xl block mt-5 font-black  text-[#46988F]">
                          Porsino AI
                        </span>
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl text-gray-600 "
                      >
                        پرسینو با ترکیب هوش مصنوعی پیشرفته و متدهای نوین آموزشی، تجربه
                        یادگیری را متحول کرده است. ما با استفاده از الگوریتم‌های
                        پیشرفته، مسیر یادگیری هر دانش‌آموز را شخصی‌سازی می‌کنیم.
                      </motion.p>
                    </div>

                    {/* Key Achievements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
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
                          <h3 className="text-xl font-semibold mb-2 text-right">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-600 text-right">
                            {achievement.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Performance Comparison */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
                      {/* Text Section */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-6 px-4 lg:px-0 order-1"
                      >
                        <h3 className="text-2xl font-bold text-gray-900">
                          مقایسه عملکرد دانش‌آموزان
                        </h3>
                        <p className="text-gray-700 leading-8 text-justify">
                          استفاده از هوش مصنوعی در آموزش باعث بهبود چشمگیر عملکرد
                          دانش‌آموزان شده است. نتایج مطالعات مختلف نشان می‌دهد که:
                          دانش‌آموزانی که از پلتفرم‌های یادگیری تطبیقی (Adaptive
                          Learning) استفاده کردند، نمراتشان تا 62٪ افزایش یافت و تا 70٪
                          بهتر از سایر دانش‌آموزان عمل کردند. استفاده از کوییزهای هوشمند
                          و تمرینات مبتنی بر هوش مصنوعی باعث بهبود 15٪ در نمرات
                          آزمون‌های استاندارد شده است. سیستم‌های تدریس هوشمند
                          (Intelligent Tutoring Systems) توانستند به‌طور متوسط نمرات
                          دانش‌آموزان را 30٪ افزایش دهند و اضطراب یادگیری را تا 20٪ کاهش
                          دهند. دانش‌آموزانی که از تدریس خصوصی دیجیتال مبتنی بر هوش
                          مصنوعی استفاده کردند، 4 درصد بیشتر احتمال داشتند که یک موضوع
                          را کاملاً یاد بگیرند. استفاده از ابزارهای هوش مصنوعی برای
                          تقویت مهارت نگارش، باعث بهبود 12٪ در مهارت گرامری و 8٪ در
                          مهارت تفکر انتقادی دانش‌آموزان شد. این آمار نشان می‌دهد
                          استفاده درست و هدفمند از هوش مصنوعی در آموزش می‌تواند به طور
                          چشمگیری عملکرد شما را در مدرسه بهبود بخشد.
                        </p>
                      </motion.div>

                      {/* Image Section */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative px-4 lg:px-0 order-2"
                      >
                        <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mx-auto">
                            <Image
                              src="/assets/novin.jpg"
                              alt="دانش‌آموزان پرسینو"
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 500px"
                            />
                    

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6"
                          >
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-5 md:p-6">
                              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                یادگیری نوین
                              </div>
                              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                                با استفاده از جدیدترین تکنولوژی‌های هوش مصنوعی
                              </p>
                            </div>
                          </motion.div>

                        </div>
                      </motion.div>
                    </div>

                    {/* Costs Reduction */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-center">
                      {/* Text Section */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-6 order-1 lg:order-2 px-4 md:px-0"
                      >
                        <h3 className="text-2xl font-bold text-gray-900">
                          مقایسه هزینه‌های تحصیلی
                        </h3>
                        <p className="text-gray-700 leading-6 text-justify">
                          در دنیای امروز، آموزش باکیفیت نباید فقط مخصوص کسانی باشه که پول زیادی خرج می‌کنن.
                          پرسینو اومده تا این ذهنیت قدیمی رو تغییر بده و دسترسی به آموزش حرفه‌ای رو برای همه ممکن کنه.
                        </p>
                        <ul className="list-disc pr-6 text-gray-700 leading-relaxed">
                          <li>با یه هزینه ماهانه منطقی، به کل محتوای آموزشی دسترسی داری.</li>
                          <li>نیازی به پرداخت چندمیلیونی برای کلاس خصوصی نیست.</li>
                          <li>
                            همه چیز رو یک‌جا داری:
                            <ul className="list-disc pr-6 mt-1 space-y-1">
                              <li>آموزش تمام دروس</li>
                              <li>تحلیل عملکرد</li>
                              <li>آموزش پلاس</li>
                              <li>پشتیبانی شبانه‌روزی</li>
                            </ul>
                          </li>
                          <li>هزینه‌ای که میدی فقط برای یک معلم یا یک درس نیست؛ برای یک سیستم کامل و هوشمنده.</li>
                          <li>بدون نیاز به رفت‌و‌آمد، منابع پراکنده یا جلسات جبرانی.</li>
                        </ul>

                        <p className="text-gray-800 font-medium mt-4">
                          نتیجه؟ با پرسینو، کمتر خرج می‌کنی، ولی بیشتر یاد می‌گیری. این یعنی آموزش باکیفیت، بدون فشار اقتصادی روی خانواده.
                        </p>
                      </motion.div>

                      {/* Image Section */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative order-2 lg:order-1 px-4 lg:px-0"
                      >
                        <div className="relative w-full md:w-[650px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mx-auto">
                          <Image
                            src="/assets/eco.jpg"
                            alt="دانش‌آموزان پرسینو"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 650px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute bottom-0 left-0 right-0 p-4 sm:p-6"
                          >
                      
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
       




            <div className="w-full bg-gray-50 py-6 px-6 md:px-16 mt-10">
                  <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
                      آموزش پلاس: پرسینو اونقدر به روش های مختلف توضیح میده که کامل یادبگیری
                    </h3>
                    <p className="text-gray-700 leading-8 text-justify">
                      در بسیاری از سیستم‌های آموزشی، تنها هدف این است که دانش‌آموز پاسخ سوال را حفظ کند.
                      اما در پرسینو، ما یک قدم جلوتر می‌رویم. در حالت <strong>آموزش پلاس</strong>، وقتی دانش‌آموز سوالی می‌پرسد، بلافاصله پاسخ نهایی را دریافت نمی‌کند.
                      در عوض، پرسینو ابتدا نکاتی کلیدی و راهنمایی‌هایی ارائه می‌دهد، سپس با پرسیدن سوال‌هایی هدفمند، کمک می‌کند تا دانش‌آموز خودش به پاسخ برسد.
                      <br /><br />
                      این مدل تعاملی، باعث می‌شود فرآیند یادگیری عمیق‌تر و ماندگارتر باشد. دانش‌آموز فقط یک جواب را حفظ نمی‌کند، بلکه مسیر رسیدن به آن را یاد می‌گیرد.
                      همین فرایند موجب می‌شود <strong>مهارت تحلیل، تفکر منطقی و حل مسئله</strong> در او تقویت شود؛ مهارت‌هایی که نه‌فقط در امتحان بلکه در زندگی هم کاربرد دارند.
                      <br /><br />
                      <strong>آموزش پلاس</strong> یعنی یادگیری فعال و هوشمندانه. یعنی یاد گرفتن به روش فکر کردن، نه حفظ کردن.
                      با این رویکرد، دانش‌آموز از یک گیرنده‌ی اطلاعات صرف، به یک یادگیرنده‌ی کنجکاو و مستقل تبدیل می‌شود.
                    </p>
                  </div>
                </div>
          </div>
        </div>
      </section>

        {/* Support Section with Ripple Effect */}
        <section className="bg-[#46988F] relative py-20 cv">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative min-h-[400px] flex items-center"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                  <RippleEffect
                    color="rgba(255, 255, 255, 0.1)"
                    size={300}
                    duration={1}
                  />
                </div>
                <div className="relative z-10 space-y-8">
                  <h2 className="text-4xl font-bold text-white">
                    پشتیبانی ۳۶۰ درجه
                  </h2>
                  <p className="text-xl text-white/90 leading-relaxed">
                    ما اینجا هستیم تا در هر لحظه از مسیر یادگیری، شما را همراهی کنیم!
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a href="/faq" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-white text-[#46988F] font-bold hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
                      >
                        مشاهده سوالات متداول
                        <ArrowRight className="mr-2 h-5 w-5" />
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-6 items-stretch justify-center">
                {[
                  { icon: Users, title: "پشتیبانی جامع", desc: "برای تمامی کاربران" },
                  { icon: Target, title: "پاسخ سریع", desc: "به تمام سوالات" },
                  { icon: BookOpen, title: "راهنمای کامل", desc: "استفاده از پلتفرم" },
                  { icon: Sparkles, title: "پشتیبانی ویژه", desc: "خدمات شخصی‌سازی شده" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full flex flex-col justify-center bg-white/10 backdrop-blur-sm text-center rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 relative"
                  >
                    <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <item.icon className="h-6 w-6 text-white text-center" />
                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2 text-white relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-center text-white/80 relative z-10">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <ReviewsSection />



      {/* Benefits Section */}
      <div className="block lg:hidden cv">
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className=" text-center text-3xl font-bold mb-4"
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
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="text-2xl mb-10">{benefit.icon}</div>
                  <p className=" text-xl text-gray-600 text-center">
                    {benefit.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Comparison Section */}
      <div className="hidden lg:block cv">
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg min-h-[500px]">
              {/* Background Image */}
              <Image
                src="/assets/Benefits.jpg"
                alt="مزایای پرسینو"
                fill
                className="object-cover object-[top_center]"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              {/* Overlay */}
              <div className="relative z-20 bg-white/80 backdrop-blur-sm p-8 rounded-2xl min-h-[500px] flex items-center justify-center">
                <div className="relative w-[600px] h-[300px]">
                  {/* Absolute Centered Title */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.h2
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl font-black text-[#46988F] text-center"
                    >
                      مزایای پرسینو
                    </motion.h2>
                  </div>
                  {/* Animated Advantages from Center */}
                  {advantages.map((advantage, index) => {
                    const angle = (index / advantages.length) * Math.PI * 2;
                    const radiusX = 400;
                    const radiusY = 200;
                    const advantagePositions = [
                      { x: 200, y: 100 },
                      { x: 200, y: -100 },
                      { x: -100, y: -180 },
                      { x: -400, y: -100 },
                      { x: -450, y: 100 },
                      { x: -100, y: 150 },
                    ];
                    const { x, y } = advantagePositions[index];
                    return (
                      <motion.div
                        key={index}
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        whileInView={{ x, y, opacity: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 60,
                        }}
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-2 space-x-reverse"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#46988F]/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-[#46988F]" />
                        </div>
                        <span className=" text-2xl text-gray-800 whitespace-nowrap">
                          {advantage}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              {/* Dark Overlay for better readability */}
              <div className="absolute inset-0 bg-black/20 z-0" />
            </div>
          </div>
        </section>
      </div>

      {/* Final Call to Action */}
      <section>
        <div className="container mx-auto px-6 cv">
          <CtaSection />
        </div>
      </section>
    </div>
  );
}
