// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules : [
  ],
  app :{ 
    head : {
      title : "Nuxtjs Initial",
      meta : [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
            rel : "stylesheet",
            href : "https://fonts.googleapis.com/icon?family=Material+Icons"
        }
    ]
    }
  },
  devtools: { enabled: true },
  css : [
    '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
