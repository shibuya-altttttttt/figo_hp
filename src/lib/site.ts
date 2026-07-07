export const siteConfig = {
  name: '株式会社Figo',
  nameEn: 'FIGO GROUP',
  tagline: '価値を創り、価値を守る。',
  description:
    '株式会社Figoは、東京都港区新橋を拠点とする不動産コンサルティング・不動産再生事業の専門会社です。一棟マンション・一棟ビル・区分マンションの売買仲介から、相続対策・資産継承、不動産再生まで、購入・保有・売却のライフサイクル全体でお客様の不動産資産価値を最大化します。',
  url: 'https://www.f-figo.com',
  ogImage: '/images/og-default.png',
  licenseNumber: '宅地建物取引業免許 東京都知事(1)第112936号',
  representative: '金潤求',
  founded: '2025年',
  officers: [
    { role: '代表取締役', name: '金潤求' },
    { role: '取締役', name: '渋谷 優太' },
  ],
  address: {
    postal: '〒105-0004',
    full: '東京都港区新橋1-12-9 新橋プレイス609',
    prefecture: '東京都',
    city: '港区',
    street: '新橋1-12-9 新橋プレイス609',
  },
  contact: {
    tel: '03-6274-6185',
    telDisplay: '03-6274-6185',
    hours: '平日 9:00 - 18:00',
  },
  social: {},
};

export type SiteConfig = typeof siteConfig;

export const navigationLinks: { label: string; href: string }[] = [
  { label: 'サービス', href: '/services' },
  { label: '成約実績', href: '/cases' },
  { label: '売却のご相談', href: '/sell' },
  { label: '購入のご相談', href: '/buy' },
  { label: '会社概要', href: '/about' },
  { label: '代表挨拶', href: '/message' },
  { label: 'よくあるご質問', href: '/faq' },
];
