import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { ChatWidget } from '@/components/chat/ChatWidget';

const yekanBakh = localFont({
  src: [
    { path: '../public/fonts/YekanBakhFaNum-Regular.woff', weight: '400', style: 'normal' },
    { path: '../public/fonts/YekanBakhFaNum-SemiBold.woff', weight: '600', style: 'normal' },
    { path: '../public/fonts/YekanBakhFaNum-Bold.woff', weight: '700', style: 'normal' },
    { path: '../public/fonts/YekanBakhFaNum-ExtraBold.woff', weight: '800', style: 'normal' },
    { path: '../public/fonts/YekanBakhFaNum-Black.woff', weight: '900', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-yekanbakh',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://porsino.org'), // این خط ارور رو حل می‌کنه
  title: 'پرسینو | دستیار هوش مصنوعی کنکوری',
  description: 'پرسینو یک دستیار هوش مصنوعی برای یادگیری مفهومی، حل تست مرحله‌به‌مرحله و تمرین شخصی‌سازی‌شده است.',
  icons: {
    icon: '/assets/favicon.ico',
  },
  openGraph: {
    title: 'پرسینو | دستیار هوش مصنوعی کنکوری',
    description: 'پرسینو یک دستیار هوش مصنوعی برای یادگیری مفهومی، حل تست مرحله‌به‌مرحله و تمرین شخصی‌سازی‌شده است.',
    url: 'https://porsino.org',
    siteName: 'Porsino',
    locale: 'fa_IR',
    type: 'website',
    images: ['/assets/og-image.jpg'], // تصویر OG که باید تو public/assets باشه
  },
  twitter: {
    card: 'summary_large_image',
    title: 'پرسینو | دستیار هوش مصنوعی کنکوری',
    description: 'پرسینو یک دستیار هوش مصنوعی برای یادگیری مفهومی، حل تست مرحله‌به‌مرحله و تمرین شخصی‌سازی‌شده است.',
    images: ['/assets/og-image.jpg'], // همون تصویر برای توییتر
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={yekanBakh.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen bg-background">{children}</main>
          <Footer />
        </ThemeProvider>

        {/* Structured Data - Organization */}
            <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Porsino',
                url: 'https://porsino.org',
                logo: 'https://porsino.org/assets/favicon.ico',
                sameAs: [
                  'https://www.instagram.com/porsinoai',
                  'https://www.linkedin.com/company/porsinoai',
                  'https://t.me/PorsinoAi'
                ],
              })}
            </Script>
{/* Structured Data - BreadcrumbList */}
<Script id="ld-breadcrumb" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'خانه',
        item: 'https://porsino.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'سرویس‌ها',
        item: 'https://porsino.org/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'ارتباط با ما',
        item: 'https://porsino.org/contact',
      },
    ],
  })}
</Script>
{/* Structured Data - FAQ */}
<Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'پرسینو چیست؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'پرسینو یک دستیار هوش مصنوعی برای یادگیری مفهومی، حل تست مرحله‌به‌مرحله و تمرین شخصی‌سازی‌شده ویژه کنکور است.',
        },
      },
      {
        '@type': 'Question',
        name: 'آیا پرسینو رایگان است؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'پرسینو پلن‌های رایگان و پولی دارد که بسته به نیاز کاربر انتخاب می‌شود.',
        },
      },
    ],
  })}
</Script>

        {/* Structured Data - Website */}
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://porsino.org',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://porsino.org/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
      </body>
    </html>
  );
}
