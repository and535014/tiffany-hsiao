module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["vue"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "no-undef": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 5,
        multiline: { max: 1 },
      },
    ],
    "comma-spacing": ["error", { before: false, after: true }],
  },
}
