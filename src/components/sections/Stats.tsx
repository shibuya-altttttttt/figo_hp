import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';

const principles = [
  {
    index: '01',
    title: 'クライアントファーストの徹底。',
    description:
      '当社の業務は、お客様の不動産資産の価値を最大化・防衛することを唯一の目的として組み立てています。手数料収入や商品販売を起点とした提案は行わず、お客様にとって最も合理的な選択肢を、忖度なくお伝えします。',
  },
  {
    index: '02',
    title: 'ライフサイクル全体での資産戦略。',
    description:
      '取得・運用・売却・継承の各フェーズを分断せず、長期キャッシュフロー、税務影響、出口戦略まで一体で設計します。表面利回りや短期譲渡益ではなく、ホールド期間全体の総合リターンを判断軸とします。',
  },
  {
    index: '03',
    title: '利害関係の透明な開示。',
    description:
      'コンサルティング(お客様の代理)とプリンシパル投資(Figoによる買取・再生)の2つの立場を併せ持ち、案件ごとに役割を契約書面で明示します。立場の混在による誘導や情報の不均衡を、構造的に排除します。',
  },
  {
    index: '04',
    title: '守秘とコンプライアンスの徹底。',
    description:
      'お預かりする物件・資産・関係者情報は、機密保持契約(NDA)に準じた基準で管理。宅地建物取引業法、個人情報保護法、関連業法を遵守し、独立性のあるエグゼキューションを徹底します。',
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
              お客様の資産を、最大化と防衛のために。
            </h2>
            <p className="mt-6 text-body leading-[1.95] text-white/75">
              不動産業界には、さまざまな見方や慣行が存在します。Figoはそうした業界基準ではなく、お客様の不動産資産価値の最大化と防衛を唯一の目的とした、独立したプロフェッショナルの立場でコンサルティングを行います。日々の判断と提案を支える、4つの基準をここに置いています。
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
