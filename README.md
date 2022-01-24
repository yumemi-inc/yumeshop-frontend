# yumeshop-frontend
株式会社ゆめみのフロンドインターン課題用の開発環境を提供します。

## Requirements
- Yarn
- Node.js 16.13.1

## Usage
リポジトリをForkして利用してください。

## Development environment
- [Node.js](https://nodejs.org/ja/)(v16.13.1)
- [Yarn](https://yarnpkg.com/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
  - 好みに合わせて以下のライブラリを使用しても問題ありません
    - [emotion](https://emotion.sh/docs/introduction)
      - この開発には導入していません
    - [css(scss).modules](https://github.com/css-modules/css-modules)
      - [Next.jsにビルドイン](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)されています。

## npm scripts
| command   | description                                            |
| :-------- | :----------------------------------------------------- |
| dev       | 開発モードでアプリケーションを起動                     |
| build     | アプリケーションのビルド                               |
| start     | ビルド済みアプリケーションをプロダクションモードで起動 |
| lint      | eslintの実行                                           |
| lint: fix | eslintの実行と修正                                     |
| format    | prettierの実行                                         |
| fix       | format と lint:fix の実行                              |