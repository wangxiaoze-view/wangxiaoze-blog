import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { componentsPlugin } from "vuepress-plugin-components";


export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "王小泽的前端笔记",
      description: "记录生活，记录成长！专注于前端业务的前端人儿！",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "文档演示",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
  },

  theme,

  shouldPrefetch: false,

  plugins: [
    componentsPlugin({
      components: ["Badge" , "BiliBili" , "CodePen" , "FontIcon" , "PDF" , "StackBlitz" , "VideoPlayer" , "YouTube"],
      rootComponents: {
        backToTop: true,
      }
    }),
   
  ]
});
