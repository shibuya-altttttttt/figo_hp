export type CareerItem = {
  period: string;
  body: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  lead?: string;
  career: CareerItem[];
};

export const team: TeamMember[] = [
  {
    slug: 'kim-yungu',
    name: '金 潤求',
    nameEn: 'Kim Yun-Gu',
    role: '代表取締役',
    roleEn: 'Representative Director',
    lead:
      '不動産業界での豊富な経験を基盤に、相続・資産継承の専門家として、購入・保有・売却のライフサイクル全体でお客様の資産継承をサポート。「顔が見える信頼関係」を大切にし、お客様の課題と目標に真正面から向き合います。',
    career: [
      { period: '2020年', body: '同志社大学 卒業' },
      { period: '2020年', body: '株式会社コスモスイニシア 入社' },
      { period: '2025年', body: '株式会社Figoを創業' },
    ],
  },
  {
    slug: 'shibuya-yuta',
    name: '渋谷 優太',
    nameEn: 'Shibuya Yuta',
    role: '取締役',
    roleEn: 'Director',
    lead:
      '不動産デベロッパーと人材サービスで培った経験を活かし、Figoの不動産コンサルティング・再生事業を共同で推進。物件選定から運営改善まで、実務領域を幅広く担当しています。',
    career: [
      { period: '2020年', body: '北海道大学 卒業' },
      { period: '2020年', body: '株式会社コスモスイニシア 入社' },
      { period: '2022年', body: '株式会社リクルート 入社' },
      { period: '2025年', body: '株式会社Figoを創業' },
    ],
  },
];
