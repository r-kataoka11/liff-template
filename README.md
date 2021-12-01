# LIFFアプリテンプレート
[![English](https://img.shields.io/badge/lang-en-orange.svg)](https://github.com/r-kataoka11/liff-template/blob/master/README.en.md)

LIFFアプリを作り始める際に実際に必要になってくるものを内包したテンプレートを作りました。

## 特徴
- ビルドツールにViteを採用しているので高速
- React Router v6を採用
- ローカルのプレビュー環境がHTTPSで起動（LIFFのEndpoint URLがHTTPS必須のため）
- 複雑な状態管理と少ないコードでAPI接続を実現するためRedux Toolkitを採用
- 様々なサンプルコードを内包
- プロジェクトの特性を問わず使用できるようにUIライブラリをあえて未導入（好きに導入できる）

## 採用した技術・ライブラリ等
- React
- Vite
- Redux Toolkit
- React Router v6
- Storybook
- Prettier

## 内包している内容
- LIFFの初期化とログイン・ログアウト処理
- LIFFの自動初期化＆ログイン処理
- RTK Queryのサンプルコード
- React Routerのサンプルコード（App.tsx）
- コンポーネントのサンプルとStorybookのサンプル
- コンポーネント分類のサンプル
- PrettierをVSCodeで作動させるための設定

## 開発を始めるには

1. このプロジェクトをforkして新しいリポジトリを作成します
2. LINE DevelopersコンソールでプロバイダーとLIFFアプリを作成します
3. `.env.sample` をコピーして `.env` を作成します
4. 作成したLIFFアプリのLIFF IDを `.env` のVITE_LIFF_IDに入力します
5. `yarn` でパッケージをインストールします
6. `yarn dev` で起動します

※RTK Queryを使う場合は `.env` の `VITE_API_BASE_URL` にAPIのベースURLを追記してください。

### コマンド一覧

`yarn dev` : プレビュー環境を起動します

`yarn storybook` ： Storybookのプレビュー環境を起動します

`yarn build` ： アプリケーションをビルドします

`yarn build-storybook` ： Storybookをビルドします

### VSCodeをお使いの方へ
下記の拡張機能を導入してください。

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## コンポーネントについて
Storybookのサンプルのためにコンポーネントを追加しています。

プロジェクトの性質によってUIライブラリを使用したり独自のデザインシステムを使用したりすることが考えられるためこのテンプレートではUIライブラリを導入していません。

なのでcomponentsディレクトリ配下ごと削除して頂いて構いません。

もしこのサンプルのコンポーネントの切り方に興味があれば[こちら](/src/components/README.md)をご覧ください。

## Reduxについて
熟練者にとって好き嫌いあると思いますが、Redux（Redux Toolkit）を採用しています。

理由としては下記の通りです。
- アプリケーションのすべての状態が一元化される　→　複雑な状態管理が可能
- Redux DevToolsを使用してアプリケーションの状態の調査が行いやすい
- Reactのライフサイクル外で状態の管理を行うことができる　→　React Hooksだと副作用に悩む部分がシンプルになる
- reselectを使用することで必要なデータだけを更新時に再計算して取得することができる
- Reduxの特性上チーム開発において一種のルールが生まれる
  - 熟練者と初心者が混在する状況でトラブルが起きづらくなる（useEffect無限ループ等）
  - 熟練者のハウルの動く城のようなReact Hooks芸に悩むことが少なくなる

このサンプルではRe-ducksパターンを採用しています。

LIFFの初期化・ログインのサンプルとRTK Queryのサンプルコードに関する詳細は[こちら](/src/ducks/README.md)をご覧ください。
