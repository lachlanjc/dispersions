import fullWorklist from './worklist.json'
import { map, find } from 'lodash'

export const getFullWorklist = (): Array<Artwork> => fullWorklist

export const worklistNumbers: Array<string> = map(fullWorklist, 'worklist')

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never
export type WorklistNumber = ElementType<typeof worklistNumbers>

export const getWork = (id: WorklistNumber): Artwork =>
  fullWorklist.filter(w => w.worklist === id)[0]
// find(fullWorklist, ['worklist', id]) as Artwork

export const formatDimsCm = (work: Artwork): string =>
  `${work.dim.cmW} × ${work.dim.cmH} cm`

export const formatDimsIn = (work: Artwork): string =>
  `${work.dim.inW} × ${work.dim.inH} in`

export const imageUrl = (path: string): string => {
  // if (process.env.NODE_ENV === 'development') return path
  return (
    'https://d1wa56x8uvnqfp.cloudfront.net' +
    path.replace(/^\//, '/dispersions-')
  )
}
