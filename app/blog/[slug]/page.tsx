'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { marked } from 'marked';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface BlogPost {
  title: string;
  content: string;
  featured_image: string;
  author: string;
  published_at: string;
  reading_time: string;
  category: string;
}

const samplePost: BlogPost = {
  title: 'چگونه برای کنکور کارشناسی ارشد برنامه‌ریزی کنیم؟',
  content: `
# برنامه‌ریزی اصولی برای کنکور

برنامه‌ریزی صحیح، یکی از مهم‌ترین عوامل موفقیت در کنکور است. در این مقاله، به بررسی اصول اساسی برنامه‌ریزی برای کنکور می‌پردازیم.

## ۱. شناخت وضعیت فعلی

قبل از هر چیز، باید بدانید در چه وضعیتی قرار دارید:
- سطح فعلی شما در هر درس چیست؟
- نقاط قوت و ضعف شما کدامند؟
- چقدر زمان برای مطالعه دارید؟

## ۲. تعیین اهداف

اهداف شما باید SMART باشند:
- Specific (مشخص)
- Measurable (قابل اندازه‌گیری)
- Achievable (قابل دستیابی)
- Relevant (مرتبط)
- Time-bound (زمان‌بندی شده)

## ۳. تقسیم‌بندی زمان

برنامه‌ریزی زمانی باید شامل موارد زیر باشد:
- زمان مطالعه هر درس
- زمان استراحت
- زمان مرور
- زمان تست‌زنی

## ۴. اولویت‌بندی دروس

همه دروس اهمیت یکسانی ندارند:
- دروس با ضریب بالاتر
- دروس با نیاز به تمرین بیشتر
- دروس پایه و پیش‌نیاز

## ۵. انعطاف‌پذیری

برنامه باید قابلیت تغییر داشته باشد:
- شرایط غیرمنتظره
- تغییرات در وضعیت درسی
- نیاز به تمرکز بیشتر روی برخی مباحث

## نتیجه‌گیری

برنامه‌ریزی اصولی، کلید موفقیت در کنکور است. با رعایت اصول ذکر شده و پایبندی به برنامه، می‌توانید به اهداف خود برسید.
`,
  featured_image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
  author: 'دکتر علی محمدی',
  published_at: '1403/01/15',
  reading_time: '8 دقیقه',
  category: 'برنامه‌ریزی درسی'
};

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost>(samplePost);
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    async function parseMarkdown() {
      const html = await marked(post.content);
      setHtmlContent(html);
    }
    parseMarkdown();
  }, [post.content]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src={post.featured_image}
          alt={post.title}
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
              className="max-w-3xl"
            >
              <Link href="/blog">
                <Button
                  variant="ghost"
                  className="text-white mb-6 hover:bg-white/20"
                >
                  <ArrowRight className="h-4 w-4 ml-2" />
                  بازگشت به وبلاگ
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 space-x-reverse text-white/90">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Calendar className="h-5 w-5" />
                  <span>{post.published_at}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Clock className="h-5 w-5" />
                  <span>{post.reading_time}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-2 space-x-reverse mb-8">
                <Tag className="h-5 w-5 text-[#46988F]" />
                <span className="text-[#46988F]">{post.category}</span>
              </div>
              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-[#46988F] prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}