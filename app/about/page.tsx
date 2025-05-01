"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Users, Trophy, Clock, Target, Sparkles, Zap, Award, Lightbulb } from "lucide-react";
import CtaSection from "@/components/Section";

const stats = [
  { number: "۵۰۰+", label: "دانش‌آموز فعال" },
  { number: "۹۸٪", label: "رضایت کاربران" },
  { number: "۲۴/۷", label: "پشتیبانی آنلاین" },
  { number: "۹۴۸۸۵+", label: "پرسش و پاسخ" },
];

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "تیم متخصص",
    description: "متشکل از برترین اساتید و متخصصان آموزشی کشور",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "نتایج درخشان",
    description: "کسب رتبه‌های برتر توسط دانش‌آموزان پرسینو",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "یادگیری سریع",
    description: "بهره‌گیری از متدهای نوین آموزشی و هوش مصنوعی",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "برنامه شخصی",
    description: "ارائه برنامه مطالعاتی کاملاً شخصی‌سازی شده",
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

const benefits = [
  {
    icon: <Sparkles size={60}  className="text-primary" />,
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

export default function About() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white to-gray-50"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/assets/Log2.png"
          alt="تیم پرسینو"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                پیشگام در آموزش هوشمند
              </h1>
              <p className="text-xl text-white/90">
                ما در پرسینو با ترکیب تجربه و تکنولوژی، آینده آموزش را متحول
                می‌کنیم
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#46988F] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">داستان ما</h2>
              <p className="text-gray-600 leading-relaxed">
                پرسینو در سال ۱۴۰۲ با هدف ارائه خدمات آموزشی هوشمند و شخصی‌سازی
                شده متولد شد. ما معتقدیم هر دانش‌آموز مسیر یادگیری منحصر به فرد
                خود را دارد و با استفاده از هوش مصنوعی، این مسیر را برای هر فرد
                بهینه‌سازی می‌کنیم.
              </p>
              <p className="text-gray-600 leading-relaxed">
                امروز، پرسینو به یکی از پیشروترین پلتفرم‌های آموزشی در ایران
                تبدیل شده است. با بیش از ۵۰۰ دانش‌آموز فعال و نتایج درخشان در
                کنکور سراسری، ما همچنان به نوآوری و بهبود خدمات خود ادامه
                می‌دهیم.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/assets/Log2.png"
                alt="تیم پرسینو در حال کار"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section>
        <div className="container mx-auto px-6">
          <CtaSection />
        </div>
      </section>
    </div>
  );
}
