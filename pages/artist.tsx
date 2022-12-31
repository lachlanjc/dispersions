import { Grid, Box, Container, Heading, Button } from 'theme-ui'
import Image from 'next/image'
import Meta from '@/components/meta'
import Bio from '@/components/writing/bio.mdx'
import Tools from '@/components/writing/tools.mdx'
import { ArrowRight } from '@/components/icons'

const About = () => (
  <>
    <Meta title="About" />
    <Grid
      as="header"
      gap={[4, 5]}
      columns={[null, '2fr 3fr']}
      sx={{
        py: [4, 5],
        alignItems: 'start',
        maxWidth: ['layout', null, 'layoutPlus', null, 'wide'],
        mx: 'auto',
      }}
    >
      <Image
        layout="responsive"
        sizes="40vw"
        width={1000}
        height={750}
        src="/artist/portrait.jpg"
        alt="Portrait of Christopher Campbell"
      />
      <Box sx={{ fontSize: 2, px: 3 }}>
        <Heading as="h1" variant="title">
          Christopher Campbell
        </Heading>
        <Bio />
      </Box>
    </Grid>
    <Image
      layout="responsive"
      width={4096}
      height={1793}
      alt="Panorama of Christopher's studio"
      src="/artist/studio_pano_1.jpg"
    />
    <Container
      as="section"
      sx={{
        pt: [4, 5, 6],
        pb: [4, 5],
        fontSize: 2,
        p: {
          variant: 'layout.copy',
          pt: [3, 4],
          pb: [4, 5],
        },
        img: { bg: 'sunken' },
      }}
    >
      <Tools />
    </Container>
    <Box
      as="section"
      sx={{
        bg: 'black',
        py: [4, 5],
        px: [3, 4, null, 5, 6],
        img: { bg: '#111' },
      }}
    >
      <Grid columns={[null, 2]} gap={[3, 4, 5]}>
        <Image
          layout="responsive"
          width={4096}
          height={2733}
          alt="Christopher's painting tools on a glass palette outside"
          src="/artist/palette_tools.jpg"
          sizes="40vw"
        />
        <Image
          layout="responsive"
          width={4096}
          height={3072}
          alt="Christopher's studio on a sunny day"
          src="/artist/studio.jpg"
          sizes="40vw"
        />
        <Image
          layout="responsive"
          width={4096}
          height={3072}
          alt="Grouping of works on the floor"
          src="/artist/grouping_floor.jpg"
          sizes="40vw"
        />
        <Image
          layout="responsive"
          width={4096}
          height={3072}
          alt="Grouping of works on the floor"
          src="/artist/studio_work.jpg"
          sizes="40vw"
        />
      </Grid>
    </Box>
    <Box sx={{ textAlign: 'center', pt: [4, 5], pb: [5, 6] }}>
      <Button
        as="a"
        /* @ts-expect-error Theme UI doesn't use <a> types */
        href="https://cbcampbell.com/works"
        target="_blank"
        variant="outlineLg"
        sx={{
          boxShadow: 'none',
          color: 'text',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <span>View full portfolio</span>
        <ArrowRight strokeWidth={2.5} />
      </Button>
    </Box>
  </>
)

export default About
