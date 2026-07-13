'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/cn';

type PropertyType = 'income' | 'kubun' | 'land' | 'teichi';
type Concern = 'loan' | 'deficit' | 'inherit' | 'tenant' | 'old' | 'price';
type Loan = 'over' | 'remain' | 'none' | 'unknown';
type Timing = 'asap' | 'half_year' | 'undecided';

type Answers = {
  property?: PropertyType;
  concern?: Concern;
  loan?: Loan;
  timing?: Timing;
};

type Option<T extends string> = { value: T; label: string; hint?: string };

const questions = {
  property: {
    heading: '売却を考えている不動産は、どれに近いですか？',
    options: [
      { value: 'income', label: '一棟マンション・アパート・ビル', hint: '収益用の一棟' },
      { value: 'kubun', label: '区分・ワンルーム（投資用）', hint: 'マンションの一室' },
      { value: 'land', label: '土地・戸建て', hint: '実家・空き家・土地を含む' },
      { value: 'teichi', label: '底地・借地', hint: '貸している土地／借りている土地の建物' },
    ] as Option<PropertyType>[],
  },
  concern: {
    heading: '今、一番気になっていることは何ですか？',
    options: [
      { value: 'loan', label: '残債・ローンが重い' },
      { value: 'deficit', label: '毎月赤字・収支が悪化してきた' },
      { value: 'inherit', label: '相続・共有で持て余している' },
      { value: 'tenant', label: '空室・入居者・サブリースの問題' },
      { value: 'old', label: '築古・訳ありで売れるか不安' },
      { value: 'price', label: 'まず相場と手取りを知りたい' },
    ] as Option<Concern>[],
  },
  loan: {
    heading: 'ローンの残債は、今どのくらいですか？',
    options: [
      { value: 'over', label: '売却額を上回りそう' },
      { value: 'remain', label: 'まだ残っている' },
      { value: 'none', label: 'ほぼ完済・残債なし' },
      { value: 'unknown', label: 'わからない・回答しない' },
    ] as Option<Loan>[],
  },
  timing: {
    heading: '売却の時期は、いつ頃をお考えですか？',
    options: [
      { value: 'asap', label: 'できるだけ早く' },
      { value: 'half_year', label: '半年〜1年をめどに' },
      { value: 'undecided', label: '時期は未定（まず情報収集）' },
    ] as Option<Timing>[],
  },
} as const;

const steps: (keyof Answers)[] = ['property', 'concern', 'loan', 'timing'];

const propertyResult: Record<
  PropertyType,
  { title: string; href: string; pageLabel: string; guide?: { href: string; label: string } }
> = {
  income: {
    title: '一棟収益不動産の出口',
    href: '/sell/income',
    pageLabel: '一棟収益不動産の売却',
    guide: { href: '/guide/ittou-deguchi-guide.html', label: '一棟オーナーの出口ガイド（無料）' },
  },
  kubun: {
    title: '区分・ワンルーム投資の出口',
    href: '/sell/kubun',
    pageLabel: '区分投資マンションの売却',
    guide: { href: '/guide/kubun-deguchi-guide.html', label: '区分・ワンルーム投資の出口ガイド（無料）' },
  },
  land: {
    title: '土地・戸建ての出口',
    href: '/sell/land',
    pageLabel: '土地・戸建ての売却',
  },
  teichi: {
    title: '底地・借地の出口',
    href: '/sell/land',
    pageLabel: '土地・戸建ての売却（底地・借地）',
  },
};

const concernMessage: Record<Concern, string> = {
  loan: '残債が売却額を上回っても、決済日に抵当権を外せる段取りが組めれば売却は成立します。まず「いくら足りないか」の手出し額から確定します。',
  deficit: '毎月の赤字は、放っておくと拡大しがちです。「今売る損失」と「持ち続ける累計赤字」を数字で並べて、損切りが妥当かを見極めます。',
  inherit: '共有のまま持つほど、売却も分割も難しくなります。売って現金で分ける「換価分割」を含め、揉めにくい出口を整理します。',
  tenant: '入居者がいても、空室でも、サブリース中でも売れます。立ち退きは不要で、条件をどう扱うかで手取りが変わります。',
  old: '築古・訳あり物件こそ、届く買い手と価格の付き方を知ることが肝心です。大手が敬遠する物件のご相談も承っています。',
  price: '大切なのは売却価格ではなく、税金や残債を引いた後の「手取り」です。根拠ある査定と手取り試算を無料でお出しします。',
};

