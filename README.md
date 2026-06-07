# AstroPaper 📄

![AstroPaper](public/default-og.jpg)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/community/file/1356898632249991861)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/github/license/satnaing/astro-paper?color=%232F3741&style=for-the-badge)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white&style=for-the-badge)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)

AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro blog theme. This theme is designed and crafted based on [my personal blog](https://satnaing.dev/blog).

Read [the blog posts](https://astro-paper.pages.dev/posts/) or check [the README Documentation Section](#-documentation) for more info.

## 🔥 Features

- [x] type-safe markdown
- [x] super fast performance
- [x] accessible (Keyboard/VoiceOver)
- [x] responsive (mobile ~ desktops)
- [x] SEO-friendly
- [x] light & dark mode
- [x] static search ([Pagefind](https://pagefind.app/))
- [x] draft posts & pagination
- [x] sitemap & rss feed
- [x] MDX support
- [x] collapsible table of contents
- [x] followed best practices
- [x] highly customizable
- [x] dynamic OG image generation for blog posts ([Blog Post](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/))
- [x] i18n ready

_Note: I've tested screen-reader accessibility of AstroPaper using **VoiceOver** on Mac and **TalkBack** on Android. I couldn't test all other screen-readers out there. However, accessibility enhancements in AstroPaper should be working fine on others as well._

## ✅ Lighthouse Score

<p align="center">
  <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fastro-paper.pages.dev%2F&form_factor=desktop">
    <img width="710" alt="AstroPaper Lighthouse Score" src="AstroPaper-lighthouse-score.svg">
  </a>
</p>

## 🚀 Project Structure

Inside of AstroPaper, you'll see the following folders and files:

```bash
/
├── public/
│   ├── pagefind/          # auto-generated on build
│   ├── favicon.svg
│   └── default-og.jpg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   ├── content/
│   │   ├── pages/
│   │   │   └── about.md
│   │   └── posts/
│   │       └── some-blog-posts.md
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── config.ts
│   └── content.config.ts
├── astro-paper.config.ts  # user-defined configurations
└── astro.config.ts
```

All blog posts are stored in the `src/content/posts/` directory. You can organise posts into subdirectories — the subdirectory name becomes part of the post URL.

## 💻 Tech Stack

**Main Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**UI/UX** - [Figma Design File](https://www.figma.com/community/file/1356898632249991861)  
**Static Search** - [Pagefind](https://pagefind.app/)  
**Icons** - [Tablers](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Deployment** - [Cloudflare Pages](https://pages.cloudflare.com/)  
**Linting** - [ESLint](https://eslint.org)  
**Dynamic OG images** - [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com/) + [Astro Fonts](https://docs.astro.build/en/guides/fonts/)

## 👨🏻‍💻 Running Locally

You can start using this project locally by running the following command in your desired directory:

```bash
# pnpm
pnpm create astro@latest --template satnaing/astro-paper

# npm
npm create astro@latest -- --template satnaing/astro-paper

# yarn
yarn create astro --template satnaing/astro-paper

# bun
bun create astro@latest -- --template satnaing/astro-paper
```

Then start the project by running the following commands:

```bash
# install dependencies if you haven't done so in the previous step.
pnpm install

# start running the project
pnpm dev
```

## Google Site Verification (optional)

You can add your [Google Site Verification HTML tag](https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag) by setting `site.googleVerification` in `astro-paper.config.ts`:

```ts file="astro-paper.config.ts"
export default defineAstroPaperConfig({
  site: {
    // ...
    googleVerification: "your-google-site-verification-value",
  },
  // ...
});
```

> See [this discussion](https://github.com/**satnaing**/astro-paper/discussions/334#discussioncomment-10139247) for adding AstroPaper to the Google Search Console.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                                                                                                           |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`   | Installs dependencies                                                                                                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`                                                                                      |
| `pnpm build`     | Type-checks, builds the site, runs Pagefind indexing, and copies the index to `public/pagefind/`                                 |
| `pnpm preview`   | Preview your build locally, before deploying                                                                                     |
| `pnpm sync`      | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check`                                                                                 |

## ✨ Feedback & Suggestions

If you have any suggestions/feedback, you can contact me via [my email](mailto:satnaingdev+astropaper@gmail.com). Alternatively, feel free to open an issue if you find bugs or want to request new features.

## 📜 License

Licensed under the MIT License, Copyright © 2026

---

Made with 🤍 by [Sat Naing](https://satnaing.dev) 👨🏻‍💻 and [contributors](https://github.com/satnaing/astro-paper/graphs/contributors).

# astro-paper-blog

## Docker初期環境構築

1. パッケージのインストール（node_modulesのインストール）  
   `docker compose run --rm app sh -c "corepack enable && pnpm install"`
2. コンテナの起動  
   `docker compose up -d`
3. 起動確認  
   `http://localhost:4321/`

## Lintエラー修正

- `pnpm run format`

## プライグインのインストール

- `pnpm install [プラグイン名]`
  - dockerコンテナ内で実行する

## コード整形

1. VSCodeの[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscodeeslint)拡張機能を入れる
2. VSCodeの[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)拡張機能を入れる
3. コードを入力し、保存した時に整形されれば成功！（最後の行とかに改行とかが入る）

## ブランチルール

| ブランチ             | 役割               | マージ先 |
| :------------------- | :----------------- | :------- |
| **main**             | 本番環境（公開用） | なし     |
| **適当なブランチ名** | 開発環境           | main へ  |

## フロントマターガイド

このプロジェクトでは、`src/content.config.ts` のスキーマに沿ってフロントマターを記述します。

### 投稿 (`src/content/posts/*.md|*.mdx`) の項目

| 項目           | 必須 | 型                | 値の例                                     | 説明                                                              |
| :------------- | :--- | :---------------- | :----------------------------------------- | :---------------------------------------------------------------- |
| `title`        | 必須 | `string`          | `はじめての投稿`                           | 記事タイトル                                                      |
| `description`  | 必須 | `string`          | `この投稿ではMarkdownの基本を紹介します。` | 記事の概要（一覧・OGなどで使用）                                  |
| `pubDatetime`  | 必須 | `date`            | `2026-05-30T09:00:00+09:00`                | 公開日時（ISO 8601推奨）                                          |
| `author`       | 任意 | `string`          | `管理人`                                   | 未指定時はサイト設定の著者名                                      |
| `modDatetime`  | 任意 | `date \| null`    | `2026-05-31T10:30:00+09:00`                | 更新日時                                                          |
| `featured`     | 任意 | `boolean`         | `true`                                     | `true` でトップの注目記事へ                                       |
| `draft`        | 任意 | `boolean`         | `false`                                    | `true` の間は下書き扱いになり、記事一覧や記事ページに表示されない |
| `tags`         | 任意 | `string[]`        | `['Astro', 'Markdown']`                    | 未指定時は `['others']`                                           |
| `ogImage`      | 任意 | `string \| image` | `/images/posts/sample-og.jpg`              | OGP画像                                                           |
| `canonicalURL` | 任意 | `string`          | `https://example.com/posts/my-first-post/` | 正規URL                                                           |
| `hideEditPost` | 任意 | `boolean`         | `false`                                    | 記事ページの編集リンクを非表示                                    |
| `timezone`     | 任意 | `string`          | `Asia/Tokyo`                               | 日付表示用タイムゾーン                                            |
| `series`       | 任意 | `string`          | `series1`                                  | もしし連載記事を書きたい場合のシリーズ名                          |
| `seriesOrder`  | 任意 | `string`          | `1`                                        | 連載の順番                                                        |

### 固定ページ (`src/content/pages/*.md|*.mdx`) の項目

| 項目           | 必須 | 型       | 値の例                       | 説明           |
| :------------- | :--- | :------- | :--------------------------- | :------------- |
| `title`        | 必須 | `string` | `About`                      | ページタイトル |
| `description`  | 任意 | `string` | `このサイトについて`         | ページ概要     |
| `ogImage`      | 任意 | `string` | `/default-og.jpg`            | OGP画像        |
| `canonicalURL` | 任意 | `string` | `https://example.com/about/` | 正規URL        |

### 投稿テンプレート（最小）

```md
---
title: 記事タイトル
description: 記事の説明
pubDatetime: 2026-05-30T09:00:00+09:00
tags:
  - Astro
  - メモ
---
```

### 投稿テンプレート（実運用向け）

```md
---
title: 記事タイトル
description: 記事の説明
pubDatetime: 2026-05-30T09:00:00+09:00
modDatetime: 2026-05-31T10:30:00+09:00
featured: false
draft: false
tags:
  - Astro
  - Markdown
ogImage: /images/posts/sample-og.jpg
canonicalURL: https://example.com/posts/sample/
hideEditPost: false
timezone: Asia/Tokyo
---
```

### 記事が表示されない時のチェックポイント

- `draft: true` になっていないか
- `pubDatetime` が未来日時になっていないか
- 日付フォーマットが壊れていないか（ISO 8601推奨）
- ファイル名が `_` で始まっていないか（`_` 始まりはコレクション対象外）
