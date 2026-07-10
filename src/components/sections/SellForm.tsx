'use client';

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/cn';

export type SellFormVariant = 'income' | 'land' | 'kubun' | 'general';

type VariantConfig = {
  category: string;
  propertyTypes: string[];
  locationPlaceholder: string;
};

const variantConfig: Record<SellFormVariant, VariantConfig> = {
  income: {
    category: '不動産の売却相談（一棟収益）',
    propertyTypes: [
      '一棟マンション',
      '一棟アパート',
      '一棟ビル',
      '区分マンション（賃貸中）',
      'その他の収益物件',
    ],
    locationPlaceholder: '例: 中野区沼袋2丁目（番地までなくても構いません）',
  },
  land: {
    category: '不動産の売却相談（土地・戸建て）',
    propertyTypes: [
      '土地',
      '戸建て（空き家・居住中）',
      '古家付き土地',
      '賃貸中の戸建て',
      'その他',
    ],
    locationPlaceholder: '例: 江戸川区鹿骨1丁目（番地までなくても構いません）',
  },
  kubun: {
    category: '不動産の売却相談（区分・ワンルーム投資）',
    propertyTypes: [
      'ワンルーム（投資用区分マンション）',
      'ファミリータイプの区分マンション（賃貸中）',
      '自宅として居住中の区分マンション',
      '複数戸まとめて',
      'その他',
    ],
    locationPlaceholder: '例: 品川区大井1丁目／物件名（番地までなくても構いません）',
  },
  general: {
    category: '不動産の売却相談',
    propertyTypes: [
      '一棟マンション',
      '一棟アパート',
      '一棟ビル',
      '土地',
      '戸建て',
      '区分マンション',
      'その他',
    ],
    locationPlaceholder: '例: 港区新橋1丁目（番地までなくても構いません）',
  },
};

const timingOptions = [
  'できるだけ早く',
  '半年以内をめどに',
  '1年以内をめどに',
  '時期は未定（まずは価格を知りたい）',
];

const loanOptions = ['残債あり', '残債なし', 'わからない・回答しない'];

const occupancyOptions = ['空き家・空地', '賃貸中', '居住中', 'その他'];

const subleaseOptions = [
  'サブリース（家賃保証）契約中',
  'サブリースなし（通常の賃貸管理）',
  '空室',
  'わからない・回答しない',
];

type Status =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success' }
  | { state: 'error'; message: string };

function buildMessage(formData: FormData, variant: SellFormVariant) {
  const get = (key: string) => String(formData.get(key) ?? '').trim();
  const lines: string[] = [
    `【物件種別】${get('propertyType') || '未選択'}`,
    `【所在地】${get('propertyLocation') || '未記入'}`,
  ];
  if (variant === 'income') {
    if (get('annualRent')) lines.push(`【満室想定の年間賃料】${get('annualRent')}`);
    if (get('loanStatus')) lines.push(`【ローン残債】${get('loanStatus')}`);
  }
  if (variant === 'land') {
    if (get('occupancy')) lines.push(`【現況】${get('occupancy')}`);
  }
  if (variant === 'kubun') {
    if (get('monthlyRent')) lines.push(`【現在の月額家賃】${get('monthlyRent')}`);
    if (get('loanStatus')) lines.push(`【ローン残債】${get('loanStatus')}`);
    if (get('sublease')) lines.push(`【サブリース（家賃保証）】${get('sublease')}`);
  }
  if (get('timing')) lines.push(`【売却希望時期】${get('timing')}`);
  const note = get('note');
  if (note) {
    lines.push('', '【補足・ご質問】', note);
  }
  return lines.join('\n');
}

