import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { SellForm } from '@/components/sections/SellForm';
import { ButtonLink } from '@/components/ui/Button';
import { ServiceJsonLd, FaqPageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: '一棟マンション・一棟アパートの売却相談',
  description:
    '一棟マンション・一棟アパート・一棟ビルの売却相談。入居者がいるまま（オーナーチェンジ）、ローン残債があっても、近隣に知られずに売却できます。収益還元と積算の両面から根拠ある査定を無料で。東京・新橋の株式会社Figo。',
  alternates: { canonical: '/sell/income' },
  openGraph: {
    title: '一棟マンション・一棟アパートの売却相談 | 株式会社Figo',
    description:
      '入居者がいるまま、残債があっても、近隣に知られずに。一棟収益不動産の売却を手取り額から逆算してご提案します。査定無料。',
    url: '/sell/income',
  },
};

const situations = [
  {
    title: '相続した一棟アパートの結論が出ていない',
    body: '兄弟で共有のまま数年経ってしまった。持ち続けるのか、売って分けるのか。判断材料になる価格と税金の数字からお出しします。',
  },
  {
    title: 'ローンの残債が残っているが、売れるのか',
    body: '残債があっても売却は珍しいことではありません。売却価格と残債・諸費用を並べた手取り試算を先にご覧いただきます。',
  },
  {
    title: '修繕費と空室が増えてきた',
    body: '築年数が進むと、持ち続けるコストは静かに膨らみます。今売る場合と5年持つ場合の比較を数字でご説明します。',
  },
  {
    title: '減価償却が終わり、税負担が急に重くなった',
    body: '帳簿上は黒字なのに手残りが減っていく——いわゆるデッドクロスです。売り時の判断はこの局面のご相談が最も多いです。',
  },
  {
    title: 'そろそろ賃貸経営から離れたい',
    body: '入居者対応や管理会社とのやり取りも含めて手放したい、というご相談。引渡しまでの賃料はお客様のものです。',
  },
  {
    title: '入居者や近隣に知られたくない',
    body: 'ポータルサイトに載せず、買主候補に直接お持ちする「未公開」の売却が可能です。看板もチラシも出しません。',
  },
];

const approaches = [
  {
    number: '01',
    title: '価格に根拠を持たせる査定',
    body: '収益還元・積算・周辺の直近成約という3つの物差しで「なぜこの価格か」を説明できる査定書をお出しします。媒介を取るために相場より高い数字を出す、ということはしません。売れない値付けは結局お客様の時間を失わせるからです。',
  },
  {
    number: '02',
    title: '情報を広げない「未公開」売却',
    body: 'ポータルサイトに掲載せず、Figoが直接付き合いのある買主候補（投資家・事業会社・不動産会社）に個別にお持ちします。入居者・管理会社・近隣に知られずに、静かに売却を進められます。',
  },
  {
    number: '03',
    title: '手取り額から逆算して組み立てる',
    body: '売却価格ではなく「手元にいくら残るか」が本題です。譲渡税・残債の一括返済・抹消登記・仲介手数料まで含めた手取り試算を最初にお出しし、売却と保有継続の比較もその場でご説明します。',
  },
];

const flow = [
  {
    step: 'STEP 01',
    title: 'ご相談',
    description:
      'フォームまたはお電話で。物件の所在地とおおよその賃料が分かれば十分です。この時点で売却を決めている必要はありません。',
  },
  {
    step: 'STEP 02',
    title: '机上査定（無料）',
    description:
      'レントロールと固定資産税の課税明細を拝見し、概算の価格レンジと手取り試算をお出しします。登記情報の取得はこちらで行います。',
  },
  {
    step: 'STEP 03',
    title: '訪問・詳細査定',
    description:
      '現地と資料を確認のうえ、価格の根拠と売り方（未公開で進めるか、範囲を広げるか）をまとめた提案書をお渡しします。',
  },
  {
    step: 'STEP 04',
    title: '売却活動〜お引渡し',
    description:
      '買主候補への直接持ち込みから、契約・決済、確定申告に必要な資料のお渡しまで、担当ひとりが最後まで進行します。',
  },
];

const faqs = [
  {
    question: '入居者がいるままでも売れますか？',
    answer:
      'はい、売れます。入居者がいる状態のまま所有者だけが変わる「オーナーチェンジ」という売却方法で、収益物件では最も一般的です。入居者への立ち退き交渉は不要で、お引渡しまでの賃料収入はお客様のものです。',
  },
  {
    question: 'ローンの残債が売却価格を上回りそうです。売却できますか？',
    answer:
      '残債額によりますが、売却できないとは限りません。金融機関との調整や自己資金の充当など選択肢はいくつかあります。残債のおおよその額を伺えれば、売却した場合の手取りがプラスになるかマイナスになるかを先に試算してお伝えします。',
  },
  {
    question: '査定には何を用意すればいいですか？',
    answer:
      'レントロール（賃借人の一覧表）と固定資産税の課税明細書があれば、概算の査定が可能です。手元になければ所在地だけでも構いません。登記情報や周辺の成約事例はこちらで調べます。',
  },
  {
    question: '入居者や近隣に知られずに進められますか？',
    answer:
      'はい。ポータルサイトへの掲載や現地看板を使わず、買主候補に直接お持ちする「未公開」の売却が可能です。入居者や管理会社に知られるのは、売買が決まった後の必要なタイミングだけです。',
  },
  {
    question: '売却までどのくらいかかりますか？',
    answer:
      '物件と価格設定によりますが、目安は3〜6ヶ月です。価格を優先するか、早さを優先するかで組み立てが変わりますので、ご希望の時期を最初に伺ったうえで逆算した計画をお出しします。',
  },
  {
    question: '費用はいつ、いくらかかりますか？',
    answer:
      'ご相談と査定は無料です。費用が発生するのは売買契約が成立したときの仲介手数料で、ほかに譲渡所得税や抵当権の抹消登記費用などがかかります。これらはすべて最初の手取り試算に載せてお見せしますので、後から想定外の費用が出ることはありません。',
  },
];

