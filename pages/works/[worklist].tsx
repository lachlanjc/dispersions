import { Grid, Heading, Text, Link, Box } from 'theme-ui'
import {
  worklistNumbers,
  formatDimsCm,
  formatDimsIn,
  getWork,
} from '@/lib/worklist'
import { Grid as GridIcon } from '@/components/icons'
import Image from 'next/image'
import NextLink from 'next/link'

type Props = { work: Artwork }
type Params = { params: { worklist: string } }

const Work = ({ work }: Props) => (
  <Grid
    as="main"
    columns={[null, '2fr 1fr']}
    gap={[4, 5]}
    px={[3, 4, 5]}
    py={[4, 5]}
  >
    <Box
      sx={{
        display: 'flex',
        overflowY: 'auto',
        width: '100%',
        maxHeight: '100vh',
        scrollSnapType: 'x mandatory',
        '> div': {
          flexShrink: 0,
          width: '100%',
          mx: [3, 4],
          maxHeight: '90vh',
          scrollSnapAlign: 'center',
        },
      }}
    >
      {work.images.map(img => (
        <Image
          key={img.path}
          src={img.path}
          alt={img.caption}
          width={img.width}
          height={img.height}
          sizes="50vw"
          objectFit="contain"
        />
      ))}
    </Box>
    <Box as="article" sx={{ color: 'muted' }}>
      <NextLink href="/works" passHref>
        <Link
          sx={{
            mt: [null, 4, 5, 6],
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
        {formatDimsCm(work)}
      </Text>
      <Text as="p" mb={1}>
        {formatDimsIn(work)}
      </Text>
    </Box>
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
