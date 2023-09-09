import { Html, Main, Head, NextScript, Script } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      {" "}
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
      
      <body class="dark" id="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
