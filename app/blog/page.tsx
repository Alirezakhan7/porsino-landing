'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Clock, User, Tag } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  featured_image: string;
  author: string;
  published_at: string;
  reading_time: string;
  category: string;
  slug: string;
}

const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'چگونه برای کنکور برنامه‌ریزی کنیم؟',
    excerpt: 'راهنمای جامع برنامه‌ریزی اصولی برای موفقیت در کنکور سراسری با استفاده از تکنیک‌های نوین مطالعه و مدیریت زمان...',
    featured_image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    author: 'مهندس علیرضا ثابتی',
    published_at: '1403/01/15',
    reading_time: '8 دقیقه',
    category: 'برنامه‌ریزی درسی',
    slug: 'how-to-plan-for-konkur'
  },
  {
    id: '2',
    title: 'تکنیک‌های مطالعه مؤثر در دروس تخصصی',
    excerpt: 'بررسی روش‌های کاربردی برای یادگیری عمیق و ماندگار دروس تخصصی با تمرکز بر نکات کلیدی و تست‌زنی اصولی...',
    featured_image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0',
    author: 'مهندس علیرضا ثابتی',
    published_at: '1403/01/10',
    reading_time: '12 دقیقه',
    category: 'روش مطالعه',
    slug: 'effective-study-techniques'
  },
  {
    id: '3',
    title: 'مدیریت استرس در دوران کنکور',
    excerpt: 'راهکارهای عملی برای کنترل استرس و حفظ تعادل روحی در دوران پرفشار آمادگی برای کنکور سراسری...',
    featured_image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
    author: 'مهندس علیرضا ثابتی',
    published_at: '1403/01/05',
    reading_time: '6 دقیقه',
    category: 'سلامت روان',
    slug: 'stress-management-konkur'
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>(samplePosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32"
          alt="وبلاگ پرسینو"
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
                وبلاگ پرسینو
              </h1>
              <p className="text-xl text-white/90">
                آخرین مقالات و راهنمایی‌های تحصیلی
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="جستجو در مقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 text-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.featured_image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 space-x-reverse mb-4">
                      <Tag className="h-4 w-4 text-[#46988F]" />
                      <span className="text-sm text-[#46988F]">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Calendar className="h-4 w-4" />
                          <span>{post.published_at}</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Clock className="h-4 w-4" />
                          <span>{post.reading_time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}