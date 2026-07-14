import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { TextLink } from '@/components/ui/TextLink';
import { Badge } from '@/components/ui/Badge';
import { sortedNews } from '@/lib/news';
import { getNewsThumb } from '@/lib/newsThumb';

export function News() {
  const previews = sortedNews.slice(0, 3);

  return (
    <Section id="news" tone="base" aria-labelledby="news-heading">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="news-heading"
            eyebrow="News & Column"
            title="お知らせ・コラム"
            className="md:max-w-2xl"
          />
          <div className="hidden md:block">
            <TextLink href="/news">お知らせ一覧を見る</TextLink>
          </div>
        </div>

        <ul className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
          {previews.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/news/${item.slug}`}
                className="group flex flex-col gap-4 py-6 transition-colors hover:bg-neutral-100/40 md:flex-row md:items-center md:gap-6 md:py-7"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-neutral-200/60 md:aspect-[4/3] md:w-32 md:shrink-0">
                  <Image
                    src={getNewsThumb(item.slug)}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <time
                  dateTime={item.publishedAt}
                  className="font-sans text-caption font-medium tracking-wider text-neutral-500 md:w-24"
                >
                  {item.publishedDisplay}
                </time>
                <Badge
                  tone={item.category === 'コラム' ? 'accent' : 'neutral'}
                  className="w-fit"
                >
                  {item.category}
                </Badge>
                <p className="flex-1 text-body font-medium text-ink transition-colors group-hover:text-accent">
                  {item.title}
                </p>
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent md:block"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 md:hidden">
          <TextLink href="/news">お知らせ一覧を見る</TextLink>
        </div>
      </Container>
    </Section>
  );
}
