/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** プロモーションを更新する */
  put: {
    status: 200
    /** OK */
    resBody: Types.Promotion
    reqBody: Types.PromotionPutParams
  }

  /** プロモーションを削除する */
  delete: {
    status: 204
  }
}
