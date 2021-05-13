module.exports = {
  lang: 'en-US',
  title: 'AY Note',
  description: 'AY Note',

  themeConfig: {
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      {
        text: 'Git', 
        link: '/git/', 
        activeMatch: '^/git/' 
      },
      {
        text: 'HTML', 
        link: '/html/', 
        activeMatch: '^/html/' 
      },
      {
        text: 'Nuxt', 
        link: '/nuxt/', 
        activeMatch: '^/nuxt/' 
      },
      {
        text: 'Awesome', 
        link: '/awesome/', 
        activeMatch: '^/awesome/' 
      }
    ],

    sidebar: {
      '/git/': getGitSidebar(),
      '/html/': getHtmlSidebar(),
      '/nuxt/': getNuxtSidebar(),
      '/awesome/': getAwesomeSidebar(),
    }
  }
}

function getGitSidebar() {
  return [
    {
      text: 'Git',
      children: [
        { text: 'Basic Commands', link: '/git/git-basic-command' },
        { text: 'Git Config', link: '/git/git-config' },
        { text: 'Git Alias', link: '/git/git-alias' },
      ]
    },
  ]
}

function getHtmlSidebar() {
  return [
    {
      text: 'HTML',
      children: [
        { text: 'HTML Best Practice', link: '/html/html-best-practice' },
      ]
    },
  ]
}

function getNuxtSidebar() {
  return [
    {
      text: 'Nuxt',
      children: [
        { text: 'Nuxtjs Access config property from client', link: '/nuxt/nuxt-config' },
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
