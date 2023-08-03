# yumeshop-frontend

株式会社ゆめみのフロンドインターン課題用の開発環境を提供します。

## Requirements

- Yarn
- Node.js 18.16.1

## Usage

リポジトリを Fork して利用してください。

## Development environment

- [Node.js](https://nodejs.org/ja/)(v18.16.1)
- [Yarn](https://yarnpkg.com/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [emotion](https://emotion.sh/docs/introduction)
  - 好みに合わせて以下のライブラリを使用しても問題ありません
    - [css(scss).modules](https://github.com/css-modules/css-modules)
      - [Next.js にビルドイン](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)されています。

## npm scripts

| command         | description                                                        |
| :-------------- | :----------------------------------------------------------------- |
| dev             | 開発モードでアプリケーションを起動                                 |
| build           | アプリケーションのビルド                                           |
| start           | ビルド済みアプリケーションをプロダクションモードで起動             |
| lint            | eslint の実行                                                      |
| lint: fix       | eslint の実行と修正                                                |
| format          | prettier の実行                                                    |
| fix             | format と lint:fix の実行                                          |
| storybook       | storybook の起動                                                   |
| build-storybook | storybook のビルド                                                 |
| mock            | mock サーバ起動（データ 1 件 または example に書いてあるもののみ） |
| mock:many       | mock サーバ起動（データ件数たくさん）                              |
| generate        | openapi.yaml を元に TypeScript の型と API クライアントを生成       |
| test            | jest の実行                                                        |
