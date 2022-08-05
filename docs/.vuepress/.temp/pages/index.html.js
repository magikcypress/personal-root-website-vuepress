export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":false,\"heroImage\":\"/img/cat.jpg\",\"description\":false,\"sidebar\":false,\"search\":false},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Personal life\",\"slug\":\"personal-life\",\"children\":[]},{\"level\":2,\"title\":\"Travel\",\"slug\":\"travel\",\"children\":[]},{\"level\":2,\"title\":\"Passion\",\"slug\":\"passion\",\"children\":[{\"level\":3,\"title\":\"Eating...\",\"slug\":\"eating\",\"children\":[]},{\"level\":3,\"title\":\"Reading...\",\"slug\":\"reading\",\"children\":[]},{\"level\":3,\"title\":\"Listening...\",\"slug\":\"listening\",\"children\":[]}]}],\"git\":{\"updatedTime\":1659697281000,\"contributors\":[{\"name\":\"magikcypress\",\"email\":\"cyp@rouquin.me\",\"commits\":1}]},\"filePathRelative\":\"index.md\"}")

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
