'use client';

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/cn';

const propertyTypes = [
  '一棟マンション',
  '一棟アパート',
  '一棟ビル',
  '区分マンション',
  '土地・戸建て',
  'その他',
];

type Status =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success' }
  | { state: 'error'; message: string };

function buildMessage(formData: FormData) {
  const get = (key: string) => String(formData.get(key) ?? '').trim();
  const lines: string[] = [
    `【ご希望の種別】${get('propertyType') || '未選択'}`,
    `【希望エリア】${get('preferredArea') || '未記入'}`,
  ];
  if (get('budget')) lines.push(`【ご予算】${get('budget')}`);
  const note = get('note');
  if (note) {
    lines.push('', '【利回り・条件・ご質問】', note);
  }
  return lines.join('\n');
}

export function BuyForm() {
  const [status, setStatus] = useState<Status>({ state: 'idle' });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      category: '不動産の購入相談（未公開物件のご紹介）',
      message: buildMessage(formData),
      privacy: formData.get('privacy') === 'on',
      hp: String(formData.get('hp') ?? ''),
    };

    setStatus({ state: 'submitting' });

    let res: Response;
    try {
      res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      setStatus({
        state: 'error',
        message: '通信エラーが発生しました。再度お試しください。',
      });
      return;
    }

    const data = (await res.json().catch(() => ({}))) as { ok?: boolean };

    if (!res.ok || !data.ok) {
      setStatus({
        state: 'error',
        message: '送信に失敗しました。時間をおいて再度お試しください。',
      });
      return;
    }

    try {
      form.reset();
    } catch {
      // form may already be unmounted
    }
    setStatus({ state: 'success' });
  }

  if (status.state === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-success/30 bg-gradient-to-br from-success/10 via-base to-base p-10 md:p-14 shadow-[0_30px_60px_-30px_rgba(46,125,91,0.25)]"
      >
        <div className="flex flex-col items-start gap-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/15">
            <CheckCircle2 className="h-8 w-8 text-success" aria-hidden="true" />
          </div>
          <div>
            <p className="font-sans text-caption font-medium uppercase tracking-[0.3em] text-success">
              Message Sent
            </p>
            <h3 className="mt-3 font-serif text-h2-sm md:text-h2 font-medium text-ink text-balance">
              ご登録を受け付けました。
            </h3>
            <p className="mt-6 max-w-xl text-body leading-[1.9] text-neutral-700">
              内容を確認のうえ、担当者より2営業日以内にご連絡いたします。以降は、ご条件に合う物件が出たときに個別にご案内します。お急ぎの場合は、お電話 (03-6274-6185 / 平日 9:00-18:00) でもお気軽にどうぞ。
            </p>
          </div>
        </div>
      </div>
    );
  }

  const submitting = status.state === 'submitting';
  const inputClass =
    'w-full rounded-md border border-neutral-200 bg-base px-4 py-3 text-body text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 disabled:opacity-60';
  const labelClass = 'block font-sans text-caption font-medium text-neutral-700';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="hp" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="buy-propertyType" className="block">
            <span className={labelClass}>
              ご希望の種別 <span className="text-accent">*</span>
            </span>
            <select
              id="buy-propertyType"
              name="propertyType"
              required
              defaultValue=""
              disabled={submitting}
              className={cn('mt-2 appearance-none', inputClass)}
            >
              <option value="" disabled>
                選択してください
              </option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="buy-preferredArea" className="block">
            <span className={labelClass}>
              希望エリア <span className="text-accent">*</span>
            </span>
            <input
              type="text"
              id="buy-preferredArea"
              name="preferredArea"
              required
              autoComplete="off"
              disabled={submitting}
              placeholder="例: 城南エリア、埼京線沿線 など"
              className={cn('mt-2', inputClass)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="buy-budget" className="block">
            <span className={labelClass}>
              ご予算 <span className="text-neutral-400">(任意)</span>
            </span>
            <input
              type="text"
              id="buy-budget"
              name="budget"
              autoComplete="off"
              disabled={submitting}
              placeholder="例: 2億円まで（おおよそで構いません）"
              className={cn('mt-2', inputClass)}
            />
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="buy-note" className="block">
          <span className={labelClass}>
            利回り・条件・ご質問 <span className="text-neutral-400">(任意)</span>
          </span>
          <textarea
            id="buy-note"
            name="note"
            rows={5}
            disabled={submitting}
            className={cn('mt-2 resize-y leading-[1.75]', inputClass)}
            placeholder="例: 表面利回り7%以上、駅徒歩10分以内、融資は〇〇銀行に相談中 など"
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="buy-name" className="block">
            <span className={labelClass}>
              お名前 <span className="text-accent">*</span>
            </span>
            <input
              type="text"
              id="buy-name"
              name="name"
              required
              autoComplete="name"
              disabled={submitting}
              className={cn('mt-2', inputClass)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="buy-email" className="block">
            <span className={labelClass}>
              メールアドレス <span className="text-accent">*</span>
            </span>
            <input
              type="email"
              id="buy-email"
              name="email"
              required
              autoComplete="email"
              disabled={submitting}
              className={cn('mt-2', inputClass)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="buy-phone" className="block">
            <span className={labelClass}>
              電話番号 <span className="text-neutral-400">(任意)</span>
            </span>
            <input
              type="tel"
              id="buy-phone"
              name="phone"
              autoComplete="tel"
              disabled={submitting}
              className={cn('mt-2', inputClass)}
            />
          </label>
        </div>
      </div>

      <div>
        <label className="flex items-start gap-3 text-caption text-neutral-700">
          <input
            type="checkbox"
            name="privacy"
            required
            disabled={submitting}
            className="mt-1 h-4 w-4 shrink-0 accent-accent"
          />
          <span>
            <a
              href="/privacy"
              target="_blank"
              rel="noopener"
              className="text-ink underline underline-offset-4 hover:text-accent"
            >
              プライバシーポリシー
            </a>
            に同意のうえ送信します。
          </span>
        </label>
      </div>

      {status.state === 'error' ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-md border border-error/40 bg-error/5 px-4 py-3 text-caption text-error"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p>{status.message}</p>
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-caption text-neutral-500">
          登録・ご相談は無料です。ご条件に合う物件が出たときだけご連絡します。
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ink px-8 py-3 font-sans text-body font-medium text-white transition-all hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? '送信中…' : '無料で登録・相談する'}
          {!submitting ? <Send className="h-4 w-4" aria-hidden="true" /> : null}
        </button>
      </div>
    </form>
  );
}
