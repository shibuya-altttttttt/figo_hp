'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import type { CaseRecord } from '@/lib/cases';

type CasesFilterProps = {
  cases: CaseRecord[];
};

const ALL = 'all';

export function CasesFilter({ cases }: CasesFilterProps) {
  const [prefecture, setPrefecture] = useState<string>(ALL);
  const [type, setType] = useState<string>(ALL);

  const prefectures = useMemo(
    () => Array.from(new Set(cases.map((c) => c.prefecture))),
    [cases],
  );
  const types = useMemo(
    () => Array.from(new Set(cases.map((c) => c.type))),
    [cases],
  );

  const visible = cases.filter((record) => {
    const matchPref = prefecture === ALL || record.prefecture === prefecture;
    const matchType = type === ALL || record.type === type;
    return matchPref && matchType;
  });

  return (
    <div>
      <div className="space-y-5 border-b border-neutral-200 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500 md:w-24">
            Prefecture
          </p>
          <FilterChips
            options={[
              { value: ALL, label: 'すべて' },
              ...prefectures.map((p) => ({ value: p, label: p })),
            ]}
            current={prefecture}
            onChange={setPrefecture}
            ariaLabel="都道府県でしぼり込む"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500 md:w-24">
            Property
          </p>
          <FilterChips
            options={[
              { value: ALL, label: 'すべて' },
              ...types.map((t) => ({ value: t, label: t })),
            ]}
            current={type}
            onChange={setType}
            ariaLabel="物件種別でしぼり込む"
          />
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-body text-neutral-500">
          選択条件に該当する実績はありません。
        </p>
      ) : (
        <ol className="mt-10 space-y-12 md:mt-14 md:space-y-16">
          {visible.map((record) => (
            <li
              key={record.slug}
              id={record.slug}
              className="grid gap-6 border-b border-neutral-200 pb-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10 md:pb-16 scroll-mt-28"
            >
              <figure className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200/60 md:aspect-[5/4]">
                {record.image ? (
                  <Image
                    src={record.image.src}
                    alt={record.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    style={{ objectPosition: record.image.objectPosition ?? 'center' }}
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-200/80 via-base to-neutral-200/40"
                    aria-hidden="true"
                  >
                    <div className="text-center">
                      <p className="font-sans text-caption font-medium tracking-[0.3em] text-neutral-500">
                        NO IMAGE
                      </p>
                      <p className="mt-3 font-serif text-h4 text-neutral-500">
                        {record.name}
                      </p>
                    </div>
                  </div>
                )}
              </figure>

              <div className="flex flex-col">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="font-sans text-caption font-medium tracking-[0.3em] text-accent">
                    {record.closedDisplay}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-ink/15 px-3 py-1 font-sans text-caption text-neutral-700">
                    {record.type}
                  </span>
                  <span className="font-sans text-caption text-neutral-500">
                    {record.prefecture}
                    {record.area ? `・${record.area}` : ''}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-h3-sm md:text-h3 font-medium text-ink text-balance">
                  {record.name}
                </h3>

                <dl className="mt-6 grid gap-x-8 gap-y-3 border-t border-neutral-200 pt-5 md:grid-cols-2">
                  {record.station ? (
                    <div className="md:col-span-2">
                      <dt className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
                        Access
                      </dt>
                      <dd className="mt-1 text-body leading-relaxed text-ink">
                        {record.station}
                      </dd>
                    </div>
                  ) : null}
                  {record.structure ? (
                    <div>
                      <dt className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
                        Structure
                      </dt>
                      <dd className="mt-1 text-body leading-relaxed text-ink">
                        {record.structure}
                      </dd>
                    </div>
                  ) : null}
                  {record.units ? (
                    <div>
                      <dt className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
                        Units
                      </dt>
                      <dd className="mt-1 text-body leading-relaxed text-ink">
                        {record.units}
                      </dd>
                    </div>
                  ) : null}
                  {record.built ? (
                    <div>
                      <dt className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
                        Year Built
                      </dt>
                      <dd className="mt-1 text-body leading-relaxed text-ink">
                        {record.built}
                      </dd>
                    </div>
                  ) : null}
                  {record.size ? (
                    <div>
                      <dt className="font-sans text-caption uppercase tracking-[0.2em] text-neutral-500">
                        Size
                      </dt>
                      <dd className="mt-1 text-body leading-relaxed text-ink">
                        {record.size}
                      </dd>
                    </div>
                  ) : null}
                </dl>

                {record.note ? (
                  <p className="mt-5 text-caption leading-relaxed text-neutral-500">
                    ※ {record.note}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

type FilterChipsProps = {
  options: { value: string; label: string }[];
  current: string;
  onChange: (value: string) => void;
  ariaLabel: string;
};

function FilterChips({ options, current, onChange, ariaLabel }: FilterChipsProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={ariaLabel}>
      {options.map((option) => {
        const isActive = current === option.value;
        return (
          <li key={option.value}>
            <button
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option.value)}
              className={
                'inline-flex items-center rounded-full border px-4 py-1.5 font-sans text-caption font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ' +
                (isActive
                  ? 'border-ink bg-ink text-white'
                  : 'border-neutral-200 bg-base text-neutral-700 hover:border-accent hover:text-accent')
              }
            >
              {option.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
