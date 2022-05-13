/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** お知らせのリストを取得する */
  get: {
    status: 200
    /** OK */
    resBody: Types.Information[]
  }

  /** お知らせを追加する */
  post: {
    status: 200
    /** OK */
    resBody: Types.Information
    reqBody: Types.InformationPostParams
  }
}
