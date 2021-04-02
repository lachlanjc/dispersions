const fs = require('fs')
const globby = require('globby')
const { map } = require('lodash')
const fullWorklist = require('./worklist/worklist.json')

const worklistNumbers = map(fullWorklist, 'worklist')

function addPage(page) {
  const route = page
    .replace('pages', '')
    .replace('.tsx', '')
    .replace('.mdx', '')
    .replace('/index', '')

  return `  <url>
     <loc>${`https://dispersions.cbcampbell.com${route}`}</loc>
     <changefreq>daily</changefreq>
   </url>`
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes
  let pages = await globby([
    'pages/**/*{.tsx,.mdx}',
    '!pages/_*.tsx',
    '!pages/api',
  ])
  pages = pages.filter(p => !p.includes('['))
  worklistNumbers.map(n => {
    pages.push(`/works/${n}`)
  })
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 ${pages.sort().map(addPage).join('\n')}
 </urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()
