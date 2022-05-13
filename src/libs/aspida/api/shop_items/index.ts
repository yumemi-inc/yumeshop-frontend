/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** ショップアイテムのリストを取得する */
  get: {
    query?: {
      /** カテゴリIDによる絞り込み */
      category_id?: string | undefined
      /** キャンペーンIDによる絞り込み */
      campaign_id?: string | undefined
    } | undefined

    status: 200
    /** OK */
    resBody: Types.ShopItem[]

    resHeaders: {
    }
  }

  /** ショップアイテムを追加する */
  post: {
    status: 200
    /** OK */
    resBody: Types.ShopItemDetail
    reqBody: Types.ShopItemPostParams
  }
}
