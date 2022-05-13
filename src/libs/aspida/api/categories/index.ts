/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** カテゴリのリストを取得 */
  get: {
    status: 200
    /** OK */
    resBody: Types.Category[]
  }

  /** カテゴリを追加する */
  post: {
    status: 200
    /** OK */
    resBody: Types.Category
    reqBody: Types.CategoryPostParams
  }
}
