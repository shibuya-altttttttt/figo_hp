import type { Metadata, Viewport } from 'next';
import { inter, notoSansJp, notoSerifJp, playfair } from '@/lib/fonts';
import { siteConfig } from '@/lib/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { OrganizationJsonLd } from '@/components/seo/JsonLd';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | 新橋・東京の不動産コンサルティング・相続/資産継承`,
    template: `%s | ${siteConfig.name}(新橋)`,
  },
  description: siteConfig.description,
  keywords: [
    '新橋 不動産',
    '港区 不動産',
    '新橋 不動産会社',
    '東京 不動産コンサルティング',
    '不動産相続 東京',
    '資産継承 新橋',
    '相続対策 不動産',
    '一棟収益不動産',
    '一棟マンション 売買',
    '一棟ビル 売却',
    '区分マンション 売買',
    '不動産再生 東京',
    '共有名義 解消',
    '不動産買取 新橋',
    'SUUMO 広告営業',
    '株式会社Figo',
    'Figo',
    '相続コンサルティング',
    '宅地建物取引業 東京都知事',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | 新橋・東京の不動産コンサルティング・相続/資産継承`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | 新橋・東京の不動産コンサルティング・相続/資産継承`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#f97316',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${playfair.variable} ${notoSerifJp.variable} ${inter.variable} ${notoSansJp.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-base text-neutral-700 antialiased">
        <a href="#main" className="skip-link">
          本文へスキップ
        </a>
        <OrganizationJsonLd />
        <ScrollProgress />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
