const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'ts', 'tsx', 'mdx'],
  images: {
    domains: ['d1wa56x8uvnqfp.cloudfront.net'],
  },
})
