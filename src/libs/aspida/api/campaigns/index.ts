/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** キャンペーンのリストを取得する */
  get: {
    status: 200
    /** OK */
    resBody: Types.Campaign[]
  }

  /** キャンペーンを追加する */
  post: {
    status: 200
    /** OK */
    resBody: Types.Campaign
    reqBody: Types.CampaignPostParams
  }
}
