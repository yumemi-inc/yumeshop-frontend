import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './campaigns'
import type { Methods as Methods1 } from './campaigns/_id@string'
import type { Methods as Methods2 } from './categories'
import type { Methods as Methods3 } from './categories/_id@string'
import type { Methods as Methods4 } from './informations'
import type { Methods as Methods5 } from './informations/_id@string'
import type { Methods as Methods6 } from './promotions'
import type { Methods as Methods7 } from './promotions/_id@string'
import type { Methods as Methods8 } from './shop_items'
import type { Methods as Methods9 } from './shop_items/_id@string'
import type { Methods as Methods10 } from './tags'
import type { Methods as Methods11 } from './tags/_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '')
  const PATH0 = '/campaigns'
  const PATH1 = '/categories'
  const PATH2 = '/informations'
  const PATH3 = '/promotions'
  const PATH4 = '/shop_items'
  const PATH5 = '/tags'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    campaigns: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * キャンペーンを更新する
           * @returns OK
           */
          put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * キャンペーンを更新する
           * @returns OK
           */
          $put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * キャンペーンを削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * キャンペーンを削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * キャンペーンのリストを取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * キャンペーンのリストを取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      /**
       * キャンペーンを追加する
       * @returns OK
       */
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * キャンペーンを追加する
       * @returns OK
       */
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    categories: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * カテゴリを更新する
           * @returns OK
           */
          put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * カテゴリを更新する
           * @returns OK
           */
          $put: (option: { body: Methods3['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * カテゴリを削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * カテゴリを削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * カテゴリのリストを取得
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * カテゴリのリストを取得
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * カテゴリを追加する
       * @returns OK
       */
      post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * カテゴリを追加する
       * @returns OK
       */
      $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    informations: {
      _id: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          /**
           * お知らせを更新する
           * @returns OK
           */
          put: (option: { body: Methods5['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * お知らせを更新する
           * @returns OK
           */
          $put: (option: { body: Methods5['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * お知らせを削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * お知らせを削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * お知らせのリストを取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * お知らせのリストを取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * お知らせを追加する
       * @returns OK
       */
      post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * お知らせを追加する
       * @returns OK
       */
      $post: (option: { body: Methods4['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    promotions: {
      _id: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          /**
           * プロモーションを更新する
           * @returns OK
           */
          put: (option: { body: Methods7['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * プロモーションを更新する
           * @returns OK
           */
          $put: (option: { body: Methods7['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * プロモーションを削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * プロモーションを削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * プロモーションのリストを取得する
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * プロモーションのリストを取得する
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      /**
       * プロモーションを追加する
       * @returns OK
       */
      post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * プロモーションを追加する
       * @returns OK
       */
      $post: (option: { body: Methods6['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    shop_items: {
      _id: (val1: string) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          /**
           * ショップアイテム1件分の詳細を取得する
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * ショップアイテム1件分の詳細を取得する
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods9['get']['resBody'], BasicHeaders, Methods9['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * ショップアイテムを更新する
           */
          put: (option: { body: Methods9['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * ショップアイテムを更新する
           */
          $put: (option: { body: Methods9['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * ショップアイテムを削除する
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * ショップアイテムを削除する
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * ショップアイテムのリストを取得する
       * @returns OK
       */
      get: (option?: { query?: Methods8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], Methods8['get']['resHeaders'], Methods8['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * ショップアイテムのリストを取得する
       * @returns OK
       */
      $get: (option?: { query?: Methods8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], Methods8['get']['resHeaders'], Methods8['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      /**
       * ショップアイテムを追加する
       * @returns OK
       */
      post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * ショップアイテムを追加する
       * @returns OK
       */
      $post: (option: { body: Methods8['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods8['get']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    tags: {
      _id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`

        return {
          /**
           * タグの更新をする
           * @returns OK
           */
          put: (option: { body: Methods11['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * タグの更新をする
           * @returns OK
           */
          $put: (option: { body: Methods11['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * タグの削除をする
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods11['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * タグの削除をする
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods11['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * タグのリストを取得する
       * @returns OK
       */
      get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * タグのリストを取得する
       * @returns OK
       */
      $get: (option?: { query?: Methods10['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods10['get']['resBody'], BasicHeaders, Methods10['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      /**
       * タグの追加をする
       */
      post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods10['post']['status']>(prefix, PATH5, POST, option).send(),
      /**
       * タグの追加をする
       */
      $post: (option: { body: Methods10['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods10['post']['status']>(prefix, PATH5, POST, option).send().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods10['get']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
