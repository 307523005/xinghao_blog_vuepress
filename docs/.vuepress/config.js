// docs/.vuepress/config.js
module.exports = {
  title: "兴浩",
  description: "分享各类资源、教程、黑科技软件、工具等等",
   //theme: 'reco',
  markdown: {
    lineNumbers: true,
  },
 themeConfig: {
    logo: 'https://www.vuepress.cn/hero.png',
     nav: [
     {
             text: 'Languages',
             ariaLabel: 'Language Menu',
             items: [
               { text: 'Chinese', link: '/language/chinese/' },
               { text: 'Japanese', link: '/language/japanese/' }
             ]
           },
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
           { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
                { text: 'Guide', link: '/guide/', target:'_blank' }
        ]
  }
};