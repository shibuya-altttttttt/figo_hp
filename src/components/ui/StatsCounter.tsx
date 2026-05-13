'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

type StatsCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  caption?: string;
  duration?: number;
  className?: string;
};

export function StatsCounter({
  value,
  suffix,
  prefix,
  label,
  caption,
  duration = 1800,
  className,
}: StatsCounterProps) {
  const [displayed, setDisplayed] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayed(value);
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            const startTime = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplayed(Math.floor(eased * value));
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayed(value);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, started]);

  return (
    <div ref={ref} className={cn('text-left', className)}>
      <div className="flex items-baseline gap-1 font-serif text-ink">
        {prefix ? <span className="text-h3-sm md:text-h3">{prefix}</span> : null}
        <span className="text-display-sm md:text-display font-medium leading-none">
          {displayed.toLocaleString('ja-JP')}
        </span>
        {suffix ? (
          <span className="text-h3-sm md:text-h3 font-medium">{suffix}</span>
        ) : null}
      </div>
      <p className="mt-3 font-sans text-body font-medium text-ink">{label}</p>
      {caption ? <p className="mt-1 text-caption text-neutral-500">{caption}</p> : null}
    </div>
  );
}
