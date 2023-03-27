
import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return(
    <>
        <Head>
            <title>GPT Book Club</title>
            <meta charset="UTF-8"
              name="viewport" 
              content="width=device-width, initial-scale=1.0">
          </meta>
          
        </Head>
        <Component {...pageProps} />
    </>

  )
}
