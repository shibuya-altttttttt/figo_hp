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
  closedDate?: string;
  closedDisplay?: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
    isIllustration?: boolean;
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
    name: '西八王子1棟',
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
      alt: '西八王子1棟の外観',
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
      src: '/images/cases/daita/land.jpg',
      alt: '土地（更地）のイメージ',
      objectPosition: 'center',
      isIllustration: true,
    },
  },
  {
    slug: 'sakado-yamadacho',
    name: '坂戸市山田町 一棟アパート＋土地',
    type: '一棟アパート＋土地',
    dealType: '買取',
    prefecture: '埼玉県',
    area: '坂戸市山田町',
    station: '東武東上線「坂戸」駅 徒歩10分',
    structure: '木造スレート葺 2階建（共同住宅）',
    built: '1995年(平成7年)11月築',
    size: '土地 計729.81㎡（アパート敷地317.99㎡＋隣接地411.82㎡）/ 建物 218.60㎡',
    image: {
      src: '/images/cases/sakado-yamadacho/land.jpg',
      alt: '土地（隣接地を含む）のイメージ',
      objectPosition: 'center',
      isIllustration: true,
    },
    note: '相続案件。賃貸中の一棟アパート（オーナーチェンジ）と隣接地を一括取得しました。取引金額・詳細所在地は守秘事項のため非公開としています。',
  },
  {
    slug: 'iwatsuki-tochi',
    name: 'さいたま市岩槻区 土地',
    type: '土地',
    dealType: '買取',
    prefecture: '埼玉県',
    area: 'さいたま市岩槻区岩槻',
    station: '東武アーバンパークライン（野田線）「岩槻」駅 徒歩7分',
    structure: '第一種中高層住居専用地域（現況：古家あり）',
    size: '土地 234.84㎡（71.03坪）',
    image: {
      src: '/images/cases/iwatsuki-tochi/land.jpg',
      alt: '土地（空き地）のイメージ',
      objectPosition: 'center',
      isIllustration: true,
    },
    note: '岩槻駅西口土地区画整理事業の区域内。取引金額・詳細所在地は守秘事項のため非公開としています。',
  },
  {
    slug: 'minami-kibogaoka-kodate',
    name: '横浜市旭区 中古戸建',
    type: '戸建',
    dealType: '買取',
    prefecture: '神奈川県',
    area: '横浜市旭区南希望が丘',
    station: '相鉄本線「希望ヶ丘」駅 徒歩15分',
    structure: '木造軸組 2階建',
    built: '1990年(平成2年)3月築',
    size: '土地 100.02㎡（30.25坪）/ 建物 83.63㎡（25.29坪）',
    image: {
      src: '/images/cases/minami-kibogaoka-kodate/photo.jpg',
      alt: '中古戸建のイメージ',
      objectPosition: 'center',
      isIllustration: true,
    },
    note: '第一種低層住居専用地域。取引金額・詳細所在地は守秘事項のため非公開としています。',
  },
];
