import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const metadata: Metadata = {
  title: '利用規約',
  description:
    '株式会社Figoの利用規約。本ウェブサイトおよび当社サービスの利用条件、著作権、免責事項、禁止事項、準拠法等を定めています。',
  alternates: { canonical: '/terms' },
};

type SectionItem = {
  id: string;
  heading: string;
  content: React.ReactNode;
};

const sections: SectionItem[] = [
  {
    id: 'application',
    heading: '第1条(適用)',
    content: (
      <>
        <p>
          本利用規約(以下「本規約」)は、株式会社Figo(以下「当社」)が運営するウェブサイト
          <a href="https://www.f-figo.com" className="text-ink underline underline-offset-4 hover:text-accent">
            https://www.f-figo.com
          </a>
          (以下「本サイト」)および当社が提供する関連サービスのご利用条件を定めるものです。
        </p>
        <p>
          利用者は、本サイトをご利用いただくことにより、本規約のすべての条項に同意したものとみなします。
        </p>
      </>
    ),
  },
  {
    id: 'content',
    heading: '第2条(掲載内容)',
    content: (
      <>
        <p>
          本サイトに掲載されている情報は、当社が信頼できると判断した情報に基づき、適切性に配慮して掲載しておりますが、その内容の正確性、完全性、有用性、最新性等について保証するものではありません。
        </p>
        <p>
          法令、判例、税制、市況等は本サイトの掲載時点の情報に基づいており、その後の変更により内容が現状と異なる場合があります。具体的な判断にあたっては、別途専門家にご確認ください。
        </p>
      </>
    ),
  },
  {
    id: 'copyright',
    heading: '第3条(著作権・知的財産権)',
    content: (
      <>
        <p>
          本サイトおよび本サイトに掲載されているすべてのコンテンツ(文章、写真、画像、動画、ロゴ、デザイン、ソースコード等)に関する著作権その他の知的財産権は、当社または正当な権利者に帰属します。
        </p>
        <p>
          私的使用その他法律によって認められる範囲を超えて、当社の事前の書面による許諾なく、本サイトのコンテンツを複製、転載、公衆送信、改変、翻訳、頒布、販売その他の方法で利用することを禁じます。
        </p>
      </>
    ),
  },
  {
    id: 'links',
    heading: '第4条(リンク)',
    content: (
      <>
        <p>
          本サイトへのリンクは原則として自由ですが、以下のいずれかに該当する場合はお断りすることがあります。
        </p>
        <ul className="list-disc space-y-2 pl-6 marker:text-accent">
          <li>当社または第三者を誹謗中傷する、または名誉・信用を毀損する目的のサイトからのリンク</li>
          <li>公序良俗に反する内容を含むサイトからのリンク</li>
          <li>本サイトのコンテンツを改変・加工して表示するサイトからのリンク</li>
          <li>その他、当社が不適切と判断するサイトからのリンク</li>
        </ul>
        <p>
          本サイトから外部サイトへリンクが設定されている場合、当該リンク先サイトは当社の管理下にあるものではなく、その内容について当社は責任を負いません。
        </p>
      </>
    ),
  },
  {
    id: 'prohibited',
    heading: '第5条(禁止事項)',
    content: (
      <>
        <p>利用者は、本サイトのご利用にあたり、以下の行為を行ってはなりません。</p>
        <ul className="list-disc space-y-2 pl-6 marker:text-accent">
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>当社または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
          <li>本サイトの運営を妨害する行為、または当社のシステムに過度な負荷をかける行為</li>
          <li>本サイトに不正にアクセスする行為、ウイルス等の有害なプログラムを送信する行為</li>
          <li>本サイトの情報を、当社の事前の書面による許諾なく、商業目的で使用する行為</li>
          <li>その他、当社が不適切と判断する行為</li>
        </ul>
      </>
    ),
  },
  {
    id: 'disclaimer',
    heading: '第6条(免責事項)',
    content: (
      <>
        <p>
          当社は、本サイトの内容、ご利用に起因して利用者または第三者に生じた一切の損害(直接損害、間接損害、特別損害、結果損害、逸失利益等を含む)について、当社に故意または重過失がある場合を除き、責任を負わないものとします。
        </p>
        <p>
          当社は、本サイトの内容を予告なく変更、追加、削除することがあり、これにより利用者または第三者に生じた損害について、責任を負わないものとします。
        </p>
        <p>
          当社は、本サイトを利用できない期間が発生した場合、これにより利用者または第三者に生じた損害について、責任を負わないものとします。
        </p>
      </>
    ),
  },
  {
    id: 'personal-info',
    heading: '第7条(個人情報の取り扱い)',
    content: (
      <p>
        当社は、利用者の個人情報を、別途定める
        <a href="/privacy" className="text-ink underline underline-offset-4 hover:text-accent">
          プライバシーポリシー
        </a>
        に従い、適切に取り扱います。
      </p>
    ),
  },
  {
    id: 'modification',
    heading: '第8条(本規約の変更)',
    content: (
      <p>
        当社は、必要と判断した場合、利用者への事前の通知なく、本規約をいつでも変更することができるものとします。変更後の本規約は、本サイトに掲載された時点から効力を生じるものとします。利用者は、定期的に本規約をご確認ください。
      </p>
    ),
  },
  {
    id: 'law',
    heading: '第9条(準拠法・管轄裁判所)',
    content: (
      <>
        <p>本規約の解釈および適用は、日本国の法令に従うものとします。</p>
        <p>
          本サイトおよび本規約に関する紛争が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="利用規約。"
        lead="本ウェブサイトおよび株式会社Figoのサービスをご利用いただくための条件を定めています。"
      />
      <Breadcrumb items={[{ label: '利用規約' }]} />

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
