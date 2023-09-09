import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_MEASUREMENT_ID}`}
      ></Script>
      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', ${process.env.GOOGLE_MEASUREMENT_ID});`}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
