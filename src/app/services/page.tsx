import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { CTABanner } from '@/components/ui/CTABanner';
import { services, consultationFlow } from '@/lib/services';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'サービス一覧',
  description:
    '東京・新橋の不動産コンサルティング・再生事業。一棟マンション・一棟ビル・区分マンションの売買仲介、相続対策、資産継承、収益不動産の購入支援、低稼働物件の再生まで、Figoが2つの事業領域でカバーします。',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'サービス一覧 | 株式会社Figo(新橋)',
    description:
      '新橋の不動産コンサルティング会社、Figoのサービス一覧。不動産売買仲介・相続/資産継承・不動産再生事業。',
    url: '/services',
  },
};

const crossThoughts = [
  {
    question: 'コンサルティングと再生事業、どちらの相談から始められますか？',
    answer:
      'どちらからでも構いません。保有物件の活用方法を整理する過程で再生事業の対象が見つかることもあれば、再生案件の検討中に相続対策の論点が浮上することもあります。最初のヒアリングで整理してご提案します。',
  },
  {
    question: '別々の専門家に頼むのと何が違いますか？',
    answer:
      '窓口がFigoひとつに集約されるため、説明の重複がありません。税理士・司法書士・施工会社との連携も含めて、判断と進行の両方をひとりの担当者が見続けます。',
  },
  {
    question: '対応エリアはどこまでですか？',
    answer:
      '東京23区、近郊都市、神奈川・埼玉・千葉の主要都市を中心に対応しています。エリアにより取扱範囲が変わる場合があるので、個別にご相談ください。',
  },
];

const breadcrumbItems = [{ label: 'サービス' }];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="不動産の総合サービス。"
        lead="不動産コンサルティング事業と不動産再生事業——購入・保有・売却・継承のライフサイクル全体で、お客様の不動産資産の最大化と防衛のためにサービスを設計しています。"
      />
      <Breadcrumb items={breadcrumbItems} />

      <Section tone="base" aria-labelledby="services-detail-heading">
        <Container>
          <SectionHeading
            id="services-detail-heading"
            eyebrow="Two Businesses"
            title="2つの事業で、不動産の価値を創り、守る。"
            lead="お客様の代理として最適な選択肢をご提案するコンサルティング事業と、Figo自らが事業主体となって物件価値を再生する再生事業。2つの軸で不動産のライフサイクル全体を支えます。"
          />

          <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
            {services.map((service, index) => {
              const isReverse = index % 2 === 1;
              return (
                <article
                  key={service.slug}
                  className={`grid gap-8 md:gap-12 lg:grid-cols-12 lg:gap-16 ${
                    isReverse ? 'lg:[&>figure]:col-start-7' : ''
                  }`}
                >
                  <figure
                    className={`relative aspect-[4/3] overflow-hidden rounded-lg lg:col-span-6 ${
                      isReverse ? 'lg:row-start-1' : ''
                    }`}
                  >
                    <Image
                      src={service.hero.image}
                      alt={service.hero.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </figure>
                  <div
                    className={`flex flex-col justify-center lg:col-span-6 ${
                      isReverse ? 'lg:col-start-1 lg:row-start-1' : ''
                    }`}
                  >
                    <p className="font-sans text-caption font-medium tracking-[0.3em] text-accent">
                      {service.number} / {service.subtitle}
                    </p>
                    <h3 className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance">
                      {service.title}
                    </h3>
                    <p className="mt-6 text-body md:text-body-lg leading-[1.95] text-neutral-700">
                      {service.longLead}
                    </p>
                    <ul className="mt-7 space-y-3 border-l border-neutral-200 pl-5">
                      {service.targets.map((target) => (
                        <li
                          key={target}
                          className="text-body leading-relaxed text-neutral-700"
                        >
                          {target}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group mt-8 inline-flex items-center gap-2 font-sans text-body font-medium text-ink transition-colors hover:text-accent"
                    >
                      {service.title}の詳細を見る
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="neutral" aria-labelledby="cross-thoughts-heading">
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="section-heading-en text-accent">Why One Window</p>
              <h2
                id="cross-thoughts-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                窓口を、一つに。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                {siteConfig.name}は、コンサルティングと再生事業をひとつの会社で扱うことで、判断と実行をシームレスにつなぎます。お客様は説明を繰り返すことなく、進行管理をFigoに任せていただけます。
              </p>
            </div>
            <dl className="space-y-10 md:space-y-12">
              {crossThoughts.map((item) => (
                <div key={item.question} className="border-t border-neutral-200 pt-8">
                  <dt className="font-serif text-h3-sm md:text-h3 font-medium text-ink">
                    {item.question}
                  </dt>
                  <dd className="mt-4 text-body leading-[1.95] text-neutral-700">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Section tone="base" aria-labelledby="consultation-flow-heading">
        <Container>
          <SectionHeading
            id="consultation-flow-heading"
            eyebrow="Consultation Flow"
            title="ご相談から実行までの、4つのステップ。"
            lead="どのサービスをご利用いただく場合も、共通の流れでご一緒に進めます。最初の整理だけでも、ご相談の価値はあります。"
          />

          <ol className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-8">
            {consultationFlow.map((step, index) => (
              <li
                key={step.step}
                className="relative flex flex-col border-t-2 border-accent/30 pt-6"
              >
                <span className="font-sans text-caption font-medium tracking-[0.3em] text-accent">
                  {step.step}
                </span>
                <h3 className="mt-3 font-serif text-h4 font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-body leading-relaxed text-neutral-700">
                  {step.description}
                </p>
                {index < consultationFlow.length - 1 ? (
                  <span
                    className="pointer-events-none absolute -right-4 top-7 hidden h-px w-6 bg-neutral-200 lg:block"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CTABanner
        eyebrow="Free Consultation"
        title="どのサービスから始めるか、一緒に整理しましょう。"
        description="ご状況によって最適な入り口は変わります。まずは現状をお話しいただき、必要な視点をお選びいただけるよう、複数の選択肢でお返しします。"
      />
    </>
  );
}
