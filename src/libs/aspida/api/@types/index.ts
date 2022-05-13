/* eslint-disable */
/** 値段の情報のmodel */
export type Price = {
  /** 割引後の販売価格 */
  selling_price: number
  /** 元の値段 */
  original_price: number
  /** 割引が適応されているか */
  discounted: boolean
  /** 割引の総量 */
  discount_amount: number
  /** 割引の割合(0-100[%]) */
  discount_percentage: number
}

/** ショップアイテムのmodel */
export type ShopItem = {
  /** id */
  id: string
  /** 商品の名前 */
  name: string
  /** 商品のサムネイル画像のURL */
  thumbnail: string
  price: Price
  /** タグの配列 */
  tags: Tag[]
  /** カテゴリの配列 */
  categories: Category[]
  /** キャンペーンの配列 */
  campaigns: Campaign[]
}

/** 商品の詳細情報のmodel */
export type ShopItemDetail = {
  /** id */
  id: string
  /** 商品の名前 */
  name: string
  /** サムネイル画像のURL */
  thumbnail: string
  price: Price
  /** タグの配列 */
  tags: Tag[]
  /** カテゴリのの配列 */
  categories: Category[]
  /** キャンペーンの配列 */
  campaigns: Campaign[]
  /** 商品の詳細 */
  details: DetailContent[]
  /** 画像のURLの配列 */
  images: string[]
  /** 関連商品の配列 */
  related_shop_items: ShopItem[]
}

export type DetailContent = {
  /** ヘッダー */
  header: string
  /** 内容 */
  content: string
}

/** カテゴリのmodel */
export type Category = {
  /** id */
  id: string
  /** カテゴリの名前 */
  name: string
  /** カテゴリのサムネイル画像のURL */
  thumbnail: string
}

export type Campaign = {
  /** id */
  id: string
  /** キャンペーンの名前 */
  name: string
  /** キャンペーンのサムネイル画像のURL */
  thumbnail: string
}

export type Promotion = {
  /** id */
  id: string
  /** プロモーションのタイトル */
  title: string
  /** プロモーションの画像のURL */
  image: string
  /** プロモーションの詳細 */
  detail: string
  /** プロモーションのリンクのURL */
  link: string
}

/** お知らせのmodel */
export type Information = {
  id: string
  title: string
  detail: string
  tags: Tag[]
  announced_at: string
}

export type Tag = {
  /** id */
  id: string
  /** タグの名称 */
  name: string
  /** html5でcolorとして扱える文字列 */
  color: string
  tag_group: TagGroup
}

/**
 * タグのグループを表すenum
 * shop_item: 商品のタググループ
 * information: お知らせのタググループ
 */
export type TagGroup = 'shop_item' | 'information'

export type ShopItemPostParams = {
  /** 商品の名前 */
  name: string
  /** 商品のサムネイル画像のURL */
  thumbnail: string
  /** 販売価格 */
  selling_price: number
  /** 元の値段 */
  original_price: number
  /** タグのidの配列 */
  tags: string[]
  /** カテゴリのidの配列 */
  categories: string[]
  /** キャンペーンのidの配列 */
  campaigns: string[]
  /** 商品の詳細 */
  details: DetailContent[]
  /** 画像URLの配列 */
  images: string[]
  /** 関連商品のidの配列 */
  related_shop_items: string[]
}

export type ShopItemPutParams = {
  /** 商品の名前 */
  name?: string | undefined
  /** 商品のサムネイル画像のURL */
  thumbnail?: string | undefined
  /** 販売価格 */
  selling_price?: number | undefined
  /** 元の値段 */
  original_price?: number | undefined
  /** タグのidの配列 */
  tags?: string[] | undefined
  /** カテゴリのidの配列 */
  categories?: string[] | undefined
  /** キャンペーンのidの配列 */
  campaigns?: string[] | undefined
  /** 商品の詳細 */
  details?: DetailContent[] | undefined
  /** 画像URLの配列 */
  images?: string[] | undefined
  /** 関連商品のidの配列 */
  related_shop_items?: string[] | undefined
}

export type CategoryPostParams = {
  /** カテゴリの名前 */
  name: string
  /** カテゴリのサムネイル画像のURL */
  thumbnail: string
}

export type CategoryPutParams = {
  /** カテゴリの名前 */
  name?: string | undefined
  /** カテゴリのサムネイル画像のURL */
  thumbnail?: string | undefined
}

export type CampaignPostParams = {
  /** カテゴリの名前 */
  name: string
  /** カテゴリのサムネイル画像のURL */
  thumbnail: string
}

export type CampaignPutParams = {
  /** カテゴリの名前 */
  name?: string | undefined
  /** カテゴリのサムネイル画像のURL */
  thumbnail?: string | undefined
}

export type InformationPostParams = {
  /** お知らせのタイトル */
  title: string
  /** お知らせの詳細 */
  detail: string
  /** お知らせのタグ */
  tags: string[]
  /** お知らせのアナウンスされた日時 */
  announced_at: string
}

export type InformationPutParams = {
  /** お知らせのタイトル */
  title?: string | undefined
  /** お知らせの詳細 */
  detail?: string | undefined
  /** お知らせのタグ */
  tags?: string[] | undefined
  /** お知らせのアナウンスされた日時 */
  announced_at?: string | undefined
}

export type PromotionPostParams = {
  /** プロモーションのタイトル */
  title: string
  /** プロモーションの画像のURL */
  image: string
  /** プロモーションの詳細 */
  detail: string
  /** プロモーションのリンクのURL */
  link: string
}

export type PromotionPutParams = {
  /** プロモーションのタイトル */
  title?: string | undefined
  /** プロモーションの画像のURL */
  image?: string | undefined
  /** プロモーションの詳細 */
  detail?: string | undefined
  /** プロモーションのリンクのURL */
  link?: string | undefined
}

export type TagPostParams = {
  /** タグの名前 */
  name: string
  /** タグの色 */
  color: string
  tag_group: TagGroup
}

export type TagPutParams = {
  /** タグの名前 */
  name?: string | undefined
  /** タグの色 */
  color?: string | undefined
}
