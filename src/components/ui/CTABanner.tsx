import { Phone } from 'lucide-react';
import { ButtonLink } from './Button';
import { Container } from '@/components/layout/Container';
import { siteConfig } from '@/lib/site';

type CTABannerProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function CTABanner({
  eyebrow = 'Free Consultation',
  title = 'まずは、現状を整理するところから。',
  description = '初回のご相談は無料です。不動産相続・資産継承に関するお悩みを、経験豊富な専門家が丁寧にお伺いし、最適な進め方をご提案します。',
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-100">
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(232,114,31,0.45), transparent)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-12 top-0 hidden h-full w-[42%] opacity-[0.06] md:block"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 400"
          preserveAspectRatio="xMaxYMid slice"
          className="h-full w-full"
        >
          <path
            d="M 60 400 L 60 110 L 200 30 L 340 110 L 340 400"
            stroke="#1A1A1A"
            strokeWidth="1.4"
            fill="none"
          />
          <path
            d="M 120 400 L 120 150 L 200 110 L 280 150 L 280 400"
            stroke="#1A1A1A"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 175 400 L 175 200 L 225 200 L 225 400"
            stroke="#1A1A1A"
            strokeWidth="0.9"
            fill="none"
          />
        </svg>
      </div>

      <Container className="relative py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-end md:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="h-px w-10 bg-accent/70"
                aria-hidden="true"
              />
              <p className="section-heading-en text-accent">{eyebrow}</p>
            </div>
            <h2 className="mt-6 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-body md:text-body-lg leading-[1.95] text-neutral-700">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <ButtonLink
              href="/contact"
              size="lg"
              className="w-full justify-center md:w-auto md:self-end"
              withArrow
            >
              無料相談を予約する
            </ButtonLink>
            <a
              href={`tel:${siteConfig.contact.tel}`}
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-neutral-200 bg-white px-6 py-3 font-sans text-body font-medium text-ink transition-colors hover:border-accent hover:text-accent md:self-end"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>お電話：{siteConfig.contact.telDisplay}</span>
            </a>
            <div className="mt-2 space-y-1 text-caption text-neutral-500 md:text-right">
              <p>営業時間：{siteConfig.contact.hours}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
