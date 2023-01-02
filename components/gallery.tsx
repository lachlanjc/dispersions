// Adapted from https://github.com/vercel/commerce/blob/master/components/product/ProductSlider/ProductSlider.tsx
import { useKeenSlider } from 'keen-slider/react'
import React, { useState, useRef, useEffect } from 'react'
import { Box, IconButton, ThemeUIStyleObject } from 'theme-ui'
import { ChevronPrev, ChevronNext } from './icons'
import Image from 'next/image'

type Props = { images: Image[]; onCaption: (c: string) => void }

const controlSx: ThemeUIStyleObject = {
  variant: 'cards.translucent',
  borderRadius: 'circle',
  p: 2,
  cursor: 'pointer',
  width: 'auto',
  height: 'auto',
  position: 'absolute',
  top: '50%',
  boxShadow: 'card',
  transform: 'translateY(-50%)',
  transition: '0.125s ease-in-out',
  transitionProperty: 'color, box-shadow, transform',
  ':hover,:focus,:active': {
    transform: 'translateY(-50%) scale(1.5)',
    boxShadow: 'elevated',
  },
  ':focus': {
    color: 'blue',
    outline: 'none',
  },
}

const ImageGallery = ({ images, onCaption }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const sliderContainerRef = useRef<HTMLDivElement>(null)

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slidesPerView: 1,
    mounted: () => setIsMounted(true),
    slideChanged(s) {
      const idx = s.details().relativeSlide
      setCurrentSlide(idx)
      onCaption(images[idx]?.caption)
    },
  })

  // When work changes, start at first image & refresh slider
  useEffect(() => {
    setCurrentSlide(0)
    slider?.refresh()
    slider?.moveToSlide(0)
  }, [slider, images])

  // Stop the history navigation gesture on touch devices
  useEffect(() => {
    const preventNavigation = (event: TouchEvent) => {
      // Center point of the touch area
      const touchXPosition = event.touches[0].pageX
      // Size of the touch area
      const touchXRadius = event.touches[0].radiusX || 0

      // We set a threshold (10px) on both sizes of the screen,
      // if the touch area overlaps with the screen edges
      // it's likely to trigger the navigation. We prevent the
      // touchstart event in that case.
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
        event.preventDefault()
    }

    const slider = sliderContainerRef.current!

    slider.addEventListener('touchstart', preventNavigation)

    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', preventNavigation)
      }
    }
  }, [])

  return (
    <Box
      as="section"
      sx={{
        position: 'relative',
        width: '100%',
      }}
      ref={sliderContainerRef}
    >
      <Box
        ref={ref}
        className="keen-slider"
        sx={{
          overflow: 'hidden',
          position: 'relative',
          height: '100%',
          width: '100%',
          display: 'flex',
          userSelect: 'none',
          touchAction: 'pan-y',
          transition: 'opacity 0.125s ease-in-out',
        }}
        style={{ opacity: isMounted ? 1 : 0 }}
      >
        {images.map(img => (
          <Box
            key={img.src}
            className="keen-slider__slide"
            sx={{
              alignSelf: 'center',
              display: 'flex',
              minHeight: 'auto',
              '> span': {
                flexShrink: 0,
                width: '100%',
                maxHeight: '92vh',
              },
            }}
          >
            <Image
              {...img}
              placeholder="blur"
              alt={img.caption}
              layout="intrinsic"
              objectFit="contain"
              unoptimized
            />
          </Box>
        ))}
      </Box>
      {images.length > 1 && [
        <IconButton
          key="prev"
          onClick={slider?.prev}
          title="Previous Image"
          sx={{
            ...controlSx,
            left: 2,
            transformOrigin: 'right center',
          }}
        >
          <ChevronPrev />
        </IconButton>,
        <IconButton
          key="next"
          onClick={slider?.next}
          title="Next Image"
          sx={{
            ...controlSx,
            right: 2,
            transformOrigin: 'left center',
          }}
        >
          <ChevronNext />
        </IconButton>,
        <Box
          key="dots"
          sx={{
            transform: 'translateX(-50%)',
            display: 'block',
            position: 'absolute',
            bottom: -48,
            left: '50%',
          }}
        >
          {[...Array(images.length)].map((idx, i) => (
            <Box
              as="button"
              aria-label="Position indicator"
              key={i}
              onClick={() => {
                slider.moveToSlideRelative(i)
              }}
              sx={{
                appearance: 'none',
                bg: 'transparent',
                border: 0,
                cursor: 'pointer',
                py: 3,
              }}
            >
              <Box
                style={{
                  backgroundColor:
                    currentSlide === i ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.15)',
                }}
                sx={{
                  transition: '0.125s background-color ease-in',
                  width: 9,
                  height: 9,
                  borderRadius: 'circle',
                }}
              />
            </Box>
          ))}
        </Box>,
      ]}
    </Box>
  )
}

export default ImageGallery
