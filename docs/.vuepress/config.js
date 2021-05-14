module.exports = {
    // title: '张先生 -的博客',
    title: "Mr. Zhang's Blog",
    description: '专注 Node.js 技术栈分享，从前端到Node.js再到数据库',
    base: "/my-blog",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig:{
        sidebar: 'auto',
        nav: [{text: "主页", link: "/"      },
            { text: "前端", 
                items:[
                    { text: "Html", link:"/web/html/"},
                    { text: "Css", link:"/web/css/"},
                    { text: "JavaScript", link:"/web/javascript/"},
                    { text: "Vue", link:"/web/vue/"},
                    { text: "React", link:"/web/react/"},
                    { text: "Git", link:"/web/git/"},
                ]
            },
            { text: "Node", link: "/node/" },
            { text: "数据库", link: "/database/"   },
            { text: "面试问题", link: "/interview/" }
          ],
        //   左侧列表开始
        sidebar:{
            '/web/vue/':[{
                title: 'Vue 学习',
                collapsable: true,
                children: [{
                    title: '初识vue3.0',
                    path: 'vue3.0'
                }, {
                    title: '测试02',
                    path: 'test2'
                }, {
                    title: '测试03',
                    path: 'test3'
                }]
            }],
            // fallback 侧边栏被最后定义
            '/': [''], //不能放在数组第一个，否则会导致右侧栏无法使用
        },
        // 左侧列表展开级数，默认是 1
        sidebarDepth: 6
      },
      plugins:[
        ["@vuepress/back-to-top"], // 返回顶部
        ["@vuepress/nprogress"],   // 加载进度条
        '@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
          }
       ]
}