import tailwindcss from '@tailwindcss/vite'
import { createResolver } from "nuxt/kit"

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    '@nuxt/icon'
  ],
  icon: {
    customCollections: [
      {
        prefix: 'icon',
        dir: resolve('./app/assets/svg'),
        // if you want to include all the icons in nested directories:
        // recursive: true,
      },
    ],
  },
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
