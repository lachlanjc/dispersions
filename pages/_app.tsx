import * as React from 'react'
import { AppProps } from 'next/app'

import '../public/fonts.css'
import Meta from '../components/meta'
import Nav from '../components/nav'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
