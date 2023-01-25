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
      "accessToken": "JWvSfiF983p7ZNZTUuy2JZwmAasryIs13c04zn4sEXA",
      "spaceId": "j9waukffttug"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass"]
};