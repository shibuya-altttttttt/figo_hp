import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/sections/PlaceholderPage';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社Figoのプライバシーポリシー。',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      eyebrow="Privacy Policy"
      title="プライバシーポリシー"
      description="個人情報の取り扱いに関する方針を記載予定です。本実装は準備中です。"
      breadcrumb={[{ label: 'プライバシーポリシー' }]}
    />
  );
}
