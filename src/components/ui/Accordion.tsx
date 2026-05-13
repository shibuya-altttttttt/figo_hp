'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/cn';

export type AccordionItem = {
  question: string;
  answer: string | React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn('divide-y divide-neutral-200 border-y border-neutral-200', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={index}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-sans text-body-lg font-medium text-ink transition-colors hover:text-accent md:py-6"
              >
                <span className="flex items-start gap-4">
                  <span className="font-serif text-h4 leading-none text-accent">Q</span>
                  <span className="pt-0.5">{item.question}</span>
                </span>
                <span className="shrink-0">
                  {isOpen ? (
                    <Minus className="h-5 w-5 text-accent" aria-hidden="true" />
                  ) : (
                    <Plus className="h-5 w-5 text-ink" aria-hidden="true" />
                  )}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pl-9 pr-8 text-body leading-[1.85] text-neutral-700"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
