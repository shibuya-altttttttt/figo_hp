import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { Services } from '@/components/sections/Services';
import { Stats } from '@/components/sections/Stats';
import { MessagePreview } from '@/components/sections/MessagePreview';
import { CasesPreview } from '@/components/sections/CasesPreview';
import { Reasons } from '@/components/sections/Reasons';
import { News } from '@/components/sections/News';
import { FaqPreview } from '@/components/sections/FaqPreview';
import { CTABanner } from '@/components/ui/CTABanner';
import { WebSiteJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} | 新橋の不動産コンサルティング・相続/資産継承`,
  description:
    '東京都港区新橋の不動産コンサルティング会社、株式会社Figo。一棟マンション・一棟ビル・区分マンションの売買仲介、相続対策、資産継承、不動産再生まで——「価値を創り、価値を守る」をテーマに、購入・保有・売却のライフサイクル全体でお客様の資産価値を最大化します。初回相談無料。',
  alternates: { canonical: '/' },
  openGraph: {
    title: `${siteConfig.name} | 新橋の不動産コンサルティング・相続/資産継承`,
    description:
      '東京・新橋の不動産コンサルティング・再生事業。一棟マンション、一棟ビル、相続対策、資産継承まで、Figoがライフサイクル全体で一貫して伴走します。',
    url: siteConfig.url,
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <WebSiteJsonLd />
      <Hero />
      <ValueProposition />
      <Services />
      <Stats />
      <MessagePreview />
      <CasesPreview />
      <Reasons />
      <News />
      <FaqPreview />
      <CTABanner />
    </>
  );
}
