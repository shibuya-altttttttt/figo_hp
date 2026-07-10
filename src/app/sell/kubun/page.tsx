import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import Link from 'next/link';
import { SellForm } from '@/components/sections/SellForm';
import { newsArticles } from '@/lib/news';
import { ServiceJsonLd, FaqPageJsonLd } from '@/components/seo/JsonLd';

const relatedColumnSlugs = [
  'column-kubun-sonkiri',
  'column-kubun-urenai',
  'column-kubun-sublease',
  'column-kubun-overloan',
  'column-shinchiku-wanroom-shippai',
  'column-kubun-kushitsu',
  'column-kubun-kaitori-vs-chukai',
  'column-kubun-souzoku',
  'column-kubun-kanrihi-neage',
  'column-kubun-chihou',
  'column-kubun-fukusuu',
  'column-kubun-nenkin-akaji',
];

const relatedColumns = relatedColumnSlugs
  .map((slug) => newsArticles.find((article) => article.slug === slug))
  .filter((article): article is (typeof newsArticles)[number] => Boolean(article));

export const metadata: Metadata = {
  title: '区分投資マンション（ワンルーム）の売却相談',
  description:
    'ワンルーム・区分投資マンションの売却相談。残債が売値を上回る、サブリース中、新築で買って損が出そう、空室——「売りにくい」区分こそ、仲介と買取の両面から手取り額で考えます。査定無料。東京・新橋の株式会社Figo。',
  alternates: { canonical: '/sell/kubun' },
  openGraph: {
    title: '区分投資マンション（ワンルーム）の売却相談 | 株式会社Figo',
    description:
      '残債があっても、サブリース中でも、損切りでも。区分投資マンションの出口を、手取り額から逆算してご提案します。査定無料。',
    url: '/sell/kubun',
  },
};

const situations = [
  {
    title: '毎月の持ち出しが続いている',
    body: '家賃よりローン返済と管理費・修繕積立金のほうが多く、赤字が続いている。「いつまで持てばいいのか」の判断材料になる数字からお出しします。',
  },
  {
    title: '残債が売却価格を上回りそう',
    body: 'フルローンや新築で買った区分は、残債が売値を上回りやすいもの。売った場合の手出し額を先に試算し、団信や繰上げも含めて選択肢を整理します。',
  },
  {
    title: 'サブリース（家賃保証）を解約できない',
    body: '保証があるまま売れるのか、解約してから売るべきか。順番を間違えると損をします。付いたまま売る方法も含めてご説明します。',
  },
  {
    title: '新築で買ったが、失敗だったかもしれない',
    body: '新築プレミアムが剥落し、売ろうとしたら大きく値下がりしていた——よくあるご相談です。傷は浅いうちのほうが浅い、という現実を数字でお見せします。',
  },
  {
    title: '空室のまま埋まらない',
    body: '空室の区分は売れないと思われがちですが、買い手と価格の付け方を知れば売れます。埋めてから売るか、現況で売るかも比較します。',
  },
  {
    title: '相続した区分を持て余している',
    body: '親から相続したワンルーム。収益性も出口も分からないまま管理費だけ払っている、というご相談。持つ意味があるかから一緒に考えます。',
  },
];

const approaches = [
  {
    number: '01',
    title: '「いくら足りないか」を先に出す',
    body: '区分の売却で最初に必要なのは、格好いい査定書ではなく「売ったら手元にいくら残るか（または足りないか）」の一枚です。残債の一括返済・仲介手数料・譲渡税・抵当権抹消まで含めた手取り試算を最初にお出しします。プラスかマイナスかが分かって初めて、売る・持つの判断ができます。',
  },
  {
    number: '02',
    title: '仲介と買取、両方の実額を並べる',
    body: 'Figoは区分の仲介も買取も行っています。だから一方に誘導せず、「仲介で市場に出した場合の手取り」と「買取で今すぐ確実に売る場合の手取り」を並べてお見せします。残債やサブリースで急ぐ事情があるほど、この比較が効きます。',
  },
  {
    number: '03',
    title: '売り急ぎの足元を見られない売り方',
    body: '困っている区分オーナーは、業者に足元を見られやすい立場です。相見積もりの取り方、サブリース解約の順番、任意売却が要るかどうかまで、こちらの利益ではなくお客様の手取りが最大になる進め方をご提案します。',
  },
];

const flow = [
  {
    step: 'STEP 01',
    title: 'ご相談',
    description:
      'フォームまたはお電話で。物件名（または所在地）とおおよその家賃・残債が分かれば十分です。売却を決めている必要はありません。',
  },
  {
    step: 'STEP 02',
    title: '机上査定・手取り試算（無料）',
    description:
      '成約事例と収益から概算の価格レンジを出し、残債・諸費用を差し引いた手取りを試算します。マイナスなら、その額と抑え方までお伝えします。',
  },
  {
    step: 'STEP 03',
    title: '売り方のご提案',
    description:
      '仲介と買取の実額を並べ、サブリースの扱いや売却の時期も含めた進め方をまとめてお渡しします。ここで初めて、進めるかどうかをお決めいただきます。',
  },
  {
    step: 'STEP 04',
    title: '売却〜お引渡し',
    description:
      '買主候補への持ち込みや買取の実行から、契約・決済、確定申告に必要な資料のお渡しまで、担当ひとりが最後まで進行します。',
  },
];

