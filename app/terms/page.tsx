"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookCheck, UserX, FileWarning, Lock, AlertTriangle, BadgeCheck } from "lucide-react";
import CtaSection from "@/components/home/Section";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[320px] overflow-hidden">
        <Image
          src="/assets/Log2.png"
          alt="قوانین و مقررات پرسینو"
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">قوانین و مقررات استفاده</h1>
              <p className="text-lg text-white/90">
                مطالعه دقیق این شرایط برای استفاده از خدمات پرسینو الزامی است.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">

          {/* مقدمه */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <BookCheck className="text-primary" size={32} />
              <h2 className="text-2xl font-bold text-gray-800">مقدمه</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              این سند، شرایط و مقررات استفاده از سامانه هوش مصنوعی پرسینو را تعیین می‌کند. استفاده از هر یک از خدمات این سامانه به منزله پذیرش کامل این شرایط است. در صورت عدم موافقت با هر بخش از این شرایط، از ادامه استفاده از خدمات خودداری فرمایید. سیاست حفظ حریم خصوصی نیز بخشی جدایی‌ناپذیر از این مقررات است.
            </p>
          </motion.div>

          {/* ثبت‌نام و حساب کاربری */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <BadgeCheck className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">ثبت‌نام و حساب کاربری</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              ثبت‌نام و استفاده از پرسینو برای همه دانش‌آموزان از سن ۱۲ سال به بالا مجاز است. کاربران زیر ۱۸ سال باید با اطلاع و اجازه والدین یا سرپرست قانونی خود ثبت‌نام نمایند. ثبت‌نام منوط به ارائه نام و نام خانوادگی و نشانی ایمیل معتبر است. کاربران مسئول حفظ محرمانگی حساب کاربری و تمامی فعالیت‌های انجام شده با حساب خود هستند و نباید اطلاعات ورود یا دسترسی به حساب را در اختیار اشخاص ثالث قرار دهند.
            </p>
          </motion.div>

          {/* حذف حساب کاربری */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <UserX className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">حذف حساب کاربری</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              کاربر می‌تواند در هر زمان با ارسال درخواست به پشتیبانی، نسبت به حذف حساب کاربری و اطلاعات خود اقدام نماید. پس از حذف حساب، دسترسی کاربر به خدمات و داده‌های مربوطه قطع خواهد شد.
            </p>
          </motion.div>

          {/* مالکیت و استفاده از محتوا */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <FileWarning className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">مالکیت و استفاده از محتوا</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              کلیه محتوای تولیدشده توسط کاربر، اعم از پرسش‌ها، فایل‌ها یا مکالمات با هوش مصنوعی، متعلق به خود کاربر است و وی مجاز به استفاده از آن برای هر هدفی (از جمله مقاصد تجاری یا انتشار) می‌باشد، مشروط به رعایت قوانین و مقررات جاری و عدم نقض حقوق اشخاص ثالث، مالکیت فکری یا قوانین کپی‌رایت. پرسینو تنها به منظور ارائه و ارتقای خدمات و براساس سیاست‌های خود، از این محتوا بهره‌برداری می‌نماید.
            </p>
          </motion.div>

          {/* دقت و صحت محتوا */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">دقت و صحت پاسخ‌ها</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              پاسخ‌های ارائه‌شده توسط دستیار هوش مصنوعی بر پایه مدل‌های یادگیری ماشین بوده و ممکن است همواره دقیق، کامل یا عاری از خطا نباشد. کاربران موظف هستند پیش از هرگونه استفاده، صحت و کاربرد پاسخ‌ها را مطابق نیاز خود ارزیابی نمایند. مسئولیت نهایی صحت و استفاده از خروجی‌ها با کاربر است.
            </p>
          </motion.div>

          {/* نقض قوانین و تعلیق حساب */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Lock className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">نقض مقررات و تعلیق حساب</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              در صورت نقض هر یک از مقررات این سند، ارسال محتوای غیرمجاز، نقض حقوق دیگران یا تهدید امنیت سامانه، پرسینو حق تعلیق یا حذف حساب کاربر را بدون اطلاع قبلی برای خود محفوظ می‌داند. مسئولیت تمامی عواقب ناشی از نقض قوانین بر عهده کاربر است.
            </p>
          </motion.div>

          {/* سلب مسئولیت و محدودیت مسئولیت */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">سلب مسئولیت و محدودیت مسئولیت</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              خدمات پرسینو “همان‌گونه که هست” ارائه می‌شود و هیچ‌گونه ضمانت صریح یا ضمنی در خصوص عملکرد بدون خطا، صحت، یا دسترسی مداوم به خدمات وجود ندارد. در صورت بروز هرگونه مشکل فنی، قطعی سرویس، یا از دست رفتن داده‌ها، مسئولیت پرسینو صرفاً تا سقف مبالغ پرداختی کاربر در دوره مربوطه محدود خواهد بود. پرسینو هیچ‌گونه مسئولیت غیرمستقیم، تبعی یا اتفاقی نسبت به خسارات احتمالی کاربر نخواهد داشت.
            </p>
          </motion.div>

          {/* به‌روزرسانی مقررات */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <BookCheck className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">تغییرات و به‌روزرسانی</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              پرسینو حق تغییر یا به‌روزرسانی این شرایط را در هر زمان برای خود محفوظ می‌داند. هرگونه تغییر مهم از طریق سایت یا ایمیل به کاربران اطلاع‌رسانی خواهد شد. استفاده مستمر از خدمات پس از اعمال تغییرات به منزله پذیرش شرایط جدید خواهد بود.
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
