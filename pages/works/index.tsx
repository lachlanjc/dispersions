import { Grid, Heading, Container, Paragraph } from 'theme-ui'
import { GetStaticProps } from 'next'
import { getFullWorklist } from '@/lib/worklist'
import Meta from '@/components/meta'
import Work from '@/components/work'

const Works = ({ works }: { works: Array<Artwork> }) => (
  <Container py={[4, 5]}>
    <Meta title="All works" />
    <Heading as="h1" variant="title" mb={3}>
      All works
    </Heading>
    <Paragraph as="p" variant="subtitle">
      48 works on paper, made from March–December 2020.
    </Paragraph>
    <Grid
      columns={[2, 3]}
      gap={[3, 4]}
      mt={[4, 5]}
      sx={{ scrollSnapType: 'y mandatory' }}
    >
      {works.map(work => (
        <Work work={work} key={work.worklist} />
      ))}
    </Grid>
  </Container>
)

export default Works

export const getStaticProps: GetStaticProps = async () => {
  const works = getFullWorklist()
  return { props: { works } }
}
