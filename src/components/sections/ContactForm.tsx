'use client';

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/cn';

const categories = [
  '不動産の購入相談',
  '不動産の売却相談',
  '相続・資産継承のご相談',
  '不動産再生事業のご相談',
  'その他',
];

type Status =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success' }
  | { state: 'error'; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const [fieldErrors, setFieldErrors] = useState<Set<string>>(new Set());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      category: String(formData.get('category') ?? ''),
      message: String(formData.get('message') ?? '').trim(),
      privacy: formData.get('privacy') === 'on',
      hp: String(formData.get('hp') ?? ''),
    };

    setStatus({ state: 'submitting' });
    setFieldErrors(new Set());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fields?: string[];
      };

      if (!res.ok || !data.ok) {
        if (data.fields) setFieldErrors(new Set(data.fields));
        setStatus({
          state: 'error',
          message:
            data.error === 'validation'
              ? '入力内容に不備があります。エラー箇所をご確認ください。'
              : '送信に失敗しました。時間をおいて再度お試しください。',
        });
        return;
      }

      setStatus({ state: 'success' });
      event.currentTarget.reset();
    } catch {
      setStatus({
        state: 'error',
        message: '通信エラーが発生しました。再度お試しください。',
      });
    }
  }

  if (status.state === 'success') {
    return (
      <div className="rounded-lg border border-success/30 bg-success/5 p-8 md:p-10">
        <div className="flex items-start gap-4">
          <CheckCircle2
            className="h-7 w-7 shrink-0 text-success"
            aria-hidden="true"
          />
          <div>
            <h3 className="font-serif text-h3-sm font-medium text-ink">
              お問い合わせを受け付けました。
            </h3>
            <p className="mt-3 text-body leading-[1.85] text-neutral-700">
              内容を確認のうえ、担当者より2営業日以内にご返信いたします。お急ぎの場合はお電話(03-6274-6185)でもお気軽にご連絡ください。
            </p>
            <button
              type="button"
              onClick={() => setStatus({ state: 'idle' })}
              className="mt-6 inline-flex items-center gap-2 font-sans text-caption font-medium text-ink underline underline-offset-4 hover:text-accent"
            >
              新しい問い合わせを送る
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inputClass = (name: string) =>
    cn(
      'w-full rounded-md border bg-base px-4 py-3 text-body text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 disabled:opacity-60',
      fieldErrors.has(name)
        ? 'border-error/60 focus:border-error focus:ring-error'
        : 'border-neutral-200 focus:border-accent',
    );

  const submitting = status.state === 'submitting';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            type="text"
            name="hp"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-1">
          <label htmlFor="name" className="block">
            <span className="block font-sans text-caption font-medium text-neutral-700">
              お名前 <span className="text-accent">*</span>
            </span>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              disabled={submitting}
              className={cn('mt-2', inputClass('name'))}
            />
          </label>
        </div>
        <div className="md:col-span-1">
          <label htmlFor="email" className="block">
            <span className="block font-sans text-caption font-medium text-neutral-700">
              メールアドレス <span className="text-accent">*</span>
            </span>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              disabled={submitting}
              className={cn('mt-2', inputClass('email'))}
            />
          </label>
        </div>
        <div className="md:col-span-1">
          <label htmlFor="phone" className="block">
            <span className="block font-sans text-caption font-medium text-neutral-700">
              電話番号 <span className="text-neutral-400">(任意)</span>
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              disabled={submitting}
              className={cn('mt-2', inputClass('phone'))}
            />
          </label>
        </div>
        <div className="md:col-span-1">
          <label htmlFor="category" className="block">
            <span className="block font-sans text-caption font-medium text-neutral-700">
              ご相談カテゴリ
            </span>
            <select
              id="category"
              name="category"
              defaultValue=""
              disabled={submitting}
              className={cn('mt-2 appearance-none', inputClass('category'))}
            >
              <option value="" disabled>
                選択してください
              </option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block">
          <span className="block font-sans text-caption font-medium text-neutral-700">
            ご相談内容 <span className="text-accent">*</span>
          </span>
          <textarea
            id="message"
            name="message"
            required
            rows={7}
            disabled={submitting}
            className={cn('mt-2 resize-y leading-[1.75]', inputClass('message'))}
            placeholder="物件の概要、ご状況、ご希望などをご記入ください。"
          />
        </label>
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
          通常2営業日以内にご返信します。
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ink px-8 py-3 font-sans text-body font-medium text-white transition-all hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? '送信中…' : '無料相談を送信する'}
          {!submitting ? <Send className="h-4 w-4" aria-hidden="true" /> : null}
        </button>
      </div>
    </form>
  );
}
