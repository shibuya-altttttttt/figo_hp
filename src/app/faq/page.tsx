import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Accordion, type AccordionItem } from '@/components/ui/Accordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { ButtonLink } from '@/components/ui/Button';
import { FaqPageJsonLd } from '@/components/seo/JsonLd';
import { faqCategories, allFaqItems } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'よくあるご質問',
  description:
    '株式会社Figoによくいただくご質問をカテゴリ別にまとめました。ご相談の流れ、相続、継承、再生、料金・契約について、それぞれの代表的なご質問に回答しています。',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'よくあるご質問 | 株式会社Figo',
    description:
      '初回相談、相続、継承、再生、料金・契約に関するよくいただくご質問にお答えします。',
    url: '/faq',
  },
};

export default function FaqPage() {
  return (
    <>
      <FaqPageJsonLd
        items={allFaqItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />
      <PageHero
        eyebrow="FAQ"
        title="ご相談前に、よくいただくご質問。"
        lead="お問い合わせ前に参考にしていただける質問を、カテゴリ別にまとめました。ここに無いご質問も、お問い合わせフォームよりお気軽にお寄せください。"
      />
      <Breadcrumb items={[{ label: 'よくあるご質問' }]} />

      <Section tone="base" padding="sm" aria-labelledby="faq-nav-heading">
        <Container>
          <h2 id="faq-nav-heading" className="sr-only">
            FAQ カテゴリ一覧
          </h2>
          <nav aria-label="FAQ カテゴリ">
            <ul className="-mx-4 flex gap-3 overflow-x-auto px-4 py-2 md:mx-0 md:flex-wrap md:gap-3 md:px-0">
              {faqCategories.map((category) => (
                <li key={category.id} className="shrink-0">
                  <a
                    href={`#${category.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-base px-5 py-2 font-sans text-caption font-medium text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    <span className="font-sans text-caption font-medium tracking-[0.2em] text-accent">
                      {String(faqCategories.indexOf(category) + 1).padStart(2, '0')}
                    </span>
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </Section>

      {faqCategories.map((category, index) => {
        const items: AccordionItem[] = category.items.map((item) => ({
          question: item.question,
          answer: item.answer,
        }));
        const isOdd = index % 2 === 1;
        return (
          <Section
            key={category.id}
            id={category.id}
            tone={isOdd ? 'neutral' : 'base'}
            aria-labelledby={`category-${category.id}-heading`}
          >
            <Container>
              <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-20">
                <div className="md:sticky md:top-28 md:self-start">
                  <p className="section-heading-en text-accent">
                    {category.eyebrow}
                  </p>
                  <h2
                    id={`category-${category.id}-heading`}
                    className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
                  >
                    {category.title}
                  </h2>
                  <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                    {category.description}
                  </p>
                  <p className="mt-8 font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
                    {category.items.length} questions
                  </p>
                </div>

                <div>
                  <Accordion items={items} />
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      <Section tone="base" aria-labelledby="faq-contact-heading">
        <Container>
          <div className="mx-auto max-w-3xl rounded-lg border border-neutral-200 bg-neutral-100/60 p-10 md:p-14">
            <p className="section-heading-en text-accent">Still Wondering?</p>
            <h2
              id="faq-contact-heading"
              className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
            >
              ここに無いご質問も、お気軽にどうぞ。
            </h2>
            <p className="mt-6 text-body leading-[1.95] text-neutral-700">
              個別の物件・ご家族の状況に応じたご相談は、お問い合わせフォームまたはお電話より承ります。秘密厳守でお伺いし、初回ご相談は無料です。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="md" withArrow>
                お問い合わせフォームへ
              </ButtonLink>
              <ButtonLink href="/services" size="md" variant="outline">
                サービス一覧を見る
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner
        eyebrow="Free Consultation"
        title="まずは現状を、お聞かせください。"
        description="ご質問の前段にある具体的な状況こそ、整理のお手伝いができる場面です。初回ご相談は無料、秘密厳守でお伺いします。"
      />
    </>
  );
}
