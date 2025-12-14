// src/components/home/HeroSection.tsx
"use client";

import type { Variants } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Client-only: keep behavior identical on desktop, but enable mobile-specific lightening.
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  // --- 1. Animation Variants (Existing) ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0.001,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  // --- 2. Pointer Halo Logic (Framer Motion) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement using springs (Halo effect)
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Create a transform string for the GPU
  const haloTransform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0) translate(-50%, -50%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="hero-section relative overflow-hidden flex flex-col justify-start md:justify-center items-center text-center py-12 md:py-16 lg:py-20 px-4 group"
    >
      {/* --- BACKGROUND LAYERS --- */}

      {/* A. Particle Network Background (Mobile-lightened) */}
      <ParticleBackground />

      {/* B. Pointer Halo Effect */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 z-10 hidden md:block h-96 w-96 rounded-full bg-[#46988F]/15 blur-3xl mix-blend-multiply"
        style={{
          transform: haloTransform,
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      {/* --- FOREGROUND CONTENT (Z-20) --- */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center justify-items-center">
          {/* --- Text Content Column --- */}
          <motion.div
            className="md:col-span-8 space-y-8 mt-10 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 text-center leading-snug">
              {/* Hero Title */}
              <motion.span variants={itemVariants} className="block">
                هوش مصنوعی پرسینو
              </motion.span>

              {/* Hero Subtitle */}
              <motion.span
                variants={itemVariants}
                className="block mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#46988F]"
              >
                زیست‌شناسی را عمیق و آسان یاد بگیر
              </motion.span>
            </h1>

            {/* Hero Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center font-medium"
            >
              دیگر نگران سردرگمی میان جزوه‌ها و کلاس‌های مختلف نباش. پرسینو،
              دستیار هوشمند تو در یادگیری زیست‌شناسی است. هر سوالی داری بپرس،
              مفاهیم را قدم‌به‌قدم یاد بگیر و مطمئن شو که همه‌چیز را واقعاً
              فهمیده‌ای.
            </motion.p>

            {/* Hero Button */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <a
                href="https://chat.porsino.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#46988F] font-bold hover:bg-[#5AB5AC] text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
                >
                  شروع یادگیری
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* --- Image Column --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 relative flex items-center justify-center order-first md:order-last"
          >
            <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[520px] aspect-[3/4] relative">
              <motion.div
                className="relative w-full h-full"
                // Keep the floating effect on mobile, but lighten it.
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, isMobile ? -6 : -15, 0],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: isMobile ? 6 : 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                      }
                }
              >
                <Image
                  src="/assets/chatbot_porsino.webp"
                  alt="اپلیکیشن هوش مصنوعی پرسینو"
                  width={900}
                  height={600}
                  priority
                  fetchPriority="high"
                  // Prevent mobile from downloading an unnecessarily large source.
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 380px, 520px"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * ------------------------------------------------------------------
 * Helper Component: Particle Background (Canvas)
 * ------------------------------------------------------------------
 * Renders a network of dots and lines with mouse repulsion and
 * smooth drifting animation.
 */
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let parent: HTMLElement | null = null;

    // Mobile-specific lightening (keep the effect, reduce cost)
    const mqlMobile = window.matchMedia("(max-width: 768px)");
    const mqlReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = mqlMobile.matches;
    const prefersReducedMotion = mqlReduceMotion.matches;

    // Mouse state for repulsion logic
    const mouse = { x: -9999, y: -9999, radius: isMobile ? 90 : 120 };

    // --- Configuration ---
    const getParticleCount = (width: number) => {
      if (prefersReducedMotion) return 15;
      if (width < 768) return 25; // Mobile
      return 130; // Desktop
    };

    const connectionDistance = isMobile ? 90 : 140;
    const baseSpeed = prefersReducedMotion ? 0.15 : isMobile ? 0.35 : 0.6;

    // FPS throttle on mobile to reduce main-thread pressure
    const targetFps = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFps;
    let lastFrameTime = 0;

    // --- Particle Class ---
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      density: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * baseSpeed;
        this.vy = (Math.random() - 0.5) * baseSpeed;
        this.size = Math.random() * 2.5 + 1.5;
        this.density = Math.random() * 20 + 1;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * this.density * 0.6;
          const directionY = forceDirectionY * force * this.density * 0.6;
          this.x -= directionX;
          this.y -= directionY;
        }

        const buffer = 50;

        if (this.x > w + buffer) {
          this.x = -buffer;
        } else if (this.x < -buffer) {
          this.x = w + buffer;
        }

        if (this.y > h + buffer) {
          this.y = -buffer;
        } else if (this.y < -buffer) {
          this.y = h + buffer;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = "rgba(70, 152, 143, 0.5)";
        context.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = getParticleCount(canvas.width);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const resizeCanvas = () => {
      const p = canvas.parentElement;
      if (p) {
        canvas.width = p.clientWidth;
        canvas.height = p.clientHeight;
      }
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const animate = (time = 0) => {
      if (time - lastFrameTime < frameInterval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(160, 174, 192, ${opacity * 0.4})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Init
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
      aria-hidden="true"
    />
  );
}
