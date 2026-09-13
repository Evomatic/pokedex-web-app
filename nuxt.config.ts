import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxt/image'
  ],
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/tailwind.css'],

  routeRules: {
    '/': { prerender: true }
  },
  devServer: {
    port: 3030
  },

  compatibilityDate: '2026-06-30',

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
