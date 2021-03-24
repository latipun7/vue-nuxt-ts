module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/strongly-recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
};
