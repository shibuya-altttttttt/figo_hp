import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/site';

const serviceLinks = [
  { label: '不動産コンサルティング事業', href: '/services/consulting' },
  { label: '不動産再生事業', href: '/services/revitalization' },
];

const companyLinks = [
  { label: '会社概要', href: '/about' },
  { label: '代表者挨拶', href: '/message' },
  { label: '成約実績', href: '/cases' },
  { label: 'お知らせ', href: '/news' },
  { label: 'よくあるご質問', href: '/faq' },
];

const legalLinks = [
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: '利用規約', href: '/terms' },
  { label: 'お問い合わせ', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 85% 0%, rgba(232,114,31,0.12), transparent 60%), linear-gradient(180deg, #1A1A1A 0%, #2A2624 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-0 -z-10 hidden h-full w-[36%] opacity-[0.05] lg:block"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 400"
          preserveAspectRatio="xMaxYMid slice"
          className="h-full w-full"
        >
          <path
            d="M 60 400 L 60 110 L 200 30 L 340 110 L 340 400"
            stroke="white"
            strokeWidth="1.4"
            fill="none"
          />
          <path
            d="M 120 400 L 120 150 L 200 110 L 280 150 L 280 400"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:px-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] lg:gap-20">
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} トップへ`}
              className="inline-block"
            >
              <Image
                src="/images/figo-logo.png"
                alt={siteConfig.name}
                width={140}
                height={46}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-sm text-caption leading-[1.85] text-white/75">
              {siteConfig.tagline}
              <br />
              不動産相続・資産継承の専門家として、オーナー様ごとに最適な継承プランをご提案します。
            </p>
            <address className="mt-8 not-italic text-caption leading-[1.85] text-white/65">
              <div className="grid grid-cols-[64px_1fr] gap-x-3 gap-y-2">
                <span className="font-sans uppercase tracking-[0.2em] text-white/45">
                  Office
                </span>
                <span>
                  {siteConfig.address.postal}
                  <br />
                  {siteConfig.address.full}
                </span>
                <span className="font-sans uppercase tracking-[0.2em] text-white/45">
                  Tel
                </span>
                <a
                  href={`tel:${siteConfig.contact.tel}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.contact.telDisplay}
                </a>
                <span className="font-sans uppercase tracking-[0.2em] text-white/45">
                  Hours
                </span>
                <span>{siteConfig.contact.hours}</span>
              </div>
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <FooterColumn title="Service" subtitle="サービス" links={serviceLinks} />
            <FooterColumn title="Company" subtitle="企業情報" links={companyLinks} />
            <FooterColumn
              title="Information"
              subtitle="お問い合わせ・規約"
              links={legalLinks}
            />
          </div>
        </div>

        <div
          className="mt-16 h-px"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)',
          }}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-3 py-8 text-caption text-white/55 md:flex-row md:items-center md:justify-between">
          <p>{siteConfig.licenseNumber}</p>
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  subtitle,
  links,
}: {
  title: string;
  subtitle: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-sans text-caption uppercase tracking-[0.25em] text-accent/85">
        {title}
      </p>
      <h3 className="mt-2 font-serif text-h4 font-medium text-white">{subtitle}</h3>
      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-caption text-white/75 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
