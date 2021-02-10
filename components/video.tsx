import { Box, ThemeUIStyleObject } from 'theme-ui'

interface Props {
  caption?: string
  id: string
  loop?: boolean
  muted?: boolean
  autoPlay?: boolean
  controls?: boolean
  sx?: ThemeUIStyleObject
}

const Video = ({
  caption,
  id,
  loop = false,
  muted = true,
  autoPlay = false,
  controls = true,
  sx = {},
  ...props
}: React.ComponentPropsWithoutRef<'video'> & Props) => (
  <Box as="figure" sx={sx}>
    <video
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      controls={controls}
      preload="metadata"
      poster={`https://image.mux.com/${id}/thumbnail.jpg?width=512&fit_mode=pad&time=0`}
      playsInline
      {...props}
    >
      <source
        src={`https://stream.mux.com/${id}.m3u8`}
        type="application/x-mpegURL"
      />
    </video>
    {caption && <figcaption>{caption}</figcaption>}
  </Box>
)

export default Video
