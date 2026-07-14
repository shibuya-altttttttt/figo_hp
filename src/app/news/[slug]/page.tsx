import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { MarkdownText } from '@/components/ui/MarkdownText';
import { CTABanner } from '@/components/ui/CTABanner';
import { ArticleJsonLd, FaqPageJsonLd } from '@/components/seo/JsonLd';
import {
  getArticleBySlug,
  getRelatedArticles,
  newsArticles,
} from '@/lib/news';
import { getNewsFaqs } from '@/lib/newsFaqs';
import { getNewsThumb } from '@/lib/newsThumb';

// コラムの監修者（E-E-A-T: 誰が監修しているかを明示）
const supervisor = {
  name: '金 潤求',
  jobTitle: '株式会社Figo 代表取締役',
  url: '/about',
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: '記事が見つかりません',
      description: 'お探しの記事が見つかりませんでした。',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      title: `${article.title} | 株式会社Figo`,
      description: article.excerpt,
      url: `/news/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article);
  const isColumn = article.category === 'コラム';
  const faqs = getNewsFaqs(article.slug);

  return (
    <>
      <ArticleJsonLd
        headline={article.title}
        description={article.excerpt}
        url={`/news/${article.slug}`}
        datePublished={article.publishedAt}
        author={isColumn ? supervisor : undefined}
      />
      {faqs.length > 0 ? <FaqPageJsonLd items={faqs} /> : null}
      <PageHero
        eyebrow={article.category === 'コラム' ? 'Column' : 'News'}
        title={article.title}
        lead={`${article.publishedDisplay} / ${article.category}`}
      />
      <Breadcrumb
        items={[
          { label: 'お知らせ', href: '/news' },
          { label: article.title },
        ]}
      />

      <Section tone="base" aria-labelledby="article-body-heading">
        <Container>
          <h2 id="article-body-heading" className="sr-only">
            記事本文
          </h2>
          <article className="mx-auto max-w-3xl">
            <header className="mb-12 border-b border-neutral-200 pb-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone={article.category === 'コラム' ? 'accent' : 'neutral'}>
                  {article.category}
                </Badge>
                <time
                  dateTime={article.publishedAt}
                  className="font-sans text-caption font-medium tracking-wider text-neutral-500"
                >
                  {article.publishedDisplay} 公開
                </time>
              </div>
              {isColumn ? (
                <p className="mt-4 font-sans text-caption text-neutral-500">
                  監修：
                  <Link
                    href={supervisor.url}
                    className="font-medium text-neutral-700 underline-offset-2 transition-colors hover:text-accent hover:underline"
                  >
                    {supervisor.name}（{supervisor.jobTitle}・宅地建物取引業）
                  </Link>
                </p>
              ) : null}
            </header>

            <p className="font-serif text-body-lg leading-[1.95] text-neutral-700">
              {article.excerpt}
            </p>

            <div className="mt-12">
              <MarkdownText source={article.body} />
            </div>

            {faqs.length > 0 ? (
              <section
                aria-labelledby="article-faq-heading"
                className="mt-16 border-t border-neutral-200 pt-10"
              >
                <h2
                  id="article-faq-heading"
                  className="font-serif text-h3-sm md:text-h3 font-medium text-ink"
                >
                  よくある質問
                </h2>
                <dl className="mt-8 space-y-8">
                  {faqs.map((item) => (
                    <div key={item.question} className="border-t border-neutral-200 pt-6">
                      <dt className="flex gap-3 font-serif text-body-lg font-medium text-ink">
                        <span aria-hidden="true" className="text-accent">
                          Q.
                        </span>
                        <span>{item.question}</span>
                      </dt>
                      <dd className="mt-3 pl-7 text-body leading-[1.95] text-neutral-700">
                        {item.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-8">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 font-sans text-body font-medium text-ink transition-colors hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                お知らせ一覧へ戻る
              </Link>
              {isColumn ? (
                <Link
                  href="/shindan"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-sans text-caption font-medium text-white transition-all hover:bg-accent-dark"
                >
                  売却の出口診断（3分・無料）
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              ) : null}
            </footer>
          </article>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section tone="neutral" aria-labelledby="related-heading">
          <Container>
            <h2
              id="related-heading"
              className="font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
            >
              関連の記事。
            </h2>
            <p className="mt-4 text-body leading-relaxed text-neutral-700">
              同じカテゴリの最近の記事です。
            </p>

            <ul className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
              {related.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/news/${other.slug}`}
                    className="group flex flex-col rounded-lg border border-neutral-200 bg-base p-7 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_48px_-24px_rgba(26,26,26,0.25)] md:p-8"
                  >
                    <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-md bg-neutral-200/60">
                      <Image
                        src={getNewsThumb(other.slug)}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge tone={other.category === 'コラム' ? 'accent' : 'neutral'}>
                        {other.category}
                      </Badge>
                      <time
                        dateTime={other.publishedAt}
                        className="font-sans text-caption font-medium tracking-wider text-neutral-500"
                      >
                        {other.publishedDisplay}
                      </time>
                    </div>
                    <p className="mt-5 font-serif text-h4 font-medium text-ink transition-colors group-hover:text-accent">
                      {other.title}
                    </p>
                    <p className="mt-3 flex-1 text-body leading-[1.85] text-neutral-700">
                      {other.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-sans text-caption font-medium text-ink transition-colors group-hover:text-accent">
                      記事を読む
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CTABanner
        eyebrow="Free Consultation"
        title="個別のご相談は、お気軽に。"
        description="記事に書ききれない個別の事情こそ、整理のお手伝いができる場面です。初回ご相談は無料、秘密厳守でお伺いします。"
      />
    </>
  );
}
