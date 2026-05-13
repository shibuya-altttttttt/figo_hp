import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

const variantMap: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent shadow-sm',
  secondary:
    'bg-ink text-white hover:bg-neutral-700 focus-visible:ring-ink shadow-sm',
  outline:
    'bg-transparent text-ink border border-ink hover:bg-ink hover:text-white focus-visible:ring-ink',
  ghost:
    'bg-transparent text-ink hover:bg-neutral-100 focus-visible:ring-ink',
};

const sizeMap: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-caption min-h-[40px]',
  md: 'px-6 py-3 text-body min-h-[48px]',
  lg: 'px-8 py-4 text-body md:text-body-lg min-h-[56px]',
};

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-wide transition-all duration-200 ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

type ButtonProps = CommonProps & ComponentPropsWithoutRef<'button'>;

export function Button({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseClass, variantMap[variant], sizeMap[size], className)}
      {...rest}
    >
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </button>
  );
}

type ButtonLinkProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, 'className' | 'children'> & {
    external?: boolean;
  };

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className,
  children,
  href,
  external = false,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(baseClass, variantMap[variant], sizeMap[size], className);

  if (external) {
    return (
      <a
        href={typeof href === 'string' ? href : ''}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        {withArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </Link>
  );
}
