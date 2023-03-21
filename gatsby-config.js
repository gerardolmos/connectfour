/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `cuatroenraya`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
};
