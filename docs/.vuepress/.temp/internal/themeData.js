export const themeData = JSON.parse("{\"repo\":\"https://github.com/magikcypress/personal-root-website-vuepress/\",\"editLinks\":false,\"docsDir\":\"docs/\",\"editLinkText\":\"Edit on Github\",\"lastUpdated\":true,\"search\":false,\"nextLinks\":true,\"prevLinks\":true,\"sidebar\":{\"/travel/\":[{\"text\":\"Travel\",\"collapsible\":false,\"children\":[\"\",\"Maroc\",\"Vietnam\",\"Bresil\",\"AmeriqueduSud\",\"Liban\",\"Canada\",\"Japon\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
