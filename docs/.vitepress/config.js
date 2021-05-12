module.exports = {
  lang: 'en-US',
  title: 'AY Note',
  description: 'Personal Blog',

  themeConfig: {
    editLink: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      {
        text: 'Note', 
        link: '/note/', 
        activeMatch: '^/note/' 
      },
      {
        text: 'Awesome', 
        link: '/awesome/', 
        activeMatch: '^/awesome/' 
      }
    ],

    sidebar: {
      '/note/': getNoteSidebar(),
      '/awesome/': getAwesomeSidebar(),
    }
  }
}

function getNoteSidebar() {
  return [
    {
      text: 'Note',
      children: [
        { text: 'Git Note', link: '/note/git' },
        { text: 'HTML Note', link: '/note/html' },
        { text: 'Nuxtjs Access config property from client', link: '/note/nuxt-config' },
      ]
    },
  ]
}

function getAwesomeSidebar() {
  return [
    {
      text: 'Awesome',
      children: [
        { text: 'Library and Tool', link: '/awesome/library-tool' },
        { text: 'Articles and Resources', link: '/awesome/resources' },
      ]
    },
  ]
}
