import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './index';
import type { Methods as Methods1 } from './_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? 'http://localhost:3000' : baseURL
  ).replace(/\/$/, '');
  const PATH0 = '/shop_items';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * ショップアイテム1件分の詳細を取得する
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods1['get']['resBody'],
            BasicHeaders,
            Methods1['get']['status']
          >(prefix, prefix0, GET, option).json(),
        /**
         * ショップアイテム1件分の詳細を取得する
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<
            Methods1['get']['resBody'],
            BasicHeaders,
            Methods1['get']['status']
          >(prefix, prefix0, GET, option)
            .json()
            .then((r) => r.body),
        /**
         * ショップアイテムを更新する
         */
        put: (option: {
          body: Methods1['put']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<
            Methods1['put']['resBody'],
            BasicHeaders,
            Methods1['put']['status']
          >(prefix, prefix0, PUT, option).json(),
        /**
         * ショップアイテムを更新する
         */
        $put: (option: {
          body: Methods1['put']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<
            Methods1['put']['resBody'],
            BasicHeaders,
            Methods1['put']['status']
          >(prefix, prefix0, PUT, option)
            .json()
            .then((r) => r.body),
        /**
         * ショップアイテムを削除する
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(
            prefix,
            prefix0,
            DELETE,
            option,
          ).send(),
        /**
         * ショップアイテムを削除する
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(
            prefix,
            prefix0,
            DELETE,
            option,
          )
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    /**
     * ショップアイテムのリストを取得する
     * @returns OK
     */
    get: (
      option?:
        | {
            query?: Methods0['get']['query'] | undefined;
            config?: T | undefined;
          }
        | undefined,
    ) =>
      fetch<
        Methods0['get']['resBody'],
        Methods0['get']['resHeaders'],
        Methods0['get']['status']
      >(prefix, PATH0, GET, option).json(),
    /**
     * ショップアイテムのリストを取得する
     * @returns OK
     */
    $get: (
      option?:
        | {
            query?: Methods0['get']['query'] | undefined;
            config?: T | undefined;
          }
        | undefined,
    ) =>
      fetch<
        Methods0['get']['resBody'],
        Methods0['get']['resHeaders'],
        Methods0['get']['status']
      >(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    /**
     * ショップアイテムを追加する
     * @returns OK
     */
    post: (option: {
      body: Methods0['post']['reqBody'];
      config?: T | undefined;
    }) =>
      fetch<
        Methods0['post']['resBody'],
        BasicHeaders,
        Methods0['post']['status']
      >(prefix, PATH0, POST, option).json(),
    /**
     * ショップアイテムを追加する
     * @returns OK
     */
    $post: (option: {
      body: Methods0['post']['reqBody'];
      config?: T | undefined;
    }) =>
      fetch<
        Methods0['post']['resBody'],
        BasicHeaders,
        Methods0['post']['status']
      >(prefix, PATH0, POST, option)
        .json()
        .then((r) => r.body),
    $path: (
      option?:
        | { method?: 'get' | undefined; query: Methods0['get']['query'] }
        | undefined,
    ) =>
      `${prefix}${PATH0}${
        option && option.query ? `?${dataToURLString(option.query)}` : ''
      }`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
