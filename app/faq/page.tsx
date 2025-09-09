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
    answer: "پرسینو یک پلتفرم هوش مصنوعی کنکوری است که به عنوان دستیار شخصی درسی به دانش‌آموزان کمک می‌کند. این سامانه با تحلیل سطح علمی، نقاط ضعف و سبک یادگیری هر دانش‌آموز، پاسخ‌های دقیق ارائه می‌دهد، نمونه سوال می‌سازد، برنامه‌ریزی درسی می‌کند و آموزش‌های گام‌به‌گام را در اختیار قرار می‌دهد.تمامی جواب هایی که پرسینو میده بر اساس متن کتاب و پاسخ تست های کنکور سال های پیش هست که این دلیلیه که پرسینو رو از برنامه های هوش مصنوعی دیگه متمایز میکنه و باعث میشه که شما با خیال راحت ازش استفاده کنید.",
  },
  {
    question: "چگونه می‌توانم در پرسینو ثبت‌نام کنم؟",
    answer: "برای ثبت‌نام در پرسینو، کافیست وارد وب‌سایت شوید و روی دکمه 'ثبت‌نام' کلیک کنید. سپس اطلاعات اولیه مانند ایمیل و رمز عبور را وارد کرده و منتظر دریافت ایمیل تأیید بمانید. با تأیید ایمیل، حساب کاربری شما فعال می‌شود و می‌توانید به تمام امکانات آموزشی پرسینو دسترسی داشته باشید."
  },
  {
    question: "هزینه استفاده از پرسینو چقدر است؟",
    answer: (
      <>
        پرسینو دارای پلن‌های متنوع ماهانه است که متناسب با نیاز کاربران طراحی شده‌اند. این پلن‌ها امکانات مختلفی را پوشش می‌دهند، از دستیار هوش مصنوعی تا طراحی برنامه درسی و حل سوالات در لحظه. برای مشاهده جزئیات و انتخاب پلن مناسب خود، به صفحه{" "}
        <a href="\pricing" className="link-style" target="_blank" rel="noopener noreferrer">تعرفه‌ها</a>{" "}مراجعه نمایید.
      </>
    )
  },
    {
    question: "پرسینو چه درس‌هایی را پشتیبانی می‌کند؟",
    answer: "در حال حاضر، هوش مصنوعی پرسینو به طور تخصصی و کامل بر روی درس زیست‌شناسی تمرکز دارد. ما در آینده قصد داریم درس‌های دیگری را نیز به پلتفرم اضافه کنیم تا یک دستیار جامع آموزشی برای شما فراهم آوریم."
  },
  {
    question: "آیا با خرید اشتراک به تمام درس‌ها دسترسی خواهم داشت؟",
    answer: "خیر، هر درس به صورت جداگانه ارائه و قیمت‌گذاری می‌شود. در حال حاضر شما می‌توانید اشتراک مربوط به درس زیست‌شناسی را تهیه کنید. با اضافه شدن درس‌های جدید در آینده، امکان تهیه اشتراک برای آن‌ها نیز به صورت مجزا فراهم خواهد شد."
  },
  {
    question: "آیا می‌توانم از پرسینو به صورت رایگان استفاده کنم؟",
    answer: "بله، پرسینو یک دوره آزمایشی رایگان ارائه می‌دهد که در آن می‌توانید از امکانات پایه‌ای پلتفرم استفاده کرده و با محیط آموزشی آن آشنا شوید. این دوره برای اطمینان از کیفیت خدمات پیش از خرید اشتراک طراحی شده است."
  },
  {
    question: "پشتیبانی پرسینو به چه صورت است؟",
    answer: "پشتیبانی در پرسینو به‌صورت ۲۴ ساعته و در تمام روزهای هفته فعال است. کاربران می‌توانند از طریق چت آنلاین در سایت، ایمیل یا کانال تلگرام رسمی پرسینو (PorsinoAI@) سوالات خود را مطرح کرده و پاسخ‌های دقیق و سریع دریافت کنند. تیم ما همیشه آماده کمک‌رسانی است."
  },
  {
    question: "آیا محتوای پرسینو با کنکور سراسری هماهنگ است؟",
    answer: "بله، تمامی محتوای آموزشی پرسینو بر اساس آخرین تغییرات کتاب‌های درسی و سرفصل‌های رسمی کنکور سراسری طراحی و به‌روزرسانی می‌شود. این هماهنگی تضمین می‌کند که دانش‌آموزان بتوانند آمادگی کامل برای شرکت در کنکور را به‌دست آورند."
  },
  {
    question: "آیا امکان مشاوره تحصیلی وجود دارد؟",
    answer: "پرسینو خدمات مشاوره تحصیلی را با استفاده از هوش مصنوعی ارائه می‌دهد. به‌جای مشاور انسانی، شما می‌توانید با هوش مصنوعی پرسینو گفتگو کنید تا برایتان برنامه درسی شخصی‌سازی‌شده طراحی کند، راهکارهایی برای بهبود یادگیری ارائه دهد و به سؤالات درسی‌تان پاسخ دهد. این سیستم همیشه در دسترس شماست و به‌مرور هوشمندتر می‌شود."
  },
  {
    question: "چگونه می‌توانم اشکالات درسی خود را برطرف کنم؟",
    answer: "با استفاده از «پرسینو پلاس» می‌توانید آموزش گام‌به‌گام هر موضوع را دریافت کرده و مفاهیم را بهتر یاد بگیرید. همچنین می‌توانید هر سوالی که دارید را از هوش مصنوعی بپرسید و در کوتاه‌ترین زمان پاسخ دقیق بگیرید."
  },
  {
    question: "نحوه ارتباط با پشتیبانی چگونه است؟",
    answer: "برای ارتباط با پشتیبانی می‌توانید از طریق ارسال ایمیل یا عضویت در کانال تلگرام رسمی پرسینو اقدام کنید. تیم پشتیبانی همواره تلاش می‌کند در سریع‌ترین زمان به شما پاسخ دهد."
  },
  {
    question: "محتوای آموزشی چقدر به‌روز است؟",
    answer: "محتوای آموزشی پرسینو به طور منظم بررسی و به‌روزرسانی می‌شود تا با آخرین تغییرات کتب درسی، کنکور سراسری و روش‌های نوین آموزشی هماهنگ باشد. این به‌روزرسانی مداوم، کیفیت و اثربخشی یادگیری را تضمین می‌کند."
  },
  {
    question: "آیا گزارش عملکرد به والدین ارائه می‌شود؟",
    answer: "در حال حاضر این قابلیت فعال نیست، اما به‌زودی امکان ساخت حساب والدین و مشاهده گزارش‌های پیشرفت تحصیلی فرزندان به پلتفرم اضافه خواهد شد."
  },
  {
    question: "امنیت اطلاعات کاربران چگونه تضمین می‌شود؟",
    answer: "پرسینو از پیشرفته‌ترین فناوری‌های رمزنگاری و امنیت سایبری استفاده می‌کند تا اطلاعات شخصی و تحصیلی کاربران در بالاترین سطح محافظت شود. همچنین دسترسی به داده‌ها فقط برای افراد مجاز و از طریق پروتکل‌های امن امکان‌پذیر است."
  },
  {
    question: "آیا امکان استفاده از چند دستگاه وجود دارد؟",
    answer: "بله، شما می‌توانید از هر دستگاهی اعم از گوشی، تبلت یا کامپیوتر وارد حساب کاربری خود شوید و یادگیری را ادامه دهید. همگام‌سازی اطلاعات بین دستگاه‌ها به‌صورت خودکار انجام می‌شود تا تجربه‌ای یکپارچه داشته باشید."
  },
  {
    question: "در هر ماه چند سوال می‌توانم از پرسینو بپرسم؟",
    answer: "پرسینو از سیاست مصرف منصفانه استفاده می‌کند. یعنی هر کاربر در ماه مقدار مشخصی توکن دارد که برای پرسیدن سوال، دریافت آموزش گام‌به‌گام، تحلیل پاسخ‌ها و سایر تعاملات مصرف می‌شود. این مقدار توکن به‌گونه‌ای طراحی شده که برای نیازهای طبیعی و آموزشی یک دانش‌آموز کافی باشد. اگر مصرف شما بیشتر از حد معمول باشد، ممکن است سیستم به‌صورت خودکار محدودیت‌هایی اعمال کند. با ارتقاء پلن، امکان دریافت توکن بیشتر نیز فراهم است."
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
            <h2 className="text-2xl font-bold mb-2 text-center">❝ جواب سوالت را پیدا نکردی؟ ❞</h2>
            <p className="text-white/90 text-center">❝ فرم تماس با ما را تکمیل کنید تا پشتیبانی جواب بدهد. ❞</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}