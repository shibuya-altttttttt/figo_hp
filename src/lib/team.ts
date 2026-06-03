export type CareerItem = {
  period?: string;
  body: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  lead?: string;
  careerSummary?: string;
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
    careerSummary:
      '同志社大学を卒業後、株式会社コスモスイニシアの不動産ソリューション事業にて法人向け投資用不動産の開発・仲介・運営に従事。その後、株式会社Figoを創業。',
    career: [
      { body: '同志社大学 卒業' },
      { body: '株式会社コスモスイニシア（不動産ソリューション事業）' },
      { body: '株式会社Figoを創業' },
    ],
  },
  {
    slug: 'shibuya-yuta',
    name: '渋谷 優太',
    nameEn: 'Shibuya Yuta',
    role: '取締役',
    roleEn: 'Director',
    lead:
      '不動産デベロッパーでの開発・運用と、SUUMOでの広告営業を通じて培った業界知見を活かし、Figoの不動産コンサルティング・再生事業を共同で推進。物件選定から運営改善まで、実務領域を幅広く担当しています。',
    careerSummary:
      '北海道大学を卒業後、株式会社コスモスイニシアの不動産ソリューション事業にて法人向け投資用不動産の開発・運用に従事。その後、株式会社リクルートにてSUUMOの広告営業および新規事業部を経験し、株式会社Figoを共同創業。',
    career: [
      { body: '北海道大学 卒業' },
      { body: '株式会社コスモスイニシア（不動産ソリューション事業）' },
      { body: '株式会社リクルート（SUUMO広告営業・新規事業部）' },
      { body: '株式会社Figoを創業' },
    ],
  },
];
