import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CTABanner } from '@/components/ui/CTABanner';
import { CasesFilter } from '@/components/sections/CasesFilter';
import { cases } from '@/lib/cases';

export const metadata: Metadata = {
  title: '成約実績',
  description:
    '株式会社Figoの成約実績。東京・埼玉を中心とした一棟マンション・一棟ビル・区分マンションの仲介・買取実績をご紹介します。物件詳細・取引金額は守秘事項のため非公開とし、エリア・規模・概要のみ掲載しています。',
  alternates: { canonical: '/cases' },
  openGraph: {
    title: '成約実績 | 株式会社Figo',
    description:
      '東京・埼玉を中心とした不動産仲介・買取・コンサルティングの成約実績をご紹介します。',
    url: '/cases',
  },
};

const sortedCases = [...cases].sort((a, b) => (a.closedDate < b.closedDate ? 1 : -1));

const brokerageCases = sortedCases.filter((c) => c.dealType === '仲介');
const purchaseCases = sortedCases.filter((c) => c.dealType === '買取');

const brokeragePrefectures = Array.from(
  new Set(brokerageCases.map((c) => c.prefecture)),
).join('・');

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Track Record"
        title="お取扱いした物件の、抜粋。"
        lead="Figoが関わった成約実績の一部です。仲介・買取それぞれの実績を掲載しています。物件詳細・取引金額は守秘事項のため非公開とし、エリア・規模など差し支えのない範囲で掲載しています。"
      />
      <Breadcrumb items={[{ label: '成約実績' }]} />

      <Section tone="base" aria-labelledby="brokerage-heading">
        <Container>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
            <div>
              <p className="section-heading-en text-accent">Brokerage</p>
              <h2
                id="brokerage-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                仲介実績
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                売主様・買主様の間に立ち、最適な相手探しと条件調整を行った取引です。{brokerageCases.length > 0
                  ? `1期目に成約した、${brokeragePrefectures}にまたがる一棟マンション・一棟ビル・区分マンションの取引を掲載しています。`
                  : ''}
              </p>
            </div>

            {brokerageCases.length > 0 ? (
              <dl className="grid grid-cols-2 gap-4 self-end md:gap-6">
                <div className="border-t-2 border-accent/30 pt-4">
                  <dt className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
                    Areas
                  </dt>
                  <dd className="mt-2 font-serif text-h3-sm leading-tight text-ink">
                    {brokeragePrefectures}
                  </dd>
                </div>
                <div className="border-t-2 border-accent/30 pt-4">
                  <dt className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
                    Period
                  </dt>
                  <dd className="mt-2 font-serif text-h3-sm leading-tight text-ink">
                    1期目
                  </dd>
                </div>
              </dl>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section tone="neutral" aria-labelledby="brokerage-list-heading">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4 pb-2">
            <h2
              id="brokerage-list-heading"
              className="font-serif text-h3-sm md:text-h3 font-medium text-ink"
            >
              仲介物件一覧
            </h2>
            <p className="font-sans text-caption text-neutral-500">
              新しい順
            </p>
          </div>

          <div className="mt-6">
            <CasesFilter cases={brokerageCases} />
          </div>

          <p className="mt-12 max-w-2xl text-caption leading-relaxed text-neutral-500">
            ※ 取引金額・お客様情報・物件の詳細所在地は守秘事項のため非公開としています。掲載内容の正確性については成約時点の情報に基づいています。同等の物件のご相談・ご検討は、お問い合わせよりお気軽にご連絡ください。
          </p>
        </Container>
      </Section>

      <Section tone="base" aria-labelledby="purchase-heading">
        <Container>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
            <div>
              <p className="section-heading-en text-accent">Direct Purchase</p>
              <h2
                id="purchase-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                買取実績
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                Figoが直接買主となり取得した物件の実績です。早期現金化・引き渡し条件の柔軟性を求められる売却ニーズにお応えしています。
              </p>
            </div>

            <div className="self-end">
              {purchaseCases.length > 0 ? (
                <CasesFilter cases={purchaseCases} />
              ) : (
                <div className="rounded-lg border border-dashed border-neutral-300 bg-base p-8 md:p-10">
                  <p className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
                    Coming Soon
                  </p>
                  <p className="mt-3 font-serif text-h4 md:text-h3-sm leading-tight text-ink">
                    現在、決済前の案件があります。
                  </p>
                  <p className="mt-4 text-body leading-relaxed text-neutral-700">
                    決済完了後に、エリア・物件種別など差し支えのない範囲で順次掲載いたします。買取に関するご相談は、お問い合わせよりお気軽にご連絡ください。
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner
        eyebrow="Free Consultation"
        title="同様の物件のご相談、お気軽にどうぞ。"
        description="一棟マンション・一棟ビル・区分マンション・土地など、購入・売却・相続対策・再生のいずれの目的でも対応します。初回ご相談は無料、秘密厳守でお伺いします。"
      />
    </>
  );
}
