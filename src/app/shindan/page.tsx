import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SellDiagnostic } from '@/components/sections/SellDiagnostic';

export const metadata: Metadata = {
  title: '3分でわかる 不動産売却の出口診断',
  description:
    '一棟・区分ワンルーム・土地戸建て・底地借地——残債や相続、空室など「売りにくい」不動産の出口を、4つの質問で診断。あなたに合う売り方と、手取りの考え方が分かります。株式会社Figo（東京・新橋）。',
  alternates: { canonical: '/shindan' },
  openGraph: {
    title: '3分でわかる 不動産売却の出口診断 | 株式会社Figo',
    description:
      '4つの質問で、あなたの不動産に合う出口と売り方が分かります。残債・相続・空室など「売りにくい」物件もお任せください。',
    url: '/shindan',
  },
};

const features = [
  {
    title: '4つの質問だけ',
    body: '物件のタイプと今のお悩みを選ぶだけ。個人情報の入力は不要で、その場で結果が出ます。',
  },
  {
    title: '手取りで考える',
    body: '売却価格ではなく、残債や税金を引いた後に手元へ残る金額を軸に、あなたに合う出口をご案内します。',
  },
  {
    title: '売れない物件こそ',
    body: '残債・築古・相続・空室・サブリース——大手が敬遠しがちな「売りにくい」物件の出口が専門です。',
  },
];

export default function ShindanPage() {
  return (
    <>
      <PageHero
        eyebrow="Diagnosis"
        title={
          <>
            3分でわかる、
            <br className="md:hidden" />
            売却の出口診断。
          </>
        }
        lead="残債、相続、空室、築古——「売れるのだろうか」「損しかしないのでは」と迷っている不動産。4つの質問に答えるだけで、あなたに合う出口と売り方の方向が分かります。個人情報の入力は不要です。"
      />
      <Breadcrumb items={[{ label: '売却の出口診断' }]} />

      <Section tone="base" aria-labelledby="shindan-heading">
        <Container>
          <h2 id="shindan-heading" className="sr-only">
            売却の出口診断
          </h2>
          <div className="mx-auto max-w-2xl">
            <SellDiagnostic />
          </div>
        </Container>
      </Section>

      <Section tone="neutral" aria-labelledby="shindan-features-heading">
        <Container>
          <h2 id="shindan-features-heading" className="sr-only">
            この診断について
          </h2>
          <dl className="grid gap-x-10 gap-y-10 md:grid-cols-3">
            {features.map((item) => (
              <div key={item.title} className="border-t border-neutral-200 pt-6">
                <dt className="font-serif text-h4 font-medium text-ink">{item.title}</dt>
                <dd className="mt-3 text-body leading-[1.9] text-neutral-700">{item.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </>
  );
}
