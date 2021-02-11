const fs = require('fs')
const _ = require('lodash')
const neatCsv = require('neat-csv')
const exifr = require('exifr')
const sizeOf = require('image-size')
const writeJsonFile = require('write-json-file')

const worklistCsv = fs.readFileSync('./lib/worklist/worklist.csv')
const worklistImages = fs.readdirSync('./public/worklist')

const processImg = filename =>
  exifr
    .parse(`./public/worklist/${filename}`)
    .then(exif => exif.ImageDescription)
    .then((caption = '') => {
      const { width, height } = sizeOf(`./public/worklist/${filename}`)
      return {
        path: `/worklist/${filename}`,
        caption,
        width,
        height,
      }
    })

const processWork = work => {
  const imagePaths = worklistImages.filter(k =>
    _.startsWith(k, work['WorklistNumber']),
  )

  return Promise.all(imagePaths.map(processImg)).then(images => ({
    worklist: work['WorklistNumber'],
    title: work['Title'],
    date: work['CreationDateFM'],
    medium: work['Medium2'],
    dim: {
      cmW: work['Dim_cm_W'],
      cmH: work['Dim_cm_H'],
      inW: work['Dim_in_W'],
      inH: work['Dim_in_H'],
    },
    images,
  }))
}

const exec = async () => {
  const raw = await neatCsv(worklistCsv)
  const worklist = await Promise.all(raw.map(processWork))
  writeJsonFile('./lib/worklist/worklist.json', worklist, { indent: '' })
}

exec()
