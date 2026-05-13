import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type TextLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  external?: boolean;
  withArrow?: boolean;
  tone?: 'ink' | 'accent';
};

export function TextLink({
  className,
  children,
  external = false,
  withArrow = true,
  tone = 'ink',
  ...rest
}: TextLinkProps) {
  const Arrow = external ? ArrowUpRight : ArrowRight;
  const toneClass =
    tone === 'accent'
      ? 'text-accent hover:text-accent-dark'
      : 'text-ink hover:text-accent';

  if (external) {
    const href = typeof rest.href === 'string' ? rest.href : '';
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group inline-flex items-center gap-1 font-sans text-body font-medium underline-offset-4 hover:underline',
          toneClass,
          className,
        )}
      >
        {children}
        {withArrow ? (
          <Arrow
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        ) : null}
      </a>
    );
  }

  return (
    <Link
      {...rest}
      className={cn(
        'group inline-flex items-center gap-1 font-sans text-body font-medium underline-offset-4 hover:underline',
        toneClass,
        className,
      )}
    >
      {children}
      {withArrow ? (
        <Arrow
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </Link>
  );
}
