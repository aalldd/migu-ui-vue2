module.exports = {
    title: 'Migu UI',
    description: '一个好用的 UI 框架',
    base:'/migu-ui-vue2/',
    themeConfig:{
        displayAllHeaders: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/install/' },
            { text: 'GitHub', link: 'https://github.com/aalldd/migu-ui-vue2' },
        ],
        sidebar:[
            {
                title:'入门',
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                    '/components/icon',
                    '/components/button',
                    '/components/collapse',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/popover',
                    '/components/toast',
                ]
            }
        ]
    },
    theme: 'reco'
}