const loanNote: Record<Loan, string | null> = {
  over: '残債が売却額を上回りそうとのこと。手出し額の試算と、自己資金・繰上げ・任意売却の選択肢を最初に整理します。',
  remain: 'ローン残債があるとのこと。残債・諸費用を差し引いた手取り試算を先にお出しします。',
  none: '残債がほぼ無いとのこと。手取りがそのまま残りやすく、売り方（仲介／買取）の比較が判断の軸になります。',
  unknown: null,
};

const timingNote: Record<Timing, string> = {
  asap: '早期売却をご希望とのことなので、スピードを重視した売り方（買取の活用も含む）でご提案します。',
  half_year: '半年〜1年が目安とのことなので、価格と時期のバランスを取った計画を逆算してご提案します。',
  undecided: '時期は未定とのことなので、まずは概算の価格と手取りだけをお出しします。売却を決めていなくて構いません。',
};

export function SellDiagnostic() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);

  const currentKey = steps[stepIndex];
  const question = questions[currentKey];

  function select(value: string) {
    const next = { ...answers, [currentKey]: value };
    setAnswers(next);
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setDone(true);
    }
  }

  function back() {
    if (done) {
      setDone(false);
      return;
    }
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  }

  function reset() {
    setAnswers({});
    setStepIndex(0);
    setDone(false);
  }

  if (done && answers.property && answers.concern && answers.loan && answers.timing) {
    const result = propertyResult[answers.property];
    const notes = [concernMessage[answers.concern], loanNote[answers.loan], timingNote[answers.timing]].filter(
      (n): n is string => Boolean(n),
    );

    return (
      <div className="rounded-2xl border border-neutral-200 bg-base p-8 md:p-12">
        <p className="section-heading-en text-accent">Your Result</p>
        <h2 className="mt-3 font-serif text-h3-sm md:text-h2 font-medium text-ink text-balance">
          あなたに合う出口は
          <br className="md:hidden" />
          「{result.title}」です。
        </h2>

        <ul className="mt-8 space-y-4">
          {notes.map((note) => (
            <li key={note} className="flex gap-3 text-body leading-[1.9] text-neutral-700">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{note}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/contact"
            className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-sans text-body font-medium text-white shadow-sm transition-all duration-200 hover:bg-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            この内容で無料相談する
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={result.href}
            className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-ink px-8 py-4 font-sans text-body font-medium text-ink transition-all duration-200 hover:bg-ink hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
          >
            {result.pageLabel}を見る
          </Link>
        </div>

        {result.guide ? (
          <p className="mt-6 text-caption text-neutral-500">
            あわせて、
            <a
              href={result.guide.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              {result.guide.label}
            </a>
            もどうぞ。
          </p>
        ) : null}

        <p className="mt-8 text-caption leading-relaxed text-neutral-500">
          ※この診断は、状況の整理と大まかな方向づけを目的とした簡易版です。実際の価格・手取りは物件ごとに異なります。個別の査定・試算は無料でお出しします。
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center gap-2 font-sans text-caption font-medium text-neutral-500 transition-colors hover:text-accent"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          もう一度診断する
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-base p-8 md:p-12">
      <div className="flex items-center justify-between gap-4">
        <p className="font-sans text-caption font-medium tracking-[0.2em] text-accent">
          Q{stepIndex + 1} <span className="text-neutral-400">/ {steps.length}</span>
        </p>
        <div className="flex flex-1 max-w-[180px] gap-1.5" aria-hidden="true">
          {steps.map((key, i) => (
            <span
              key={key}
              className={cn(
                'h-1 flex-1 rounded-full transition-colors',
                i <= stepIndex ? 'bg-accent' : 'bg-neutral-200',
              )}
            />
          ))}
        </div>
      </div>

      <h2 className="mt-6 font-serif text-h3-sm md:text-h3 font-medium text-ink text-balance">
        {question.heading}
      </h2>

      <div className="mt-8 grid gap-3">
        {question.options.map((option) => {
          const selected = answers[currentKey] === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => select(option.value)}
              className={cn(
                'group flex items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
                selected
                  ? 'border-accent bg-accent/5'
                  : 'border-neutral-200 bg-base hover:border-accent/50 hover:bg-neutral-50',
              )}
            >
              <span>
                <span className="block font-sans text-body font-medium text-ink">{option.label}</span>
                {option.hint ? (
                  <span className="mt-0.5 block font-sans text-caption text-neutral-500">{option.hint}</span>
                ) : null}
              </span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-neutral-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      {stepIndex > 0 ? (
        <button
          type="button"
          onClick={back}
          className="mt-8 inline-flex items-center gap-2 font-sans text-caption font-medium text-neutral-500 transition-colors hover:text-accent"
        >
          ← 前の質問に戻る
        </button>
      ) : null}
    </div>
  );
}
