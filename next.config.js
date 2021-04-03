const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  future: {
    webpack5: true,
  },
  pageExtensions: ['js', 'ts', 'tsx', 'mdx'],
  images: {
    domains: ['images.squarespace-cdn.com', 'd1wa56x8uvnqfp.cloudfront.net'],
  },
})
