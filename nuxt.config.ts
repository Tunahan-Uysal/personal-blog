// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  devtools: { enabled: true },
  typescript: { shim: false },
  modules: [
    "nuxt-meilisearch",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
  ],
  meilisearch: {
    hostUrl: process.env.MEILISEARCH_HOST,
    searchApiKey: process.env.MEILISEARCH_API_KEY,
  },
  googleFonts: {
    display: "swap",
    families: {
      "Lexend+Zetta": [100, 400, 500, 900],
      "Lexend+Mega": [100, 400, 500, 900],
      "Roboto+Mono": [100, 300, 500],
      Ubuntu: [300, 500, 700],
    },
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    outputDir: "assets",
    base64: false,
  },
  srcDir: "src",
  buildDir: ".nuxt",
});
