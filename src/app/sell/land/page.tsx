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
  title: '土地・戸建て（相続した実家・空き家）の売却相談',
  description:
    '相続した実家、空き家、使っていない土地、賃貸中の戸建ての売却相談。解体するかどうかの判断から、残置物の処分、相続登記の手配まで窓口ひとつで対応。仲介と業者買取の両方の手取りを比較してご提案します。東京・新橋の株式会社Figo。',
  alternates: { canonical: '/sell/land' },
  openGraph: {
    title: '土地・戸建て（相続した実家・空き家）の売却相談 | 株式会社Figo',
    description:
      '解体するかどうかの判断から、残置物・相続登記まで窓口ひとつ。仲介と業者買取の手取り比較でご提案します。査定無料。',
    url: '/sell/land',
  },
};

const situations = [
  {
    title: '実家を相続して、空き家のまま数年',
    body: '固定資産税だけ払い続けている状態です。空き家は放置期間が延びるほど建物が傷み、選択肢が減っていきます。現状の価格を知ることが最初の一歩です。',
  },
  {
    title: '家財（残置物）がそのままで手を付けられない',
    body: '仏壇や家財が残ったままでもご相談いただけます。処分費込みの手取りでご提示しますし、買取であれば現況のままのお引渡しも可能です。',
  },
  {
    title: '解体してから売るべきか、分からない',
    body: '解体費をかけたのに売値が変わらなかった、という失敗は珍しくありません。古家付きのまま売る場合との手取り比較を先にお出しします。',
  },
  {
    title: '兄弟で共有名義になっていて、まとまらない',
    body: '共有のまま置いておくと、次の相続でさらに関係者が増えます。全員が納得できる分け方の選択肢を、数字を挟んで整理します。',
  },
  {
    title: '貸している戸建てを手放したい',
    body: '入居者がいるまま投資家に売る方法と、退去を待って住まいとして売る方法があります。賃料と相場次第でどちらが有利か変わります。',
  },
  {
    title: '遠方に住んでいて、現地に行けない',
    body: '現地の確認、鍵の管理、各種立ち会いはこちらで行います。お打ち合わせから契約までオンラインと郵送で完結できます。',
  },
];

const approaches = [
  {
    number: '01',
    title: '「解体するか、しないか」から一緒に判断',
    body: '古家付きのまま売る、更地にして売る、業者に買い取ってもらう——出口は一つではありません。それぞれの売却価格と、解体費・測量費・税金を差し引いた手取りを並べて比較し、一番残る道を選んでいただきます。',
  },
  {
    number: '02',
    title: '仲介と業者買取、両方の実額を提示',
    body: '時間をかけて高く売る「仲介」と、早く確実に現金化する「業者買取」。どちらか一方に誘導するのではなく、両方の実額をお見せして、お客様の事情（時期・手間・確実さ）に合う方を選んでいただきます。',
  },
  {
    number: '03',
    title: '面倒ごとは、窓口ひとつで巻き取る',
    body: '残置物の処分、測量や越境の整理、未了の相続登記の司法書士手配、空き家の管理まで。売却に付いてくる細かな手配をFigoが窓口となって進めます。お客様が業者を探し回る必要はありません。',
  },
];

const flow = [
  {
    step: 'STEP 01',
    title: 'ご相談',
    description:
      'フォームまたはお電話で。所在地が分かれば十分です。「何から手を付ければいいか」という段階からで構いません。',
  },
  {
    step: 'STEP 02',
    title: '机上査定（無料）',
    description:
      '登記情報・公図・周辺の成約事例を調べ、概算の価格レンジをお出しします。固定資産税の課税明細書があればより精度が上がります。',
  },
  {
    step: 'STEP 03',
    title: '現地確認・手取り比較',
    description:
      '現地を確認のうえ、売り方ごと（現況・更地・買取）の手取り比較表をお渡しします。遠方の場合は現地対応をお任せいただけます。',
  },
  {
    step: 'STEP 04',
    title: '売却活動〜お引渡し',
    description:
      '残置物や登記などの段取りも含め、契約・決済まで担当ひとりが進行します。確定申告に必要な資料もお渡しします。',
  },
];

