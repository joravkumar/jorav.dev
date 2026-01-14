/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Developer Portfolio - Jorav - Hire Me Today`,
    description:
      "Looking for a developer who loves to make bad puns and write even worse code? Look no further! I'm Jorav, a seasoned JavaScript developer with 7+ years of experience. Check out my portfolio and let's make some magic happen!",
    author: `@jorav`,
    siteUrl: `https://jorav.dev`,
    keywords: [
      `JavaScript`,
      `Gatsby`,
      `portfolio`,
      `developer`,
      `Jorav`,
      `typescript`,
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jorav.dev`,
        short_name: `jorav`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://jorav.dev`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-theme-ui",
  ].filter(Boolean),
}
