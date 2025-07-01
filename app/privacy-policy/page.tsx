"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CtaSection from "@/components/Section";
import { ShieldCheck, Lock, UserCheck, Mail, FileText, AlertCircle } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[380px] overflow-hidden">
        <Image
          src="/assets/Log2.png"
          alt="حریم خصوصی پرسینو"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">سیاست حفظ حریم خصوصی</h1>
              <p className="text-lg text-white/90">
                در پرسینو، امنیت و حریم خصوصی شما، اولویت ماست.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          {/* مقدمه */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="text-primary" size={32} />
              <h2 className="text-2xl font-bold text-gray-800">مقدمه</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              ما در پرسینو خود را متعهد می‌دانیم که از اطلاعات شخصی کاربرانمان محافظت کنیم و به حقوق و حریم خصوصی دانش‌آموزان و خانواده‌های آن‌ها احترام بگذاریم. این صفحه توضیح می‌دهد چه اطلاعاتی از شما جمع‌آوری می‌شود، چگونه از آن‌ها استفاده می‌کنیم و اقدامات امنیتی ما برای حفاظت از داده‌ها چیست.
            </p>
          </motion.div>

          {/* جمع‌آوری و استفاده از اطلاعات */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <UserCheck className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">جمع‌آوری و استفاده از اطلاعات</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              هنگام ثبت‌نام یا استفاده از خدمات پرسینو، اطلاعاتی مانند نام و نام خانوادگی و نشانی ایمیل شما دریافت می‌شود. این اطلاعات فقط برای ایجاد حساب کاربری، ارائه خدمات آموزشی، اطلاع‌رسانی درباره وضعیت اشتراک و ارسال پیشنهادها و آفرهای ویژه از طریق ایمیل به کار می‌رود.
              فرآیند پرداخت کاملاً خارج از سایت پرسینو و از طریق درگاه بانکی رسمی انجام می‌شود؛ بنابراین هیچ اطلاعات بانکی یا مالی در سرورهای ما ذخیره نمی‌شود.
            </p>
          </motion.div>

          {/* عدم اشتراک‌گذاری */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Lock className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">عدم اشتراک‌گذاری داده‌ها</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              اطلاعات شخصی کاربران فقط برای اهداف اعلام‌شده استفاده می‌شود و با هیچ فرد، شرکت یا وب‌سایت دیگری به اشتراک گذاشته نخواهد شد.
              همچنین فایل‌ها یا اطلاعاتی که کاربران بارگذاری می‌کنند، فقط برای ارائه خدمات آموزشی یا پشتیبانی بررسی می‌شود و هیچ بهره‌برداری دیگری از آن‌ها صورت نمی‌گیرد.
            </p>
          </motion.div>

          {/* کوکی‌ها و داده‌های فنی */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <FileText className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">کوکی‌ها و داده‌های فنی</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              سایت پرسینو برای بهبود کیفیت تجربه کاربران، استفاده از کوکی‌ها را به شکل استاندارد انجام می‌دهد. این کوکی‌ها صرفاً برای ذخیره وضعیت ورود، شخصی‌سازی تنظیمات و تحلیل بازدید استفاده می‌شوند و حاوی اطلاعات حساس نیستند.
            </p>
          </motion.div>

          {/* امنیت اطلاعات */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">امنیت داده‌ها</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              پرسینو از فناوری‌های به‌روز رمزنگاری و ذخیره‌سازی ایمن برای محافظت از داده‌های شما استفاده می‌کند. همچنین به صورت منظم نسخه پشتیبان تهیه می‌شود تا امنیت و سلامت اطلاعات تضمین گردد.
            </p>
          </motion.div>

          {/* دسترسی، ویرایش و حذف */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Mail className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">ویرایش و حذف اطلاعات</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              کاربران می‌توانند اطلاعات خود را در پروفایل شخصی ویرایش کنند. در صورت تمایل به حذف حساب یا داده‌های خود، کافیست از طریق ایمیل یا پشتیبانی تلگرام با ما در ارتباط باشند تا درخواست‌شان بررسی و اجرا شود.
            </p>
          </motion.div>

          {/* محتوای سایر سایت‌ها */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <FileText className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">محتوای سایر سایت‌ها</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              ممکن است بخشی از محتوای آموزشی (مانند ویدیو یا مقاله) از سایت‌های دیگر در پرسینو نمایش داده شود. داده‌های مربوط به این محتواها مطابق سیاست حریم خصوصی آن سایت‌ها مدیریت خواهد شد.
            </p>
          </motion.div>

          {/* تغییرات و تماس */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Mail className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">به‌روزرسانی و تماس</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              در صورت هرگونه تغییر اساسی در این سیاست، کاربران از طریق سایت یا ایمیل مطلع خواهند شد. برای پرسش، پیشنهاد یا درخواست حذف اطلاعات، لطفاً از طریق ایمیل یا پشتیبانی تلگرام با ما در ارتباط باشید.<br />
              <span className="font-semibold">ایمیل:</span> Support@Porsino.org<br />
              <span className="font-semibold">تلگرام پشتیبانی:</span> Porsino_Support@
            </p>
            <div className="text-gray-500 text-sm mt-4">تاریخ آخرین به‌روزرسانی: تیر ۱۴۰۳</div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container mx-auto px-6">
          <CtaSection />
        </div>
      </section>
    </div>
  );
}
