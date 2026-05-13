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
  title: `${siteConfig.name} | 不動産相続・資産継承コンサルティング`,
  description:
    '価値を創り、価値を守る——東京・新橋を拠点に、不動産コンサルティング事業と再生事業の2軸で、購入・保有・売却のライフサイクル全体でお客様の資産価値を最大化します。初回相談無料。',
  alternates: { canonical: '/' },
  openGraph: {
    title: `${siteConfig.name} | 不動産相続・資産継承コンサルティング`,
    description:
      '不動産相続・資産継承でお悩みのオーナー様へ。Figoがライフサイクル全体で一貫して伴走し、オーナー様ごとに最適なプランをご提案します。',
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
