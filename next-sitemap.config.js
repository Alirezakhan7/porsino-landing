// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://porsino.ir', // آدرس اصلی دامنه‌ت (با https!)
  generateRobotsTxt: true,       // فایل robots.txt هم تولید کنه
  sitemapSize: 5000,             // تعداد لینک در هر sitemap
  changefreq: 'daily',
  priority: 0.7,
};
