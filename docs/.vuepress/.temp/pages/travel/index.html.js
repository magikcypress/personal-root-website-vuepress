export const data = JSON.parse("{\"key\":\"v-2a6ed73c\",\"path\":\"/travel/\",\"title\":\"My travel\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":false},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"travel/index.md\"}")

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
