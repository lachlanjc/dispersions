import Head from 'next/head'
import { PropsWithChildren, ReactNode } from 'react'
import { colors } from '@/lib/theme'

const makeTitle = (title: string, name: string): string =>
  title === name ? title : `${title} – ${name}`

interface Props extends PropsWithChildren<any> {
  title?: string
  name?: string
  description?: string
  image?: string
  url?: string
  children?: ReactNode[]
}

const color: string = colors.black

const Meta = ({
  title = 'Dispersions',
  name = 'Dispersions',
  description = 'Christopher Campbell’s debut online show, with a collection of 48 stark drawings from 2020. Dispersions opens March 1.',
  image = 'https://dispersions.vercel.app/card.jpg',
  url = 'https://dispersions.cbcampbell.com',
  children,
}: Props) => (
  <Head>
    <meta key="og_locale" property="og:locale" content="en_US" />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <title key="title">{makeTitle(title, name)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />
    {description && (
      <>
        <meta key="desc" name="description" content={description} />
        <meta key="og_desc" property="og:description" content={description} />
        <meta key="tw_desc" name="twitter:description" content={description} />
      </>
    )}
    {image && (
      <>
        <meta key="og_img" property="og:image" content={image} />
        <meta key="tw_card" name="twitter:card" content="summary_large_image" />
        <meta key="tw_img" name="twitter:image" content={image} />
      </>
    )}
    <meta key="theme_color" name="theme-color" content={color} />
    <meta key="tile_color" name="msapplication-TileColor" content={color} />
    <link rel="icon" href="/icon.svg" type="image/svg+xml" />
    <link
      key="apple_icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${url}/apple-touch-icon.png`}
    />
    <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${url}/favicon-32x32.png`}
    />
    <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${url}/favicon-16x16.png`}
    />
    <link key="manifest" rel="manifest" href={`${url}/manifest.webmanifest`} />
    {children}
  </Head>
)

export default Meta
