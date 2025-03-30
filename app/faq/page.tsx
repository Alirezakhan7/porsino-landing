'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Link from 'next/link';
import { Search } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    question: "پرسینو چیست و چگونه کار می‌کند؟",
    answer: "پرسینو یک پلتفرم هوشمند آموزشی است که با استفاده از هوش مصنوعی، به دانش‌آموزان در مسیر یادگیری کمک می‌کند. این پلتفرم با تحلیل سطح دانش شما، برنامه‌ای شخصی‌سازی شده ارائه می‌دهد."
  },
  {
    question: "چگونه می‌توانم در پرسینو ثبت‌نام کنم؟",
    answer: "برای ثبت‌نام در پرسینو، کافیست روی دکمه 'ثبت‌نام' کلیک کنید و اطلاعات خود را وارد نمایید. پس از تایید ایمیل، می‌توانید از خدمات پلتفرم استفاده کنید."
  },
  {
    question: "هزینه استفاده از پرسینو چقدر است؟",
    answer: "پرسینو دارای پلن‌های مختلف با قیمت‌های متفاوت است. برای اطلاع از جزئیات قیمت‌ها، به صفحه 'تعرفه‌ها' مراجعه کنید."
  },
  {
    question: "آیا می‌توانم از پرسینو به صورت رایگان استفاده کنم؟",
    answer: "بله، پرسینو دارای یک دوره آزمایشی رایگان است که می‌توانید امکانات پایه را تجربه کنید."
  },
  {
    question: "پشتیبانی پرسینو به چه صورت است؟",
    answer: "پشتیبانی ۲۴/۷ از طریق چت آنلاین، ایمیل و تلفن در دسترس است."
  },
  {
    question: "آیا محتوای پرسینو با کنکور سراسری هماهنگ است؟",
    answer: "بله، تمام محتوای آموزشی پرسینو مطابق با آخرین تغییرات کنکور سراسری به‌روزرسانی می‌شود."
  },
  {
    question: "چگونه می‌توانم پیشرفت خود را پیگیری کنم؟",
    answer: "پرسینو دارای داشبورد پیشرفت شخصی است که آمار و نمودارهای دقیقی از عملکرد شما ارائه می‌دهد."
  },
  {
    question: "آیا امکان مشاوره تحصیلی وجود دارد؟",
    answer: "بله، پرسینو خدمات مشاوره تحصیلی آنلاین با مشاوران مجرب ارائه می‌دهد."
  },
  {
    question: "نحوه دسترسی به منابع آموزشی چگونه است؟",
    answer: "تمام منابع آموزشی به صورت آنلاین و از طریق پنل کاربری در دسترس هستند."
  },
  {
    question: "آیا امکان دانلود محتوا برای مطالعه آفلاین وجود دارد؟",
    answer: "بله، بیشتر محتواهای آموزشی قابلیت دانلود و مطالعه آفلاین را دارند."
  },
  {
    question: "برنامه مطالعاتی چگونه تنظیم می‌شود؟",
    answer: "برنامه مطالعاتی بر اساس اهداف، سطح فعلی و زمان در دسترس شما به صورت هوشمند تنظیم می‌شود."
  },
  {
    question: "آیا امکان یادگیری گروهی وجود دارد؟",
    answer: "بله، پرسینو دارای امکانات یادگیری گروهی و تعامل با سایر دانش‌آموزان است."
  },
  {
    question: "چگونه می‌توانم اشکالات درسی خود را برطرف کنم؟",
    answer: "از طریق سیستم پرسش و پاسخ هوشمند و همچنین کلاس‌های رفع اشکال آنلاین."
  },
  {
    question: "آیا آزمون‌های آزمایشی برگزار می‌شود؟",
    answer: "بله، پرسینو به طور منظم آزمون‌های آزمایشی استاندارد برگزار می‌کند."
  },
  {
    question: "نحوه ارتباط با پشتیبانی چگونه است؟",
    answer: "از طریق چت آنلاین، تیکت، ایمیل یا تماس تلفنی می‌توانید با پشتیبانی در ارتباط باشید."
  },
  {
    question: "آیا امکان لغو اشتراک وجود دارد؟",
    answer: "بله، می‌توانید در هر زمان اشتراک خود را لغو کنید."
  },
  {
    question: "محتوای آموزشی چقدر به‌روز است؟",
    answer: "محتوای آموزشی به طور مرتب و مطابق با آخرین تغییرات آموزشی به‌روزرسانی می‌شود."
  },
  {
    question: "آیا گزارش عملکرد به والدین ارائه می‌شود؟",
    answer: "بله، والدین می‌توانند با داشتن حساب کاربری جداگانه، پیشرفت فرزند خود را پیگیری کنند."
  },
  {
    question: "امنیت اطلاعات کاربران چگونه تضمین می‌شود؟",
    answer: "پرسینو از پیشرفته‌ترین روش‌های رمزنگاری و حفاظت از داده‌ها استفاده می‌کند."
  },
  {
    question: "آیا امکان استفاده از چند دستگاه وجود دارد؟",
    answer: "بله، می‌توانید همزمان از چند دستگاه به حساب کاربری خود دسترسی داشته باشید."
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = faqs.filter(faq => 
      faq.question.toLowerCase().includes(value.toLowerCase()) ||
      faq.answer.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFaqs(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="سوالات متداول پرسینو"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                سوالات متداول
              </h1>
              <p className="text-xl text-white/90">
                پاسخ به تمام سوالات شما درباره پرسینو
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="جستجو در سوالات متداول..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pr-10 text-right"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="mb-12 space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                >
                  <AccordionTrigger className="text-right px-6 py-4 hover:bg-gray-50 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-right px-6 py-4 bg-gray-50">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-[#46988F] to-[#5AB5AC] rounded-2xl p-8 text-white text-center cursor-pointer hover:shadow-lg transition-shadow"
        >
          <Link href="/contact">
            <h2 className="text-2xl font-bold mb-2">❝ جواب سوالت را پیدا نکردی؟ ❞</h2>
            <p className="text-white/90">❝ فرم تماس با ما را تکمیل کنید تا پشتیبانی جواب بدهد. ❞</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}