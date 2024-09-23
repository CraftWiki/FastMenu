import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "快速菜单-FastMenu",
  description: "FastMenu(快速菜单)是一款可以在游戏内使用GUI创建、编辑、制作菜单的插件，拥有丰富的点击执行类型。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用', link: '/usage' },
      { text: '配置', link: '/config' }
    ],

    sidebar: [
      {
        text: '使用',
        items: [
          { text: '快速入门', link: '/usage/' },
          { text: '插件命令', link: '/usage/command' },
          { text: '菜单操作', link: '/usage/action' },
        ]
      },
      {
        text: '开发',
        items: [
          { text: 'API', link: '/develop/API'},
          { text: 'Script', link: '/develop/Script' },
        ]
      },
      {
        text: '配置',
        items: [
          { text: '索引', link: '/config/index' },
          { text: 'setting.yml', link: '/config/setting' },
        ]
      },
      {
        text: '钩子',
        items: [
          { text: 'Placeholder API', link: '/hook/papi' }
        ]
      },
      {
        text: 'Geyser',
        items: [
          { text: '示例', link: '/geyser/example' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YYDSQAQ1024/FastMenu' },
      { icon: 'github', link: 'https://github.com/CraftWiki/FastMenu' }
    ]
  }
})
