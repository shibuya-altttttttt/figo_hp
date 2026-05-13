'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'header' | 'span';
  variant?: 'rise' | 'fade' | 'scale-line';
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
  variant = 'rise',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const base =
    variant === 'scale-line'
      ? 'origin-left transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0,0.2,1)]'
      : 'transition-all duration-[900ms] ease-[cubic-bezier(0.2,0,0.2,1)] will-change-transform';

  const hidden =
    variant === 'fade'
      ? 'opacity-0'
      : variant === 'scale-line'
        ? 'scale-x-0 opacity-100'
        : 'opacity-0 translate-y-8';

  const shown =
    variant === 'fade'
      ? 'opacity-100'
      : variant === 'scale-line'
        ? 'scale-x-100'
        : 'opacity-100 translate-y-0';

  return (
    <Tag
      ref={ref as never}
      className={cn(base, visible ? shown : hidden, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
