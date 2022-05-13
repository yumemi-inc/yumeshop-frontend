/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** ショップアイテム1件分の詳細を取得する */
  get: {
    status: 200
    /** OK */
    resBody: Types.ShopItemDetail
  }

  /** ショップアイテムを更新する */
  put: {
    status: 200
    resBody: Types.ShopItemDetail
    reqBody: Types.ShopItemPutParams
  }

  /** ショップアイテムを削除する */
  delete: {
    status: 204
  }
}
