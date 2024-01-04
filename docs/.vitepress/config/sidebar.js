module.exports = {
    // 电脑端-组件库
    "/pc/ui/": [
        {
            text: "Vue3 组件库",
            collapsed: false,
            items: [
                { text: "Vue3 UI", link: "/pc/ui/" },
                { text: "基础组件", link: "/pc/ui/base" },
                { text: "表格", link: "/pc/ui/table" },
                { text: "图表", link: "/pc/ui/chart" },
                { text: "轮播", link: "/pc/ui/swiper" },
                { text: "编辑器", link: "/pc/ui/editor" },
                { text: "文件预览", link: "/pc/ui/file-preview" },
                { text: "滚动Scroll", link: "/pc/ui/scroll" },
                { text: "进度条", link: "/pc/ui/progress" },
                // { text: "登录页", link: "/pc/ui/login" },
            ],
        },
        {
            text: "Vue2 组件库",
            collapsed: false,
            items: [
                { text: "Vue2 UI", link: "/pc/ui/vue2" },
                { text: "表格", link: "/pc/ui/tablev2" },
                { text: "图表", link: "/pc/ui/chartv2" },
            ],
        },
    ],
    // 电脑端-开源项目
    "/pc/project/": [
        {
            text: "Vue3 项目集",
            collapsed: false,
            items: [
                { text: "Vue3 开源项目", link: "/pc/project/" },
                { text: "Vue3 付费项目", link: "/pc/project/pay" },
                { text: "超火的Git项目 🔥", link: "/pc/project/git"}
            ],
        },
        {
            text: "Vue2 组件库",
            collapsed: false,
            items: [
                { text: "Vue2 开源项目", link: "/pc/project/vue2" },
                { text: "Vue2 付费项目", link: "/pc/project/vue2-pay" },
            ],
        },
    ],
    // 项目实战
    "/project/note/": [
        {
            text: "⛲基础",
            collapsed: false,
            items: [
                { text: "⛲基础笔记", link: "/project/note/" },
                { text: "⛺React 配置多环境", link: "/project/note/react-env/" },
                { text: "🌁UMI 配置多环境", link: "/project/note/umi-env/" },
            ],
        },
        {
            text: "🐳部署",
            collapsed: false,
            items: [
                {
                    text: "🐋VitePress+GitHub部署代码",
                    link: "/project/note/github/",
                },
                { text: "🐟VitePress+Gitee部署代码", link: "/project/note/gitee/" },
            ],
        },
    ],
    // 移动端-组件库
    "/mobile/ui/": [{
        text: "Vue3 组件库",
        collapsed: false,
        items: [
            { text: "Vue3 UI", link: "/mobile/ui/" },
            // { text: "表格", link: "/pc/ui/table" },
            // { text: "图表", link: "/pc/ui/chart" },
            // { text: "轮播", link: "/pc/ui/swiper" },
            // { text: "编辑器", link: "/pc/ui/editor" },
            // { text: "文件预览", link: "/pc/ui/file-preview" },
            // { text: "滚动Scroll", link: "/pc/ui/scroll" },
            // { text: "进度条", link: "/pc/ui/progress" },
            // { text: "基础组件", link: "/pc/ui/base" },
        ],
    },
    {
        text: "Vue2 组件库",
        collapsed: false,
        items: [
            { text: "Vue2 UI", link: "/mobile/ui/vue2" },
            // { text: "表格", link: "/pc/ui/tablev2" },
            // { text: "图表", link: "/pc/ui/chartv2" },
        ],
    }
    ],
    // 常用库-开发软件
    "/use/software/": [
        {
            text: "前端开发",
            collapsed: false,
            items: [
                { text: "前端开发软件", link: "/use/software/" },
            ],
        },
        {
            text: "接口调试",
            collapsed: false,
            items: [
                { text: "接口调试软件", link: "/use/software/api" },
            ],
        },
        {
            text: "远程调试",
            collapsed: false,
            items: [
                { text: "远程调试软件", link: "/use/software/ssh" },
            ],
        },
    ],
    // 常用库-实用插件
    // "/use/practical-plug/": [
    //     // {
    //     //     text: "前端开发",
    //     //     collapsed: false,
    //     //     items: [
    //     //         { text: "前端开发软件", link: "/use/software/" },
    //     //     ],
    //     // },
    //     // {
    //     //     text: "接口调试",
    //     //     collapsed: false,
    //     //     items: [
    //     //         { text: "接口调试软件", link: "/use/software/api" },
    //     //     ],
    //     // },
    //     {
    //         text: "远程调试",
    //         collapsed: false,
    //         items: [
    //             { text: "远程调试插件", link: "/use/practical-plug/" },
    //         ],
    //     },
    //     {
    //         text: "实用插件",
    //         collapsed: false,
    //         items: [
    //             { text: "Node版本管理工具", link: "/use/practical-plug/node" },
    //         ],
    //     },
    // ]
};
