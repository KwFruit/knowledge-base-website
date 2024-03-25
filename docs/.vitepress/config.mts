import { defineConfig } from 'vitepress'
// 路由表
import {SE, Juc ,Designpattern} from './router/java.mjs'
import { Kubernetes,Docker,DevopsGitlabJenkins } from './router/cloudnative.mjs'
import { Nginx ,Kafka,Elasticsearch,RabbitMq} from './router/middleware.mjs'
import { Redis,MongoDB } from './router/database.mjs'
import {  linuxmts } from './router/linux.mjs'
// import { mq } from './router/mq.mjs'
 
export default defineConfig({
  title: "Note Box",
  description: "Note Box",



  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/307310_files_logo_box_drop_storage_icon.png' }],
  ],



  themeConfig: {


    logo: { src: '/307310_files_logo_box_drop_storage_icon.png', width: 24, height: 24 },

    nav: [
      { text: '首页', link: '/' },
      {
        text: '🍧Java',
        items: [
          { text: 'Java SE', link: '/course/1.Java/1.Java SE/1.基础.md' },
          { text: '设计模式', link: '/course/1.Java/3.设计模式/1.UML图.md' },
          { text: 'JUC并发编程', link: '/course/1.Java/2.JUC/1.进程与线程.md' },
        ]
      },
      {
        text: '🥂数据库',
        items: [
          { text: 'Redis', link: '/course/6.database/3.Redis/1.安装步骤.md' },
          { text: 'MongoDB', link: '/course/6.database/4.MongoDB/0001.MongoDB 概念篇.md'  },

        ]
      },
      {
        text: '🍸Linux',
        items: [
          { text: 'Shell', link: '/course/2.Linux/Shell/1._Shell概述.md' },
        ]
      },
      {
        text: '🥛云原生',
        items: [
          { text: 'Docker', link: '/course/3.Cloudnative/1.Docker/0010.Docker-基础篇.md' },
          { text: 'Kubernetes', link: '/course/3.Cloudnative/2.Kubernetes/1.介绍.md' },
          { text: 'DevOps GitLab+Jenkins版', link: '/course/3.Cloudnative/3.DevOpsGitLab+Jenkins版/1.搭建Gitlab服务器.md' },

        ]
      },
      {
        text: '🍹框架',
        items: [
          { text: 'Shell', link: '/course/2.Linux/Shell/1._Shell概述.md' },
        ]
      },
      {
        text: '🍨中间件',
        items: [
          { text: 'Nginx', link: '/course/4.middleware/2.Nginx/1.Nginx 简介.md' },
          { text: 'Kafka', link: '/course/4.middleware/3.Kafka/1.消息队列流派.md' },
          { text: 'RabbitMq', link: '/course/4.middleware/4.RabbitMq/1.消息队列的流派.md' },
          { text: 'Elasticsearch', link: '/course/4.middleware/1.Elasticsearch/0001.Elasticsearch安装.md' },


        ]
      },
    ],
    sidebar: {
      
      
      '/course/1.Java/1.Java SE': SE,
      '/course/1.Java/3.设计模式': Designpattern,
      '/course/1.Java/2.JUC': Juc,



      '/course/2.Linux/Shell/': linuxmts,
      // '/course/3.Cloudnative/': cloudnative,
      '/course/6.database/3.Redis/': Redis,
      '/course/6.database/4.MongoDB/': MongoDB,

      '/course/3.Cloudnative/1.Docker': Docker,
      '/course/3.Cloudnative/2.Kubernetes': Kubernetes,
      '/course/3.Cloudnative/3.DevOpsGitLab+Jenkins版': DevopsGitlabJenkins,

      '/course/4.middleware/1.Elasticsearch/': Elasticsearch,
      '/course/4.middleware/2.Nginx': Nginx,
      '/course/4.middleware/3.Kafka/': Kafka,
      '/course/4.middleware/4.RabbitMq/': RabbitMq,



    },
     // 在 sidebar 后添加
     outlineTitle: '本页目录',
     darkModeSwitchLabel: '切换主题',
     sidebarMenuLabel: '菜单',
     returnToTopLabel: '回到顶部',
     docFooter: {
       prev: '上一页',
       next: '下一页'
     },
     footer: {
      message: 'Power by Vercel and Cloudflare.',
      copyright: 'Copyright © 2023-present kwfruit.'
    },
    // search: {
    //   provider: 'local',
    //   options: {
    //     locales: {
    //       root: {
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             noResultsText: '无法找到相关结果',
    //             resetButtonTitle: '清除查询条件',
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换'
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },

    search: {
      provider: 'algolia',
      options: {
        appId: '2A9HHOINBG',
        apiKey: '99dc5fdc2171c5c37cc5259d83ee72b8',
        indexName: 'note box',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },

      // 编辑链接配置 
  // editLink: {
  //   pattern: 'https://github.com/KwFruit/knowledge-base-website/edit/master/docs/:path',
  //   text: '在 Github 上编辑此页'
  // },
      // 导航栏右侧社交链接配置
  socialLinks: [
    {
      icon: {
        svg: `<svg t="1710855910823" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10607" width="32" height="32"><path d="M457.142857 508.562286l311.990857 311.990857A437.284571 437.284571 0 0 1 457.142857 950.857143C214.857143 950.857143 18.285714 754.285714 18.285714 512S214.857143 73.142857 457.142857 73.142857v435.419429z m106.861714 3.437714H1005.714286c0 121.709714-49.700571 232.557714-130.304 311.990857zM969.142857 438.857143H530.285714V0c242.285714 0 438.857143 196.571429 438.857143 438.857143z" fill="#3497db" p-id="10608"></path></svg>`
      },
      link: 'https://en.kwfruit.cn/'
    },
    
    {
      icon: {
        svg: `<svg t="1700567795085" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2396" width="64" height="64"><path d="M851.40363594 172.59636406c-187.46181844-187.46181844-491.34545437-187.46181844-678.80727188 0-187.46181844 187.46181844-187.46181844 491.34545437 0 678.80727188 187.46181844 187.46181844 491.34545437 187.46181844 678.80727188 0 187.46181844-187.46181844 187.46181844-491.34545437 0-678.80727188zM387.33090875 728.08727281a47.08363594 47.08363594 0 1 1-66.63272719-66.50181843 47.08363594 47.08363594 0 0 1 66.63272719 66.50181843z m205.52727281 1.39636313a38.74909125 38.74909125 0 0 1-76.62545437-11.52h-0.04363594a6.54545437 6.54545437 0 0 0-0.04363688 0.30545531v-0.34909125c0.30545438-2.61818156 2.05090875-20.72727281-2.96727281-44.98909125a174.24 174.24 0 0 0-48.56727281-89.28 172.10181844 172.10181844 0 0 0-88.8-48.30545438 156.69818156 156.69818156 0 0 0-42.45818156-2.92363593 38.66181844 38.66181844 0 0 1-35.38909125-65.32363688 38.61818156 38.61818156 0 0 1 21.12-10.8218175v-0.2181825c4.45090875-0.74181844 111.14181844-16.45090875 200.33454562 72.74181844 89.01818156 89.01818156 74.18181844 196.14545438 73.44 200.72727281z m175.2 7.59272812a38.74909125 38.74909125 0 0 1-65.67272719 21.3818175 39.49090875 39.49090875 0 0 1-11.65090875-33.73090875c0.08727281-0.34909125 5.10545437-37.48363594-5.06181843-88.97454562-13.30909125-67.37454562-45.29454563-126.89454563-94.95272719-176.90181844-50.00727281-49.70181844-109.52727281-81.64363594-176.94545438-94.95272719-51.49090875-10.16727281-88.58181844-5.19272719-89.01818156-5.14909031h0.21818156-0.04363687a39.92727281 39.92727281 0 0 1-44.68363594-32.90181844 38.83636406 38.83636406 0 0 1 32.20363594-44.37818156c1.92-0.30545438 47.86909125-7.33090875 111.27272719 4.36363594a411.75272719 411.75272719 0 0 1 106.25454562 34.95272718 425.76 425.76 0 0 1 114.63272719 82.25454563l0.91636406 0.96 0.96 0.87272719a425.89090875 425.89090875 0 0 1 82.25454563 114.72c16.40727281 33.6 28.14545437 69.29454562 34.99636312 106.21090875 11.65090875 63.40363594 4.66909125 109.35272719 4.32 111.27272812z" fill="#208DE8" p-id="2397"></path></svg>`
      },
      link: 'https://www.cnblogs.com/mangoubiubiu'
    },
    {
      icon: {
        svg: `<svg t="1702870939824" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6637" id="mx_n_1702870939825" width="64" height="64"><path d="M512 22C241.38 22 22 241.38 22 512s219.38 490 490 490 490-219.38 490-490S782.62 22 512 22z m226.06 277.73L517.54 809.14c-3.18 7.28-13.72 7.08-17.21-0.41L410.4 616.57a5.966 5.966 0 0 0-2.97-2.97L215.6 523.58c-7.58-3.49-7.79-14.05-0.41-17.23l508.74-220.76c8.91-3.91 18.03 5.22 14.13 14.14z" fill="#208DE8" p-id="6638"></path></svg>`
      },
      link: 'https://navs.kwfruit.cn/'
    }
  ],
  }
})