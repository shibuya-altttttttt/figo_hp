import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/sections/PlaceholderPage';

export const metadata: Metadata = {
  title: '利用規約',
  description: '株式会社Figoの利用規約。',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <PlaceholderPage
      eyebrow="Terms of Service"
      title="利用規約"
      description="本サイトのご利用に関する規約を記載予定です。本実装は準備中です。"
      breadcrumb={[{ label: '利用規約' }]}
    />
  );
}
