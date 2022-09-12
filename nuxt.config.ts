import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "IBM Plex Sans": true,
      "IBM Plex Serif": true,
      Cousine: true,
    },
  },
});
