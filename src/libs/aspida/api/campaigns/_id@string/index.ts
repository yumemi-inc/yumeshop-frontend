/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** キャンペーンを更新する */
  put: {
    status: 200
    /** OK */
    resBody: Types.Campaign
    reqBody: Types.CampaignPutParams
  }

  /** キャンペーンを削除する */
  delete: {
    status: 204
  }
}
