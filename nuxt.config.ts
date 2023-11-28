// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      { code: "zh", name: "中文" },
      { code: "en", name: "English" },
    ],
    strategy: "prefix_except_default",
    defaultLocale: "zh",
  },
})
