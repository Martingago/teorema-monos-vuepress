import comp from "F:/PROGRAMACION/PROYECTOS/VUEPRESS/desarrollo_interfaces/v3/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"es-ES\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/img/paradoja-monos-infinitos-martin-gago.png\",\"tagline\":\"Dale a un mono una máquina de escribir y tiempo infinito, y en algún momento escribirá una novela de Shakespeare.\",\"actionText\":\"Ver información →\",\"actionLink\":\"/guide/\",\"footer\":\"Made by Martín with ❤️\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"index.md\"}")
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
