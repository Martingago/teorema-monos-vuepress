export const themeData = JSON.parse("{\"logo\":\"/img/paradoja-monos-infinitos-martin-gago.png\",\"navbar\":[{\"text\":\"Guía\",\"link\":\"/guide/\",\"items\":[{\"text\":\"Guía\",\"link\":\"/guide/\"},{\"text\":\"Instalación\",\"link\":\"/guide/download-installation.md\"}]},{\"text\":\"Versiones\",\"link\":\"/version/versions.md\"}],\"sidebar\":{\"/guide/\":[{\"title\":\"Guía\",\"collapsable\":true,\"children\":[\"/guide/\",\"/guide/download-installation.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
