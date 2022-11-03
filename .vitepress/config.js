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
            { text: '用两个栈实现队列', link: '/stack/1.剑指offer09-用两个栈实现队列' },
            { text: '有效的括号', link: '/stack/2.20.有效的括号' },
            { text: '二叉树的中序遍历', link: '/stack/3.94.二叉树的中序遍历' },
            { text: '回文链表', link: '/stack/4.回文链表' },
            { text: '二叉树的前序遍历', link: '/stack/5.144. 二叉树的前序遍历' },
            { text: '二叉树的后序遍历', link: '/stack/6.145. 二叉树的后序遍历' },
          ]
        }
      ]
    }
  }
}