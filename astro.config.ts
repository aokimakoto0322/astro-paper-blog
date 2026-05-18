import {
  defineConfig,
  envField,
  fontProviders,
  svgoOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import config from "./astro-paper.config";

import cloudflare from "@astrojs/cloudflare";

// ★【追加】現在実行しているコマンドがローカル開発（dev）かどうかを判定します
const isDev = process.argv.includes("dev");

export default defineConfig({
  site: config.site.url,

  // ★【追加】ローカル開発時は 'static'、本番ビルド時は 'server'（SSR）に自動で切り替えます
  output: isDev ? "static" : "server",

  // ★【追加】Sharpのエラーを防ぐため、画像処理をパススルー（そのまま出力）に設定します
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },

  integrations: [
    mdx(),
    sitemap({
      filter: page =>
        config.features?.showArchives !== false || !page.endsWith("/archives/"),
    }),
  ],

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
    // ★【追加】Cloudflare上で「node:fs」などのNode.jsモジュールを使えるように明示します
    ssr: {
      external: ['node:fs', 'node:path', 'node:url'],
    },
  },

  fonts: [
    {
      name: "Google Sans Code",
      cssVariable: "--font-google-sans-code",
      provider: fontProviders.google(),
      fallbacks: ["monospace"],
      weights: [300, 400, 500, 600, 700],
      styles: ["normal", "italic"],
      formats: ["woff", "ttf"],
    },
  ],

  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },

  experimental: {
    svgOptimizer: svgoOptimizer(),
  },

  // ★【修正】ローカル開発（isDevがtrue）の時はアダプターをオフ（undefined）にします
  adapter: isDev ? undefined : cloudflare(),
});