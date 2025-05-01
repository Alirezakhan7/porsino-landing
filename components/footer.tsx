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
  { name: 'محصولات', href: '/products' },
  { name: 'راهنمای کاربران', href: '/guide' },
  { name: 'سوالات متداول', href: '/faq' },
  { name: 'حریم خصوصی', href: '/privacy' },
];

const termsLinks = [
  { name: 'قوانین و مقررات', href: '/terms' },
  { name: 'وضعیت سرویس', href: '/status' },
  { name: 'تماس با ما', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#46988F] text-white" dir="rtl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Brand and Social */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Brain className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">پرسینو</span>
            </div>
            <p className="text-white/90">SUPPORT@PORSINOAI.IR</p>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">شبکه‌های اجتماعی</h3>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
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
            <h3 className="text-lg font-semibold text-white mb-4">راهنما</h3>
            <ul className="space-y-3">
              {guideLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Terms & Conditions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">قوانین و مقررات</h3>
            <ul className="space-y-3">
              {termsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/80 text-sm">
            © {new Date().getFullYear()} پرسینو. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}