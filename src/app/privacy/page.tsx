import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    '株式会社Figoのプライバシーポリシー(個人情報の取り扱いに関する方針)。利用目的・第三者提供・安全管理措置・開示等のご請求方法を定めています。',
  alternates: { canonical: '/privacy' },
};

type SectionItem = {
  id: string;
  heading: string;
  content: React.ReactNode;
};

const sections: SectionItem[] = [
  {
    id: 'basic-policy',
    heading: '1. 基本方針',
    content: (
      <>
        <p>
          株式会社Figo(以下「当社」といいます)は、お客様の個人情報を取り扱うにあたり、個人情報の保護に関する法律(以下「個人情報保護法」)その他の関連法令およびガイドラインを遵守し、適切な取り扱いに努めます。
        </p>
        <p>
          当社は、不動産コンサルティング・不動産再生事業の遂行を通じて取得するお客様の個人情報について、安全管理措置を講じたうえで適切に取り扱います。
        </p>
      </>
    ),
  },
  {
    id: 'collection',
    heading: '2. 取得する個人情報',
    content: (
      <>
        <p>当社は、以下の方法により個人情報を取得することがあります。</p>
        <ul className="list-disc space-y-2 pl-6 marker:text-accent">
          <li>
            お問い合わせフォーム・電話・メール等を通じてお客様からご提供いただく情報(氏名、メールアドレス、電話番号、ご相談内容等)
          </li>
          <li>
            不動産取引に関する各種書類(売買契約・重要事項説明等)からご提供いただく情報
          </li>
          <li>
            当社ウェブサイトの利用状況に関する情報(Cookie、アクセスログ、IPアドレス、ブラウザ情報等)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'purpose',
    heading: '3. 利用目的',
    content: (
      <>
        <p>当社は、取得した個人情報を以下の目的のために利用します。</p>
        <ul className="list-disc space-y-2 pl-6 marker:text-accent">
          <li>不動産コンサルティング、売買・仲介、再生事業その他当社事業の提供および履行</li>
          <li>ご相談・お問い合わせへの対応</li>
          <li>関連サービス・商品のご案内、情報提供</li>
          <li>本人確認、契約手続、本人または代理人との連絡・確認</li>
          <li>サービス品質改善のための統計分析(個人を特定できない形での集計を含む)</li>
          <li>法令・行政当局・自主規制機関等への対応</li>
        </ul>
      </>
    ),
  },
  {
    id: 'third-party',
    heading: '4. 第三者提供',
    content: (
      <>
        <p>
          当社は、次のいずれかに該当する場合を除き、あらかじめお客様の同意を得ることなく個人情報を第三者に提供しません。
        </p>
        <ul className="list-disc space-y-2 pl-6 marker:text-accent">
          <li>法令に基づく場合</li>
          <li>
            人の生命、身体または財産の保護のために必要があり、お客様の同意を得ることが困難なとき
          </li>
          <li>
            公衆衛生の向上または児童の健全な育成の推進のため特に必要があり、お客様の同意を得ることが困難なとき
          </li>
          <li>
            国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することへ協力する必要があり、お客様の同意を得ることが事務の遂行に支障を及ぼすおそれがあるとき
          </li>
        </ul>
        <p>
          また、当社は、不動産取引その他のサービス遂行上必要な範囲で、提携の士業(税理士・司法書士・弁護士等)・施工会社・金融機関等に対し、必要最小限の情報を提供することがあります。
        </p>
      </>
    ),
  },
  {
    id: 'consignment',
    heading: '5. 業務委託',
    content: (
      <p>
        当社は、利用目的の達成に必要な範囲において、個人情報の取り扱いの全部または一部を外部に委託することがあります。この場合、当社は委託先との間で個人情報の取り扱いに関する契約を締結し、適切な監督を行います。
      </p>
    ),
  },
  {
    id: 'safety',
    heading: '6. 安全管理措置',
    content: (
      <>
        <p>
          当社は、個人情報への不正アクセス、紛失、破壊、改ざんおよび漏えい等を防止するため、組織的・人的・物理的・技術的な安全管理措置を講じます。
        </p>
        <p>
          具体的には、アクセス権限の管理、従業者への教育、データの暗号化、システム障害対策、外部攻撃への対策等を実施します。
        </p>
      </>
    ),
  },
  {
    id: 'disclosure',
    heading: '7. 開示・訂正・利用停止等のご請求',
    content: (
      <>
        <p>
          お客様は、ご自身の個人情報について、開示、訂正、追加、削除、利用停止、第三者提供の停止をご請求いただけます。ご請求は、後記お問い合わせ窓口までご連絡ください。
        </p>
        <p>
          ご請求にあたっては、本人確認のため必要な書類のご提示をお願いする場合があります。
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    heading: '8. Cookie等の利用',
    content: (
      <p>
        当社ウェブサイトでは、サービスの品質向上およびアクセス解析のためにCookie等を使用することがあります。Cookieはブラウザの設定により無効化することが可能ですが、その場合、サービスの一部機能をご利用いただけない場合があります。
      </p>
    ),
  },
  {
    id: 'change',
    heading: '9. 本ポリシーの改定',
    content: (
      <p>
        当社は、法令の改正、サービス内容の変更、その他の事由により、本プライバシーポリシーを改定することがあります。改定後の内容は、本ウェブサイトに掲載した時点で効力を生じるものとします。
      </p>
    ),
  },
  {
    id: 'contact',
    heading: '10. お問い合わせ窓口',
    content: (
      <>
        <p>本プライバシーポリシーに関するお問い合わせは、下記窓口までご連絡ください。</p>
        <dl className="mt-2 grid gap-3 border-y border-neutral-200 py-6 md:grid-cols-[120px_1fr] md:gap-4">
          <dt className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
            会社名
          </dt>
          <dd className="text-body text-ink">{siteConfig.name}</dd>
          <dt className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
            所在地
          </dt>
          <dd className="text-body text-ink">
            {siteConfig.address.postal} {siteConfig.address.full}
          </dd>
          <dt className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
            電話
          </dt>
          <dd className="text-body text-ink">
            <a
              href={`tel:${siteConfig.contact.tel}`}
              className="hover:text-accent"
            >
              {siteConfig.contact.telDisplay}
            </a>
          </dd>
          <dt className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
            お問い合わせ
          </dt>
          <dd className="text-body text-ink">
            <a href="/contact" className="hover:text-accent">
              お問い合わせフォーム
            </a>
          </dd>
        </dl>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="プライバシーポリシー。"
        lead="株式会社Figoは、お客様の個人情報を適切に取り扱い、その保護に努めます。"
      />
      <Breadcrumb items={[{ label: 'プライバシーポリシー' }]} />

      <Section tone="base">
        <Container size="prose">
          <div className="mb-12 flex flex-col gap-1 border-b border-neutral-200 pb-8 text-caption text-neutral-500">
            <p>制定日: 2025年8月1日</p>
            <p>最終改定: 2026年5月13日</p>
          </div>

          <div className="space-y-12 md:space-y-14">
            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-heading`}
              >
                <h2
                  id={`${s.id}-heading`}
                  className="font-serif text-h3-sm md:text-h3 font-medium text-ink leading-[1.4]"
                >
                  {s.heading}
                </h2>
                <div className="mt-5 space-y-4 text-body leading-[1.95] text-neutral-700">
                  {s.content}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-16 text-caption text-neutral-500">以上</p>
        </Container>
      </Section>
    </>
  );
}
