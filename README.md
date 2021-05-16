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

## 環境について
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
- dotenvで環境変数を設定

### envファイルについて

# deployについて

前もってfirebaseのコンソールでプロジェクトを作成しておく。
下記は参考のURL
https://qiita.com/keisei_otsuka/private/22626fc9236c1c456817

```
$ firebase login

$ firebase init 

$ yarn generate  //distフォルダーに出力

$ firebase deploy
```