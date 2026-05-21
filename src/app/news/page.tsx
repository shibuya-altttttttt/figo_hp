import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CTABanner } from '@/components/ui/CTABanner';
import { NewsList } from '@/components/sections/NewsList';
import { ItemListJsonLd } from '@/components/seo/JsonLd';
import { sortedNews } from '@/lib/news';

export const metadata: Metadata = {
  title: 'お知らせ・コラム',
  description:
    '株式会社Figoからのお知らせと、不動産相続・継承・再生に関するコラム記事の一覧です。実務の現場で多くいただく相談を起点に、判断のヒントになる視点をお届けします。',
  alternates: { canonical: '/news' },
  openGraph: {
    title: 'お知らせ・コラム | 株式会社Figo',
    description:
      'Figoからのお知らせと、不動産相続・継承・再生に関するコラム記事一覧。',
    url: '/news',
  },
};

export default function NewsPage() {
  return (
    <>
      <ItemListJsonLd
        name="お知らせ・コラム一覧"
        items={sortedNews.map((article) => ({
          name: article.title,
          url: `/news/${article.slug}`,
          description: article.excerpt,
        }))}
      />
      <PageHero
        eyebrow="News & Column"
        title="お知らせ・コラム。"
        lead="会社からのお知らせと、不動産相続・継承・再生にまつわる実務の視点をまとめたコラムです。"
      />
      <Breadcrumb items={[{ label: 'お知らせ' }]} />

      <Section tone="base" aria-labelledby="news-summary-heading">
        <Container>
          <div className="max-w-3xl">
            <p className="section-heading-en text-accent">All Posts</p>
            <h2
              id="news-summary-heading"
              className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
            >
              成約のお知らせと、実務のコラム。
            </h2>
            <p className="mt-6 text-body leading-[1.95] text-neutral-700">
              Figoの取扱物件の成約報告と、日々のご相談で扱う論点のうち汎用的に役立つ視点をまとめています。具体的な税率や法改正の細部は、個別の状況に応じて専門家にご確認ください。
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="neutral" aria-labelledby="news-list-heading">
        <Container>
          <h2 id="news-list-heading" className="sr-only">
            記事一覧
          </h2>
          <NewsList articles={sortedNews} />
        </Container>
      </Section>

      <CTABanner
        eyebrow="Free Consultation"
        title="記事の内容に近いお悩みがあれば。"
        description="一般論として書ける範囲には限界があります。個別の状況に応じたご相談は、初回無料・秘密厳守で承ります。"
      />
    </>
  );
}
