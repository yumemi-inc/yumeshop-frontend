/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** タグの更新をする */
  put: {
    status: 200
    /** OK */
    resBody: Types.Tag
    reqBody: Types.TagPutParams
  }

  /** タグの削除をする */
  delete: {
    status: 204
  }
}
