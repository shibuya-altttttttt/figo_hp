import { cn } from '@/lib/cn';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: 'base' | 'neutral' | 'ink';
  padding?: 'default' | 'sm' | 'lg' | 'none';
  'aria-labelledby'?: string;
};

const toneMap: Record<NonNullable<SectionProps['tone']>, string> = {
  base: 'bg-base',
  neutral: 'bg-neutral-100',
  ink: 'bg-ink text-white',
};

const paddingMap: Record<NonNullable<SectionProps['padding']>, string> = {
  default: 'py-16 md:py-24 lg:py-28',
  sm: 'py-12 md:py-16',
  lg: 'py-20 md:py-32 lg:py-36',
  none: '',
};

export function Section({
  children,
  className,
  id,
  tone = 'base',
  padding = 'default',
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(toneMap[tone], paddingMap[padding], className)}
      aria-labelledby={rest['aria-labelledby']}
    >
      {children}
    </section>
  );
}
