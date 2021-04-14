import { Grid, Box, Button, Flex, Container, Heading } from 'theme-ui'
import Image from 'next/image'
import NextLink from 'next/link'
import Vimeo from '@u-wave/react-vimeo'
import Meta from '@/components/meta'
import BGImg from '@/components/bg-img'
import Video from '@/components/video'
import Abstract from '@/components/writing/abstract.mdx'
import ExcerptThirtyThree from '@/components/writing/excerpt-33.mdx'
import ExcerptFourtyEight from '@/components/writing/excerpt-48.mdx'
import { ArrowRight, ChevronNext } from '@/components/icons'
import { colors } from '@/lib/theme'
import { getWork } from '@/lib/worklist'
import Work from '@/components/work'

const StickyWork = ({ work }: { work: Artwork }) => (
  <Box
    as="section"
    sx={{ p: [3, 4], position: 'sticky', top: 0, width: '100%', bg: 'white' }}
  >
    <Container variant="narrow">
      <Work work={work} />
    </Container>
  </Box>
)

const Waterfall = ({ children }: { children: any }) => {
  return (
    <Container
      as="section"
      variant="copy"
      sx={{
        ul: {
          p: 0,
          mt: [4, 5],
          listStyle: 'none',
          display: 'grid',
          // gridTemplateColumns: [null, 'repeat(2, 1fr)'],
          gridGap: [3, 4],
        },
        li: {
          fontSize: 2,
          display: 'flex',
          alignItems: 'center',
          '&:nth-of-type(even)': {
            ml: [null, -4, -5],
          },
        },
        img: {
          order: -1,
          mr: [3, 4],
          display: 'block',
          maxHeight: 400,
          maxWidth: 400,
          mx: 'auto',
        },
      }}
    >
      {children}
    </Container>
  )
}

const Exhibition = ({ works }: { works: Artwork[] }) => (
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
            fontSize: [4, 6, 7, 8],
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
    <Box
      as="section"
      sx={{
        py: 5,
        bg: 'black',
      }}
    >
      <Box
        sx={{
          px: [null, 4, 5],
          mx: 'auto',
          '> div': {
            display: 'block',
            width: '100%',
            mx: 'auto',
            maxWidth: [384, 512, null, 1024],
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
      <Container variant="copy" sx={{ p: { color: 'white' }, fontSize: 2 }}>
        <Abstract />
      </Container>
    </Box>
    <Box as="section" sx={{ py: [4, 5] }}>
      <Grid variant="layout.container" gap={[4, 5]} columns={[null, '2fr 3fr']}>
        <Work work={works.fourtyEight} img={1} />
        <Container variant="copy" sx={{ fontSize: 2 }}>
          <ExcerptFourtyEight />
        </Container>
      </Grid>
      <Container>
        <StickyWork work={works.thirtyThree} />
        <Waterfall>
          <ExcerptThirtyThree />
        </Waterfall>
      </Container>
    </Box>
    <Video
      mux="rlyfZBce1Bne42x00hISDPmI9vHZJmgqAnQkBw01UnnP4"
      width="100%"
      autoPlay
      muted
      loop
    />
  </>
)

export default Exhibition

export async function getStaticProps() {
  const works = {
    thirtyThree: getWork('2.2020.039'),
    fourtyEight: getWork('2.2020.057'),
  }
  return { props: { works } }
}
