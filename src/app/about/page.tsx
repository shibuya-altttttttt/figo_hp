import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { CTABanner } from '@/components/ui/CTABanner';
import { LocalBusinessJsonLd, PersonJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site';
import { services } from '@/lib/services';
import { team } from '@/lib/team';

export const metadata: Metadata = {
  title: '会社概要',
  description:
    '東京都港区新橋の不動産コンサルティング会社、株式会社Figoの会社概要。代表・役員・所在地(新橋プレイス609)・連絡先・宅地建物取引業免許番号(東京都知事(1)第112936号)をご紹介します。',
  alternates: { canonical: '/about' },
  openGraph: {
    title: '会社概要 | 株式会社Figo(新橋)',
    description:
      '東京都港区新橋を拠点に、不動産コンサルティング・再生事業を行う株式会社Figoの会社概要。代表取締役・取締役の経歴、所在地、免許情報。',
    url: '/about',
  },
};

const stances = [
  {
    title: 'クライアントの資産価値を、最優先する。',
    description:
      'お客様の不動産資産の最大化と防衛のみを目的にコンサルティングを行います。手数料収入や自社プロダクトを起点とした提案は行わず、お客様にとって最も合理的な選択肢を、忖度なくお伝えします。',
  },
  {
    title: 'ライフサイクル全体で、伴走する。',
    description:
      '取得・運用・売却・継承の各フェーズを分断せず、ホールド期間全体の総合リターンを軸に設計します。短期成約や表面利回りではなく、お客様の長期資産価値の最大化を判断軸とします。',
  },
  {
    title: '進行管理を、一本化する。',
    description:
      '税理士・司法書士・施工会社等の専門家ネットワークとの調整は、Figoが間に立ってワンストップで進行管理します。お客様が同じ説明を繰り返す必要はなく、案件全体の品質と意思決定スピードを保ちます。',
  },
];

const profile: { label: string; value: React.ReactNode }[] = [
  { label: '会社名', value: `${siteConfig.name}（${siteConfig.nameEn}）` },
  { label: '設立', value: siteConfig.founded },
  {
    label: '役員',
    value: (
      <ul className="space-y-1">
        {siteConfig.officers.map((officer) => (
          <li key={officer.name}>
            <span className="font-sans text-caption tracking-wider text-neutral-500">
              {officer.role}
            </span>
            <span className="ml-3">{officer.name}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    label: '所在地',
    value: (
      <>
        {siteConfig.address.postal}
        <br />
        東京都港区新橋1-12-9 新橋プレイス609
      </>
    ),
  },
  {
    label: '電話',
    value: (
      <a href={`tel:${siteConfig.contact.tel}`} className="hover:text-accent">
        {siteConfig.contact.telDisplay}
      </a>
    ),
  },
  { label: '営業時間', value: siteConfig.contact.hours },
  {
    label: '事業内容',
    value: (
      <ul className="space-y-1">
        <li>不動産の売買および仲介業務</li>
        <li>不動産の相続・財産管理、資産継承のコンサルティング業務</li>
        <li>不動産再生事業</li>
      </ul>
    ),
  },
  { label: '免許', value: siteConfig.licenseNumber },
];

const mapEmbedSrc =
  'https://maps.google.com/maps?q=' +
  encodeURIComponent(`${siteConfig.address.prefecture}${siteConfig.address.city}${siteConfig.address.street}`) +
  '&t=&z=15&ie=UTF8&iwloc=&output=embed';

export default function AboutPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <PersonJsonLd
        name="金 潤求"
        givenName="潤求"
        familyName="金"
        alternateName="Kim Yun-Gu"
        jobTitle="代表取締役"
        description="不動産業界での経験を基盤に、相続・資産継承の専門家として、購入・保有・売却のライフサイクル全体でお客様の資産継承をサポート。"
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
          '収益不動産',
        ]}
        url="/about"
      />
      <PersonJsonLd
        name="渋谷 優太"
        givenName="優太"
        familyName="渋谷"
        alternateName="Shibuya Yuta"
        jobTitle="取締役"
        description="不動産デベロッパーでの開発・運用と、SUUMOでの広告営業を通じて培った業界知見を活かし、Figoの不動産コンサルティング・再生事業を共同で推進。"
        alumniOf="北海道大学"
        knowsAbout={[
          '不動産開発',
          '不動産運用',
          '賃貸経営',
          '不動産再生',
          '物件選定',
          '新規事業開発',
          '不動産広告',
        ]}
        url="/about"
      />
      <PageHero
        eyebrow="About"
        title={
          <>
            価値を創り、
            <br className="sm:hidden" />
            価値を守る会社。
          </>
        }
        lead="株式会社Figoは、東京・新橋を拠点に不動産コンサルティング・不動産再生事業を行う専門会社です。購入・保有・売却・継承のライフサイクル全体で、お客様の不動産資産の最大化と防衛を、独立したプロフェッショナルの立場で支えます。"
      />
      <Breadcrumb items={[{ label: '会社概要' }]} />

      <Section tone="base" aria-labelledby="company-profile-heading">
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="section-heading-en text-accent">Company Profile</p>
              <h2
                id="company-profile-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                会社概要。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                Figoの基本情報です。ご相談・お打ち合わせは、対面・オンライン・訪問のいずれにも対応しています。
              </p>
            </div>

            <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
              {profile.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-3 py-5 md:grid-cols-[minmax(0,140px)_1fr] md:gap-8 md:py-6"
                >
                  <dt className="font-sans text-caption font-medium uppercase tracking-[0.2em] text-neutral-500">
                    {item.label}
                  </dt>
                  <dd className="text-body leading-[1.85] text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Section tone="neutral" aria-labelledby="leadership-heading">
        <Container>
          <SectionHeading
            id="leadership-heading"
            eyebrow="Leadership"
            title="役員紹介。"
            lead="代表取締役・取締役の経歴をご紹介します。"
          />

          <div className="mt-14 md:mt-20">
            {team.map((member, index) => (
              <article
                key={member.slug}
                className={
                  'grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-20 ' +
                  (index === 0
                    ? 'pb-14 md:pb-20'
                    : 'border-t border-neutral-200 py-14 md:py-20')
                }
              >
                <header className="md:sticky md:top-28 md:self-start">
                  <p className="font-sans text-caption uppercase tracking-[0.3em] text-neutral-500">
                    {member.roleEn}
                  </p>
                  <h3 className="mt-4 font-serif text-h3-sm md:text-h3 font-medium text-neutral-800">
                    {member.name}
                  </h3>
                  <p className="mt-2 font-sans text-caption tracking-[0.15em] text-neutral-500">
                    {member.role}
                    <span className="mx-2 text-neutral-300">/</span>
                    {member.nameEn}
                  </p>
                  {member.lead ? (
                    <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                      {member.lead}
                    </p>
                  ) : null}
                </header>

                <div>
                  <p className="font-sans text-caption font-medium uppercase tracking-[0.25em] text-neutral-500">
                    Career
                  </p>
                  <dl className="mt-6 divide-y divide-neutral-200 border-t border-neutral-200 md:mt-8">
                    {member.career.map((item, i) => (
                      <div
                        key={`${member.slug}-${i}`}
                        className="grid grid-cols-[80px_1fr] gap-4 py-4 md:grid-cols-[110px_1fr] md:gap-8 md:py-5"
                      >
                        <dt className="font-sans text-caption tracking-[0.1em] text-neutral-500">
                          {item.period}
                        </dt>
                        <dd className="text-body leading-[1.85] text-neutral-800">
                          {item.body}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="base" aria-labelledby="stance-heading">
        <Container>
          <SectionHeading
            id="stance-heading"
            eyebrow="Our Stance"
            title="お客様の資産を守るための、3つの基準。"
            lead="Figoがプロフェッショナルとしてお客様の不動産資産価値の最大化・防衛のために、日々の業務で守る3つの基準です。"
          />

          <ol className="mt-14 grid gap-x-10 gap-y-12 md:mt-20 md:grid-cols-3">
            {stances.map((stance, index) => (
              <li
                key={stance.title}
                className="flex flex-col border-t-2 border-accent/30 pt-6"
              >
                <span className="font-serif text-h3-sm leading-none text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-serif text-h4 font-medium text-ink">
                  {stance.title}
                </h3>
                <p className="mt-3 text-body leading-[1.9] text-neutral-700">
                  {stance.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="neutral" aria-labelledby="business-areas-heading">
        <Container>
          <SectionHeading
            id="business-areas-heading"
            eyebrow="Business Areas"
            title="2つの事業領域。"
            lead="不動産コンサルティング事業と不動産再生事業——ライフサイクル全体で価値を創り、価値を守る2つの軸を、ひとつの会社で束ねています。"
          />

          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-lg border border-neutral-200 bg-base p-7 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_48px_-24px_rgba(26,26,26,0.25)] md:p-8"
              >
                <p className="font-sans text-caption font-medium tracking-[0.3em] text-accent">
                  {service.number} / {service.subtitle}
                </p>
                <h3 className="mt-4 font-serif text-h4 font-medium text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-body leading-[1.9] text-neutral-700">
                  {service.shortLead}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-caption font-medium text-ink transition-colors group-hover:text-accent">
                  詳しく見る
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="base" aria-labelledby="access-heading">
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.6fr)] md:gap-16">
            <div>
              <p className="section-heading-en text-accent">Access</p>
              <h2
                id="access-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                所在地・アクセス。
              </h2>
              <dl className="mt-8 space-y-5 border-t border-neutral-200 pt-6">
                <div>
                  <dt className="font-sans text-caption font-medium uppercase tracking-[0.2em] text-neutral-500">
                    住所
                  </dt>
                  <dd className="mt-2 text-body leading-relaxed text-ink">
                    {siteConfig.address.postal}
                    <br />
                    東京都港区新橋1-12-9 新橋プレイス609
                  </dd>
                </div>
                <div>
                  <dt className="font-sans text-caption font-medium uppercase tracking-[0.2em] text-neutral-500">
                    最寄駅
                  </dt>
                  <dd className="mt-2 text-body leading-relaxed text-ink">
                    JR・東京メトロ各線「新橋駅」より徒歩圏
                  </dd>
                </div>
                <div>
                  <dt className="font-sans text-caption font-medium uppercase tracking-[0.2em] text-neutral-500">
                    対応形態
                  </dt>
                  <dd className="mt-2 text-body leading-relaxed text-ink">
                    対面・オンライン・お客様先への訪問にて対応します
                  </dd>
                </div>
              </dl>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-200 bg-base">
              <iframe
                src={mapEmbedSrc}
                title={`${siteConfig.name}の所在地（${siteConfig.address.prefecture}${siteConfig.address.city}${siteConfig.address.street}）`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner
        eyebrow="Free Consultation"
        title="まずは現状を、整理するところから。"
        description="ご訪問・オンライン・対面のいずれの形でも対応します。初回ご相談は無料、秘密厳守でお伺いします。"
      />
    </>
  );
}
