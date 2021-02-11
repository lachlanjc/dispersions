import { Box, Text, Link } from 'theme-ui'
import NextLink from 'next/link'
import Image from 'next/image'

type Props = { work: Artwork; img?: number }

const Work = ({ work, img = 0 }: Props) => {
  const cover = work.images[img]
  return (
    <NextLink href={`/works/${work.worklist}`} passHref>
      <Link
        sx={{
          textDecoration: 'none',
          color: 'text',
          transition: '0.125s color ease-in-out',
          scrollSnapAlign: 'start',
          ':hover,:focus': {
            color: 'muted',
          },
        }}
      >
        {cover ? (
          <Image
            src={cover.path}
            alt={cover.caption}
            width={cover.width}
            height={cover.height}
            sizes="25vw"
            objectFit="contain"
          />
        ) : (
          <Box sx={{ width: '100%', pb: '100%', bg: 'sunken' }} />
        )}
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
