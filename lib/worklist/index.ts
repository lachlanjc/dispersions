import fullWorklist from './worklist.json'
import { map, find } from 'lodash'

export const getFullWorklist = (): Array<Artwork> => fullWorklist

export const worklistNumbers: Array<string> = map(fullWorklist, 'worklist')

export const getWork = (id: keyof typeof worklistNumbers): Artwork =>
  find(fullWorklist, ['worklist', id]) as Artwork

export const formatDimsCm = (work: Artwork): string =>
  `${work.dim.cmW} × ${work.dim.cmH} cm`

export const formatDimsIn = (work: Artwork): string =>
  `${work.dim.inW} × ${work.dim.inH} in`
