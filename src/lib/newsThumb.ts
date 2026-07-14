// 記事一覧のサムネイル。テーマ（クラスター）ごとに画像を割り当てる。
// 1記事1枚の写真は非現実的なため、テーマ別の共有画像でスキャンしやすくする。

export function getNewsThumb(slug: string): string {
  // 区分・ワンルーム投資
  if (/kubun|wanroom/.test(slug)) return '/images/thumb/condo.webp';
  // 土地・戸建て・相続空き家・底地・借地
  if (/teichi|shakuchiken|jikka|akiya|furuya|urenai-tochi|tochi-kyoukai|land|kodate/.test(slug)) {
    return '/images/thumb/house.webp';
  }
  // それ以外（一棟収益・相続/税金一般・お知らせ・成約実績）
  return '/images/thumb/building.webp';
}
