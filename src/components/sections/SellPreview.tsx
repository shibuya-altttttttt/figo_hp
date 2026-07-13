import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';

const sellPaths = [
  {
    href: '/sell/income',
    eyebrow: 'Income Property',
    title: '一棟収益不動産の売却',
    body: '入居者がいるまま、残債があっても、近隣に知られずに。手取り額から逆算してご提案します。',
  },
  {
    href: '/sell/land',
    eyebrow: 'Land & House',
    title: '土地・戸建ての売却',
    body: '相続した実家、空き家、使っていない土地。解体するかどうかの判断から、順番に整理します。',
  },
];

export function SellPreview() {
  return (
    <Section tone="neutral" aria-labelledby="sell-preview-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-20">
          <div>
            <SectionHeading
              id="sell-preview-heading"
              eyebrow="For Sellers"
              title={
                <>
                  不動産の売却を
                  <br className="md:hidden" />
                  お考えの方へ。
                </>
              }
              lead="査定は無料、担当ひとり、営業電話なし。売るかどうか迷っている段階から、根拠のある価格と手取りの試算をお出しします。"
            />
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/shindan"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-sans text-caption font-medium text-white transition-all hover:bg-accent-dark"
              >
                3分でわかる 売却の出口診断（無料）
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/sell"
                className="group inline-flex items-center gap-2 font-sans text-body font-medium text-ink transition-colors hover:text-accent"
              >
                売却のご相談について詳しく
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/buy"
                className="group inline-flex items-center gap-2 font-sans text-caption font-medium text-neutral-700 transition-colors hover:text-accent"
              >
                購入をお考えの方（未公開物件のご紹介）はこちら
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {sellPaths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="group flex flex-col rounded-lg border border-neutral-200 bg-base p-7 transition-all hover:border-accent hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)]"
              >
                <p className="font-sans text-caption font-medium tracking-[0.3em] text-accent">
                  {path.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-h4 font-medium text-ink text-balance">
                  {path.title}
                </h3>
                <p className="mt-3 flex-1 text-body leading-[1.85] text-neutral-700">
                  {path.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-sans text-caption font-medium text-ink transition-colors group-hover:text-accent">
                  詳しく見る
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
