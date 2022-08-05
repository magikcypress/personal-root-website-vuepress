export const data = JSON.parse("{\"key\":\"v-2d0a8b4a\",\"path\":\"/fr/\",\"title\":\"\",\"lang\":\"Français\",\"frontmatter\":{\"home\":false,\"heroImage\":\"/img/cat.jpg\",\"description\":false,\"sidebar\":false,\"search\":false},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Vie personnelle\",\"slug\":\"vie-personnelle\",\"children\":[]},{\"level\":2,\"title\":\"Voyages\",\"slug\":\"voyages\",\"children\":[]},{\"level\":2,\"title\":\"Passion\",\"slug\":\"passion\",\"children\":[]}],\"git\":{\"updatedTime\":1659697281000,\"contributors\":[{\"name\":\"magikcypress\",\"email\":\"cyp@rouquin.me\",\"commits\":1}]},\"filePathRelative\":\"fr/index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
