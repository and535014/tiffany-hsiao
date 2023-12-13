// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "nuxt-primevue",
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
  googleFonts: {
    families: {
      "Noto+Sans+TC": [100, 300, 400, 500, 700, 900],
      "Noto+Sans": [100, 300, 400, 500, 700, 900],
    },
  },
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { as: "Lara", from: "~/presets/lara/" },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
})
