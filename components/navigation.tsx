'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Brain, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const routes = [
  { name: 'خانه', path: '/' },
  { name: 'وبلاگ', path: '/blog' },
  { name: 'سوالات متداول', path: '/faq' },
  { name: 'تعرفه‌ها', path: '/pricing' },
  { name: 'ارتباط با ما', path: '/contact' },
  { name: 'درباره ما', path: '/about' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 px-4 pt-4 z-50">
      <nav
        className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-[#46988F]/10"
        dir="rtl"
      >
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/" className="flex items-center space-x-2 space-x-reverse group">
                <Brain className="h-8 w-8 text-[#46988F] transition-colors duration-200 group-hover:text-[#5AB5AC]" />
                <span className="text-xl font-bold text-[#9B9B9B]">پرسینو</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    'relative py-2 text-sm font-medium transition-colors duration-200 group',
                    pathname === route.path
                      ? 'text-[#9B9B9B]'
                      : 'text-[#9B9B9B] hover:text-[#46988F]'
                  )}
                >
                  {route.name}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-0.5 w-0 bg-[#46988F] transition-all duration-300',
                      pathname === route.path ? 'w-full' : 'group-hover:w-full'
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black/10"
                >
                  ورود
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <AnimatedButton className="bg-[#46988F] hover:bg-[#5AB5AC] text-white">
                  ثبت نام
                </AnimatedButton>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#9B9B9B]"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-[#46988F]/10 bg-white rounded-b-xl"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    'block py-2 text-sm font-medium transition-colors duration-200',
                    pathname === route.path
                      ? 'text-[#9B9B9B]'
                      : 'text-[#9B9B9B] hover:text-[#46988F]'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-[#46988F]/10">
                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black/10"
                >
                  ورود
                </Button>
                <AnimatedButton className="w-full bg-[#46988F] hover:bg-[#5AB5AC] text-white">
                  ثبت نام
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
}