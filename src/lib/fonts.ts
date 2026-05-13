import { Inter, Noto_Sans_JP, Noto_Serif_JP, Playfair_Display } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-playfair',
});

export const notoSerifJp = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
  preload: false,
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

export const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
  preload: false,
});
