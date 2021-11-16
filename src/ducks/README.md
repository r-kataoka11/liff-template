# Reduxについて

このプロジェクトではRe-ducksパターンを採用しています。ファイル構成については下記を参考にしてください。

## ファイル構成

- ducks/
  - hoge/：各ドメインごとにディレクトリを切る
    - hogeApi.ts：RTK QueryのドメインごとのEndpoint
    - hogeSlice.ts：ドメインごとのSlice（ActionとReducer等がまとまったもの）
    - hogeThunk.ts：ドメインごとのThunk（非同期処理や副作用のある変更処理等）
    - hogeInterface.ts：ドメインごとの型
    - hogeSelector.ts：ドメインごとのSelector
  - baseApi.ts：RTK QueryのベースとなるAPI
  - store.ts：各ReducerをStoreに紐付ける

## Sliceの追加

1. ducks配下にドメインごとにディレクトリを切ります
2. `hogeInterface.ts` にドメインに関連する型を作ります
3. `hogeSlice.ts` に[createSlice](https://redux-toolkit.js.org/api/createslice)でSliceを作ります
4. `hogeSelector.ts` に使うデータ毎にSelectorを作ります
5. `store.ts` のreducerに作成した `hogeSlice.ts` のreducerを追加します

## Immerについて

Redux Toolkitには[Immer](https://immerjs.github.io/immer/)が入っています。

Immerは特定のデータツリーを書き換える際に不正な更新を防止し、immutabilityを守るコードを楽に書くことができます。

恩恵としては、下記のようにreducerをシンプルに書くことができます。

```typescript
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})
```

## Reselectについて

Redux Toolkitには[Reselect](https://github.com/reduxjs/reselect)が入っています。

Reselectはメモ化されたSelector関数を作るためのライブラリです。

メリットとしては、
- 計算した派生データを取得するSelectorを作成できる　→　Reduxは最小限のStateのみ保存すればよい
- Selectorは依存するStateが変更されない限り再計算されない　→　効率的
- 作成したSelectorを他のSelectorの引数に使用することができる

例えば、状態Aを状態Bによってfilterしたい（例：選択した一覧Aを選択したタグBと一致するタグのものだけ抽出する）みたいなことをする時に便利です。

- 再計算して取得する処理自体をSelectorに委譲できる　→　必要になるコンポーネント毎にuseMemoとかで頑張らなくていい
- 派生したデータを扱うためのuseStateを作らなくていい
- Selector側でメモ化できるので再レンダリングの抑制が簡単
- Stateの取得処理自体が `hogeSelector.ts` に集約されるのでメンテしやすい
- コンポーネント側はSelectorで受け取った状態によって振る舞いを変えるだけで済むので責務が分割される
- 状態のテストがしやすい

## LIFFの初期化・ログイン処理について

LIFFの初期化・ログイン・ログアウトをRedux上で行うようにしています。

### authThunk.tsについて

`/src/ducks/auth/authThunk.ts` でLIFF関連の非同期処理を行うようにしています。

#### `initLiff` について

1. `liff.init()` する
2. ログインできていない場合は `liff.login()` をする（LIFFブラウザと外部ブラウザで挙動が違うため）
3. ログイン済みの場合はユーザーのプロフィール情報をpayloadに渡す

#### `logoutLiff` について

単純に `liff.logout() `するようにしています。

### authSlice.tsについて

`/src/ducks/auth/authSlice.ts` でLIFF関連の非同期処理の処理状況（処理中・処理完了・エラー）に応じて状態を変えるようにしています。

loadingが完了するまで各ページを表示しないようになっています。

エラー時にはerrorにエラー内容が入るようになっています。これによってエラーメッセージを表示するようにすると親切だと思います。

ログイン済みの場合はprofileにユーザーのプロフィール情報が入るようになっています。認可や色々に使えるようになっています。

現状、LIFF SDKにはアクセストークンを更新する術が `liff.init()` して `liff.logint()` するしかないみたいなので、APIのレスポンスのエラーによって判定するのが最適だと考えられます。

エラー内容によって、エラーメッセージを表示したり `initLiff` をdispatchしたりすると良さそうです。

## RTK Queryについて

Redux Toolkitには[RTK Query](https://redux-toolkit.js.org/rtk-query/overview)という機能が含まれています。

RTK Queryは協力なデータフェッチとキャッシュ機能が含まれたツールです。Webアプリケーションで一般的に使うものが用意されており、自分で手書きする必要がなくなります。

### 特徴

- Apolloクライアント・React Query・Urql・SWR等を参考に作られた
- REST API・GraphQLをサポート
- UIに依存しない（React上で動いているわけではないため）
- 優れたキャッシュ機能（例：POSTやPUTした後、変更に関連するデータを再取得してくれる）
- 各エンドポイント毎にデータやり取り用のカスタムフックを自動生成してくれる（カスタムフックでデータやローディング状態等取得できる）

### Reduxであるメリット

`extraReducers` で特定のendpointの状態（取得中・取得済み・エラー）に応じて状態を変えることができます。

例えば、データ変更後にSnackbarを表示して通知するようなことも可能です。

### API接続について

RTK Queryのサンプルコードを元に解説します。

`/src/ducks/baseApi.ts` の `baseApi` でAPI接続のベースとなるものを作成しています。

- `baseQuery` で各リクエスト時にLIFFのaccessTokenをheaderに含めるようにしています
- `endpoints` は必須項目のため空のものを追加しています。Re-ducksパターンを採用しているドメインごとにEndpointを追加するようにしています
- `tagTypes` はタグを登録します。タグはmutationが実行された後にタグが一致するqueryのデータを再取得するために使います

ドメインごとにディレクトリを切り、 `baseApi` に対して `injectEndpoints` をすることでEndpointを追加することができます。

`/src/ducks/posts/postsApi.ts` の `postsEndpoints` で架空の投稿用APIに関するEndpointを追加するサンプルコードを用意しています。

RTK Queryには `query` と `mutation` の2つのEndpointがあります。

`query` はデータを取得するためのEndpointで、 `mutation` はデータを変更するためのEndpointです。

`mutation` の `invalidatesTags` に `Posts` を追加し、 `query` の `providesTags` に同じく `Posts` を追加しています。

これによって、 `addPost` した後に `getPostList` で取得したデータが再取得されるようになります。
