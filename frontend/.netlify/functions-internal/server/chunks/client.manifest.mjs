const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-79d26098.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "layouts/default.vue",
      "pages/categories/[id].vue",
      "pages/index.vue",
      "pages/products/[id].vue",
      "components/Buttons.vue",
      "components/Footer.vue",
      "components/Navbar.vue",
      "components/Products.vue",
      "components/icons/cart.vue",
      "components/icons/facebook.vue",
      "components/icons/github.vue",
      "components/icons/twitter.vue"
    ],
    "css": [
      "assets/entry.03d9ee25.css"
    ]
  },
  "components/Buttons.vue": {
    "file": "Buttons-7d949f46.mjs",
    "src": "components/Buttons.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "components/Footer.vue": {
    "file": "Footer-b8f4ddc3.mjs",
    "src": "components/Footer.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/icons/twitter.vue",
      "components/icons/facebook.vue",
      "components/icons/github.vue",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/Footer.ddc90bab.css"
    ]
  },
  "components/icons/twitter.vue": {
    "file": "twitter-ac80af62.mjs",
    "src": "components/icons/twitter.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "components/icons/facebook.vue": {
    "file": "facebook-70689c9a.mjs",
    "src": "components/icons/facebook.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "components/icons/github.vue": {
    "file": "github-8ee02eb4.mjs",
    "src": "components/icons/github.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "components/Navbar.vue": {
    "file": "Navbar-d7700998.mjs",
    "src": "components/Navbar.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/icons/cart.vue",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/Footer.ddc90bab.css"
    ],
    "assets": [
      "assets/strapi.59a661e6.png"
    ]
  },
  "components/icons/cart.vue": {
    "file": "cart-46d28de3.mjs",
    "src": "components/icons/cart.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "components/Products.vue": {
    "file": "Products-aab8d821.mjs",
    "src": "components/Products.vue",
    "isDynamicEntry": true,
    "imports": [
      "_useGetMedia-98ad263f.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/Products.c973204b.css"
    ]
  },
  "_useGetMedia-98ad263f.mjs": {
    "file": "useGetMedia-98ad263f.mjs",
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/categories/[id].vue": {
    "file": "_id_-ff83760a.mjs",
    "src": "pages/categories/[id].vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs",
      "components/Products.vue",
      "_useGetMedia-98ad263f.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-4ac1882e.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs",
      "components/Products.vue",
      "_useGetMedia-98ad263f.mjs"
    ]
  },
  "pages/products/[id].vue": {
    "file": "_id_-db9fe029.mjs",
    "src": "pages/products/[id].vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs",
      "_useGetMedia-98ad263f.mjs"
    ]
  },
  "layouts/default.vue": {
    "file": "default-c66d716d.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/Navbar.vue",
      "components/Buttons.vue",
      "components/Footer.vue",
      "node_modules/nuxt3/dist/app/entry.mjs",
      "components/icons/cart.vue",
      "components/icons/twitter.vue",
      "components/icons/facebook.vue",
      "components/icons/github.vue"
    ]
  }
};

export { client_manifest as default };
