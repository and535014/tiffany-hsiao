/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}", "./presets/**"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Noto Sans TC'", "'Noto Sans'"],
      },
      colors: {
        "primary-50": "#f0fdf4",
        "primary-100": "#dcfce7",
        "primary-200": "#bbf7d0",
        "primary-300": "#86efac",
        "primary-400": "#4ade80",
        "primary-500": "#22c55e",
        "primary-600": "#16a34a",
        "primary-700": "#15803d",
        "primary-800": "#166534",
        "primary-900": "#14532d",
        "primary-950": "#052e16",
        "surface-0": "#fff",
        "surface-50": "#fafafa",
        "surface-100": "#f5f5f5",
        "surface-200": "#e5e5e5",
        "surface-300": "#d4d4d4",
        "surface-400": "#a3a3a3",
        "surface-500": "#737373",
        "surface-600": "#525252",
        "surface-700": "#404040",
        "surface-800": "#262626",
        "surface-900": "#171717",
        "surface-950": "#0a0a0a",
      },
    },
  },
  plugins: [],
}
