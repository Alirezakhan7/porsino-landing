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
import './styles.css';


const faqs = [
  {
    question: "پرسینو چیست و چگونه کار می‌کند؟",
    answer: "پرسینو یک پلتفرم هوشمند آموزشی است که با بهره‌گیری از هوش مصنوعی، تجربه یادگیری مؤثرتری را برای دانش‌آموزان فراهم می‌کند. این پلتفرم با تحلیل سطح دانش، نقاط قوت و ضعف هر فرد، مسیر یادگیری شخصی‌سازی‌شده‌ای طراحی می‌کند که متناسب با نیازهای خاص اوست. هدف اصلی پرسینو ارتقاء کیفیت آموزش و افزایش بازدهی مطالعه است."
  },
  {
    question: "چگونه می‌توانم در پرسینو ثبت‌نام کنم؟",
    answer: "برای ثبت‌نام در پرسینو، کافیست وارد وب‌سایت شوید و روی دکمه 'ثبت‌نام' کلیک کنید. پس از وارد کردن اطلاعات اولیه (مانند ایمیل، شماره تماس و رمز عبور)، یک ایمیل تأیید برای شما ارسال می‌شود. با تأیید ایمیل خود، حساب کاربری‌تان فعال شده و می‌توانید به امکانات آموزشی دسترسی پیدا کنید."
  },
  {
    question: "هزینه استفاده از پرسینو چقدر است؟",
    answer: (
      <>
        پرسینو دارای پلن‌های متنوعی است که هرکدام متناسب با نیاز کاربران طراحی شده‌اند. این پلن‌ها شامل طرح‌های ماهانه، سه‌ماهه و سالانه هستند و امکانات مختلفی را پوشش می‌دهند. برای مشاهده جزئیات و انتخاب پلن مناسب خود، به صفحه{" "}
        <a href="\pricing" className="link-style" target="_blank" rel="noopener noreferrer">تعرفه‌ها</a>
        {" "}مراجعه نمایید.
      </>
    )
  },
  {
    question: "آیا می‌توانم از پرسینو به صورت رایگان استفاده کنم؟",
    answer: "بله، پرسینو یک دوره آزمایشی رایگان ارائه می‌دهد که در آن می‌توانید از امکانات پایه‌ای پلتفرم استفاده کرده و با محیط آموزشی آن آشنا شوید. این دوره برای اطمینان از کیفیت خدمات پیش از خرید اشتراک طراحی شده است."
  },
  {
    question: "پشتیبانی پرسینو به چه صورت است؟",
    answer: "پشتیبانی در پرسینو به صورت ۲۴ ساعته و ۷ روز هفته در دسترس است. کاربران می‌توانند از طریق چت آنلاین، ایمیل یا تماس تلفنی سوالات خود را مطرح کرده و پاسخ‌های دقیق و سریع دریافت کنند. تیم پشتیبانی ما همیشه آماده کمک‌رسانی است."
  },
  {
    question: "آیا محتوای پرسینو با کنکور سراسری هماهنگ است؟",
    answer: "بله، تمامی محتوای آموزشی پرسینو بر اساس آخرین تغییرات کتاب‌های درسی و سرفصل‌های رسمی کنکور سراسری طراحی و به‌روزرسانی می‌شود. این هماهنگی تضمین می‌کند که دانش‌آموزان بتوانند آمادگی کامل برای شرکت در کنکور را به‌دست آورند."
  },
  {
    question: "چگونه می‌توانم پیشرفت خود را پیگیری کنم؟",
    answer: "در پنل کاربری پرسینو، داشبوردی جامع وجود دارد که شامل نمودارها و گزارش‌های پیشرفت تحصیلی شماست. این داشبورد میزان مطالعه، عملکرد در آزمون‌ها، نقاط قوت و ضعف و میزان تحقق اهداف مطالعاتی را به‌صورت تصویری و قابل‌فهم نمایش می‌دهد."
  },
  {
    question: "آیا امکان مشاوره تحصیلی وجود دارد؟",
    answer: "بله، پرسینو خدمات مشاوره تحصیلی را توسط مشاوران مجرب ارائه می‌دهد. این خدمات شامل برنامه‌ریزی درسی، راهنمایی برای انتخاب رشته، تحلیل عملکرد و ارائه راهکارهای بهبود یادگیری می‌باشد. مشاوره‌ها به‌صورت آنلاین و قابل رزرو از طریق پنل کاربری هستند."
  },
  {
    question: "نحوه دسترسی به منابع آموزشی چگونه است؟",
    answer: "تمامی منابع آموزشی پرسینو اعم از ویدیوهای آموزشی، جزوه‌ها، تمرین‌ها و آزمون‌ها از طریق پنل کاربری قابل دسترسی هستند. کافیست وارد حساب کاربری خود شوید و در بخش مربوطه منابع موردنظر را مشاهده یا دانلود نمایید."
  },
  {
    question: "آیا امکان دانلود محتوا برای مطالعه آفلاین وجود دارد؟",
    answer: "بله، بسیاری از محتواهای آموزشی پرسینو (از جمله ویدیوها و جزوات) قابلیت دانلود دارند. این ویژگی به شما این امکان را می‌دهد که حتی در مواقعی که به اینترنت دسترسی ندارید، بتوانید به مطالعه خود ادامه دهید."
  },
  {
    question: "برنامه مطالعاتی چگونه تنظیم می‌شود؟",
    answer: "پرسینو با در نظر گرفتن سطح فعلی شما، اهداف تحصیلی و میزان زمان در دسترس، یک برنامه مطالعاتی هوشمند و شخصی‌سازی‌شده ارائه می‌دهد. این برنامه قابل انعطاف است و می‌توانید آن را متناسب با نیازهای خود تنظیم کنید."
  },
  {
    question: "آیا امکان یادگیری گروهی وجود دارد؟",
    answer: "بله، پرسینو بسترهایی برای یادگیری گروهی فراهم کرده است. از جمله گروه‌های درسی، تالارهای گفتگو و چت‌های گروهی که در آن‌ها می‌توانید با سایر دانش‌آموزان تعامل داشته باشید، سوالات خود را مطرح کنید و از تجربیات دیگران بهره ببرید."
  },
  {
    question: "چگونه می‌توانم اشکالات درسی خود را برطرف کنم؟",
    answer: "پرسینو دارای سیستم پرسش و پاسخ هوشمند است که به شما این امکان را می‌دهد تا سوالات خود را مطرح کرده و در کوتاه‌ترین زمان پاسخ دریافت کنید. همچنین می‌توانید در کلاس‌های آنلاین رفع اشکال که توسط دبیران مجرب برگزار می‌شود شرکت کنید."
  },
  {
    question: "آیا آزمون‌های آزمایشی برگزار می‌شود؟",
    answer: "بله، در پرسینو آزمون‌های آزمایشی استاندارد به صورت منظم برگزار می‌شوند. این آزمون‌ها به شما کمک می‌کنند تا آمادگی خود را برای امتحانات واقعی بسنجید و نقاط ضعف خود را شناسایی و تقویت کنید."
  },
  {
    question: "نحوه ارتباط با پشتیبانی چگونه است؟",
    answer: "برای ارتباط با پشتیبانی می‌توانید از روش‌های مختلفی مانند چت آنلاین در سایت، ارسال تیکت، ایمیل یا تماس تلفنی استفاده کنید. تیم پشتیبانی ما در تمام روزهای هفته پاسخگوی نیازهای شماست."
  },
  {
    question: "آیا امکان لغو اشتراک وجود دارد؟",
    answer: "بله، در هر زمان می‌توانید اشتراک خود را لغو کنید. فرآیند لغو اشتراک به سادگی از طریق پنل کاربری قابل انجام است و در صورت نیاز، تیم پشتیبانی نیز راهنمایی‌های لازم را ارائه خواهد داد."
  },
  {
    question: "محتوای آموزشی چقدر به‌روز است؟",
    answer: "محتوای آموزشی پرسینو به طور منظم بررسی و به‌روزرسانی می‌شود تا با آخرین تغییرات کتب درسی، کنکور سراسری و روش‌های نوین آموزشی هماهنگ باشد. این به‌روزرسانی مداوم، کیفیت و اثربخشی یادگیری را تضمین می‌کند."
  },
  {
    question: "آیا گزارش عملکرد به والدین ارائه می‌شود؟",
    answer: "بله، والدین می‌توانند با ساخت حساب کاربری مخصوص والدین، عملکرد و پیشرفت تحصیلی فرزند خود را در قالب گزارش‌های دقیق مشاهده کنند. این قابلیت به والدین کمک می‌کند تا در مسیر تحصیلی فرزندشان مشارکت فعال‌تری داشته باشند."
  },
  {
    question: "امنیت اطلاعات کاربران چگونه تضمین می‌شود؟",
    answer: "پرسینو از پیشرفته‌ترین فناوری‌های رمزنگاری و امنیت سایبری استفاده می‌کند تا اطلاعات شخصی و تحصیلی کاربران در بالاترین سطح محافظت شود. همچنین دسترسی به داده‌ها فقط برای افراد مجاز و از طریق پروتکل‌های امن امکان‌پذیر است."
  },
  {
    question: "آیا امکان استفاده از چند دستگاه وجود دارد؟",
    answer: "بله، شما می‌توانید از هر دستگاهی اعم از گوشی، تبلت یا کامپیوتر وارد حساب کاربری خود شوید و یادگیری را ادامه دهید. همگام‌سازی اطلاعات بین دستگاه‌ها به‌صورت خودکار انجام می‌شود تا تجربه‌ای یکپارچه داشته باشید."
  }
  
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  
    const filtered = faqs.filter(faq => {
      const question = typeof faq.question === 'string' ? faq.question : '';
      const answer = typeof faq.answer === 'string' ? faq.answer : '';
  
      return (
        question.toLowerCase().includes(value.toLowerCase()) ||
        answer.toLowerCase().includes(value.toLowerCase())
      );
    });
  
    setFilteredFaqs(filtered);
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/assets/Log2.png"
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
                  <AccordionTrigger className="text-right font-bold px-6 py-4 hover:bg-gray-50 transition-colors text-black">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-right px-6 py-4 bg-gray-50 text-gray-800">
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
            <h2 className="text-2xl font-bold mb-2 text-centered">❝ جواب سوالت را پیدا نکردی؟ ❞</h2>
            <p className="text-white/90 text-centered">❝ فرم تماس با ما را تکمیل کنید تا پشتیبانی جواب بدهد. ❞</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}