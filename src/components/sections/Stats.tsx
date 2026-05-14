import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';

const principles = [
  {
    index: '01',
    title: '一貫した責任者による案件統括。',
    description:
      '初回ヒアリングから契約・引渡・登記までの全工程を、同じ責任者が統括します。窓口の途中交代による情報の断絶や引継ぎロスを排除し、案件の質を最後まで保ちます。',
  },
  {
    index: '02',
    title: 'ライフサイクル全体での資産戦略。',
    description:
      '取得・運用・売却・継承の各フェーズを分断せず、長期キャッシュフロー、税務影響、出口戦略まで一体で設計します。表面利回りや短期譲渡益ではなく、ホールド期間全体の総合リターンを判断軸とします。',
  },
  {
    index: '03',
    title: 'デュアル・ポジショニングの開示。',
    description:
      'コンサルティング(お客様の代理)とプリンシパル投資(Figoによる買取・再生)の2つの立場を併せ持ち、案件ごとに役割を最初に明示します。利害相反の取扱方針を契約書面で透明化し、立場の混在を防ぎます。',
  },
  {
    index: '04',
    title: '守秘とコンプライアンスの徹底。',
    description:
      'お預かりする物件・資産・関係者情報は、機密保持契約(NDA)に準じた基準で管理します。情報共有は案件遂行に必要な範囲に限定し、宅地建物取引業法その他関連法令を遵守して取り扱います。',
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
