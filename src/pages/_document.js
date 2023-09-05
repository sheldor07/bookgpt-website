import { Html, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <body class="dark" id="body">
        <Main />
        <NextScript />
        <div className="container">
          <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
          </Script>
        </div>
      </body>
    </Html>
  );
}
