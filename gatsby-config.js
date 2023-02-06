/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: `/portfolio`,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "aMbTF3dlxgdTy37Lh5QFt-bV9rBgZ4hom95Oh6fBmsA",
      "spaceId": "j9waukffttug"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass"]
};