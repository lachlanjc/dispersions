// Adapted from https://github.com/vercel/commerce/blob/master/components/product/ProductSlider/ProductSlider.tsx
import { useKeenSlider } from 'keen-slider/react'
import React, { useState, useRef, useEffect } from 'react'
import { Box, IconButton } from 'theme-ui'
import { ArrowPrev, ArrowNext } from './icons'
import Image from 'next/image'

const ImageGallery = ({ images }: { images: Array<Image> }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const sliderContainerRef = useRef<HTMLDivElement>(null)

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slidesPerView: 1,
    mounted: () => setIsMounted(true),
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

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

    sliderContainerRef.current?.addEventListener(
      'touchstart',
      preventNavigation,
    )

    return () => {
      sliderContainerRef.current?.removeEventListener(
        'touchstart',
        preventNavigation,
      )
    }
  }, [])

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
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
            key={img.path}
            className="keen-slider__slide"
            sx={{
              alignSelf: 'center',
              '> div': {
                flexShrink: 0,
                width: '100%',
                maxHeight: '90vh',
              },
            }}
          >
            <Image
              src={img.path}
              alt={img.caption}
              width={img.width}
              height={img.height}
              sizes="50vw"
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
          aria-label="Previous Image"
          sx={{
            variant: 'cards.translucent',
            borderRadius: 'circle',
            p: 2,
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            top: '50%',
            left: 2,
            boxShadow: 'card',
            transform: 'translateY(-50%)',
            transformOrigin: 'left center',
            transition: '0.125s ease-in-out',
            transitionProperty: 'transform, box-shadow',
            ':hover,:focus': {
              transform: 'translateY(-50%) scale(1.5)',
              boxShadow: 'elevated',
            },
          }}
        >
          <ArrowPrev />
        </IconButton>,
        <IconButton
          key="next"
          onClick={slider?.next}
          aria-label="Next Image"
          sx={{
            variant: 'cards.translucent',
            borderRadius: 'circle',
            p: 2,
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            top: '50%',
            right: 2,
            boxShadow: 'card',
            transform: 'translateY(-50%)',
            transformOrigin: 'right center',
            transition: '0.125s ease-in-out',
            transitionProperty: 'transform, box-shadow',
            ':hover,:focus': {
              transform: 'translateY(-50%) scale(1.5)',
              boxShadow: 'elevated',
            },
          }}
        >
          <ArrowNext />
        </IconButton>,
        <Box
          key="dots"
          sx={{
            transform: 'translateX(-50%)',
            display: 'block',
            position: 'absolute',
            bottom: [-2, -48],
            left: '50%',
          }}
        >
          {[...Array(images.length)].map((idx, i) => (
            <Box
              as="button"
              aria-label="Position indicator"
              key={idx}
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
