import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from './Container';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  const fullItems: BreadcrumbItem[] = [{ label: 'ホーム', href: '/' }, ...items];
  const jsonLdItems = fullItems.map((item) => ({
    name: item.label,
    url: item.href ?? '',
  }));

  return (
    <nav aria-label="パンくずリスト" className="border-b border-neutral-200 bg-base">
      <BreadcrumbJsonLd items={jsonLdItems} />
      <Container>
        <ol className="flex flex-wrap items-center gap-1 py-4 text-caption text-neutral-500">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1">
                {index > 0 ? (
                  <ChevronRight
                    className="h-3.5 w-3.5 text-neutral-200"
                    aria-hidden="true"
                  />
                ) : null}
                {isLast || !item.href ? (
                  <span className="text-ink" aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-neutral-500 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
