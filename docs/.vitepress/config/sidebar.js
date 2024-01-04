module.exports = {
  // 电脑端-组件库
  "/pc/ui/": [
    {
      text: "Vue3 组件库",
      collapsed: false,
      items: [
        { text: "Vue3 UI", link: "/pc/ui/" },
        { text: "表格", link: "/pc/ui/table" },
        { text: "图表", link: "/pc/ui/chart" },
        { text: "轮播", link: "/pc/ui/swiper" },
        { text: "编辑器", link: "/pc/ui/editor" },
        { text: "文件预览", link: "/pc/ui/file-preview" },
        { text: "滚动Scroll", link: "/pc/ui/scroll" },
        { text: "进度条", link: "/pc/ui/progress" },
        { text: "基础组件", link: "/pc/ui/base" },
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
};
