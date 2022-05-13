/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** タグのリストを取得する */
  get: {
    query?: {
      /** タググループによる絞り込み(複数指定可) */
      tag_group?: Types.TagGroup[] | undefined
    } | undefined

    status: 200
    /** OK */
    resBody: Types.Tag[]
  }

  /** タグの追加をする */
  post: {
    status: 200
    reqBody: Types.TagPostParams
  }
}
