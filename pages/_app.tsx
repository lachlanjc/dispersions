import * as React from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '@/public/fonts.css'
import 'keen-slider/keen-slider.min.css'
import Meta from '@/components/meta'
import Nav from '@/components/nav'
import theme from '@/lib/theme'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter()
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      {pathname !== '/' && <Nav />}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
