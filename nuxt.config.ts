import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "IBM Plex Sans": {
        wght: [400, 500, 700],
        ital: [400, 500, 700],
      },
      "IBM Plex Serif": {
        wght: [400, 500, 700],
        ital: [400, 500, 700],
      },
      Cousine: true,
    },
  },
});