export default function SellIncomePage() {
  return (
    <>
      <ServiceJsonLd
        name="一棟収益不動産の売却仲介"
        description="一棟マンション・一棟アパート・一棟ビルの売却仲介。オーナーチェンジ、残債がある物件、未公開での売却に対応。収益還元と積算による根拠ある無料査定。"
        url="/sell/income"
        serviceType="不動産売買仲介"
      />
      <FaqPageJsonLd items={faqs} />
      <PageHero
        eyebrow="Sell — Income Property"
        title={
          <>
            一棟収益
            <br className="md:hidden" />
            不動産の、売却。
          </>
        }
        lead="一棟マンション・一棟アパート・一棟ビルの売却は、住まいの売却とは進め方がまったく違います。入居者がいるまま、残債があっても、近隣に知られずに——手取り額から逆算して、ご一緒に組み立てます。"
      />
      <Breadcrumb
        items={[
          { label: '売却のご相談', href: '/sell' },
          { label: '一棟収益不動産の売却' },
        ]}
      />

      <Section tone="base" aria-labelledby="income-situations-heading">
        <Container>
          <SectionHeading
            id="income-situations-heading"
            eyebrow="Situations"
            title={
              <>
                こんな状況からの
                <br className="md:hidden" />
                ご相談が、
                <br className="md:hidden" />
                ほとんどです。
              </>
            }
            lead="売却を決めてからではなく、迷っている段階でご相談ください。判断材料になる数字を先にお出しするのがFigoの仕事です。"
          />
          <dl className="mt-14 grid gap-x-10 gap-y-12 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {situations.map((item) => (
              <div key={item.title} className="border-t border-neutral-200 pt-6">
                <dt className="font-serif text-h4 font-medium text-ink">
                  {item.title}
                </dt>
                <dd className="mt-3 text-body leading-[1.9] text-neutral-700">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="neutral" aria-labelledby="income-approach-heading">
        <Container>
          <SectionHeading
            id="income-approach-heading"
            eyebrow="Our Approach"
            title={
              <>
                Figoの売り方は、
                <br className="md:hidden" />
                3つだけ約束します。
              </>
            }
          />
          <div className="mt-14 space-y-12 md:mt-20">
            {approaches.map((item) => (
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

      <Section tone="base" aria-labelledby="income-flow-heading">
        <Container>
          <SectionHeading
            id="income-flow-heading"
            eyebrow="Flow"
            title={
              <>
                ご相談から
                <br className="md:hidden" />
                お引渡しまで。
              </>
            }
            lead="どの段階でも、進めるかどうかはお客様が決めることです。査定を受けたら売らなければならない、ということはありません。"
          />
          <ol className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-8">
            {flow.map((step) => (
              <li
                key={step.step}
                className="flex flex-col border-t-2 border-accent/30 pt-6"
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
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="neutral" aria-labelledby="income-faq-heading">
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="section-heading-en text-accent">FAQ</p>
              <h2
                id="income-faq-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                売却の前に、
                <br />
                よく聞かれること。
              </h2>
            </div>
            <dl className="space-y-10 md:space-y-12">
              {faqs.map((item) => (
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

      <Section tone="ink" aria-labelledby="income-guide-heading">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] md:gap-16">
            <div>
              <p className="section-heading-en text-accent">Free Guide</p>
              <h2
                id="income-guide-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-white text-balance"
              >
                「一棟オーナーの
                <br className="md:hidden" />
                出口ガイド」を無料配布。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-300">
                残債・築古・相続・空室・税金——「売りにくい」と感じている一棟を、仲介と買取の両面から手取りで考えるための小冊子です。よくある疑問と実務上の考え方を、7つのテーマにまとめました。ご相談の前の下調べにどうぞ。
              </p>
              <ul className="mt-6 space-y-2 text-body text-neutral-300">
                <li>・残債があっても売れるのか／任意売却という選択</li>
                <li>・旧耐震・築40年超・再建築不可の売り方</li>
                <li>・相続・共有・税金と、手取りの計算</li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-center md:text-center">
              <ButtonLink
                href="/guide/ittou-deguchi-guide.html"
                external
                variant="primary"
                size="lg"
                withArrow
              >
                ガイドを読む（無料）
              </ButtonLink>
              <p className="text-caption leading-relaxed text-neutral-400">
                別タブで開きます。ブラウザの印刷メニューから
                <br className="hidden md:block" />
                PDF保存もできます（登録不要）。
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="base" aria-labelledby="income-form-heading" id="consult">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-heading-en text-accent">Free Consultation</p>
              <h2
                id="income-form-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                まずは概算の価格と、
                <br />
                手取りの数字から。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                所在地とおおよその賃料が分かれば、机上査定が可能です。ご記入いただいた内容は厳重に管理し、ご相談以外の目的では使用しません。営業のお電話を重ねることもありません。
              </p>
            </aside>
            <div>
              <SellForm variant="income" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
