module.exports = {
  siteMetadata: {
    title: `IT Consulting Company`,
    description: `Consulting Tech Firm - Take your business to the next level`,
    author: `IT Company`,
    keywords: ['IT company', 'IT consulting companies', 'IT Services Company', 'it outsourcing companies'],
    siteUrl: 'https://fervent-lewin-9d24e6.netlify.app/',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-mailgo`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300", "400", "700"],
            },
            {
              family: "Oswald",
              variants: ["400", "700"],
            },
            {
              family: "PT Sans",
              variants: ["400", "700"],
            }
          ]
        }
      }
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
