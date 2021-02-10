import { Text, Link } from 'theme-ui'
import NextLink from 'next/link'
import Image from 'next/image'

const Work = ({ work }: { work: Artwork }) => {
  const cover = work.images[0]
  return (
    <NextLink href={`/works/${work.worklist}`} passHref>
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
}

export default Work
