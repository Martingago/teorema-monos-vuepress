export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/PROGRAMACION/PROYECTOS/VUEPRESS/desarrollo_interfaces/v3/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/download-installation.html", { loader: () => import(/* webpackChunkName: "download-installation.html" */"F:/PROGRAMACION/PROYECTOS/VUEPRESS/desarrollo_interfaces/v3/vuepress-starter/docs/.vuepress/.temp/pages/guide/download-installation.html.js"), meta: {"title":"Descarga e instalación"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/PROGRAMACION/PROYECTOS/VUEPRESS/desarrollo_interfaces/v3/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Introducción"} }],
  ["/version/versions.html", { loader: () => import(/* webpackChunkName: "versions.html" */"F:/PROGRAMACION/PROYECTOS/VUEPRESS/desarrollo_interfaces/v3/vuepress-starter/docs/.vuepress/.temp/pages/version/versions.html.js"), meta: {"title":"Historial de versiones"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/PROGRAMACION/PROYECTOS/VUEPRESS/desarrollo_interfaces/v3/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
