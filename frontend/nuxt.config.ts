import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    STORE_URL: process.env.STORE_URL || "http://localhost:1337",
  },
  nitro: {
    preset: "netlify_builder",
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  meta: {
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=2",
      },
      {
        name: "description",
        content: "e-commerce starter using Strapi, Nuxt.js and Snipcart",
      },
    ],
    link: [
      {
        rel: "preconnect",
        href: "https://app.snipcart.com",
      },
      {
        rel: "preconnect",
        href: "https://cdn.snipcart.com",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
    script: [
      {
        src: "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js",
      },
    ],
  },
});