export function SellForm({ variant = 'general' }: { variant?: SellFormVariant }) {
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const config = variantConfig[variant];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      category: config.category,
      message: buildMessage(formData, variant),
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
              売却のご相談を送信しました。
            </h3>
            <p className="mt-6 max-w-xl text-body leading-[1.9] text-neutral-700">
              内容を確認のうえ、担当者より2営業日以内にご連絡いたします。この時点で売却が決まるわけではありません。まずは現状の整理からご一緒します。お急ぎの場合は、お電話 (03-6274-6185 / 平日 9:00-18:00) でもお気軽にどうぞ。
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
          <label htmlFor="sell-propertyType" className="block">
            <span className={labelClass}>
              物件種別 <span className="text-accent">*</span>
            </span>
            <select
              id="sell-propertyType"
              name="propertyType"
              required
              defaultValue=""
              disabled={submitting}
              className={cn('mt-2 appearance-none', inputClass)}
            >
              <option value="" disabled>
                選択してください
              </option>
              {config.propertyTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="sell-location" className="block">
            <span className={labelClass}>
              物件の所在地 <span className="text-accent">*</span>
            </span>
            <input
              type="text"
              id="sell-location"
              name="propertyLocation"
              required
              autoComplete="off"
              disabled={submitting}
              placeholder={config.locationPlaceholder}
              className={cn('mt-2', inputClass)}
            />
          </label>
        </div>

        {variant === 'income' ? (
          <>
            <div>
              <label htmlFor="sell-annualRent" className="block">
                <span className={labelClass}>
                  満室想定の年間賃料 <span className="text-neutral-400">(任意)</span>
                </span>
                <input
                  type="text"
                  id="sell-annualRent"
                  name="annualRent"
                  disabled={submitting}
                  placeholder="例: 1,200万円（おおよそで構いません）"
                  className={cn('mt-2', inputClass)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="sell-loanStatus" className="block">
                <span className={labelClass}>
                  ローン残債 <span className="text-neutral-400">(任意)</span>
                </span>
                <select
                  id="sell-loanStatus"
                  name="loanStatus"
                  defaultValue=""
                  disabled={submitting}
                  className={cn('mt-2 appearance-none', inputClass)}
                >
                  <option value="">選択してください</option>
                  {loanOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </>
        ) : null}

        {variant === 'land' ? (
          <div>
            <label htmlFor="sell-occupancy" className="block">
              <span className={labelClass}>
                現況 <span className="text-neutral-400">(任意)</span>
              </span>
              <select
                id="sell-occupancy"
                name="occupancy"
                defaultValue=""
                disabled={submitting}
                className={cn('mt-2 appearance-none', inputClass)}
              >
                <option value="">選択してください</option>
                {occupancyOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ) : null}

        {variant === 'kubun' ? (
          <>
            <div>
              <label htmlFor="sell-monthlyRent" className="block">
                <span className={labelClass}>
                  現在の月額家賃 <span className="text-neutral-400">(任意)</span>
                </span>
                <input
                  type="text"
                  id="sell-monthlyRent"
                  name="monthlyRent"
                  disabled={submitting}
                  placeholder="例: 8.5万円（空室なら以前の家賃で構いません）"
                  className={cn('mt-2', inputClass)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="sell-loanStatus" className="block">
                <span className={labelClass}>
                  ローン残債 <span className="text-neutral-400">(任意)</span>
                </span>
                <select
                  id="sell-loanStatus"
                  name="loanStatus"
                  defaultValue=""
                  disabled={submitting}
                  className={cn('mt-2 appearance-none', inputClass)}
                >
                  <option value="">選択してください</option>
                  {loanOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="sell-sublease" className="block">
                <span className={labelClass}>
                  サブリース（家賃保証） <span className="text-neutral-400">(任意)</span>
                </span>
                <select
                  id="sell-sublease"
                  name="sublease"
                  defaultValue=""
                  disabled={submitting}
                  className={cn('mt-2 appearance-none', inputClass)}
                >
                  <option value="">選択してください</option>
                  {subleaseOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </>
        ) : null}

        <div>
          <label htmlFor="sell-timing" className="block">
            <span className={labelClass}>
              売却希望時期 <span className="text-neutral-400">(任意)</span>
            </span>
            <select
              id="sell-timing"
              name="timing"
              defaultValue=""
              disabled={submitting}
              className={cn('mt-2 appearance-none', inputClass)}
            >
              <option value="">選択してください</option>
              {timingOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="sell-name" className="block">
            <span className={labelClass}>
              お名前 <span className="text-accent">*</span>
            </span>
            <input
              type="text"
              id="sell-name"
              name="name"
              required
              autoComplete="name"
              disabled={submitting}
              className={cn('mt-2', inputClass)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="sell-email" className="block">
            <span className={labelClass}>
              メールアドレス <span className="text-accent">*</span>
            </span>
            <input
              type="email"
              id="sell-email"
              name="email"
              required
              autoComplete="email"
              disabled={submitting}
              className={cn('mt-2', inputClass)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="sell-phone" className="block">
            <span className={labelClass}>
              電話番号 <span className="text-neutral-400">(任意)</span>
            </span>
            <input
              type="tel"
              id="sell-phone"
              name="phone"
              autoComplete="tel"
              disabled={submitting}
              className={cn('mt-2', inputClass)}
            />
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="sell-note" className="block">
          <span className={labelClass}>
            補足・ご質問 <span className="text-neutral-400">(任意)</span>
          </span>
          <textarea
            id="sell-note"
            name="note"
            rows={5}
            disabled={submitting}
            className={cn('mt-2 resize-y leading-[1.75]', inputClass)}
            placeholder="ご状況やご希望があればご記入ください。空欄のままでも構いません。"
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
          ご相談・査定は無料です。営業のお電話を重ねることはありません。
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ink px-8 py-3 font-sans text-body font-medium text-white transition-all hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? '送信中…' : '無料で売却相談する'}
          {!submitting ? <Send className="h-4 w-4" aria-hidden="true" /> : null}
        </button>
      </div>
    </form>
  );
}
