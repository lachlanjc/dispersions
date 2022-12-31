import type { AppProps } from 'next/app'
import '@/public/fonts.css'
import 'keen-slider/keen-slider.min.css'
import Meta from '@/components/meta'
import Nav from '@/components/nav'
import theme from '@/lib/theme'
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
