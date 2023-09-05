import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GPT Book Club</title>
        <meta
          charset="UTF-8"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="shortcut icon"
          type="image/jpg"
          href="../../public/favicon.ico"
        />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
