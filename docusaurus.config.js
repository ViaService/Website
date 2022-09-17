// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Via Bot",
  tagline: "Documentation, blog, support all in one place",
  url: "https://viabot.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ViaService", // Usually your GitHub org/user name.
  projectName: "Website", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/viaservice/website/blob/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/viaservice/website/blob/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-3TNHHZJ1W8',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        // Primary
        {
          name: "title",
          content: "The Via Bot",
        },
        {
          name: "description",
          content:
            "A discord bot that gives roles to actively texting members, members in voice channels and members with a custom status that supports the server. Via also comes with Anonymous Confessions.",
        },
        {
          name: "image",
          content: "https://cdn.discordapp.com/attachments/1019930932284768256/1019931012672794665/The_Via_Service.png",
        },
        // Facebook
        {
          property: "og:type",
          content: "application",
        },
        {
          property: "og:description",
          content: "A discord bot that gives roles to actively texting members, members in voice channels and members with a custom status that supports the server. Via also comes with Anonymous Confessions.",
        },
        {
          property: "og:image",
          content: "https://cdn.discordapp.com/attachments/1019930932284768256/1019931012672794665/The_Via_Service.png", 
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "The Via Discord Bot",
        },
        {
          name: "twitter:description",
          content: "A discord bot that gives roles to actively texting members, members in voice channels and members with a custom status that supports the server. Via also comes with Anonymous Confessions.",
        },
        {
          name: "twitter:image",
          content: "https://cdn.discordapp.com/attachments/1019930932284768256/1019931012672794665/The_Via_Service.png",
        }
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: "G7Q39IJWC7",

        // Public API key: it is safe to commit it
        apiKey: "7788b6864c1a6728e8d60a6a675d106b",

        indexName: "via-docs",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
        siteId: "427912ba-1525-496d-b3da-e046ad8f02d2",
        branch: "master",
        selector: "div#search",
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "The Via Service",
        logo: {
          alt: "Via Bot Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Guide",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://discord.com/api/oauth2/authorize?client_id=851470585313230849&permissions=533619666241&scope=applications.commands%20bot",
            label: "Try Via Bot",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Via Service",
            items: [
              {
                label: "Guide",
                to: "/docs/",
              },
              {
                label: "Terms",
                to: "/terms",
              },
              {
                label: "Privacy",
                to: "/privacy",
              },
            ],
          },
          {
            title: "Via Bot",
            items: [
              {
                label: "Support Server",
                href: "https://discord.gg/ZNukApCu8Y",
              },
              {
                label: "Get The Bot",
                href: "https://discord.com/api/oauth2/authorize?client_id=851470585313230849&permissions=533619666241&scope=applications.commands%20bot",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/viaservice/website",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ahmed Baari and Aayush Rajagopalan`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
          "mobile",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/static/img/vialogo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
  ],
};

module.exports = config;
