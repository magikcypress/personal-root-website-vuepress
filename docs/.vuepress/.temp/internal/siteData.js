export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Personal Root Website\",\"description\":\"Personal Root Website\",\"head\":[[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"sizes\":\"180x180\",\"href\":\"/favicons/apple-touch-icon.png\"}],[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"32x32\",\"href\":\"/favicons/favicon-32x32.png\"}],[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"16x16\",\"href\":\"/favicons/favicon-16x16.png\"}],[\"link\",{\"rel\":\"manifest\",\"href\":\"/favicons/site.webmanifest\"}],[\"link\",{\"rel\":\"shortcut icon\",\"href\":\"/favicons/favicon.ico\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#3a0839\"}],[\"meta\",{\"name\":\"robots\",\"content\":\"noindex,nofollow\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Personal Root Website\",\"description\":\"Personal Root Website\"},\"/fr/\":{\"lang\":\"Français\",\"title\":\"Personal Root Website\",\"description\":\"Personal Root Website\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
