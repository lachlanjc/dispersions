import { Box, Grid, Heading, Container, Paragraph, Button } from 'theme-ui'
import { GetStaticProps } from 'next'
import { getFullWorklist } from '@/lib/worklist'
import NextLink from 'next/link'
import Meta from '@/components/meta'
import Work from '@/components/work'
import { ArrowRight } from '@/components/icons'

const Works = ({ works }: { works: Array<Artwork> }) => (
  <>
    <Meta title="All works" />
    <Container py={[4, 5]}>
      <Heading as="h1" variant="ultratitle" mb={3}>
        All works
      </Heading>
      <Paragraph as="p" variant="subtitle">
        {works.length} works on paper, made from April 2020–April 2021.
      </Paragraph>
      <Grid columns={[2, 3]} gap={[3, 4, 5]} mt={[4, 5]}>
        {works.map(work => (
          <Work work={work} key={work.worklist} />
        ))}
      </Grid>
    </Container>
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
          <span>About the artist</span>
          <ArrowRight strokeWidth={2.5} />
        </Button>
      </NextLink>
    </Box>
  </>
)

export default Works

export const getStaticProps: GetStaticProps = async () => {
  const works = getFullWorklist().map(work => {
    work.images = [work.images[0]]
    return work
  }) // only include thumbnails
  return { props: { works } }
}
