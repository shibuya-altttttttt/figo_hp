import Image from 'next/image';
import { Container } from '@/components/layout/Container';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: {
    src: string;
    alt: string;
  };
  align?: 'left' | 'center';
};

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  align = 'left',
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-24 lg:pt-28">
      {image ? (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src={image.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        </div>
      ) : (
        <>
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 78% 30%, rgba(232,114,31,0.18), transparent 60%), linear-gradient(135deg, #141414 0%, #1A1A1A 45%, #2A2624 100%)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '88px 100%',
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-px"
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(232,114,31,0.45), transparent)',
            }}
            aria-hidden="true"
          />
        </>
      )}

      <Container className="relative">
        <div
          className={
            align === 'center'
              ? 'mx-auto flex min-h-[320px] max-w-3xl flex-col justify-center py-16 text-center md:min-h-[400px] md:py-24'
              : 'flex min-h-[320px] max-w-3xl flex-col justify-center py-16 md:min-h-[420px] md:py-24'
          }
        >
          <div
            className={
              align === 'center'
                ? 'flex items-center justify-center gap-3 opacity-0 animate-fade-in [animation-delay:0.1s]'
                : 'flex items-center gap-3 opacity-0 animate-fade-in [animation-delay:0.1s]'
            }
          >
            <span
              className="h-px w-10 origin-left scale-x-0 bg-accent animate-line-grow [animation-delay:0.25s]"
              aria-hidden="true"
            />
            <p className="section-heading-en !text-accent mb-0">{eyebrow}</p>
          </div>
          <h1 className="mt-6 font-serif text-h1-sm md:text-h1 font-medium leading-[1.2] text-white text-balance opacity-0 animate-rise-slow [animation-delay:0.35s]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-body md:text-body-lg leading-[1.95] text-white/80 opacity-0 animate-fade-in-up [animation-delay:0.6s]">
              {lead}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
