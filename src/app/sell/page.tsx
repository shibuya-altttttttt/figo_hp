import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { SellForm } from '@/components/sections/SellForm';
import { ServiceJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: '不動産売却のご相談（一棟収益・土地・戸建て）',
  description:
    '一棟マンション・一棟アパートなどの収益不動産、相続した実家・空き家・土地・戸建ての売却相談。一括査定サイトとは違い、担当ひとり・営業電話なし。根拠ある無料査定と手取り試算をお出しします。東京・新橋の株式会社Figo。',
  alternates: { canonical: '/sell' },
  openGraph: {
    title: '不動産売却のご相談 | 株式会社Figo(新橋)',
    description:
      '一棟収益不動産と土地・戸建ての売却相談。担当ひとり・営業電話なし・査定無料。手取り額から逆算してご提案します。',
    url: '/sell',
  },
};

const paths = [
  {
    href: '/sell/income',
    eyebrow: 'Income Property',
    title: '一棟収益不動産の売却',
    lead: '一棟マンション・一棟アパート・一棟ビル。入居者がいるまま、残債があっても、近隣に知られずに。',
    points: [
      '入居者がいるまま売却（オーナーチェンジ）',
      '残債がある物件の手取り試算',
      'ポータルに載せない「未公開」売却',
    ],
  },
  {
    href: '/sell/land',
    eyebrow: 'Land & House',
    title: '土地・戸建ての売却',
    lead: '相続した実家、空き家、使っていない土地、賃貸中の戸建て。「何から手を付ければいいか」からで構いません。',
    points: [
      '解体するかどうかの手取り比較',
      '残置物・相続登記まで窓口ひとつ',
      '仲介と業者買取の両にらみ',
    ],
  },
];

const promises = [
  {
    number: '01',
    title: '高い査定額で釣らない',
    body: '媒介契約を取るために相場より高い数字を出す会社は少なくありません。売れない値付けは、値下げを重ねて結局お客様の時間と価格の両方を失わせます。Figoの査定書は、収益還元・積算・直近成約という根拠と一緒にお渡しします。',
  },
  {
    number: '02',
    title: '情報をむやみに広げない',
    body: '一括査定サイトに登録すると、その日から複数の会社の電話が鳴り続けます。Figoの窓口は担当ひとり。ご連絡はご希望の方法・時間帯で行い、物件情報も必要な買主候補にしか出しません。',
  },
  {
    number: '03',
    title: '価格ではなく、手取りで話す',
    body: '大事なのは売却価格ではなく、税金や諸費用を引いた後に手元へ残る金額です。譲渡税・登記費用・仲介手数料まで含めた手取り試算を最初にお出しし、売る場合と持ち続ける場合の比較もご説明します。',
  },
];

export default function SellPage() {
  return (
    <>
      <ServiceJsonLd
        name="不動産売却のご相談"
        description="一棟マンション・一棟アパートなどの収益不動産、土地・戸建ての売却仲介。根拠ある無料査定と手取り試算。"
        url="/sell"
        serviceType="不動産売買仲介"
      />
      <PageHero
        eyebrow="Sell"
        title={
          <>
            不動産の売却は、
            <br className="md:hidden" />
            静かに、
            <br />
            手取りで考える。
          </>
        }
        lead="一括査定サイトに登録すれば、査定額はいくつも集まります。しかし本当に要るのは、根拠のある一つの数字と、手元にいくら残るかの試算です。Figoの売却相談は担当ひとり、営業電話なし。迷っている段階からどうぞ。"
      />
      <Breadcrumb items={[{ label: '売却のご相談' }]} />

      <Section tone="base" aria-labelledby="sell-paths-heading">
        <Container>
          <SectionHeading
            id="sell-paths-heading"
            eyebrow="Two Paths"
            title={
              <>
                売る物件に合わせて、
                <br className="md:hidden" />
                2つの入り口。
              </>
            }
          />
          <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-2 md:gap-10">
            {paths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="group flex flex-col rounded-lg border border-neutral-200 bg-base p-8 transition-all hover:border-accent hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)] md:p-10"
              >
                <p className="font-sans text-caption font-medium tracking-[0.3em] text-accent">
                  {path.eyebrow}
                </p>
                <h3 className="mt-4 font-serif text-h3-sm md:text-h3 font-medium text-ink text-balance">
                  {path.title}
                </h3>
                <p className="mt-4 text-body leading-[1.9] text-neutral-700">
                  {path.lead}
                </p>
                <ul className="mt-6 space-y-2 border-l border-neutral-200 pl-5">
                  {path.points.map((point) => (
                    <li
                      key={point}
                      className="text-body leading-relaxed text-neutral-700"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 font-sans text-body font-medium text-ink transition-colors group-hover:text-accent">
                  詳しく見る
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="neutral" aria-labelledby="sell-promises-heading">
        <Container>
          <SectionHeading
            id="sell-promises-heading"
            eyebrow="Our Promises"
            title={
              <>
                どちらの売却でも、
                <br className="md:hidden" />
                変わらない
                <br className="md:hidden" />
                3つの約束。
              </>
            }
          />
          <div className="mt-14 space-y-12 md:mt-20">
            {promises.map((item) => (
              <article
                key={item.number}
                className="grid gap-4 border-t border-neutral-200 pt-8 md:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] md:gap-10"
              >
                <div>
                  <p className="font-sans text-caption font-medium tracking-[0.3em] text-accent">
                    {item.number}
                  </p>
                  <h3 className="mt-3 font-serif text-h3-sm md:text-h3 font-medium text-ink text-balance">
                    {item.title}
                  </h3>
                </div>
                <p className="text-body md:text-body-lg leading-[1.95] text-neutral-700 md:pt-1">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="base" aria-labelledby="sell-form-heading" id="consult">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-heading-en text-accent">Free Consultation</p>
              <h2
                id="sell-form-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                迷っている段階から、
                <br />
                ご相談ください。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                所在地が分かれば机上査定が可能です。査定を受けたら売らなければならない、ということはありません。ご記入いただいた内容は厳重に管理し、ご相談以外の目的では使用しません。
              </p>
              <div className="mt-10 border-t border-neutral-200 pt-8">
                <a
                  href={`tel:${siteConfig.contact.tel}`}
                  className="inline-flex items-center gap-2 font-sans text-body font-medium text-ink transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                  {siteConfig.contact.telDisplay}
                </a>
                <p className="mt-2 text-caption text-neutral-500">
                  {siteConfig.contact.hours}／お電話でのご相談も無料です
                </p>
              </div>
            </aside>
            <div>
              <SellForm variant="general" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
