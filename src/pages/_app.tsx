//import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <>
    <p>Header</p>
  <Component {...pageProps} />
<p>Footer</p>
    </>
  )
  
}
