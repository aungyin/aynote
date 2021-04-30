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
      ]
    },
  ]
}

function getAwesomeSidebar() {
  return [
    {
      text: 'Awesome Tools & Libs',
      children: [
        { text: 'JS Library', link: '/awesome/js-library' },
        { text: 'Image Compression', link: '/awesome/image-compression' },
      ]
    },
  ]
}
