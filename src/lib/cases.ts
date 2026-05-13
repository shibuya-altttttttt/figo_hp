export type CaseRecord = {
  slug: string;
  name: string;
  type: string;
  dealType: '仲介' | '買取';
  prefecture: string;
  area?: string;
  station?: string;
  structure?: string;
  units?: string;
  built?: string;
  size?: string;
  closedDate: string;
  closedDisplay: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
  note?: string;
};

export const cases: CaseRecord[] = [
  {
    slug: 'hishiwa-shinagawa-nakanobu',
    name: '菱和パレス品川中延',
    type: '区分マンション',
    dealType: '仲介',
    prefecture: '東京都',
    area: '品川区二葉4丁目',
    station: '都営浅草線「中延」駅 / 東急大井町線「中延」駅 圏内',
    structure: '鉄筋コンクリート造',
    closedDate: '2026-03-20',
    closedDisplay: '2026年3月',
    image: {
      src: '/images/cases/hishiwa-shinagawa-nakanobu/exterior.png',
      alt: '菱和パレス品川中延(東京都品川区二葉)の外観',
      objectPosition: 'center',
    },
    note: '個別住戸の所在階・専有面積などの詳細は守秘事項のため非公開としています。',
  },
  {
    slug: 'wien-residence',
    name: 'ウィーンレジデンス',
    type: '一棟マンション',
    dealType: '仲介',
    prefecture: '埼玉県',
    area: '戸田市上戸田',
    station: 'JR埼京線「戸田」駅 徒歩10分',
    structure: '鉄筋コンクリート造 陸屋根 4階建',
    units: '全13戸',
    built: '1988年(昭和63年)1月築',
    size: '延床面積 610.01㎡',
    closedDate: '2025-12-23',
    closedDisplay: '2025年12月',
    image: {
      src: '/images/cases/wien-residence/exterior-v2.png',
      alt: 'ウィーンレジデンス（埼玉県戸田市）の外観',
      objectPosition: 'center',
    },
  },
  {
    slug: 'rose-mansion',
    name: 'ローズマンション白糸台第三',
    type: '一棟マンション',
    dealType: '仲介',
    prefecture: '東京都',
    area: '府中市白糸台',
    structure: '鉄筋コンクリート造 7階建',
    built: '1998年(平成10年)1月築',
    size: '延床面積 2,700.52㎡',
    closedDate: '2025-12-08',
    closedDisplay: '2025年12月',
    image: {
      src: '/images/cases/rose-mansion/exterior.png',
      alt: 'ローズマンション白糸台第三（東京都府中市白糸台）の外観',
      objectPosition: 'center',
    },
  },
  {
    slug: 'hachioji',
    name: '西八王子1棟（メゾン平岡）',
    type: '一棟（共同住宅+店舗）',
    dealType: '仲介',
    prefecture: '東京都',
    area: '八王子市平岡町',
    station: 'JR中央線「西八王子」駅 徒歩18分',
    structure: '鉄筋コンクリート造 陸屋根 5階建',
    units: '全17戸（住居15・店舗2）',
    built: '1981年(昭和56年)4月築',
    size: '土地 359.42㎡ / 建物 1,008.65㎡',
    closedDate: '2025-10-31',
    closedDisplay: '2025年10月',
    image: {
      src: '/images/cases/hachioji/exterior.png',
      alt: '西八王子1棟（メゾン平岡）の外観',
      objectPosition: 'center',
    },
  },
  {
    slug: 'vanvillage-nakatsuma',
    name: 'ヴァンビラージュ中妻',
    type: '一棟マンション',
    dealType: '仲介',
    prefecture: '埼玉県',
    closedDate: '2025-08-26',
    closedDisplay: '2025年8月',
    image: {
      src: '/images/cases/vanvillage-nakatsuma/exterior.png',
      alt: 'ヴァンビラージュ中妻（埼玉県）の外観',
      objectPosition: 'center',
    },
    note: '詳細は守秘事項のため非公開。',
  },
  {
    slug: 'haim-soshigaya',
    name: 'ハイム橘',
    type: '一棟マンション',
    dealType: '仲介',
    prefecture: '東京都',
    area: '世田谷区祖師谷',
    station: '小田急小田原線「祖師ヶ谷大蔵」駅 徒歩14分',
    structure: '鉄筋コンクリート造 3階建',
    units: '全28戸',
    size: '土地 1,243.33㎡ / 建物 879.60㎡',
    closedDate: '2025-08-21',
    closedDisplay: '2025年8月',
    image: {
      src: '/images/cases/haim-soshigaya/exterior-v2.png',
      alt: 'ハイム橘（東京都世田谷区祖師谷）の外観',
      objectPosition: 'center',
    },
  },
  {
    slug: 'daita-tochi',
    name: '殿塚ビル（世田谷代田）',
    type: '収益一棟（住宅+店舗）',
    dealType: '仲介',
    prefecture: '東京都',
    area: '世田谷区代田',
    station: '京王井の頭線「下北沢」駅 徒歩13分 / 小田急線「世田谷代田」駅 徒歩7分',
    structure: '鉄骨造 5階建',
    units: '全14戸',
    built: '1973年(昭和48年)築',
    size: '土地 179.40㎡ / 建物 577.68㎡',
    closedDate: '2025-07-18',
    closedDisplay: '2025年7月',
    image: {
      src: '/images/cases/daita/exterior.png',
      alt: '殿塚ビル（東京都世田谷区代田）の外観',
      objectPosition: 'center',
    },
  },
];
