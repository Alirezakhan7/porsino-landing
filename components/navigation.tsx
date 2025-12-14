"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Brain, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const routes = [
  { name: "خانه", path: "/" },
  { name: "وبلاگ", path: "/blog" },
  { name: "سوالات متداول", path: "/faq" },
  { name: "تعرفه‌ها", path: "/pricing" },
  { name: "ارتباط با ما", path: "/contact" },
  { name: "درباره ما", path: "/about" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full px-2 sm:px-4 pt-2 sm:pt-4">
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
              <Link
                href="/"
                className="flex items-center space-x-2 space-x-reverse group"
              >
                <Image
                  src="/assets/logo.png"
                  alt="Porsino Logo"
                  width={40}
                  height={40}
                  className="transition-colors duration-200 group-hover:brightness-110"
                />
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
                    "relative py-2 text-sm font-medium transition-colors duration-200 group",
                    pathname === route.path
                      ? "text-[#9B9B9B]"
                      : "text-[#9B9B9B] hover:text-[#46988F]"
                  )}
                >
                  {route.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 w-0 bg-[#46988F] transition-all duration-300",
                      pathname === route.path ? "w-full" : "group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://chat.porsino.org/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-200 text-sm text-black text-center px-4 py-2 rounded-lg hover:bg-black/10 transition"
                >
                  ورود
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://chat.porsino.org/login?mode=signup
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#46988F] hover:bg-[#5AB5AC] text-white text-sm text-center py-2 px-4 rounded-lg transition"
                >
                  ثبت نام
                </a>
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
                    "block py-2 text-sm font-medium transition-colors duration-200",
                    pathname === route.path
                      ? "text-[#9B9B9B]"
                      : "text-[#9B9B9B] hover:text-[#46988F]"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-[#46988F]/10">
                <a
                  href="https://chat.porsino.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-black text-black hover:bg-black/10"
                  >
                    ورود
                  </Button>
                </a>
                <a
                  href="https://chat.porsino.org/login?mode=signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimatedButton className="w-full bg-[#46988F] hover:bg-[#5AB5AC] text-white">
                    ثبت نام
                  </AnimatedButton>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
}
