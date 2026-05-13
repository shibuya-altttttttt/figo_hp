import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  message?: string;
  privacy?: boolean;
  hp?: string;
};

const RESEND_API = 'https://api.resend.com/emails';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: 'invalid_json' },
      { status: 400 },
    );
  }

  if (payload.hp) {
    return NextResponse.json({ ok: true });
  }

  const errors: string[] = [];
  if (!payload.name?.trim()) errors.push('name');
  if (!payload.email?.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email))
    errors.push('email');
  if (!payload.message?.trim()) errors.push('message');
  if (!payload.privacy) errors.push('privacy');

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, error: 'validation', fields: errors },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.MAIL_TO ?? 'info@f-figo.com';
  const fromAddress = process.env.MAIL_FROM ?? 'Figo Web <noreply@f-figo.com>';

  const safeName = escapeHtml(payload.name ?? '');
  const safeEmail = escapeHtml(payload.email ?? '');
  const safePhone = escapeHtml(payload.phone ?? '');
  const safeCategory = escapeHtml(payload.category ?? '');
  const safeMessage = escapeHtml(payload.message ?? '').replace(/\n/g, '<br />');

  const html = `
    <h2 style="font-family: sans-serif; font-weight: 600;">Figo Web より新規お問い合わせ</h2>
    <table style="font-family: sans-serif; border-collapse: collapse; font-size: 14px;">
      <tr><td style="padding: 6px 12px;"><b>お名前</b></td><td style="padding: 6px 12px;">${safeName}</td></tr>
      <tr><td style="padding: 6px 12px;"><b>メール</b></td><td style="padding: 6px 12px;">${safeEmail}</td></tr>
      <tr><td style="padding: 6px 12px;"><b>電話</b></td><td style="padding: 6px 12px;">${safePhone || '—'}</td></tr>
      <tr><td style="padding: 6px 12px;"><b>カテゴリ</b></td><td style="padding: 6px 12px;">${safeCategory || '—'}</td></tr>
    </table>
    <h3 style="font-family: sans-serif; margin-top: 20px;">ご相談内容</h3>
    <div style="font-family: sans-serif; white-space: pre-wrap; line-height: 1.7;">${safeMessage}</div>
  `;

  const text = [
    `お名前: ${payload.name ?? ''}`,
    `メール: ${payload.email ?? ''}`,
    `電話: ${payload.phone ?? ''}`,
    `カテゴリ: ${payload.category ?? ''}`,
    '',
    'ご相談内容:',
    payload.message ?? '',
  ].join('\n');

  if (!apiKey) {
    console.warn(
      '[contact] RESEND_API_KEY is not set. Skipping send. Payload received:\n',
      text,
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(RESEND_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: payload.email,
        subject: `[Figo Web] ${payload.category ? `[${payload.category}] ` : ''}${payload.name} 様よりお問い合わせ`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('[contact] Resend failed:', res.status, body);
      return NextResponse.json(
        { ok: false, error: 'send_failed' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json(
      { ok: false, error: 'send_failed' },
      { status: 502 },
    );
  }
}
