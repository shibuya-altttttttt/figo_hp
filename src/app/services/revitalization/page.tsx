import type { Metadata } from 'next';
import { ServiceDetailLayout } from '@/components/sections/ServiceDetailLayout';
import { serviceMap } from '@/lib/services';

const service = serviceMap.revitalization;

export const metadata: Metadata = {
  title: `${service.title} | 株式会社Figo`,
  description:
    '東京・新橋の不動産再生事業。低稼働物件・空き家・築古一棟物件・賃貸需要が落ちた区分マンションを買取または事業主体として取得し、リーシング・リノベーション・運営改善で収益改善と資産価値再生を実現します。',
  keywords: [
    '不動産再生 東京',
    '低稼働物件 買取',
    '空き家 買取',
    '築古 一棟 再生',
    'リノベーション 収益化',
    '賃貸需要 改善',
    '区分マンション 買取',
    'Figo 不動産再生',
  ],
  alternates: { canonical: '/services/revitalization' },
  openGraph: {
    title: `${service.title} | 株式会社Figo`,
    description: service.shortLead,
    url: '/services/revitalization',
  },
};

export default function RevitalizationPage() {
  return <ServiceDetailLayout service={service} />;
}
