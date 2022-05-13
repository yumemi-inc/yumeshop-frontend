import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods0 } from './index';
import type { Methods as Methods1 } from './_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? 'http://localhost:3000' : baseURL
  ).replace(/\/$/, '');
  const PATH0 = '/categories';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * カテゴリを更新する
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
         * カテゴリを更新する
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
         * カテゴリを削除する
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['delete']['status']>(
            prefix,
            prefix0,
            DELETE,
            option,
          ).send(),
        /**
         * カテゴリを削除する
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
     * カテゴリのリストを取得
     * @returns OK
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0['get']['resBody'],
        BasicHeaders,
        Methods0['get']['status']
      >(prefix, PATH0, GET, option).json(),
    /**
     * カテゴリのリストを取得
     * @returns OK
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0['get']['resBody'],
        BasicHeaders,
        Methods0['get']['status']
      >(prefix, PATH0, GET, option)
        .json()
        .then((r) => r.body),
    /**
     * カテゴリを追加する
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
     * カテゴリを追加する
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
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
