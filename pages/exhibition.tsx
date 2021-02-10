import { Grid, Box, Heading } from 'theme-ui'
import Image from 'next/image'
import Meta from '@/components/meta'

const Exhibition = () => (
  <>
    <Meta title="Intro" />
    <Image
      layout="responsive"
      alt="Detail of Christopher's drawing with graphite in dripping arcs"
      src="/worklist/2.2020.040_012_4096p.jpg"
      width={4096}
      height={2733}
    />
  </>
)

export default Exhibition
