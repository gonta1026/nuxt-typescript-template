# nuxt-ts-sample

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## package ver
npm version 6.14.4
node -v 12.18.0

### どのような環境か？
- Nuxt.js(vue.jsはv2のオプショナル)
- TypeScript
- vuex
- prettier
- eslint
- element-ui
- axiosの諸設定済
  - キャメルケースとスネークケースの変換
- dotenvで環境変数を設定


## envファイルについて
このプロジェクトではsrcの配下に置いている。

## deployについて

- 前もってfirebaseのコンソールでプロジェクトを作成しておく。

- 参考URL　https://qiita.com/keisei_otsuka/private/22626fc9236c1c456817

```bash
# ログイン
$ firebase login

# 初期化処理をした。firebase.json、.firebasercを作成する。
$ firebase init 

# distフォルダーに出力
$ yarn generate

# デプロイ
$ firebase deploy
```

# プロジェクトに関すること
- drao.io https://app.diagrams.net/

- SwaggerHub https://app.swaggerhub.com/apis/gonta-manemagi/hogehoge/1.0.0#trial

