import { Container } from '@/components/layout/Container';
import { Breadcrumb, type BreadcrumbItem } from '@/components/layout/Breadcrumb';
import { CTABanner } from '@/components/ui/CTABanner';
import { ButtonLink } from '@/components/ui/Button';

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: BreadcrumbItem[];
  sprintNote?: string;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  breadcrumb,
  sprintNote = 'このページはSprint2以降で実装予定です。現時点では、ナビゲーション確認のためのプレースホルダとして表示しています。',
}: PlaceholderPageProps) {
  return (
    <>
      <div className="pt-16 lg:pt-20">
        <Breadcrumb items={breadcrumb} />
      </div>
      <section className="bg-base py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="section-heading-en">{eyebrow}</p>
            <h1 className="mt-4 font-serif text-h1-sm md:text-h1 font-medium text-ink text-balance">
              {title}
            </h1>
            <p className="mt-6 text-body md:text-body-lg leading-[1.95] text-neutral-700">
              {description}
            </p>
          </div>

          <div className="mt-12 rounded-lg border border-dashed border-neutral-200 bg-neutral-100/60 p-8 md:mt-16 md:p-10">
            <p className="font-sans text-caption font-medium uppercase tracking-[0.3em] text-accent">
              Under Construction
            </p>
            <p className="mt-3 text-body leading-relaxed text-neutral-700">{sprintNote}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="md" withArrow>
                先にご相談する
              </ButtonLink>
              <ButtonLink href="/" size="md" variant="outline">
                トップへ戻る
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
