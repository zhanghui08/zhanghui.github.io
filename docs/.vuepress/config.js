module.exports = {
    // title: '张先生 -的博客',
    title: "Mr. Zhang's Blog",
    description: '专注 Node.js 技术栈分享，从前端到Node.js再到数据库',
    base: "/my-blog",
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