// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/scripts',
    'pinia-plugin-persistedstate',
  ],

  runtimeConfig: {
    public: {
      apiurl: '',
    },
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
  },

  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },

  piniaPluginPersistedstate: {
    storage: 'localStorage',
  },
});
