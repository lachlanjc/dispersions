import * as React from 'react'

import '../public/fonts.css'
import Meta from '../components/meta'
import Nav from '../components/nav'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
