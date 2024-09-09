import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "快速菜单-FastMenu",
  description: "FastMenu(快速菜单)是一款可以在游戏内使用GUI创建、编辑、制作菜单的插件，拥有丰富的点击执行类型。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用', link: '/usage' }
    ],

    sidebar: [
      {
        text: '使用',
        items: [
          { text: '快速入门', link: '/usage/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})