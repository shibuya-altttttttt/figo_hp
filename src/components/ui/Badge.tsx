import { cn } from '@/lib/cn';

type BadgeProps = {
  children: React.ReactNode;
  tone?: 'neutral' | 'accent' | 'ink';
  className?: string;
};

const toneMap: Record<NonNullable<BadgeProps['tone']>, string> = {
  neutral: 'bg-neutral-100 text-ink border border-neutral-200',
  accent: 'bg-accent/10 text-accent border border-accent/20',
  ink: 'bg-ink text-white',
};

export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-caption font-medium',
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
