const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Personal Root Website',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  /**
   * Ref：https://npmmirror.com/package/vuepress-plugin-ipfs
   */
  base: '/ipfs/QmcJuYuNu9vyYL9PtYez8GwzbnFg7447JFrx72scKxm1n8/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: false,
    // default value is true. Set it to false to hide next page links on all pages
    nextLinks: true,
    // default value is true. Set it to false to hide prev page links on all pages
    prevLinks: true,
    sidebar: false,
/*    nav: [
      {
        text: 'Personal life',
        link: '/personal/',
      },
      {
        text: 'Traveling',
        link: '/travel/'
      },
      {
        text: 'Passion',
        link: '/passion/'
      }
    ],*/
    sidebar: {
      '/travel/': [
        {
          title: 'Travel',
          collapsable: false,
          children: [
            '',
            'Maroc',
            'Vietnam',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/vuepress-plugin-ipfs',
  ]
}
