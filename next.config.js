const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) require('./lib/sitemap')
    return config
  },
  pageExtensions: ['js', 'ts', 'tsx', 'mdx'],
  images: {
    domains: [
      'images.squarespace-cdn.com',
      'cbcampbell-exhibition.s3.amazonaws.com',
    ],
  },
})
