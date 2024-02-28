import comp from "F:/PROGRAMACION/PROYECTOS/VUEPRESS/desarrollo_interfaces/v3/vuepress-starter/docs/.vuepress/.temp/pages/version/versions.html.vue"
const data = JSON.parse("{\"path\":\"/version/versions.html\",\"title\":\"Historial de versiones\",\"lang\":\"es-ES\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Versión 1.0\",\"slug\":\"version-1-0\",\"link\":\"#version-1-0\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"version/versions.md\"}")
export { comp, data }

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
