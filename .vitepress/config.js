module.exports = {
  title: 'leetcode解题思路',
  description: 'leetcode daily',
  themeConfig: {
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: 'https://gitee.com/login',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Zi Shui'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '栈', link: '/stack/test', activeMatch: '/stack/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quieStart' }
          ]
        }
      ],
      '/stack/': [
        {
          text: '栈',
          items: [
            { text: '用两个栈实现队列', link: '/stack/1.剑指offer09-用两个栈实现队列' }
          ]
        }
      ]
    }
  }
}