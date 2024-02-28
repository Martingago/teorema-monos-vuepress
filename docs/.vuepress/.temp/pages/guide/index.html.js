import comp from "F:/PROGRAMACION/PROYECTOS/VUEPRESS/desarrollo_interfaces/v3/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"Introducción\",\"lang\":\"es-ES\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"¿Qué es el Teorema del mono infinito?\",\"slug\":\"¿que-es-el-teorema-del-mono-infinito\",\"link\":\"#¿que-es-el-teorema-del-mono-infinito\",\"children\":[]},{\"level\":2,\"title\":\"Funcionamiento.\",\"slug\":\"funcionamiento\",\"link\":\"#funcionamiento\",\"children\":[]},{\"level\":2,\"title\":\"Puesta en práctica.\",\"slug\":\"puesta-en-practica\",\"link\":\"#puesta-en-practica\",\"children\":[]},{\"level\":2,\"title\":\"Análisis de resultados.\",\"slug\":\"analisis-de-resultados\",\"link\":\"#analisis-de-resultados\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/README.md\"}")
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
