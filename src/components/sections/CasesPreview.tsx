import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { TextLink } from '@/components/ui/TextLink';
import { Reveal } from '@/components/ui/Reveal';
import { cases as caseRecords } from '@/lib/cases';

const sortedCases = [...caseRecords]
  .filter((c) => c.dealType === '仲介')
  .sort((a, b) => (a.closedDate < b.closedDate ? 1 : -1));

export function CasesPreview() {
  const previews = sortedCases.slice(0, 3);

  return (
    <Section id="cases" tone="base" aria-labelledby="cases-heading">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="cases-heading"
            eyebrow="Track Record"
            title="2025年の仲介実績、抜粋。"
            lead="一棟マンション・一棟ビル・区分マンションなど、東京・埼玉を中心とした取扱い物件をご紹介します。物件詳細・取引金額は守秘事項のため非公開とし、エリア・規模など差し支えのない範囲で掲載しています。"
            className="md:max-w-2xl"
          />
          <div className="hidden md:block">
            <TextLink href="/cases">成約実績をすべて見る</TextLink>
          </div>
        </div>

        <ul className="mt-16 grid gap-8 md:mt-20 lg:grid-cols-3 lg:gap-8">
          {previews.map((record, idx) => (
            <Reveal
              key={record.slug}
              as="li"
              delay={idx * 120}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-base transition-all duration-500 ease-[cubic-bezier(0.2,0,0.2,1)] hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_30px_60px_-30px_rgba(26,26,26,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                {record.image ? (
                  <Image
                    src={record.image.src}
                    alt={record.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,0,0.2,1)] group-hover:scale-[1.06]"
                    style={{
                      objectPosition: record.image.objectPosition ?? 'center',
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 via-base to-neutral-200/40">
                    <p className="font-sans text-caption font-medium tracking-[0.3em] text-neutral-500">
                      NO IMAGE
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-sans text-caption font-medium tracking-[0.3em] text-accent">
                    {record.closedDisplay}
                  </span>
                  <span className="font-sans text-caption text-neutral-500">
                    {record.prefecture}
                    {record.area ? `・${record.area}` : ''}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-h4 md:text-h3-sm font-medium text-ink text-balance">
                  {record.name}
                </h3>
                <p className="mt-3 text-caption leading-[1.85] text-neutral-700">
                  {record.type}
                  {record.units ? `・${record.units}` : ''}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 md:hidden">
          <TextLink href="/cases">成約実績をすべて見る</TextLink>
        </div>
      </Container>
    </Section>
  );
}
