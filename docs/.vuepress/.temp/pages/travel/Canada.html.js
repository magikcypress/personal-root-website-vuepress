export const data = JSON.parse("{\"key\":\"v-e0234422\",\"path\":\"/travel/Canada.html\",\"title\":\"Canada\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":false},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"travel/Canada.md\"}")

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
