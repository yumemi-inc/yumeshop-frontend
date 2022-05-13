/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** お知らせを更新する */
  put: {
    status: 200
    /** OK */
    resBody: Types.Information
    reqBody: Types.InformationPutParams
  }

  /** お知らせを削除する */
  delete: {
    status: 204
  }
}
