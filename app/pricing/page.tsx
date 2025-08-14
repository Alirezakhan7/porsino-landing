'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Sparkles, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';


const featuresYearly = [
  "تمام امکانات پلن ماهانه",
  "سی درصد تخفیف نسبت به خرید ماهانه",
  "مجموع ۱۲۰ میلیون توکن در سال (هر ماه ۱۰ میلیون)",
  "انتقال توکن‌های استفاده‌ نشده هر ماه به ماه بعد",
]
const plans = [
  {
    name: 'پلن ماهانه',
    price: '840,000',
    description: 'مناسب برای شروع مسیر موفقیت',
    icon: <Sparkles className="h-6 w-6" />,
    features: [
     "دسترسی به دروس ریاضی ، فیزیک و زیست شناسی",
      "دسترسی به تمام کنکورها",
      "دسترسی به تمام امتحانات نهایی",
      "یک میلیون توکن پرسینو برای هر کاربر در ماه"
    ],
    popular: false
  },
  {
    name: 'پلن سالانه',
    price: '667,000',
    description: 'بهترین انتخاب برای موفقیت در کنکور',
    icon: <Rocket className="h-6 w-6" />,
    features: [
        "تمام امکانات پلن ماهانه",
        "سی درصد تخفیف نسبت به خرید ماهانه",
        "مجموع ۱۲۰ میلیون توکن در سال (هر ماه ۱۰ میلیون)",
        "انتقال توکن‌های استفاده‌ نشده هر ماه به ماه بعد",

    ],
    popular: true
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
      <section className="mt-20 mb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`
                  relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300
                  ${plan.popular ? 'border-2 border-[#46988F]' : 'border border-gray-100'}
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-4 bg-[#46988F] text-white px-4 py-1 rounded-full text-sm">
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{plan.name}</h3>
                  <p className="text-gray-700 mb-4 text-center">{plan.description}</p>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                      <span className="text-gray-600">تومان / ماه</span>
                    </div>

                    {plan.name === 'پلن سالانه' && (
                      <div className="text-s text-gray-500 mt-1">
                        معادل سالانه 8,006,000 تومان
                      </div>
                    )}
                </div>

                <div className="space-y-4 mb-8">
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
                  className={`w-full py-6 text-lg ${
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-center text-sm text-gray-400 py-8 border-t border-gray-200">
      </footer>
    </div>
  );
}
