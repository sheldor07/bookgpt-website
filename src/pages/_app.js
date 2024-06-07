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
          charSet="UTF-8"
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
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-GM4MZES6G7`}
      ></Script>
      <Script
        strategy="beforeInteractive "
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6642912205908895"
        crossorigin="anonymous"
      ></Script>
      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config',  G-GM4MZES6G7);`}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
