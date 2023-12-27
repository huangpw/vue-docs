const nav = require("./config/nav");
const sidebar = require("./config/sidebar");
const footer = require("./config/footer");
const socialLinks = require("./config/socialLinks");

export default {
  title: "VUE-DOCS",
  description: "前端React学习网站，包含web端&移动端&小程序&Electron等栏目",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: "/logo.png",
    nav,
    sidebar,
    socialLinks,
    footer,
  },
};
