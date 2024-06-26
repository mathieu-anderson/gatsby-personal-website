module.exports = {
  siteMetadata: {
    title: `Mathieu Anderson is a web dev`,
    description: `Mathieu Anderson is a frontend web dev. You can find everything you want to know about him here! Looking forward to making your acquaintance.`,
    author: `@syllaband`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mathieu-anderson-personal-website`,
        short_name: `mathieu`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
