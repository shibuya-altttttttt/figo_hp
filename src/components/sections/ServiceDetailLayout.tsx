import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { Accordion, type AccordionItem } from '@/components/ui/Accordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { ButtonLink } from '@/components/ui/Button';
import { ServiceJsonLd } from '@/components/seo/JsonLd';
import { services, type ServiceDetail } from '@/lib/services';

type ServiceDetailLayoutProps = {
  service: ServiceDetail;
};

export function ServiceDetailLayout({ service }: ServiceDetailLayoutProps) {
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const faqItems: AccordionItem[] = service.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.shortLead}
        url={`/services/${service.slug}`}
        serviceType={service.subtitle}
      />
      <PageHero
        eyebrow={`Service / ${service.subtitle}`}
        title={service.hero.headline}
        lead={service.longLead}
        image={{ src: service.hero.image, alt: service.hero.imageAlt }}
      />
      <Breadcrumb
        items={[
          { label: 'サービス', href: '/services' },
          { label: service.title },
        ]}
      />

      <Section
        tone="base"
        aria-labelledby={`overview-${service.slug}`}
        padding="default"
      >
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="section-heading-en text-accent">Service Overview</p>
              <h2
                id={`overview-${service.slug}`}
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
              >
                {service.title}
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-neutral-700">
                {service.shortLead}
              </p>
            </div>
            <div>
              <p className="font-sans text-caption font-medium uppercase tracking-[0.3em] text-accent">
                Recommended For
              </p>
              <h3 className="mt-4 font-serif text-h3-sm md:text-h3 font-medium text-ink">
                こうしたお客様にご利用いただいています。
              </h3>
              <ul className="mt-7 space-y-4">
                {service.targets.map((target, index) => (
                  <li
                    key={target}
                    className="flex gap-5 border-t border-neutral-200 pt-4"
                  >
                    <span className="font-serif text-h4 leading-none text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-body leading-relaxed text-neutral-700">
                      {target}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        tone="neutral"
        aria-labelledby={`pains-${service.slug}`}
      >
        <Container>
          <SectionHeading
            id={`pains-${service.slug}`}
            eyebrow="Common Concerns"
            title="こんなお悩みはありませんか？"
            lead="ご相談に来られる方の多くが、最初に同じような場所で立ち止まっています。あてはまるものがあれば、整理のお手伝いができます。"
          />

          <ul className="mt-14 grid gap-x-10 gap-y-10 md:mt-20 md:grid-cols-2">
            {service.pains.map((pain, index) => (
              <li
                key={pain.title}
                className="flex gap-6 border-t border-ink/10 pt-6"
              >
                <span className="font-serif text-h3-sm md:text-h3 leading-none text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-h4 font-medium text-ink">
                    {pain.title}
                  </h3>
                  <p className="mt-3 text-body leading-[1.9] text-neutral-700">
                    {pain.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section
        tone="base"
        aria-labelledby={`features-${service.slug}`}
      >
        <Container>
          <SectionHeading
            id={`features-${service.slug}`}
            eyebrow="What We Do"
            title="提供する6つの支援内容。"
            lead="決まったメニューを当てはめるのではなく、お客様の状況に合わせて必要な支援を組み合わせます。下記はその主な構成要素です。"
          />

          <div className="mt-14 grid gap-y-12 gap-x-10 md:mt-20 md:grid-cols-2 md:gap-y-14">
            {service.features.map((feature, index) => {
              const isOddCol = index % 2 === 1;
              const indexNumber = String(index + 1).padStart(2, '0');
              return (
                <div
                  key={feature.title}
                  className={isOddCol ? 'md:mt-12' : ''}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={
                        isOddCol
                          ? 'font-serif text-h4 leading-none text-accent'
                          : 'font-sans text-caption font-medium tracking-[0.3em] text-accent'
                      }
                    >
                      {indexNumber}
                    </span>
                    <span className="h-px flex-1 bg-neutral-200" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-serif text-h4 font-medium text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-body leading-[1.9] text-neutral-700">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="ink" aria-labelledby={`flow-${service.slug}`}>
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-20">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="section-heading-en !text-accent">Process</p>
              <h2
                id={`flow-${service.slug}`}
                className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-white text-balance"
              >
                ご相談から実行までの流れ。
              </h2>
              <p className="mt-6 text-body leading-[1.95] text-white/75">
                初回ヒアリングから実行・アフターまで、Figoの担当者が窓口を一本化したまま伴走します。
              </p>
            </div>

            <ol className="relative border-l border-white/10 pl-8 md:pl-12">
              {service.flow.map((step, i) => (
                <li
                  key={step.step}
                  className={
                    i === service.flow.length - 1
                      ? 'relative'
                      : 'relative pb-12 md:pb-16'
                  }
                >
                  <span
                    className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center md:-left-[53px]"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <p className="font-sans text-caption font-medium tracking-[0.3em] text-accent">
                    {step.step}
                  </p>
                  <h3 className="mt-3 font-serif text-h3-sm md:text-h3 font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-body leading-[1.95] text-white/75">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="base" aria-labelledby={`pricing-${service.slug}`}>
        <Container>
          <div className="mx-auto max-w-3xl rounded-lg border border-neutral-200 bg-neutral-100/60 p-10 md:p-14">
            <p className="section-heading-en text-accent">Pricing</p>
            <h2
              id={`pricing-${service.slug}`}
              className="mt-4 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance"
            >
              {service.pricing.label}
            </h2>
            <p className="mt-6 text-body md:text-body-lg leading-[1.95] text-neutral-700">
              {service.pricing.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="md" withArrow>
                料金についてご相談する
              </ButtonLink>
              <ButtonLink href="/services" size="md" variant="outline">
                サービス一覧へ戻る
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="neutral" aria-labelledby={`faq-${service.slug}`}>
        <Container>
          <SectionHeading
            id={`faq-${service.slug}`}
            eyebrow="Frequently Asked"
            title={`${service.title}についての、よくあるご質問。`}
            lead="ご相談前にいただくことの多い質問をまとめました。ここに無いご質問も、お問い合わせフォームよりお気軽にお寄せください。"
          />

          <div className="mt-12 md:mt-16">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <Section tone="base" aria-labelledby={`related-${service.slug}`}>
        <Container>
          <SectionHeading
            id={`related-${service.slug}`}
            eyebrow="Other Services"
            title="もう一つのサービスも見る。"
            lead="2つの事業は併用いただけます。状況に応じて、両方の視点を組み合わせてご提案します。"
          />

          <div className="mt-12 grid gap-6 md:mt-16 md:gap-8">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group flex flex-col rounded-lg border border-neutral-200 bg-base p-8 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_48px_-24px_rgba(26,26,26,0.25)] md:p-10"
              >
                <p className="font-sans text-caption font-medium tracking-[0.3em] text-accent">
                  {other.number} / {other.subtitle}
                </p>
                <h3 className="mt-4 font-serif text-h3-sm md:text-h3 font-medium text-ink">
                  {other.title}
                </h3>
                <p className="mt-4 flex-1 text-body leading-[1.9] text-neutral-700">
                  {other.shortLead}
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

      <CTABanner
        eyebrow="Free Consultation"
        title={service.ctaTitle}
        description={service.ctaDescription}
      />
    </>
  );
}
