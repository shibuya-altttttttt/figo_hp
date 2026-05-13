'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { navigationLinks, siteConfig } from '@/lib/site';
import { cn } from '@/lib/cn';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isTop = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const solidHeader = scrolled || !isTop || drawerOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth',
        solidHeader
          ? 'border-b border-neutral-200 bg-base/95 backdrop-blur-md shadow-[0_1px_24px_-16px_rgba(0,0,0,0.25)]'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
        <Link
          href="/"
          aria-label={`${siteConfig.name} トップへ`}
          className="flex items-center gap-2"
        >
          <Image
            src="/images/figo-logo.png"
            alt={siteConfig.name}
            width={120}
            height={40}
            priority
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigationLinks.map((link) => {
              const active =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'group relative font-sans text-caption font-medium tracking-wide transition-colors',
                      active ? 'text-accent' : 'text-ink hover:text-accent',
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute -bottom-2 left-0 h-0.5 w-full origin-left bg-accent transition-transform duration-300 ease-[cubic-bezier(0.2,0,0.2,1)]',
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.tel}`}
            className="hidden items-center gap-1 font-sans text-caption font-medium text-ink hover:text-accent lg:inline-flex"
            aria-label={`電話でのお問い合わせ ${siteConfig.contact.telDisplay}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.telDisplay}
          </a>
          <Link
            href="/contact"
            className="group hidden items-center gap-2 border-b border-ink/30 pb-1 font-sans text-caption font-medium tracking-wide text-ink transition-colors hover:border-ink lg:inline-flex"
          >
            <span>お問い合わせ</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
          <button
            type="button"
            aria-label={drawerOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-base text-ink transition-colors hover:border-ink hover:text-accent lg:hidden"
          >
            {drawerOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-drawer"
        className={cn(
          'lg:hidden overflow-hidden transition-[max-height] duration-300 ease-smooth border-b border-neutral-200 bg-base',
          drawerOpen ? 'max-h-[90vh]' : 'max-h-0',
        )}
      >
        <nav aria-label="モバイルナビゲーション" className="px-5 py-6 sm:px-8">
          <ul className="flex flex-col divide-y divide-neutral-200">
            {navigationLinks.map((link) => {
              const active =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center justify-between py-4 font-sans text-body font-medium',
                      active ? 'text-accent' : 'text-ink hover:text-accent',
                    )}
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-neutral-500">
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <ButtonLink
              href="/contact"
              size="lg"
              variant="outline"
              withArrow
            >
              お問い合わせ
            </ButtonLink>
            <a
              href={`tel:${siteConfig.contact.tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-body font-medium text-ink hover:text-accent min-h-[48px]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.telDisplay}
            </a>
          </div>
          <p className="mt-5 text-caption text-neutral-500">{siteConfig.contact.hours}</p>
        </nav>
      </div>
    </header>
  );
}
