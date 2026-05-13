import type { Metadata } from 'next';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ContactForm } from '@/components/sections/ContactForm';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    '株式会社Figoへのお問い合わせ・無料相談予約。お問い合わせフォーム、お電話のいずれでも承っています。初回ご相談は無料、秘密厳守。',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'お問い合わせ | 株式会社Figo',
    description: '無料相談予約・お問い合わせフォーム。初回ご相談は無料です。',
    url: '/contact',
  },
};

const contactPoints = [
  {
    icon: Phone,
    label: 'お電話',
    value: siteConfig.contact.telDisplay,
    href: `tel:${siteConfig.contact.tel}`,
    sub: siteConfig.contact.hours,
  },
  {
    icon: Mail,
    label: 'メール',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    sub: '24時間受付',
  },
  {
    icon: MapPin,
    label: '所在地',
    value: '東京都港区新橋1-12-9',
    href: undefined,
    sub: '新橋プレイス609',
  },
  {
    icon: Clock,
    label: '営業時間',
    value: siteConfig.contact.hours,
    href: undefined,
    sub: '土日祝日休業',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ・無料相談。"
        lead="ご相談内容に応じて、フォーム・お電話のいずれでも承っています。初回ご相談は無料、秘密厳守でお伺いします。"
      />
      <Breadcrumb items={[{ label: 'お問い合わせ' }]} />

      <Section tone="base" aria-labelledby="contact-form-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-heading-en text-accent">Free Consultation</p>
              <h2
                id="contact-form-heading"
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                まずは現状を、
                <br className="hidden md:block" />
                整理するところから。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                ご購入・売却・保有中の運用・相続対策——どの段階のご相談でも対応します。
                ご記入いただいた内容は厳重に管理し、ご相談以外の目的では使用しません。
              </p>

              <dl className="mt-10 space-y-5 border-t border-neutral-200 pt-8">
                {contactPoints.map((point) => {
                  const Icon = point.icon;
                  const value = point.href ? (
                    <a
                      href={point.href}
                      className="text-ink transition-colors hover:text-accent"
                    >
                      {point.value}
                    </a>
                  ) : (
                    <span className="text-ink">{point.value}</span>
                  );
                  return (
                    <div
                      key={point.label}
                      className="grid grid-cols-[28px_1fr] gap-3"
                    >
                      <dt className="pt-1">
                        <Icon
                          className="h-4 w-4 text-accent"
                          aria-hidden="true"
                        />
                        <span className="sr-only">{point.label}</span>
                      </dt>
                      <dd>
                        <p className="font-sans text-caption font-medium uppercase tracking-[0.2em] text-neutral-500">
                          {point.label}
                        </p>
                        <p className="mt-1 text-body font-medium">{value}</p>
                        <p className="mt-0.5 text-caption text-neutral-500">
                          {point.sub}
                        </p>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </aside>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
