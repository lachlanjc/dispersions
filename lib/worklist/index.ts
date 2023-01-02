import fullWorklist from './worklist.json'
import { map, find, indexOf } from 'lodash'

export const getFullWorklist = (): Array<Artwork> =>
  JSON.parse(JSON.stringify(fullWorklist))

export const worklistNumbers: Array<string> = map(fullWorklist, 'worklist')

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never
export type WorklistNumber = ElementType<typeof worklistNumbers>

export const getWork = (
  id: WorklistNumber,
  worklist: Array<Artwork> = getFullWorklist(),
): Artwork => find(worklist, ['worklist', id]) as Artwork

const getWorkIndex = (id: WorklistNumber): number => {
  const worklist = getFullWorklist()
  return indexOf(worklist, getWork(id, worklist))
}

export const getPrev = (id: WorklistNumber): WorklistNumber =>
  fullWorklist[getWorkIndex(id) - 1]?.worklist

export const getNext = (id: WorklistNumber): WorklistNumber =>
  fullWorklist[getWorkIndex(id) + 1]?.worklist

export const formatDimsCm = (work: Artwork): string =>
  `${work.dim.cmW} × ${work.dim.cmH} cm`

export const formatDimsIn = (work: Artwork): string =>
  `${work.dim.inW} × ${work.dim.inH} in`

export const imageUrl = (path: string): string => {
  return (
    'https://d1wa56x8uvnqfp.cloudfront.net' +
    path.replace(/^\//, '/dispersions-')
  )
}
