import { Box, Text, Link } from 'theme-ui'
import NextLink from 'next/link'
import Image from 'next/image'
import { imageUrl } from '@/lib/worklist'

type Props = { work: Artwork; img?: number }

const Work = ({ work, img = 0 }: Props) => {
  const cover = work.images[img]
  return (
    <NextLink href={`/works/${work.worklist}`} passHref>
      <Link
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
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
            src={imageUrl(cover.path)}
            alt={cover.caption}
            width={cover.width}
            height={cover.height}
            sizes="25vw"
            objectFit="contain"
            placeholder="blur"
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
