import { useState } from 'react'
import { Grid, Heading, Text, Link, Box, Button } from 'theme-ui'
import {
  getWork,
  worklistNumbers,
  formatDimsCm,
  formatDimsIn,
  WorklistNumber,
  imageUrl,
} from '@/lib/worklist'
import { Grid as GridIcon } from '@/components/icons'
import Gallery from '@/components/gallery'
import Meta from '@/components/meta'
import Head from 'next/head'
import NextLink from 'next/link'
import InquireModal from '@/components/inquire-modal'
import { tail } from 'lodash'

type Props = { work: Artwork }
type Params = { params: { worklist: WorklistNumber } }

const Work = ({ work }: Props) => {
  const cover = work.images[0] // .filter(i => i.path.includes('copywork'))?.[0]
  const [caption, setCaption] = useState<string>('')
  const [inquiring, setInquiring] = useState<boolean>(false)

  return (
    <Grid
      as="main"
      columns={[null, '2fr 1fr']}
      gap={[4, 5]}
      px={[null, 3]}
      py={[4, 3, 0]}
      sx={{ alignItems: 'center', minHeight: '100vh' }}
    >
      <Meta
        title={work.title.replace('Dispersions,', 'Artwork')}
        description={`This ${work.date} artwork on ${work.medium} is part of Christopher Campbell’s Dispersions exhibition inspired by COVID-19.`}
        image={cover ? imageUrl(cover.path) : undefined}
      >
        {cover?.width && (
          <meta
            key="og_img_width"
            property="og:image:width"
            content={cover.width.toString()}
          />
        )}
        {cover?.height && (
          <meta
            key="og_img_height"
            property="og:image:height"
            content={cover.height.toString()}
          />
        )}
      </Meta>
      <Head>
        <link rel="preconnect" href="https://d1wa56x8uvnqfp.cloudfront.net" />
        <script
          key="work_json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Painting',
              name: work.title,
              accessMode: 'visual',
              abstract: `This ${work.date} artwork on ${work.medium} is part of Christopher Campbell’s Dispersions exhibition inspired by COVID-19.`,
              url: `https://dispersions.cbcampbell.com/works/${work.worklist}`,
              size: `${formatDimsCm(work)} (${formatDimsIn(work)})`,
              thumbnailUrl: imageUrl(
                `/worklist/${work.worklist}_0_thumbnail.jpg`,
              ),
              creativeWorkStatus: 'Published',
              copyrightYear: 2020,
              creditText: 'Artwork by Christopher Campbell',
              author: {
                '@type': 'Person',
                email: 'mailto:c.b.campbell@icloud.com',
                jobTitle: 'Artist',
                name: 'Christopher Campbell',
                url: 'https://cbcampbell.com',
              },
              copyrightHolder: {
                '@type': 'Person',
                email: 'mailto:c.b.campbell@icloud.com',
                jobTitle: 'Artist',
                name: 'Christopher Campbell',
                url: 'https://cbcampbell.com',
              },
              image: cover
                ? {
                    '@type': 'ImageObject',
                    url: imageUrl(cover.path),
                    description: cover.caption || work.worklist,
                    height: cover.height,
                    width: cover.width,
                  }
                : undefined,
            }),
          }}
        />
      </Head>
      <Box
        as="article"
        sx={{
          gridRow: 1,
          gridColumn: [null, '2'],
          color: 'muted',
          px: [3, 0],
          transform: [null, 'translateY(1.25em)'], // compensate for caption
        }}
      >
        <NextLink href="/works" scroll={false} passHref>
          <Link
            sx={{
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              svg: { mr: 2 },
            }}
          >
            <GridIcon />
            All works
          </Link>
        </NextLink>
        <Heading as="h1" variant="headline" color="text" mb={0}>
          {work.title}
        </Heading>
        <Text as="p" variant="subtitle" color="secondary" mb={3}>
          {work.date}
        </Text>
        <Text as="p" mb={1}>
          {work.medium}
        </Text>
        <Text as="p" mb={[3, 4]}>
          {formatDimsCm(work)} ({formatDimsIn(work)})
        </Text>
        <Button
          onClick={() => setInquiring(true)}
          variant="outline"
          sx={{ color: 'text' }}
        >
          Inquire
        </Button>
        <Text
          as="p"
          sx={{
            mt: 4,
            pt: 2,
            borderTop: '1px solid',
            borderTopColor: caption == '' ? 'background' : 'border',
            height: '2.5em',
            borderTopWidth: '0.5px',
            maxWidth: '36ch',
          }}
        >
          {caption}
        </Text>
      </Box>
      <Gallery images={work.images} onCaption={setCaption} />
      <InquireModal
        open={inquiring}
        onClose={() => setInquiring(false)}
        work={work}
      />
    </Grid>
  )
}

export default Work

export async function getStaticPaths() {
  const paths = worklistNumbers.map(worklist => ({ params: { worklist } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { worklist } }: Params) {
  const work = getWork(worklist)
  work.images = tail(work.images) // Remove thumbnail
  return { props: { work }, revalidate: false }
}
