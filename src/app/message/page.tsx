import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CTABanner } from '@/components/ui/CTABanner';
import { PersonJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site';
import { team } from '@/lib/team';

export const metadata: Metadata = {
  title: '代表挨拶',
  description:
    '株式会社Figo代表、金潤求からのごあいさつ。お客様の大切な資産を次世代へ確実に継承するために——「顔が見える信頼関係」を大切に、お客様の課題と目標に真正面から向き合います。',
  alternates: { canonical: '/message' },
  openGraph: {
    title: '代表挨拶 | 株式会社Figo',
    description:
      'お客様の大切な資産を、次世代へ確実に継承するために。代表取締役 金潤求からのごあいさつ。',
    url: '/message',
  },
};

type MessageParagraph =
  | { kind: 'plain'; body: React.ReactNode }
  | { kind: 'pull'; pull: string; body: React.ReactNode };

const paragraphs: MessageParagraph[] = [
  {
    kind: 'plain',
    body: 'はじめまして。株式会社Figo 代表の金 潤求と申します。',
  },
  {
    kind: 'plain',
    body:
      '私はこれまで不動産業界に身を置き、お客様の大切な「暮らし」や「資産」に関わるこの仕事に、やりがいと責任を感じながら取り組んでまいりました。',
  },
  {
    kind: 'plain',
    body:
      '独立にあたり、「もっと柔軟に、もっと誠実に、お客様と向き合えるサービスを届けたい」という想いで、当社を設立いたしました。',
  },
  {
    kind: 'pull',
    pull: '顔が見える信頼関係を、大切に。',
    body: (
      <>
        不動産の取引には、不安や疑問がつきものです。だからこそ、私たちは
        <em className="font-serif font-medium not-italic text-ink underline decoration-accent decoration-2 underline-offset-[6px]">
          「顔が見える信頼関係」
        </em>
        を大切にし、不動産のプロフェッショナルとして、お客様の課題や目標に真正面から向き合うことを使命としています。
      </>
    ),
  },
  {
    kind: 'plain',
    body:
      '資産価値の保全・最大化（＝よりよい暮らし）を実現する「最適な選択肢」を提案することを約束します。',
  },
  {
    kind: 'plain',
    body: '不動産は「誰に相談するか」で、結果は大きく変わります。',
  },
  {
    kind: 'plain',
    body:
      '大切なご資産の未来を託していただける存在となれるよう、誠実に、そして柔軟に取り組んで参ります。今後とも、末永いお付き合いをよろしくお願い申し上げます。',
  },
];

const representative = team.find((m) => m.slug === 'kim-yungu');
const career = representative?.career ?? [];

const credo = [
  {
    title: 'お客様第一。',
    description:
      'お客様の立場に立った、誠実なサービス提供を徹底します。一人ひとりのご事情と目的に寄り添い、最善の選択肢を一緒に組み立てます。',
  },
  {
    title: '専門性の追求。',
    description:
      '不動産・税務・法務をはじめとする最新の知識と技術を学び続け、お客様の判断材料として正確な情報を提供します。',
  },
  {
    title: '長期的視点。',
    description:
      '単発の取引で終わらせず、将来を見据えた持続可能なソリューションをご提案します。次の世代へとつながる関係を築きます。',
  },
];

export default function MessagePage() {
  return (
    <>
      <PersonJsonLd
        name="金 潤求"
        givenName="潤求"
        familyName="金"
        alternateName="Kim Yun-Gu"
        jobTitle="代表取締役"
        description="株式会社Figo代表取締役。同志社大学卒業後、株式会社コスモスイニシアの不動産ソリューション事業にて法人向け投資用不動産の開発・仲介・運営に従事。2025年、株式会社Figoを創業。"
        alumniOf="同志社大学"
        knowsAbout={[
          '不動産売買',
          '不動産仲介',
          '不動産コンサルティング',
          '相続対策',
          '資産継承',
          '一棟マンション',
          '一棟ビル',
          '区分マンション',
        ]}
        url="/message"
      />
      <PageHero
        eyebrow="Representative Message"
        title="お客様の大切な資産を、次世代へ確実に。"
        lead={`${siteConfig.name} 代表取締役、金潤求からのごあいさつです。Figoがどのような姿勢でお客様の資産と向き合っているのか、率直にお伝えします。`}
      />
      <Breadcrumb items={[{ label: '代表挨拶' }]} />

      <Section tone="base" aria-labelledby="message-body-heading">
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <figure className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
                <Image
                  src="https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?auto=format&fit=crop&w=1400&q=80"
                  alt="Figoの拠点である東京・新橋のビル街"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover grayscale-[0.15]"
                />
                <div className="absolute inset-0 bg-ink/10" aria-hidden="true" />
                <figcaption className="absolute bottom-0 left-0 bg-accent px-5 py-4 text-white">
                  <p className="font-sans text-caption font-medium tracking-widest">
                    Representative
                  </p>
                  <p className="mt-1 font-serif text-h4">金潤求</p>
                  <p className="mt-1 font-sans text-caption tracking-wider text-white/85">
                    代表取締役 / Kim Yung
                  </p>
                </figcaption>
              </figure>
              <p className="mt-6 text-caption leading-relaxed text-neutral-500">
                ※ 本ページの写真は、Figoが拠点を置く東京・新橋エリアのイメージ画像です。代表ポートレートは差し替え予定です。
              </p>
            </div>

            <div>
              <p className="section-heading-en text-accent">Greeting</p>
              <h2
                id="message-body-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                ごあいさつ。
              </h2>

              <div className="mt-10 space-y-8 text-body md:text-body-lg leading-[1.95] text-neutral-700">
                {paragraphs.map((paragraph, index) =>
                  paragraph.kind === 'pull' ? (
                    <div key={index}>
                      <blockquote className="border-l-2 border-accent pl-6 font-serif text-h3-sm md:text-h3 leading-[1.5] text-ink">
                        「{paragraph.pull}」
                      </blockquote>
                      <p className="mt-6">{paragraph.body}</p>
                    </div>
                  ) : (
                    <p key={index}>{paragraph.body}</p>
                  ),
                )}
              </div>

              <div className="mt-12 border-t border-neutral-200 pt-6">
                <p className="font-sans text-caption font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Signature
                </p>
                <p className="mt-3 font-serif text-h4 font-medium text-ink">
                  株式会社Figo 代表取締役　金潤求
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="neutral" aria-labelledby="career-heading">
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-20">
            <div>
              <p className="section-heading-en text-accent">Career</p>
              <h2
                id="career-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                経歴。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                不動産仲介・コンサルティングの現場で積み重ねた経験を基盤に、相続・継承・再生の三領域を横断するサービスを提供しています。
              </p>
            </div>

            <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
              {career.map((item, i) => (
                <li
                  key={i}
                  className="py-4 text-body leading-[1.85] text-neutral-800 md:py-5"
                >
                  {item.body}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="base" aria-labelledby="credo-heading">
        <Container>
          <div className="max-w-3xl">
            <p className="section-heading-en text-accent">Values</p>
            <h2
              id="credo-heading"
              className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
            >
              仕事の中で、守り続けていること。
            </h2>
            <p className="mt-6 text-body leading-[1.95] text-neutral-700">
              Figoが日々の仕事の中で大切にしている、3つの価値観です。
            </p>
          </div>

          <ol className="mt-14 grid gap-x-10 gap-y-12 md:mt-20 md:grid-cols-3">
            {credo.map((item, index) => (
              <li
                key={item.title}
                className="flex flex-col border-t-2 border-accent/30 pt-6"
              >
                <span className="font-serif text-h3-sm leading-none text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-serif text-h4 font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-body leading-[1.9] text-neutral-700">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CTABanner
        eyebrow="Free Consultation"
        title="一度、お話を聞かせてください。"
        description="どこから始めればよいか分からない、という段階のご相談こそ、お引き受けしています。Figoの担当者が直接お伺いします。"
      />
    </>
  );
}
