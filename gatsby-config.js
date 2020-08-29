module.exports = {
  siteMetadata: {
    title: `Descobrindo por acaso...`,
    name: `Serendipidade`,
    siteUrl: `https://arte.thluiz.com`,
    description: `Tirinhas aleatórias descobrindo coisas por acaso`,
    hero: {
      heading: `Aproveite as descobertas`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/artthluiz`,
      },
      {
        name: `github`,
        url: `https://github.com/thluiz`,
      }
    ],
  },
  plugins: [
    {
      resolve: "gatsby-theme-operetta",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Descobrindo por acaso...`,
        short_name: `Serendipidade`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
