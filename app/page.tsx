// app/page.tsx

export const metadata = {
  title: 'پرسینو | دستیار هوش مصنوعی کنکوری',
  description: 'یادگیری عمیق و مرحله‌به‌مرحله با هوش مصنوعی؛ مخصوص کنکور.',
  openGraph: {
    title: 'پرسینو | دستیار هوش مصنوعی کنکوری',
    description: 'یادگیری عمیق و مرحله‌به‌مرحله با هوش مصنوعی؛ مخصوص کنکور.',
    url: 'https://porsino.org',
    siteName: 'Porsino',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'پرسینو | دستیار هوش مصنوعی کنکوری',
    description: 'یادگیری عمیق و مرحله‌به‌مرحله با هوش مصنوعی؛ مخصوص کنکور.',
  },
};

import HomeContent from '@/components/home-content';

export default function Home() {
  return <HomeContent />;
}
