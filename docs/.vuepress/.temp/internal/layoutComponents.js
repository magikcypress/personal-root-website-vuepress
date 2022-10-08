import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/mnt/c/Users/veg/F/web/personal-root-website-vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/mnt/c/Users/veg/F/web/personal-root-website-vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
