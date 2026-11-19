import fontDisplayPlugin from "./postcss-plugins/postcss-font-display";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    port: 3000,
  },
  build: {
    transpile: [
      "vue-tabler-icons",
      "@vuelidate/core",
      "@vuelidate/validators",
    ],
  },
  css: [
    "~/assets/scss/style.scss",
  ],
  app: {
    baseURL: "/",
    // head: {
    //   title: SITE_NAME,
    //   titleTemplate: `%s | ${SITE_NAME}`,
    //   htmlAttrs: {
    //     lang: "vi",
    //   },
    //   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    //   charset: "utf-8",
    //   viewport: "width=device-width, initial-scale=1",
    //   meta: [
    //     { name: "format-detection", content: "telephone=no" },

    //     // fallback
    //     { name: "description", content: "Mô tả mặc định" },

    //     // OG base
    //     { property: "og:type", content: "website" },
    //     { property: "og:site_name", content: SITE_NAME },
    //     { property: "og:image", content: "" },
    //     { property: "og:locale", content: "vi_VN" },
    //   ],
    //   // script: [
    //   //   {
    //   //     src: "https://www.googletagmanager.com/gtag/js?id=G-Z1XHHXL23G",
    //   //     async: true,
    //   //   },
    //   //   {
    //   //     innerHTML: `
    //   //       window.dataLayer = window.dataLayer || [];
    //   //       function gtag(){dataLayer.push(arguments);}
    //   //       gtag('js', new Date());
    //   //       gtag('config', 'G-Z1XHHXL23G');
    //   //     `,
    //   //     type: "text/javascript",
    //   //   },
    //   // ],
    // },
  },
  runtimeConfig: {
    apiBase: process.env.NUXT_API_BASE || process.env.NUXT_PUBLIC_API_BASE_URL || "http://localhost:3002/api/v1",
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL || "http://localhost:3002/api/v1",
    },
  },
  vite: {
    build: {
      target: "esnext",
      cssTarget: ["chrome100", "safari15", "firefox100", "edge100"],
      cssMinify: "lightningcss",
    },
    css: {
      postcss: {
        plugins: [fontDisplayPlugin()],
      },
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    // "@nuxtjs/i18n",
    "nuxt-swiper",
    "@nuxtjs/sitemap",
    "vuetify-nuxt-module",
  ],
  vuetify: {
    moduleOptions: {
      styles: true,
    },
  },
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
    },
    subsets: ["latin", "vietnamese"],
    display: "swap",
  },
});
