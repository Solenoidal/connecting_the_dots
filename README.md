# CONNECTING THE DOTS

> Nuxt.jsを使ってブログを構築するプロジェクト

## Build Setup

``` bash
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

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Directory & File structure

| Name       | Description                                               |
| ---------- | --------------------------------------------------------- |
| assets     | Uncompiled assets Ex. stylesheets, image, fonts           |
| components | Contains your reusable Vue components                     |
| layouts    | Contains your layouts Ex. Blog, Home                      |
| middleware | Custom functions to run before rendering a layout or page |
| pages      | Contains the top level views /Used to generate routes     |
| plugins    | JS plugins to load before starting the vue app            |
| static     | Files served from / Ex.favicon                            |
| store      | Your Vuex store files                                     |
| test       | Your test code for files                                  |

config files
| Name           | Description                        |
| -------------- | ---------------------------------- |
| nuxt.config.js | Nuxtの設定を変更するためのファイル |
| jsconfig.json  |
