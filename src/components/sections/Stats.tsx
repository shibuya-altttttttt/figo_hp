import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';

const principles = [
  {
    index: '01',
    title: '担当を、最後まで一貫させる。',
    description:
      '初回ヒアリングから出口の執行まで、窓口の途中交代はありません。同じ責任者が、同じ目線で継続的に伴走します。',
  },
  {
    index: '02',
    title: 'ライフサイクル全体で、価値を考える。',
    description:
      '購入・保有・売却・継承——どのフェーズも切り離さず、お客様の資産価値の最大化という一つのテーマで考えます。税務・法務・不動産の境界を越えて、最適な道筋を設計します。',
  },
  {
    index: '03',
    title: '立場を明確にして向き合う。',
    description:
      'コンサルティング(お客様の代理)と買取(Figo自身が買主)の2つの立場を持っています。案件ごとにどちらでお進めするか最初に明示し、お客様にとって最適な選択肢をご提案します。',
  },
  {
    index: '04',
    title: '家族の物語として、秘密厳守で扱う。',
    description:
      'ご家族ごとに事情と歴史があります。情報管理を徹底し、外部に共有することは一切ありません。対面・訪問にも柔軟に対応します。',
  },
];

export function Stats() {
  return (
    <Section id="principles" tone="ink" aria-labelledby="principles-heading">
      <Container>
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="section-heading-en !text-accent">Our Principles</p>
            <h2
              id="principles-heading"
              className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-white text-balance leading-[1.3]"
            >
              数字ではなく、姿勢で応える。
            </h2>
            <p className="mt-6 text-body leading-[1.95] text-white/75">
              Figoは「何件対応した」「いくら動かした」という過去の数字を前面に置きません。
              目の前のオーナー様お一人おひとりに、どれだけ時間をかけ、どれだけ誠実に向き合えるか。
              その姿勢を支える、四つの原則をここに置いています。
            </p>
            <dl className="mt-8 space-y-3 border-t border-white/10 pt-6 text-caption text-white/70">
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 font-sans tracking-wider text-white/50">免許</dt>
                <dd className="font-sans">宅地建物取引業 東京都知事(1)第112936号</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 font-sans tracking-wider text-white/50">拠点</dt>
                <dd className="font-sans">東京都港区新橋（対面・訪問対応）</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 font-sans tracking-wider text-white/50">領域</dt>
                <dd className="font-sans">不動産コンサルティング / 不動産再生</dd>
              </div>
            </dl>
          </div>

          <ol className="relative border-l border-white/10 pl-8 md:pl-12">
            {principles.map((principle, i) => (
              <Reveal
                key={principle.index}
                as="li"
                delay={i * 130}
                className={
                  i === principles.length - 1
                    ? 'relative'
                    : 'relative pb-12 md:pb-16'
                }
              >
                <span
                  className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center md:-left-[53px]"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <div className="flex items-baseline gap-5">
                  <span className="font-serif text-h2-sm md:text-h2 font-medium leading-none text-white/25">
                    {principle.index}
                  </span>
                  <h3 className="font-serif text-h3-sm md:text-h3 font-medium text-white">
                    {principle.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-xl text-body leading-[1.95] text-white/75">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
