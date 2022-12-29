const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
/** @type {import('next').NextConfig} */
module.exports = withMDX({
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
})
