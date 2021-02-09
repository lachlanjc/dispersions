import { Grid, Heading, Container, Text, Link } from 'theme-ui'
import { GetStaticProps } from 'next'
import { getFullWorklist } from '@/lib/worklist'
import NextLink from 'next/link'
import Image from 'next/image'

const Works = ({ works }: { works: Array<Artwork> }) => (
  <Container py={[4, 5]}>
    <Heading as="h1" variant="title">
      All works
    </Heading>
    <Grid columns={[null, 2, 3]} gap={[3, 4]} mt={[4, 5]}>
      {works.map(work => {
        const cover = work.images[0]
        return (
          <NextLink
            href={`/works/${work.worklist}`}
            passHref
            key={work.worklist}
          >
            <Link sx={{ textDecoration: 'none', color: 'text' }}>
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
