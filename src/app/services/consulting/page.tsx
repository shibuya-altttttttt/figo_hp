import type { Metadata } from 'next';
import { ServiceDetailLayout } from '@/components/sections/ServiceDetailLayout';
import { serviceMap } from '@/lib/services';

const service = serviceMap.consulting;

export const metadata: Metadata = {
  title: `${service.title} | 株式会社Figo`,
  description:
    '収益用・事業用不動産の購入から運用・管理・売却まで一貫サポート。相続対策・事前準備、財産管理・資産保全、資産継承コンサルティング、不動産売買・仲介まで、ライフサイクル全体でお客様の資産価値を最大化します。',
  alternates: { canonical: '/services/consulting' },
  openGraph: {
    title: `${service.title} | 株式会社Figo`,
    description: service.shortLead,
    url: '/services/consulting',
  },
};

export default function ConsultingPage() {
  return <ServiceDetailLayout service={service} />;
}