const faqs = [
  {
    question: '残債が売却価格を上回っていても売れますか？',
    answer:
      '売れないとは限りません。決済日に売却代金と手元資金でローンを完済し、抵当権を抹消できれば売却は成立します。まず「売ったらいくら足りないか」を試算し、自己資金の充当、金融機関との調整（任意売却）など、不足への対処法を整理してお伝えします。',
  },
  {
    question: 'サブリース（家賃保証）契約中でも売却できますか？',
    answer:
      'できます。サブリースが付いたまま「オーナーチェンジ」で売る方法と、解約してから売る方法があり、どちらが手取りで有利かは契約内容と買い手によります。解約には条件や違約金が絡むため、売却の順番を含めてご説明します。',
  },
  {
    question: '新築で買ったばかりですが、売ると大きく損しそうです。',
    answer:
      '新築ワンルームは購入直後に新築プレミアムが剥落し、売却価格が下がるのが一般的です。つらい判断ですが、赤字が続く物件は持ち続けるほど損失が積み上がることもあります。売った場合と持ち続けた場合の手残りを数字で比較し、損切りが妥当かを一緒に検討します。',
  },
  {
    question: '空室のままですが査定できますか？',
    answer:
      'できます。空室でも、想定家賃や近隣の成約事例から価格を出せます。空室区分は「埋めてから売る」か「現況のまま売る」かで手取りと時間が変わりますので、両方を比較してご提案します。',
  },
  {
    question: '査定や相談にお金はかかりますか？',
    answer:
      'ご相談と査定は無料です。費用が発生するのは売買契約が成立したときの仲介手数料で、ほかに譲渡所得税や抵当権抹消の登記費用などがかかります。これらはすべて最初の手取り試算に載せてお見せしますので、後から想定外の費用が出ることはありません。',
  },
];

export default function SellKubunPage() {
  return (
    <>
      <ServiceJsonLd
        name="区分投資マンション（ワンルーム）の売却仲介・買取"
        description="ワンルーム・区分投資マンションの売却仲介および買取。残債がある物件、サブリース中の物件、空室・新築失敗の区分にも対応。手取り額から逆算する無料査定。"
        url="/sell/kubun"
        serviceType="不動産売買仲介"
      />
      <FaqPageJsonLd items={faqs} />
      <PageHero
        eyebrow="Sell — Investment Condo"
        title={
          <>
            区分投資マンション
            <br className="md:hidden" />
            の、売却。
          </>
        }
        lead="ワンルーム・区分の投資マンションは、残債・サブリース・新築プレミアムの剥落で「売りにくい」と感じやすい資産です。仲介と買取の両面から、手元にいくら残るか——手取り額で、ご一緒に出口を組み立てます。"
      />
      <Breadcrumb
        items={[
          { label: '売却のご相談', href: '/sell' },
          { label: '区分投資マンションの売却' },
        ]}
      />

      <Section tone="base" aria-labelledby="kubun-situations-heading">
        <Container>
          <SectionHeading
            id="kubun-situations-heading"
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
            lead="売ると決めてからではなく、迷っている段階でご相談ください。判断材料になる数字を先にお出しするのがFigoの仕事です。"
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

      <Section tone="neutral" aria-labelledby="kubun-approach-heading">
        <Container>
          <SectionHeading
            id="kubun-approach-heading"
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

      <Section tone="base" aria-labelledby="kubun-flow-heading">
        <Container>
          <SectionHeading
            id="kubun-flow-heading"
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

      <Section tone="neutral" aria-labelledby="kubun-faq-heading">
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="section-heading-en text-accent">FAQ</p>
              <h2
                id="kubun-faq-heading"
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

      <Section tone="base" aria-labelledby="kubun-columns-heading">
        <Container>
          <SectionHeading
            id="kubun-columns-heading"
            eyebrow="Columns"
            title={
              <>
                区分の出口を、
                <br className="md:hidden" />
                テーマ別に解説。
              </>
            }
            lead="残債・サブリース・新築の値下がり・相続——区分オーナーが直面しやすいテーマごとに、実務上の考え方をまとめています。ご自身の状況に近いものからどうぞ。"
          />
          <ul className="mt-14 grid gap-x-10 gap-y-6 md:mt-20 md:grid-cols-2">
            {relatedColumns.map((article) => (
              <li key={article.slug} className="border-t border-neutral-200 pt-5">
                <Link
                  href={`/news/${article.slug}`}
                  className="group flex items-start gap-3 text-body font-medium text-ink transition-colors hover:text-accent"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span className="leading-[1.7]">{article.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="base" aria-labelledby="kubun-form-heading" id="consult">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-heading-en text-accent">Free Consultation</p>
              <h2
                id="kubun-form-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                まずは概算の価格と、
                <br />
                手取りの数字から。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                物件名（または所在地）とおおよその家賃・残債が分かれば、机上査定と手取り試算が可能です。ご記入いただいた内容は厳重に管理し、ご相談以外の目的では使用しません。営業のお電話を重ねることもありません。
              </p>
            </aside>
            <div>
              <SellForm variant="kubun" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
