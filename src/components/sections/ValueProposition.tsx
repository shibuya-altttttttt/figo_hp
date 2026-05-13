import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';

const values = [
  {
    number: '01',
    title: 'お客様第一の姿勢',
    description:
      'お客様の立場に立った、誠実なサービス提供を徹底します。一人ひとりのご事情と目的に寄り添い、最適なソリューションを一緒に組み立てます。',
  },
  {
    number: '02',
    title: '専門性の追求',
    description:
      '不動産・税務・法務の最新知識と技術を学び続け、相続・資産継承の専門家として、お客様の判断に必要な情報を正確にお届けします。',
  },
  {
    number: '03',
    title: '長期的視点',
    description:
      '単発の取引で終わらせず、将来を見据えた持続可能なソリューションをご提案。購入から運用、売却・継承まで、ライフサイクル全体で伴走します。',
  },
];

export function ValueProposition() {
  return (
    <Section id="value-proposition" tone="base" aria-labelledby="value-heading">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <p className="section-heading-en">Why Figo</p>
            <h2
              id="value-heading"
              className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance leading-[1.25]"
            >
              Figoが大切にしている、3つの姿勢。
            </h2>
            <p className="mt-6 text-body md:text-body-lg leading-[1.95] text-neutral-700">
              不動産の取引には、不安や疑問がつきものです。だからこそFigoは、お客様一人ひとりに真正面から向き合うことを使命とし、3つの姿勢を大切にしています。
            </p>
            <p className="mt-6 font-serif text-h4 leading-[1.7] text-ink/80 md:text-h3-sm">
              &ldquo;価値を創り、価値を守る。&rdquo;
            </p>
            <p className="mt-2 text-caption text-neutral-500">
              Figoが大切にしている、3つの価値観。
            </p>
          </div>

          <ol className="md:col-span-7 md:pt-4">
            {values.map((value, i) => (
              <Reveal
                key={value.number}
                as="li"
                delay={i * 140}
                className={
                  i === 0
                    ? 'relative grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 border-t border-neutral-200 pt-10 md:gap-x-10 md:pt-12'
                    : 'relative mt-10 grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 border-t border-neutral-200 pt-10 md:mt-12 md:gap-x-10 md:pt-12'
                }
              >
                <span
                  className={
                    i % 2 === 0
                      ? 'font-serif text-display-sm md:text-display font-medium leading-none text-accent'
                      : 'font-serif text-display-sm md:text-display font-medium leading-none text-ink/15'
                  }
                  aria-hidden="true"
                >
                  {value.number}
                </span>
                <div className={i === 1 ? 'md:pt-3' : ''}>
                  <h3 className="font-serif text-h3-sm md:text-h3 font-medium text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-body leading-[1.95] text-neutral-700">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
