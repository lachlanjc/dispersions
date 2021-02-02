const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  images: {
    domains: ['images.squarespace-cdn.com'],
  },
})
