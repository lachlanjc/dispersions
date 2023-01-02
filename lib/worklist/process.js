const fs = require('fs')
const _ = require('lodash')
const neatCsv = require('neat-csv')
const exifr = require('exifr')
const { getPlaiceholder } = require('plaiceholder')
const writeJsonFile = require('write-json-file')

const worklistCsv = fs.readFileSync('./lib/worklist/worklist.csv')
const worklistImages = fs.readdirSync('./public/worklist')

const processImg = async filename => {
  const path = `./public/worklist/${filename}`
  const [caption = '', { img, base64: blurDataURL }] = await Promise.all([
    exifr.parse(path).then(exif => exif.ImageDescription),
    getPlaiceholder(`/worklist/${filename}`, { size: 8 }),
  ])
  return {
    ...img,
    blurDataURL,
    caption,
  }
}

const processWork = async work => {
  const imagePaths = worklistImages
    .sort()
    .filter(k => _.startsWith(k, work['WorklistNumber']))

  return Promise.all(imagePaths.map(processImg)).then(images => ({
    worklist: work['WorklistNumber'],
    title: work['Title'],
    date: work['CreationDateMonth'],
    medium: work['Medium2'],
    dim: {
      cmW: work['Dim_cm_W'],
      cmH: work['Dim_cm_H'],
      inW: work['Dim_in_W'],
      inH: work['Dim_in_H'],
    },
    reserved: !_.isEmpty(work['ReservedForCollector']),
    images,
  }))
}

const exec = async () => {
  const raw = await neatCsv(worklistCsv)
  const worklist = await Promise.all(raw.map(processWork))
  writeJsonFile('./lib/worklist/worklist.json', worklist, { indent: '' })
}

exec()
