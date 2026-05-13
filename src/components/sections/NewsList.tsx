'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { NewsArticle, NewsCategory } from '@/lib/news';

type Filter = 'all' | NewsCategory;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'お知らせ', label: 'お知らせ' },
  { value: 'コラム', label: 'コラム' },
];

type NewsListProps = {
  articles: NewsArticle[];
};

export function NewsList({ articles }: NewsListProps) {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = filter === 'all'
    ? articles
    : articles.filter((article) => article.category === filter);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 border-b border-neutral-200 pb-6">
        <p className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
          Filter by
        </p>
        <ul className="flex flex-wrap gap-2">
          {filters.map((option) => {
            const isActive = filter === option.value;
            return (
              <li key={option.value}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(option.value)}
                  className={
                    'inline-flex items-center rounded-full border px-4 py-1.5 font-sans text-caption font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ' +
                    (isActive
                      ? 'border-ink bg-ink text-white'
                      : 'border-neutral-200 bg-base text-neutral-700 hover:border-accent hover:text-accent')
                  }
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-body text-neutral-500">
          該当する記事はありません。
        </p>
      ) : (
        <ul className="mt-2 divide-y divide-neutral-200">
          {visible.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/news/${article.slug}`}
                className="group grid gap-3 py-7 transition-colors hover:bg-neutral-100/40 md:grid-cols-[140px_minmax(0,1fr)_24px] md:items-start md:gap-8 md:py-8"
              >
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <time
                    dateTime={article.publishedAt}
                    className="font-sans text-caption font-medium tracking-wider text-neutral-500"
                  >
                    {article.publishedDisplay}
                  </time>
                  <Badge tone={article.category === 'コラム' ? 'accent' : 'neutral'}>
                    {article.category}
                  </Badge>
                </div>
                <div>
                  <p className="font-serif text-h4 md:text-h3-sm font-medium text-ink transition-colors group-hover:text-accent">
                    {article.title}
                  </p>
                  <p className="mt-3 text-body leading-[1.85] text-neutral-700">
                    {article.excerpt}
                  </p>
                </div>
                <ArrowRight
                  className="hidden h-4 w-4 self-center text-neutral-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent md:block"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
