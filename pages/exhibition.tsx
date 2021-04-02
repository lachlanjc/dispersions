import { Grid, Box, Button, Flex, Container, Heading } from 'theme-ui'
import Image from 'next/image'
import NextLink from 'next/link'
import Vimeo from '@u-wave/react-vimeo'
import Meta from '@/components/meta'
import BGImg from '@/components/bg-img'
import Video from '@/components/video'
import { ArrowRight, ChevronNext } from '@/components/icons'
import { colors } from '@/lib/theme'

const Exhibition = () => (
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
    <Flex
      as="section"
      sx={{
        px: [null, 4, 5],
        py: 5,
        bg: 'black',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        '> div': {
          display: 'block',
          width: '95vw',
          maxWidth: [384, 512, 1024, 1536],
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
    </Flex>
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
