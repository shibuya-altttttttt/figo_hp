import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container className="text-center">
        <p className="section-heading-en">404 Not Found</p>
        <h1 className="mt-4 font-serif text-h1-sm md:text-h1 font-medium text-ink">
          お探しのページが見つかりませんでした。
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-body leading-[1.9] text-neutral-700">
          URLが変更されたか、削除された可能性があります。お手数ですが、トップページからお探しください。
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/" size="lg" withArrow>
            トップへ戻る
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="outline">
            お問い合わせ
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
