'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin, GitBranch, Brain } from 'lucide-react';

const socialLinks = [
  { icon: GitBranch, href: 'https://t.me/PORSINOAI', label: 'تلگرام' },
  { icon: Instagram, href: 'https://instagram.com/PORSINOAI', label: 'اینستاگرام' },
  { icon: Twitter, href: 'https://twitter.com/PORSINOAI', label: 'توییتر' },
  { icon: Linkedin, href: 'https://linkedin.com/company/PORSINOAI', label: 'لینکدین' },
];

const guideLinks = [
  { name: 'تعرفه ها', href: '/pricing' },
  { name: 'سوالات متداول', href: '/faq' },
  { name: 'حریم خصوصی', href: '/privacy-policy' },
];

const termsLinks = [
  { name: 'قوانین و مقررات', href: '/terms' },
  { name: 'تماس با ما', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#46988F] text-white" dir="rtl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1 - Brand and Social */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Brain className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">پرسینو</span>
            </div>

            {/* ایمیل: به جای text-white/90 از متن غیرشفاف استفاده شد */}
            <p className="text-gray-100 font-medium">SUPPORT@PORSINOAI.IR</p>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">شبکه‌های اجتماعی</h3>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    // به جای text-white/80 از رنگ روشنِ غیرشفاف استفاده شد
                    className="text-gray-100 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 - Guide */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">راهنما</h3>
            <ul className="space-y-3">
              {guideLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    // به جای text-white/80 از رنگ روشنِ غیرشفاف استفاده شد
                    className="text-gray-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Terms & Enamad */}
          <div className="flex flex-col items-start gap-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">قوانین و مقررات</h3>
              <ul className="space-y-3">
                {termsLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      // به جای text-white/80 از رنگ روشنِ غیرشفاف استفاده شد
                      className="text-gray-100 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enamad Logo */}
            <div className="mt-4">
              <a
                referrerPolicy="origin"
                target="_blank"
                rel="noopener noreferrer"
                href="https://trustseal.enamad.ir/?id=623859&Code=CsDAreTu1YYwZJ9NpStdzTCH2PsSgs7j"
              >
                <img
                  referrerPolicy="origin"
                  src="https://trustseal.enamad.ir/logo.aspx?id=623859&Code=CsDAreTu1YYwZJ9NpStdzTCH2PsSgs7j"
                  alt="نماد اعتماد الکترونیکی"
                  className="w-24 sm:w-28 md:w-32"
                  style={{ cursor: 'pointer' }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          {/* کپی‌رایت: به جای text-white/80 از رنگ روشنِ غیرشفاف استفاده شد */}
          <p className="text-center text-gray-100 text-sm">
            © {new Date().getFullYear()} پرسینو. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
