'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Users, Trophy, Clock, Target } from 'lucide-react';

const stats = [
  { number: '۵۰۰+', label: 'دانش‌آموز فعال' },
  { number: '۹۸٪', label: 'رضایت کاربران' },
  { number: '۲۴/۷', label: 'پشتیبانی آنلاین' },
  { number: '۹۴۸۸۵+', label: 'پرسش و پاسخ' }
];

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'تیم متخصص',
    description: 'متشکل از برترین اساتید و متخصصان آموزشی کشور'
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: 'نتایج درخشان',
    description: 'کسب رتبه‌های برتر توسط دانش‌آموزان پرسینو'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'یادگیری سریع',
    description: 'بهره‌گیری از متدهای نوین آموزشی و هوش مصنوعی'
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'برنامه شخصی',
    description: 'ارائه برنامه مطالعاتی کاملاً شخصی‌سازی شده'
  }
];

const advantages = [
  'استفاده از هوش مصنوعی پیشرفته',
  'پشتیبانی ۲۴ ساعته',
  'محتوای آموزشی به‌روز',
  'گزارش‌گیری هوشمند',
  'رابط کاربری ساده و کاربردی',
  'قیمت‌گذاری منصفانه'
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
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
                ما در پرسینو با ترکیب تجربه و تکنولوژی، آینده آموزش را متحول می‌کنیم
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
                <div className="text-4xl font-bold text-[#46988F] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">داستان ما</h2>
              <p className="text-gray-600 leading-relaxed">
                پرسینو در سال ۱۴۰۲ با هدف ارائه خدمات آموزشی هوشمند و شخصی‌سازی شده متولد شد. ما معتقدیم هر دانش‌آموز مسیر یادگیری منحصر به فرد خود را دارد و با استفاده از هوش مصنوعی، این مسیر را برای هر فرد بهینه‌سازی می‌کنیم.
              </p>
              <p className="text-gray-600 leading-relaxed">
                امروز، پرسینو به یکی از پیشروترین پلتفرم‌های آموزشی در ایران تبدیل شده است. با بیش از ۵۰۰ دانش‌آموز فعال و نتایج درخشان در کنکور سراسری، ما همچنان به نوآوری و بهبود خدمات خود ادامه می‌دهیم.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="تیم پرسینو در حال کار"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            چرا پرسینو؟
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#46988F]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#46988F]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-center mb-12"
            >
              مزایای پرسینو
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 space-x-reverse"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#46988F]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-[#46988F]" />
                    </div>
                    <span className="text-gray-700">{advantage}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative h-[300px] rounded-xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                  alt="مزایای پرسینو"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#46988F]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">آماده‌اید که شروع کنید؟</h2>
            <p className="text-white/90 mb-8 text-lg">
              همین حالا به جمع هزاران دانش‌آموز موفق پرسینو بپیوندید
            </p>
            <button className="bg-white text-[#46988F] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300">
              ثبت‌نام در پرسینو
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}