import type { Metadata } from 'next';
import { ServiceDetailLayout } from '@/components/sections/ServiceDetailLayout';
import { serviceMap } from '@/lib/services';

const service = serviceMap.consulting;

export const metadata: Metadata = {
  title: `${service.title} | 株式会社Figo`,
  description:
    '東京・新橋の不動産コンサルティング。一棟マンション・一棟ビル・区分マンションの売買仲介、収益不動産の取得・運用、相続対策、資産継承、共有名義の整理、資産管理会社の検討まで、購入・保有・売却・継承のライフサイクル全体で伴走します。',
  keywords: [
    '不動産コンサルティング',
    '新橋 不動産',
    '一棟マンション 売買 仲介',
    '一棟ビル 売却',
    '区分マンション 売買',
    '収益不動産 取得',
    '相続対策 不動産',
    '資産継承 コンサルティング',
    '共有名義 解消',
    '資産管理会社 設立',
  ],
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
