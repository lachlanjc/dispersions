import { Grid, Heading, Text, Link, Box } from 'theme-ui'
import {
  worklistNumbers,
  formatDimsCm,
  formatDimsIn,
  getWork,
  WorklistNumbers,
} from '@/lib/worklist'
import { Grid as GridIcon } from '@/components/icons'
import Gallery from '@/components/gallery'
import NextLink from 'next/link'

type Props = { work: Artwork }
type Params = { params: { worklist: WorklistNumbers } }

const Work = ({ work }: Props) => (
  <Grid
    as="main"
    columns={[null, '2fr 1fr']}
    gap={[4, 5]}
    px={[null, 3, 4]}
    py={4}
    sx={{ alignItems: 'center' }}
  >
    <Box
      as="article"
      sx={{
        gridRow: 1,
        gridColumn: [null, '2'],
        color: 'muted',
        px: [3, 0],
      }}
    >
      <NextLink href="/works" passHref>
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
      <Text as="p" mb={1}>
        {formatDimsCm(work)} ({formatDimsIn(work)})
      </Text>
    </Box>
    <Gallery images={work.images} />
  </Grid>
)

export default Work

export async function getStaticPaths() {
  const paths = worklistNumbers.map(worklist => ({ params: { worklist } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { worklist } }: Params) {
  const work = getWork(worklist)
  return { props: { work }, revalidate: false }
}
