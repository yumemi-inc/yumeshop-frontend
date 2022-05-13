/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** カテゴリを更新する */
  put: {
    status: 200
    /** OK */
    resBody: Types.Category
    reqBody: Types.CategoryPutParams
  }

  /** カテゴリを削除する */
  delete: {
    status: 204
  }
}
