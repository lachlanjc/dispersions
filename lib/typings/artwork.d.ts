interface Image {
  path: string,
  caption: string,
  width: number,
  height: number,
}

interface Artwork {
  worklist: string,
  title: string,
  date: string,
  medium: string,
  dim: {
    cmW: string,
    cmH: string,
    inW: string,
    inH: string,
  },
  images: Array<Image>,
}
