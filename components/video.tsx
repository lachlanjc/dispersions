// Credit to https://github.com/vercel/next.js/blob/canary/examples/with-mux-video/components/video-player.js
import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface Props {
  mux: string
  caption?: string
  loop?: boolean
  muted?: boolean
  autoPlay?: boolean
  controls?: boolean
}

const Video = ({
  mux,
  caption,
  loop = false,
  muted = true,
  autoPlay = false,
  controls = false,
  ...props
}: React.ComponentPropsWithoutRef<'video'> & Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const src = `https://stream.mux.com/${mux}.m3u8`

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // This will run in Safari, where HLS is supported natively
      video.src = src
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers
      hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
    } else {
      console.error(
        'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API',
      )
    }

    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [src, videoRef])

  return (
    <video
      src={src}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      controls={controls}
      preload="metadata"
      poster={`https://image.mux.com/${mux}/thumbnail.jpg?width=512&fit_mode=pad&time=0`}
      playsInline
      aria-label={caption}
      {...props}
    />
  )
}

export default Video
