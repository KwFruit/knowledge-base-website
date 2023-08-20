// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "首页", link: "/" },
  {
    text: "Java",
    link: "/java/",
    items: [
      {
        text: "项目配置",
        link: "/java/",
      },
      {
        text: "部署",
        link: "/deploy/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
  {
    text: "Linux",
    link: "/linux/",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
      {
        text: "部署",
        link: "/deploy/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
  {
    text: "云原生",
    link: '/cloud-native/', 
    items: [
      {
        text: "Docker",
        link: "/pages/1438b6/",
      },
      {
        text: "部署",
        link: "/deploy/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
  {
    text: "中间件",
    link: "/middleware/",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
      {
        text: "部署",
        link: "/deploy/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
  {
    text: "框架",
    link: "/framework/",
    items: [
      {
        text: "Spring",
        link: "/start/",
      },
      {
        text: "SpringBoot",
        link: "/deploy/",
      },
      {
        text: "SpringCloud",
        link: "/more/",
      },
      {
        text: "MongoDB",
        link: "/more/",
      },
    ],
  },
  {
    text: "数据库",
    link: "/database/",
    items: [
      {
        text: "Oracle",
        link: "/start/",
      },
      {
        text: "Mysql",
        link: "/deploy/",
      },
      {
        text: "Redis",
        link: "/more/",
      },
      {
        text: "MongoDB",
        link: "/more/",
      },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  {
    text: '导航',
    link: '/nav/'
  }
];
