import { Grid, Box, Button, Flex, Container, Text, Heading } from 'theme-ui'
import Image from 'next/image'
import NextLink from 'next/link'
import Vimeo from '@u-wave/react-vimeo'
import Meta from '@/components/meta'
import BGImg from '@/components/bg-img'
import Video from '@/components/video'
import Abstract from '@/components/writing/abstract.mdx'
import ExcerptThirtyThree from '@/components/writing/excerpt-33.mdx'
import ExcerptFifty from '@/components/writing/excerpt-50.mdx'
import TJC from '@/components/writing/tjc.mdx'
import { ArrowRight } from '@/components/icons'
import { colors } from '@/lib/theme'
import { getWork } from '@/lib/worklist'
import Link from 'next/link'
import Work from '@/components/work'

const StickyWork = ({ work }: { work: Artwork }) => {
  const cover = work.images[0]
  return (
    <Box
      as="aside"
      id={work.worklist}
      sx={{
        p: 3,
        width: '100%',
        position: 'sticky',
        top: 0,
        left: [null, null, 0],
        maxWidth: [null, null, 256],
        bg: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Link href={`/works/${work.worklist}`} passHref>
        <Grid
          as="a"
          /* @ts-expect-error Theme UI doesn't use <a> types */
          target="_blank"
          columns={['128px 1fr', null, '1fr']}
          gap={3}
          sx={{
            alignItems: 'center',
            textAlign: [null, null, 'center'],
            textDecoration: 'none',
            maxWidth: 512,
            mx: 'auto',
            color: 'text',
            transition: '0.125s color ease-in-out',
            ':hover,:focus': {
              color: 'muted',
            },
          }}
        >
          {cover && (
            <Image
              {...cover}
              placeholder="blur"
              alt={cover.caption}
              objectFit="contain"
            />
          )}
          <Box>
            <Text
              as="strong"
              sx={{
                display: 'block',
                fontSize: [2, 3],
              }}
            >
              {work.title}
            </Text>
            <Text as="span" variant="caption">
              View gallery &rarr;
            </Text>
          </Box>
        </Grid>
      </Link>
    </Box>
  )
}

const Waterfall = ({ children }: { children: any }) => {
  return (
    <Container
      as="article"
      sx={{
        px: 0,
        maxWidth: ['copy', null, 'copyPlus', 'layout'],
        my: [4, 5],
        ul: {
          pl: 0,
          listStyle: 'none',
        },
        li: {
          bg: 'white',
          p: 4,
          my: 0,
          fontSize: 2,
          display: 'grid',
          gridTemplateColumns: [null, '1fr 1fr'],
          gridGap: [3, 4],
          justifyContent: 'center',
          alignItems: 'center',
          // '&:nth-of-type(even)': {
          //   ml: [null, -4, -5],
          // },
          // '&:nth-of-type(3)': {
          //   mr: [null, -4, -5],
          // },
          '> span, > img': {
            // maxWidth: ['100%', '400px !important'],
            maxHeight: ['50vh', 400, 512],
            mx: 'auto !important',
          },
        },
      }}
    >
      {children}
    </Container>
  )
}

const Exhibition = ({ works }: { works: Record<string, Artwork> }) => (
  <>
    <Meta title="Intro" />
    <Flex
      as="header"
      sx={{
        position: 'relative',
        minHeight: '87vh',
        bg: 'secondary',
        placeItems: 'center',
      }}
    >
      <BGImg
        alt="Detail of Christopher's drawing with graphite in dripping arcs"
        src="/worklist/2.2020.040_2_processe.jpg"
        blurDataURL="data:image/webp;base64,UklGRlgDAABXRUJQVlA4WAoAAAAgAAAALwAAHwAASUNDUCQCAAAAAAIkYXBwbAQAAABtbnRyUkdCIFhZWiAH4QAHAAcADQAWACBhY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGzKGpWCJX8QTTiZE9XR6hWCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAGVjcHJ0AAABZAAAACN3dHB0AAABiAAAABRyWFlaAAABnAAAABRnWFlaAAABsAAAABRiWFlaAAABxAAAABRyVFJDAAAB2AAAACBjaGFkAAAB+AAAACxiVFJDAAAB2AAAACBnVFJDAAAB2AAAACBkZXNjAAAAAAAAAAtEaXNwbGF5IFAzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAAQ29weXJpZ2h0IEFwcGxlIEluYy4sIDIwMTcAAFhZWiAAAAAAAADzUQABAAAAARbMWFlaIAAAAAAAAIPfAAA9v////7tYWVogAAAAAAAASr8AALE3AAAKuVhZWiAAAAAAAAAoOAAAEQsAAMi5cGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltzZjMyAAAAAAABDEIAAAXe///zJgAAB5MAAP2Q///7ov///aMAAAPcAADAblZQOCAOAQAAcAcAnQEqMAAgAD8herRVrSakoyq4DAGgJAlpABIF58hF6zNz0LAjYYQfJoqbQh0st19Ak+cdXl5LIvedeuFnaMe40MAA/vTWmVe5U+L26XL18pDfKtg9j1xXJneNcXyHByiOMOON3iEm+Ft1nJCBA9xpWACAwJGRvCvNfZo5otRpzL/3qxDRswOICz4PAAr3p0VvSnSKk7q6s5jRWfqdLJ694zHxLcEl0yvEIBNWr+ZGMxP8YNsf7SNto8t/3wK2QDR32IrtE3nOtetGFgTR3exeHGh5FaeCDJJC5MsNuZ95Oxpo2P5lEozrtU6a3ATER9zZLAphh4JWmiPZZ+apfG6YoaNL0ha4qQOQjgAA"
        width={4096}
        height={2733}
        priority
      />
      <Container
        sx={{
          color: 'white',
          textAlign: 'center',
          textShadow: 'text',
        }}
      >
        <Heading
          as="h1"
          sx={{
            color: 'white',
            fontFamily: 'heading',
            fontSize: [3, 4],
            letterSpacing: 'headline',
            lineHeight: 'subheading',
            textTransform: 'uppercase',
            mt: 0,
            mb: 3,
          }}
        >
          Christopher Campbell
        </Heading>
        <Heading
          as="h1"
          variant="ultratitle"
          sx={{
            fontSize: [4, 6, null, 7, 8],
            letterSpacing: '.15em',
            textTransform: 'uppercase',
            mb: [3, 4],
          }}
        >
          Dispersions
        </Heading>
        <Text as="p" variant="headline" sx={{ fontWeight: 400 }}>
          Drawings from a year of COVID
        </Text>
      </Container>
    </Flex>
    <Box as="section" sx={{ py: [4, 5] }}>
      <Container variant="copy" sx={{ fontSize: 2 }}>
        <Heading
          as="h2"
          variant="title"
          sx={{ textAlign: 'center', mb: [3, 4] }}
        >
          Introduction
        </Heading>
        <Abstract />
      </Container>
    </Box>
    <Box
      as="section"
      sx={{
        pt: [4, null, 5],
        pb: 4,
        bg: 'black',
      }}
    >
      <Heading
        as="h1"
        variant="title"
        sx={{ color: 'white', textAlign: 'center', px: 3, mb: 3 }}
      >
        Artist statement
      </Heading>
      <Box
        sx={{
          px: [null, 4, 5, 6],
          mx: 'auto',
          '> div': {
            display: 'block',
            width: '100%',
            mx: 'auto',
            maxWidth: ['100%', 1200],
            height: 0,
            paddingBottom: `${(9 / 16) * 100}%`,
            position: 'relative',
          },
          iframe: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            border: 0,
          },
        }}
      >
        <Vimeo
          video="https://vimeo.com/514663630/4c2568af77"
          color={colors.red.toString().replace('#', '')}
          showTitle={false}
          showByline={false}
          showPortrait={false}
        />
      </Box>
    </Box>
    <Box as="section" sx={{ pt: [4, null, 5], pb: [3, 4] }}>
      <Heading
        as="h1"
        variant="title"
        sx={{ textAlign: 'center', p: [3, null, 4] }}
      >
        Two works in detail
      </Heading>
      <StickyWork work={works.thirtyThree} />
      <Waterfall>
        <ExcerptThirtyThree />
      </Waterfall>
      <StickyWork work={works.fifty} />
      <Waterfall>
        <ExcerptFifty />
      </Waterfall>
    </Box>
    <Video
      mux="rlyfZBce1Bne42x00hISDPmI9vHZJmgqAnQkBw01UnnP4"
      width="100%"
      autoPlay
      muted
      loop
    />
    <Box as="section" bg="snow">
      <Container variant="copy" py={[4, 5]}>
        <TJC />
      </Container>
    </Box>
    <Grid
      variant="layout.container"
      columns={[2, 3]}
      gap={[3, 4, 5]}
      sx={{ py: [4, 5] }}
    >
      <Work work={works.oneFive} />
      <Work work={works.threeZero} />
      <Work work={works.fourFour} />
    </Grid>
    <Box sx={{ textAlign: 'center', pb: [5, 6] }}>
      <NextLink href="/works" passHref>
        <Button
          as="a"
          variant="outlineLg"
          sx={{
            boxShadow: 'none',
            color: 'text',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <span>View all works</span>
          <ArrowRight strokeWidth={2.5} />
        </Button>
      </NextLink>
    </Box>
  </>
)

export default Exhibition

export async function getStaticProps() {
  const works = {
    thirtyThree: getWork('2.2020.039'),
    fifty: getWork('2.2021.003'),

    oneFive: getWork('2.2020.015'),
    threeZero: getWork('2.2020.030'),
    fourFour: getWork('2.2020.044'),
  }
  return { props: { works } }
}
