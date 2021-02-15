import { Grid, Box, Button, Flex, Container, Heading } from 'theme-ui'
import Image from 'next/image'
import NextLink from 'next/link'
import Vimeo from '@u-wave/react-vimeo'
import Meta from '@/components/meta'
import BGImg from '@/components/bg-img'
import { ArrowRight, ChevronNext } from '@/components/icons'
import theme from '@/lib/theme'

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
        src="/worklist/2.2020.040_012_4096p.jpg"
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
        '> div, iframe': {
          maxWidth: '95vw',
          width: [384, 512, 1024],
          height: [384, 512, 1024].map(n => n * (9 / 16)),
        },
      }}
    >
      <Vimeo
        video="https://vimeo.com/512374691/23becfae57"
        color={theme?.colors?.accent?.toString().replace('#', '')}
        showTitle={false}
        showByline={false}
        showPortrait={false}
      />
    </Flex>
  </>
)

export default Exhibition
