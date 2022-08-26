/* eslint-disable @typescript-eslint/ban-types */

import { Promotion } from './promotion';
import { ShopItem, ShopItemDetail } from './shopItem';

type Schema<
  T extends Record<
    'GET' | 'POST' | 'PUT' | 'DELETE',
    { [url: string]: [object | undefined, object | undefined] }
  >,
> = T;

export type Api = Schema<{
  // メソッド名: {
  //   url: [リクエストの型、レスポンスの型]
  // }
  GET: {
    '/shop_items': [undefined, ShopItem[]];
    '/shop_items/:id': [{ id: string }, ShopItemDetail];
    '/promotions': [undefined, Promotion[]];
  };
  POST: {};
  PUT: {};
  DELETE: {};
}>;
