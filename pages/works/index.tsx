import { Grid, Heading, Container, Text, Link, Paragraph } from 'theme-ui'
import { GetStaticProps } from 'next'
import { getFullWorklist } from '@/lib/worklist'
import NextLink from 'next/link'
import Image from 'next/image'

const Works = ({ works }: { works: Array<Artwork> }) => (
  <Container py={[4, 5]}>
    <Heading as="h1" variant="title" mb={3}>
      All works
    </Heading>
    <Paragraph as="p" variant="subtitle">
      48 drawings on paper, made from March–December 2020.
    </Paragraph>
    <Grid
      columns={[null, 2, 3]}
      gap={[3, 4]}
      mt={[4, 5]}
      sx={{ scrollSnapType: 'y mandatory' }}
    >
      {works.map(work => {
        const cover = work.images[0]
        return (
          <NextLink
            href={`/works/${work.worklist}`}
            passHref
            key={work.worklist}
          >
            <Link
              sx={{
                textDecoration: 'none',
                color: 'text',
                scrollSnapAlign: 'start',
              }}
            >
              <Image
                src={cover.path}
                alt={cover.caption}
                width={cover.width}
                height={cover.height}
                sizes="25vw"
                objectFit="contain"
              />
              <Text
                as="span"
                sx={{
                  pt: 2,
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                {work.title}
              </Text>
            </Link>
          </NextLink>
        )
      })}
    </Grid>
  </Container>
)

export default Works

export const getStaticProps: GetStaticProps = async () => {
  const works = getFullWorklist()
  return { props: { works } }
}
