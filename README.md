# Dispersions

Online exhibition of [Christopher Campbell’s](https://cbcampbell.com) 2020
painting series *Dispersions*. Built with Next.js, Theme UI, and MDX.

[**dispersions.cbcampbell.com**](https://dispersions.cbcampbell.com)

The data source is the [`worklist.csv` file](./lib/worklist/worklist.csv) file, which is parsed by `pnpm run worklist` to [JSON](./lib/worklist/worklist.json). The site is statically generated using that JSON. The images are stored in `public` in dev, but hosted on S3 since they’re ~1GB.

Feel free to re-use the code, but the artwork is copyrighted.
