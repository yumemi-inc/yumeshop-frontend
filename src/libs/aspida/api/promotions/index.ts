/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** プロモーションのリストを取得する */
  get: {
    status: 200
    /** OK */
    resBody: Types.Promotion[]
  }

  /** プロモーションを追加する */
  post: {
    status: 200
    /** OK */
    resBody: Types.Promotion
    reqBody: Types.PromotionPostParams
  }
}