const faqs = [
  {
    question: '古い家は解体してから売るほうが高く売れますか？',
    answer:
      '一概には言えません。解体費をかけても売値がほとんど変わらないエリアや、古家付きのほうが買い手が付きやすいケースもあります。Figoでは「現況のまま」「更地にして」それぞれの手取り比較を先にお出しし、数字で判断していただきます。',
  },
  {
    question: '家財が残ったままでも相談できますか？',
    answer:
      'できます。残置物の処分費を織り込んだ手取りでご提示しますし、業者買取であれば家財が残ったまま現況でお引渡しできる場合もあります。ご自身で片付けてから、と考えて先延ばしになる方が一番多いので、そのままの状態でご相談ください。',
  },
  {
    question: '相続登記がまだ終わっていません。',
    answer:
      '売却のお引渡しまでに相続登記が必要ですが、査定や買い手探しは並行して進められます。提携の司法書士をご紹介しますので、登記と売却の段取りをまとめて組めます。',
  },
  {
    question: '遠方に住んでいても売却できますか？',
    answer:
      'できます。現地の確認・鍵の管理・解体や残置物処分の立ち会いはこちらで行い、お打ち合わせはオンライン、契約書類は郵送で対応します。一度も現地に行かずに売却が完了した例もあります。',
  },
  {
    question: '賃貸中の戸建ては、どうやって売るのですか？',
    answer:
      '2つの方法があります。入居者がいるまま投資家に売る方法（オーナーチェンジ）と、退去を待ってから住まいを探している方に売る方法です。現在の賃料と周辺相場によってどちらの手取りが多いか変わりますので、両方を試算して比較します。',
  },
  {
    question: '相談だけでも大丈夫ですか？売る気持ちが固まっていません。',
    answer:
      'もちろんです。査定を受けたら売らなければいけない、ということは一切ありません。試算の結果「今は売らないほうがいい」と判断すれば、その通りに申し上げます。',
  },
];

export default function SellLandPage() {
  return (
    <>
      <ServiceJsonLd
        name="土地・戸建ての売却仲介"
        description="相続した実家・空き家・土地・賃貸中の戸建ての売却仲介。解体判断、残置物処分、相続登記の手配まで対応。仲介と業者買取の手取り比較による無料査定。"
        url="/sell/land"
        serviceType="不動産売買仲介"
      />
      <FaqPageJsonLd items={faqs} />
      <PageHero
        eyebrow="Sell — Land & House"
        title={
          <>
            相続した実家、
            <br />
            使っていない
            <br className="md:hidden" />
            土地の売却。
          </>
        }
        lead="空き家の実家、使っていない土地、貸している戸建て——「何から手を付ければいいか」からで構いません。解体の要否、価格、手取りまで順番に整理します。"
        image={{
          src: '/images/hero/land.webp',
          alt: '土地・戸建てのイメージ',
        }}
      />
      <Breadcrumb
        items={[
          { label: '売却のご相談', href: '/sell' },
          { label: '土地・戸建ての売却' },
        ]}
      />

      <Section tone="base" aria-labelledby="land-situations-heading">
        <Container>
          <SectionHeading
            id="land-situations-heading"
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
            lead="きれいに片付いてから相談しよう、と考える必要はありません。今の状態のまま、現状整理からご一緒します。"
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

      <Section tone="neutral" aria-labelledby="land-approach-heading">
        <Container>
          <SectionHeading
            id="land-approach-heading"
            eyebrow="Our Approach"
            title={
              <>
                Figoの進め方は、
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

      <Section tone="base" aria-labelledby="land-flow-heading">
        <Container>
          <SectionHeading
            id="land-flow-heading"
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

      <Section tone="neutral" aria-labelledby="land-faq-heading">
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="section-heading-en text-accent">FAQ</p>
              <h2
                id="land-faq-heading"
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

      <Section tone="ink" aria-labelledby="land-guide-heading">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] md:gap-16">
            <div>
              <p className="section-heading-en text-accent">Free Guide</p>
              <h2
                id="land-guide-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-white text-balance"
              >
                「土地・戸建ての
                <br className="md:hidden" />
                出口ガイド」を無料配布。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-300">
                相続した実家、空き家、使っていない土地——名義・解体・税の特例まで、手取りで考えるための小冊子です。よくある疑問と実務上の考え方を、5つのテーマにまとめました。ご相談の前の下調べにどうぞ。
              </p>
              <ul className="mt-6 space-y-2 text-body text-neutral-300">
                <li>・相続した実家・空き家の名義と放置リスク</li>
                <li>・解体するか、古家付きで売るか</li>
                <li>・3,000万円特別控除と、手取りの計算</li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-center md:text-center">
              <ButtonLink
                href="/guide/tochi-deguchi-guide.html"
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

      <Section tone="base" aria-labelledby="land-form-heading" id="consult">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-heading-en text-accent">Free Consultation</p>
              <h2
                id="land-form-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                まずは、いくらで
                <br />
                売れるのかを知る。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                所在地が分かれば机上査定が可能です。ご記入いただいた内容は厳重に管理し、ご相談以外の目的では使用しません。営業のお電話を重ねることもありません。
              </p>
            </aside>
            <div>
              <SellForm variant="land" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
