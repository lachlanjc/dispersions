import { Grid, Box, Button, Flex, Container, Text, Heading } from 'theme-ui'
import Image from 'next/image'
import NextLink from 'next/link'
import Vimeo from '@u-wave/react-vimeo'
import Meta from '@/components/meta'
import BGImg from '@/components/bg-img'
import Video from '@/components/video'
import Abstract from '@/components/writing/abstract.mdx'
import ExcerptThirtyThree from '@/components/writing/excerpt-33.mdx'
import ExcerptFourtyEight from '@/components/writing/excerpt-48.mdx'
import { ArrowRight } from '@/components/icons'
import { colors } from '@/lib/theme'
import { getWork, imageUrl } from '@/lib/worklist'
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
          {
            /* @ts-ignore Theme UI doesn't use <a> types */ ...null
          }
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
              src={imageUrl(cover.path)}
              alt={cover.caption}
              width={cover.width}
              height={cover.height}
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
          '> div, > img': {
            // maxWidth: ['100%', '400px !important'],
            maxHeight: ['50vh', 400, 512],
            mx: 'auto !important',
          },
          img: {
            bg: 'sunken',
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
        minHeight: '97vh',
        bg: 'secondary',
        placeItems: 'center',
      }}
    >
      <BGImg
        alt="Detail of Christopher's drawing with graphite in dripping arcs"
        src="/worklist/2.2020.040_2_processe.jpg"
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
            mb: [4, 5],
          }}
        >
          Dispersions
        </Heading>
        <NextLink href="/works" passHref>
          <Button
            as="a"
            variant="outlineLg"
            sx={{
              color: 'smoke',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <span>View all works</span>
            <ArrowRight strokeWidth={2.5} />
          </Button>
        </NextLink>
      </Container>
    </Flex>
    <Box as="section" sx={{ py: [4, 5] }}>
      <Container variant="copy" sx={{ fontSize: 2 }}>
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
        sx={{ color: 'white', textAlign: 'center', pt: [3, 4], p: 3 }}
      >
        Watch the film
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
      {/* <Grid variant="layout.container" gap={[4, 5]} columns={[null, '2fr 3fr']}>
        <Container variant="copy" sx={{ fontSize: 2 }}>
          <ExcerptFourtyEight />
        </Container>
      </Grid> */}
      <StickyWork work={works.thirtyThree} />
      <Waterfall>
        <ExcerptThirtyThree />
      </Waterfall>
      <StickyWork work={works.fourtyEight} />
      <Waterfall>
        <ExcerptFourtyEight />
      </Waterfall>
    </Box>
    <Video
      mux="rlyfZBce1Bne42x00hISDPmI9vHZJmgqAnQkBw01UnnP4"
      width="100%"
      autoPlay
      muted
      loop
    />
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
    <Box sx={{ textAlign: 'center', pb: [4, 5, 6] }}>
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
    fourtyEight: getWork('2.2020.057'),

    oneFive: getWork('2.2020.015'),
    threeZero: getWork('2.2020.030'),
    fourFour: getWork('2.2020.044'),
  }
  return { props: { works } }
}
