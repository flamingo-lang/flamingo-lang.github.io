module.exports = {
  title: 'Flamingo',
  tagline: 'Logic programming reborn for the Web.',
  url: 'https://flamingo-lang.org',
  baseUrl: '/flamingo-docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'flamingo-lang', // Usually your GitHub org/user name.
  projectName: 'flamingo-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Flamingo',
      logo: {
        alt: 'Flamingo Lang',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/flamingo-lang/flamingo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Hines. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'start_here/intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/flamingo-lang/flamingo-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
