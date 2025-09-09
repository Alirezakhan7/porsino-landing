'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Sparkles, Rocket, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

// پلن‌های جدید و فعال برای زیست‌شناسی (نسخه اصلاح‌شده)
const biologyPlans = [
  {
    name: 'پلن یک ماهه زیست‌شناسی',
    price: '340,000',
    description: 'شروعی قدرتمند برای تسلط بر زیست',
    icon: <Sparkles className="h-8 w-8" />,
    features: [
      "دسترسی کامل به درس زیست‌شناسی",
      "پرسش و پاسخ با هوش مصنوعی",
      "دریافت آموزش‌های گام‌به‌گام",
      "1 میلیون توکن پرسینو برای هر کاربر در ماه"
    ],
    popular: false,
    priceNote: 'تومان / ماه'
  },
  {
    name: 'پلن ۶ ماهه زیست‌شناسی',
    price: '1,672,000',
    description: 'انتخابی هوشمندانه برای آمادگی مستمر',
    icon: <Award className="h-8 w-8" />,
    features: [
        "تمام امکانات پلن ماهانه",
        "۱۸٪ تخفیف نسبت به خرید ماهانه",
        "دسترسی کامل برای یک نیم‌سال تحصیلی",
        "مناسب برای تسلط عمیق بر مباحث"
    ],
    popular: false,
    priceNote: 'تومان',
    subPriceNote: 'معادل ماهانه ۲۷۸,۰۰۰ تومان'
  },
  {
    name: 'پلن ۹ ماهه زیست‌شناسی',
    price: '2,295,000',
    description: 'جامع‌ترین برنامه برای رتبه‌های برتر',
    icon: <Zap className="h-8 w-8" />,
    features: [
        "تمام امکانات پلن ماهانه",
        "۲۵٪ تخفیف؛ بیشترین صرفه‌جویی در هزینه",
        "پوشش کامل سال تحصیلی تا روز کنکور",
        "بهترین گزینه برای برنامه‌ریزی بلندمدت"
    ],
    popular: true,
    priceNote: 'تومان',
    subPriceNote: 'معادل ماهانه ۲۵۵,۰۰۰ تومان'
  }
];

// پلن‌های جامع که در آینده فعال خواهند شد (با قیمت‌های جدید)
const futurePlans = [
  {
    name: 'پلن ماهانه جامع',
    price: '1,400,000',
    description: 'دسترسی به تمام دروس (به زودی)',
    icon: <Sparkles className="h-6 w-6" />,
    features: [
     "دسترسی به دروس ریاضی، فیزیک و زیست‌شناسی",
      "دسترسی به تمام کنکورها",
      "دسترسی به تمام امتحانات نهایی",
      "ده میلیون توکن پرسینو برای هر کاربر در ماه"
    ],
    popular: false,
    priceNote: 'تومان / ماه',
    subPriceNote: ''
  },
  {
    name: 'پلن سالانه جامع',
    price: '1,120,000',
    description: 'بهترین انتخاب برای تمام دروس (به زودی)',
    icon: <Rocket className="h-6 w-6" />,
    features: [
        "تمام امکانات پلن ماهانه",
        "بیست درصد تخفیف نسبت به خرید ماهانه",
        "مجموع ۱۲۰ میلیون توکن در سال",
        "انتقال توکن‌های استفاده‌ نشده هر ماه به ماه بعد",
    ],
    popular: true,
    priceNote: 'تومان / ماه',
    subPriceNote: 'معادل سالانه ۱۳,۴۴۰,۰۰۰ تومان'
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/assets/Log2.png"
          alt="تعرفه‌های پرسینو"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                تعرفه‌های پرسینو
              </h1>
              <p className="text-xl text-white/90">
                به‌صرفه‌ترین راه برای رسیدن به موفقیت تحصیلی
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">

          {/* Biology Plans */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">پلن‌های فعال زیست‌شناسی</h2>
            <p className="text-gray-600 mt-2">با انتخاب یکی از پلن‌های زیر، مسیر تسلط بر زیست‌شناسی را همین امروز شروع کنید.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {biologyPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`
                  flex flex-col relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300
                  ${plan.popular ? 'border-2 border-[#46988F]' : 'border border-gray-100'}
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-4 bg-[#46988F] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    پرطرفدار
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`
                    w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center
                    ${plan.popular ? 'bg-[#46988F] text-white' : 'bg-gray-100 text-gray-600'}
                  `}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-700 mb-4 h-10">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                      <span className="text-gray-600">{plan.priceNote}</span>
                    </div>
                    {plan.subPriceNote && (
                      <div className="text-sm text-gray-500 mt-1">
                        {plan.subPriceNote}
                      </div>
                    )}
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#46988F]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-[#46988F]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full py-6 text-lg mt-auto ${
                    plan.popular 
                      ? 'bg-[#46988F] hover:bg-[#5AB5AC] text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                    onClick={() => window.location.href = "https://chat.porsino.org/payment"}
                >
                  انتخاب این پلن
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Future Plans */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">پلن‌های جامع پرسینو</h2>
            <p className="text-gray-600 mt-2">این پلن‌ها برای دسترسی به تمام دروس طراحی شده‌اند و به زودی در دسترس قرار خواهند گرفت.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {futurePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`
                  relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden
                  ${plan.popular ? 'border-2 border-gray-300' : ''}
                `}
              >
                {/* Overlay for "Coming Soon" with reduced blur */}
                <div className="absolute inset-0 bg-gray-200/50 backdrop-blur-[2px] flex items-center justify-center z-30">
                  <span className="bg-gray-800 text-white px-6 py-2 rounded-full font-bold text-lg">به زودی...</span>
                </div>
                
                {plan.popular && (
                  <div className="absolute -top-4 right-4 bg-gray-400 text-white px-4 py-1 rounded-full text-sm z-10">
                    پرطرفدار
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-200 text-gray-500">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">{plan.name}</h3>
                  <p className="text-gray-500 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-600">{plan.price}</span>
                      <span className="text-gray-500">{plan.priceNote}</span>
                    </div>
                     {plan.subPriceNote && (
                      <div className="text-sm text-gray-500 mt-1">
                        {plan.subPriceNote}
                      </div>
                    )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-gray-400" />
                      </div>
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  disabled
                  className="w-full py-6 text-lg bg-gray-300 text-gray-500 cursor-not-allowed"
                >
                  انتخاب این پلن
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-center text-sm text-gray-400 py-8 border-t border-gray-200">
      </footer>
    </div>
  );
}