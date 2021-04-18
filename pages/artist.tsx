import { Grid, Box, Container, Heading } from 'theme-ui'
import Image from 'next/image'
import Meta from '@/components/meta'
import Bio from '@/components/writing/bio.mdx'
import Tools from '@/components/writing/tools.mdx'

const About = () => (
  <>
    <Meta title="About" />
    <Grid
      variant="layout.container"
      gap={[4, 5]}
      columns={[null, '2fr 3fr']}
      as="header"
      py={[4, 5]}
      sx={{ alignItems: 'start' }}
    >
      <Image
        layout="responsive"
        sizes="40vw"
        width={1000}
        height={750}
        src="https://images.squarespace-cdn.com/content/v1/56eb1c33a3360ce05c87048d/1464436045312-EN6RRFD64MU95BRLNZID/ke17ZwdGBToddI8pDm48kBZw6jF4_OvU-ddo_vwqGhp7gQa3H78H3Y0txjaiv_0fvbklG0cZ21UMsOO4RokMHM1tH3TUBUgs5FK2W-hN0JTmI-btGPpL0N9bS76ZfKO4OqpeNLcJ80NK65_fV7S1UTwYwMi2KLO6m1qjHhgzSsHRg_hUfpDgUJ6l3gu9zaZojnlzPsk3eU__fePW63nezw/workingatzumbra.jpg?format=1000w"
      />
      <Box sx={{ fontSize: 2 }}>
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
    <Container as="section" variant="copy" sx={{ py: [4, 5], fontSize: 2 }}>
      <Tools />
    </Container>
    <Box as="section" bg="dark" py={[4, 5]}>
      <Grid
        variant="layout.wide"
        columns={[null, 2]}
        gap={[3, 4, 5]}
        sx={{ px: [3, 4, 5] }}
      >
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
          src="/artist/grouping_zoom.jpg"
          sizes="40vw"
        />
      </Grid>
    </Box>
  </>
)

export default About
