import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const services = [
  {
    slug: 'consulting',
    number: '01',
    title: '不動産コンサルティング事業',
    subtitle: 'Consulting',
    description:
      '収益用・事業用不動産の購入から運用・管理・売却まで一貫サポート。相続対策・財産管理・資産継承まで、ライフサイクル全体でお客様の資産価値を最大化します。',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
    href: '/services/consulting',
  },
  {
    slug: 'revitalization',
    number: '02',
    title: '不動産再生事業',
    subtitle: 'Revitalization',
    description:
      '利用価値が低迷している不動産を取得し、リーシング・リノベーション等で収益改善・資産価値向上を実現。物件取得から市場供給まで、Figoが事業主体として手がけます。',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80',
    href: '/services/revitalization',
  },
];

export function Services() {
  return (
    <Section id="services" tone="neutral" aria-labelledby="services-heading">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="不動産のライフサイクル全体を、ひとつの窓口で。"
            lead="購入・保有・売却から、相続・資産継承・再生まで——お客様の状況や時間軸に合わせて、最適な選択肢を組み合わせてご提案します。"
            className="md:max-w-2xl"
          />
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          {services.map((service, idx) => (
            <Reveal key={service.slug} delay={idx * 120}>
            <Link
              href={service.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-base transition-all duration-500 ease-[cubic-bezier(0.2,0,0.2,1)] hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_30px_60px_-30px_rgba(26,26,26,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                />
                <span className="absolute left-6 top-6 inline-flex items-center rounded-full bg-base/95 px-3 py-1 font-sans text-caption font-medium tracking-wider text-ink">
                  {service.subtitle}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-caption font-medium tracking-[0.3em] text-accent">
                    {service.number}
                  </span>
                  <span className="h-px flex-1 bg-neutral-200" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-serif text-h3-sm md:text-h3 font-medium text-ink">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-body leading-[1.9] text-neutral-700">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-caption font-medium text-ink transition-colors group-hover:text-accent">
                  詳しく見る
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
