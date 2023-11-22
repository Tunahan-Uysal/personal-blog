// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-meilisearch',
  ],
  meilisearch: {
    hostUrl: 'localhost:7700',
    searchApiKey: 'fT-yMY-izauZATUflpc5gZQQE902ZgyzWyWz5vRW39k'
  },
  devtools: { enabled: true },
  typescript: { shim: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/google-fonts'],
  googleFonts: {
    display: 'swap',

    families: {
      'Lexend+Zetta': [100, 400, 500, 900],
      'Lexend+Mega': [100, 400, 500, 900],
      'Roboto+Mono': [100, 300, 500],
      'Ubuntu': [300, 500, 700],
    },  
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    outputDir: 'assets',
    base64: false,
  },
  srcDir: 'src',
  buildDir: '.nuxt'
})
