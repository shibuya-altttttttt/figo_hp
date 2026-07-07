import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { BuyForm } from '@/components/sections/BuyForm';
import { ServiceJsonLd, FaqPageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: '購入のご相談（未公開物件のご紹介）',
  description:
    '一棟マンション・一棟アパートなどの収益不動産、土地・戸建ての購入相談。ポータルサイトに出る前の未公開物件を、ご条件に合う方に個別にご紹介します。登録無料、賃料の実勢・修繕リスク・出口まで実務目線で取得を支援。東京・新橋の株式会社Figo。',
  alternates: { canonical: '/buy' },
  openGraph: {
    title: '購入のご相談（未公開物件のご紹介） | 株式会社Figo(新橋)',
    description:
      'ポータルに出る前の未公開物件を個別にご紹介。登録無料、条件に合うときだけご連絡します。',
    url: '/buy',
  },
};

const approaches = [
  {
    number: '01',
    title: '未公開物件の、個別紹介',
    body: 'Figoは売主様から「情報を広げずに売りたい」というご依頼をお受けするため、ポータルサイトに出ない物件情報をお預かりしています。ご条件を登録いただいた方に、合致するものだけを個別にお持ちします。物件が出るたびに一斉配信する形ではありません。',
  },
  {
    number: '02',
    title: '買う側に立った、目利き',
    body: 'レントロールの賃料が周辺の実勢とずれていないか、大規模修繕はいつ・いくら控えているか、その価格で買って出口はあるか。売るための資料ではなく、買った後の数字で物件を評価してお渡しします。見送るべき物件は、見送るべきだと申し上げます。',
  },
  {
    number: '03',
    title: '資金計画から引渡しまで',
    body: '金融機関への打診資料の整え方、指値の入れ方、契約条件の調整、決済・引渡しまで担当ひとりが伴走します。初めての一棟取得でも、判断材料を順番に揃えながら進められます。',
  },
];

const flow = [
  {
    step: 'STEP 01',
    title: 'ご登録',
    description:
      'フォームから種別・エリア・予算をお知らせください。この時点で購入を決めている必要はありません。',
  },
  {
    step: 'STEP 02',
    title: 'ヒアリング',
    description:
      'ご希望の条件と資金計画を伺い、現実的な取得ラインを一緒に整理します。オンラインで30分ほどです。',
  },
  {
    step: 'STEP 03',
    title: '個別のご紹介',
    description:
      '条件に合う物件が出たときに、評価資料と一緒に個別にご案内します。合わない物件はお送りしません。',
  },
  {
    step: 'STEP 04',
    title: '取得支援〜お引渡し',
    description:
      '現地確認・条件交渉・融資調整・契約・決済まで伴走します。取得後の運営や出口のご相談も継続して承ります。',
  },
];

const faqs = [
  {
    question: '登録や紹介に費用はかかりますか？',
    answer:
      'かかりません。登録・ご相談・物件のご紹介まで無料です。費用が発生するのは、売買契約が成立したときの仲介手数料のみです。',
  },
  {
    question: 'どんな物件の紹介が多いですか？',
    answer:
      '東京23区・近郊都市の一棟マンション・一棟アパート・一棟ビルが中心です。売主様のご意向で表に出せない物件が多いため、具体的な物件情報はご登録いただいた方への個別のご案内に限らせていただいています。',
  },
  {
    question: '区分マンションや土地・戸建ての購入も相談できますか？',
    answer:
      'ご相談いただけます。取り扱いの中心は一棟収益ですが、区分マンションや土地・戸建ても、再生事業や売却案件に付随して情報をお預かりすることがあります。',
  },
  {
    question: '登録すると営業の連絡が来ますか？',
    answer:
      '最初のヒアリング以降は、ご条件に合う物件が出たときだけご連絡します。定期的な営業のお電話やメール配信は行いません。',
  },
];

export default function BuyPage() {
  return (
    <>
      <ServiceJsonLd
        name="収益不動産の購入支援・未公開物件のご紹介"
        description="一棟マンション・一棟アパート・一棟ビルなど収益不動産の購入支援。未公開物件の個別紹介、物件評価、融資調整、契約・決済まで伴走。登録無料。"
        url="/buy"
        serviceType="不動産売買仲介"
      />
      <FaqPageJsonLd items={faqs} />
      <PageHero
        eyebrow="Buy"
        title={
          <>
            良い物件は、
            <br />
            ポータルに
            <br className="md:hidden" />
            出る前に決まる。
          </>
        }
        lead="誰でも見られる情報から、他人より良い条件で買うのは難しい——収益不動産ではなおさらです。Figoは売主様から直接お預かりする未公開物件を、ご条件の合う方に個別にご紹介しています。登録は無料です。"
      />
      <Breadcrumb items={[{ label: '購入のご相談' }]} />

      <Section tone="base" aria-labelledby="buy-approach-heading">
        <Container>
          <SectionHeading
            id="buy-approach-heading"
            eyebrow="Our Approach"
            title={
              <>
                Figoの購入支援は、
                <br className="md:hidden" />
                3つ。
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

      <Section tone="neutral" aria-labelledby="buy-flow-heading">
        <Container>
          <SectionHeading
            id="buy-flow-heading"
            eyebrow="Flow"
            title={
              <>
                ご登録から
                <br className="md:hidden" />
                お引渡しまで。
              </>
            }
            lead="ご紹介した物件を必ず検討いただく必要はありません。条件と合わなければ、その理由をお聞かせいただくだけで精度が上がります。"
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

      <Section tone="base" aria-labelledby="buy-faq-heading">
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="section-heading-en text-accent">FAQ</p>
              <h2
                id="buy-faq-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                ご登録の前に、
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

      <Section tone="neutral" aria-labelledby="buy-form-heading" id="register">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-heading-en text-accent">Registration</p>
              <h2
                id="buy-form-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                ご条件を、
                <br />
                お聞かせください。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                種別・エリア・予算のおおよそが分かれば十分です。ご記入いただいた内容は厳重に管理し、ご紹介以外の目的では使用しません。
              </p>
            </aside>
            <div>
              <BuyForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
