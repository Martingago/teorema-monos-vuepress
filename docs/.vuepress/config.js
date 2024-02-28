import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'es-ES',

  title: 'Teorema del mono infinito',
  description: 'Documentación del proyecto en JAVA que emula el teorema del mono infinito',

  theme: defaultTheme({
    logo: '/img/paradoja-monos-infinitos-martin-gago.png',

    navbar: [
    {text:"Guía",
    link: '/guide/',
    items: [
      { text: 'Guía', link: '/guide/' },
      { text: 'Instalación', link: '/guide/download-installation.md' }
    ]
    },
    {
      text: 'Versiones',
      link: '/version/versions.md'
    }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guía',
          collapsable: true,
          children: [
           '/guide/',
           '/guide/download-installation.md'
          ]
        }
 
      ],
    }
  }),

  bundler: viteBundler(),
})
