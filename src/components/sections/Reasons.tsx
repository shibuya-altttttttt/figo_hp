import { Scale, Clock, Users, MapPin, FileSearch, MessagesSquare } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const reasons = [
  {
    icon: Scale,
    title: '立場を明確にしたご提案',
    description:
      'コンサルティング(お客様の代理)と買取(Figoが直接買主)の2つの立場で対応します。案件ごとにどちらでお進めするかを最初に明示し、利害関係を整理したうえで判断材料をお出しします。',
  },
  {
    icon: Users,
    title: '家族間の合意形成サポート',
    description:
      '相続人同士の意見が食い違う場面でも、第三者として論点を整理し、全員が納得できる着地点を探るお手伝いをします。',
  },
  {
    icon: FileSearch,
    title: '複雑な権利関係の整理',
    description:
      '共有名義、借地権、抵当権、越境、未登記など、入り組んだ権利関係も丁寧に紐解き、進められる形に整えます。',
  },
  {
    icon: Clock,
    title: '相続発生前からの準備',
    description:
      '相続が発生してからでは選択肢が限られます。発生前から10年単位で継承設計を行い、税務・家族関係の両面で備えを築きます。',
  },
  {
    icon: MapPin,
    title: '遠方物件・地方案件に対応',
    description:
      '東京だけでなく、地方の遠隔地にある実家や収益物件も対象。現地調査や地元事業者との連携を含めて支援します。',
  },
  {
    icon: MessagesSquare,
    title: '秘密厳守・個別対応',
    description:
      '資産や家族の話はデリケートな領域。情報管理を徹底し、ご相談内容を外部に共有することは一切ありません。',
  },
];

export function Reasons() {
  return (
    <Section id="reasons" tone="neutral" aria-labelledby="reasons-heading">
      <Container>
        <SectionHeading
          id="reasons-heading"
          eyebrow="Reasons to Choose"
          title="Figoが選ばれている、6つの理由。"
          lead="私たちがお客様との関係を築くうえで、最も大切にしている視点をまとめました。"
          align="center"
        />

        <div className="mt-14 grid gap-x-8 gap-y-10 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={(idx % 3) * 100} className="flex gap-5">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-base text-accent"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-h4 font-medium text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-body leading-[1.9] text-neutral-700">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
