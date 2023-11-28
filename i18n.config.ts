import en from "./assets/locales/en"
import zh from "./assets/locales/zh"

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "zh",
  fallbackLocale: "zh",
  messages: { zh, en },
}))
