import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  target: 'static',
  head: {
    title: 'Vue Nuxt Typescript Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Bootstrap Nuxt project with this template.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com',
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {},
};

export default config;
