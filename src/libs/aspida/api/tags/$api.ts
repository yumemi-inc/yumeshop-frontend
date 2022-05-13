import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './index';
import type { Methods as Methods1 } from './_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? 'http://localhost:3000' : baseURL
  ).replace(/\/$/, '');
  const PATH0 = '/tags';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * タグの更新をする
         * @returns OK
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
         * タグの更新をする
         * @returns OK
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
         * タグの削除をする
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(
            prefix,
            prefix0,
            DELETE,
            option,
          ).send(),
        /**
         * タグの削除をする
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
     * タグのリストを取得する
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
        BasicHeaders,
        Methods0['get']['status']
      >(prefix, PATH0, GET, option).json(),
    /**
     * タグのリストを取得する
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
        BasicHeaders,
        Methods0['get']['status']
      >(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    /**
     * タグの追加をする
     */
    post: (option: {
      body: Methods0['post']['reqBody'];
      config?: T | undefined;
    }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(
        prefix,
        PATH0,
        POST,
        option,
      ).send(),
    /**
     * タグの追加をする
     */
    $post: (option: {
      body: Methods0['post']['reqBody'];
      config?: T | undefined;
    }) =>
      fetch<void, BasicHeaders, Methods0['post']['status']>(
        prefix,
        PATH0,
        POST,
        option,
      )
        .send()
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
