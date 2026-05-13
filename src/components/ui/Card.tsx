import { cn } from '@/lib/cn';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  interactive?: boolean;
};

export function Card({
  children,
  className,
  as: Tag = 'div',
  interactive = false,
}: CardProps) {
  return (
    <Tag
      className={cn(
        'relative overflow-hidden rounded-lg border border-neutral-200 bg-base',
        interactive &&
          'transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-neutral-500/30 hover:shadow-[0_16px_40px_-20px_rgba(26,26,26,0.25)]',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('p-6 md:p-8', className)}>{children}</div>;
}
