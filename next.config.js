const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
/** @type {import('next').NextConfig} */
module.exports = withMDX({
  swcMinify: true,
  pageExtensions: ['js', 'ts', 'tsx', 'mdx'],
  images: {
    domains: ['d1wa56x8uvnqfp.cloudfront.net'],
  },
  redirects: async function () {
    return [
      {
        source: '/exhibition',
        destination: '/',
        permanent: true,
      },
    ]
  },
  rewrites: async function () {
    return [
      {
        source: '/artist/:path*',
        destination:
          'https://d1wa56x8uvnqfp.cloudfront.net/dispersions-artist/:path*',
      },
      {
        source: '/excerpts/:path*',
        destination:
          'https://d1wa56x8uvnqfp.cloudfront.net/dispersions-excerpts/:path*',
      },
      {
        source: '/worklist/:path*',
        destination:
          'https://d1wa56x8uvnqfp.cloudfront.net/dispersions-worklist/:path*',
      },
    ]
  },
})
