import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "OpenUEM",
  tagline: "An Open Source Unified Endpoint Manager that lets you manage your IT assets thanks to its agents",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://openuem.eu",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "open-uem", // Usually your GitHub org/user name.
  projectName: "", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'docusaurus-plugin-matomo',
  ],

  themeConfig: {
    metadata: [
      {name: 'description', content: 'An Open Source Unified Endpoint Manager that lets you manage your IT assets thanks to its agents'},
      {name: 'keywords', content: 'operating systems, assets manager'},
      {name: 'twitter:card', content: 'An Open Source Unified Endpoint Manager that lets you manage your IT assets thanks to its agents'},
      {name: 'twitter:card', content: '@open-uem'},
      {name: 'twitter:image', content: "https://openuem.eu/img/openuem_logo.png"},
    ],
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { 
          type: 'dropdown',
          label: "Downloads", 
          position: "left",
          items: [
            {
              label: 'Windows',
              to: "/docs/Downloads/windows", 
            },
          ]
        },
        {
          href: "https://github.com/open-uem",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://discord.gg/7Wjpeqws",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://x.com/open_uem",
          label: "X",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} OpenUEM - Miguel Ángel Álvarez Cabrerizo. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    matomo: {
      matomoUrl: 'https://matomo.comovoy.eu/',
      siteId: '5',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
