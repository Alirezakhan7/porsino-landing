'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaTelegramPlane, FaInstagram } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('لطفاً تمام فیلدها را پر کنید');
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('پیام شما با موفقیت ارسال شد');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('خطا در ارسال پیام. لطفاً دوباره تلاش کنید');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      {/* Hero Section (تمام‌عرض) */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/assets/Log2.png"
          alt="تیم پشتیبانی"
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
                تماس با ما
              </h1>
              <p className="text-xl text-white/90">
                سوالات خود را ابتدا در بخش سوالات متداول جستجو کنید. در صورت نیاز، فرم زیر را پر کنید تا با پشتیبانی در تماس باشید.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">راه‌های ارتباطی</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Mail className="h-5 w-5 text-[#46988F]" />
                  <span>support@porsino.org</span>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Phone className="h-5 w-5 text-[#46988F]" />
                  <span>0910-6968873</span>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <MapPin className="h-5 w-5 text-[#46988F]" />
                  <span>تهران</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-sm text-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-600">راه‌های ارتباط با ما</h2>
            <p className="text-gray-600 mb-8 text-sm">
              در حال حاضر از طریق شبکه‌های اجتماعی پاسخ‌گو هستیم. برای ارتباط سریع با تیم پشتیبانی، روی یکی از گزینه‌های زیر کلیک کنید:
            </p>

            <div className="flex flex-col gap-4 items-center">
              <motion.a
                href="https://t.me/porsinoai"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full max-w-sm rounded-full bg-[#0088cc] hover:bg-[#007ab8] text-white py-3 text-lg transition"
              >
                <FaTelegramPlane className="text-xl" />
                ارتباط از طریق تلگرام
              </motion.a>

              <motion.a
                href="https://instagram.com/porsinoai"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full max-w-sm rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white py-3 text-lg transition"
              >
                <FaInstagram className="text-xl" />
                پیام در اینستاگرام
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
