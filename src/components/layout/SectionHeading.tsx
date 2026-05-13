import { cn } from '@/lib/cn';
import { Reveal } from '@/components/ui/Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  invert?: boolean;
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  invert = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <Reveal variant="fade" delay={0}>
          <div
            className={cn(
              'flex items-center gap-3',
              align === 'center' && 'justify-center',
            )}
          >
            <Reveal variant="scale-line" delay={150}>
              <span
                className={cn(
                  'block h-px w-10',
                  invert ? 'bg-accent' : 'bg-accent',
                )}
                aria-hidden="true"
              />
            </Reveal>
            <p
              className={cn(
                'section-heading-en mb-0',
                invert && 'text-accent',
              )}
            >
              {eyebrow}
            </p>
          </div>
        </Reveal>
      ) : null}
      <Reveal variant="rise" delay={eyebrow ? 150 : 0}>
        <h2
          id={id}
          className={cn(
            'mt-5 font-serif text-h2-sm md:text-h2 font-medium text-balance leading-[1.25]',
            invert ? 'text-white' : 'text-ink',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal variant="rise" delay={eyebrow ? 300 : 150}>
          <p
            className={cn(
              'mt-6 text-body md:text-body-lg leading-relaxed',
              invert ? 'text-white/80' : 'text-neutral-700',
            )}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
