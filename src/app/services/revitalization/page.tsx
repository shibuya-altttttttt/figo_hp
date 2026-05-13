import type { Metadata } from 'next';
import { ServiceDetailLayout } from '@/components/sections/ServiceDetailLayout';
import { serviceMap } from '@/lib/services';

const service = serviceMap.revitalization;

export const metadata: Metadata = {
  title: `${service.title} | 株式会社Figo`,
  description:
    '利用価値が低迷している不動産を取得し、リーシング・リノベーション等によって収益改善・資産価値向上を実現。物件取得から改修、市場供給まで、Figoが事業主体として一貫して手がけます。',
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
