'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

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
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative h-[300px] rounded-2xl overflow-hidden mb-8">
            <Image
              src="/assets/Log2.png"
              alt="تیم پشتیبانی"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl text-center font-bold mb-4">تماس با ما</h1>
              <p className="max-w-2xl mx-auto">
                سوالات خود را ابتدا در بخش سوالات متداول جستجو کنید. در صورت نیاز، فرم زیر را پر کنید تا با پشتیبانی در تماس باشید.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">راه‌های ارتباطی</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Mail className="h-5 w-5 text-[#46988F]" />
                  <span>support@porsinoai.ir</span>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Phone className="h-5 w-5 text-[#46988F]" />
                  <span>0912-7842361</span>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <MapPin className="h-5 w-5 text-[#46988F]" />
                  <span>تهران</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">فرم تماس</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">نام</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="text-right"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">ایمیل</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="text-right"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">موضوع</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="text-right"
                    placeholder="موضوع پیام خود را وارد کنید"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">پیام</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="text-right min-h-[150px]"
                    placeholder="پیام خود را اینجا بنویسید"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#46988F] hover:bg-[#5AB5AC] text-white py-6"
                >
                  ارسال پیام
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}