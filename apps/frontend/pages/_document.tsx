import { Html, Head, Main, NextScript } from "next/document";

export default function Document(_props: any) {
  const FONT_URL =
    "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap";
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link href={FONT_URL} rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className="font-roboto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
