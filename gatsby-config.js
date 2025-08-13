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
    title: `Data Science Portfolio`, // Mengubah judul agar lebih relevan
    description: `A personal portfolio for a data scientist.`, // Mengubah deskripsi
    author: `@yourusername`, // Ganti dengan username Anda
    siteUrl: `https://your-portfolio-url.com/`, // Ganti dengan URL portofolio Anda
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // Ini sudah benar
    // Tambahkan plugin Gatsby lainnya di sini jika ada

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
        name: `data-science-portfolio`, // Mengubah nama manifest
        short_name: `DS Portfolio`, // Mengubah nama pendek
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Pastikan path ikon ini benar atau ganti dengan ikon Anda
      },
    },
  ],
};
