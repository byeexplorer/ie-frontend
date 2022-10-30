import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Bye, explorer</title>
          <meta name="description" content="인터넷 익스플로러의 종료를 기념하는 웹페이지" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          {/* <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" /> */}
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-icon.png" />
          <link rel="manifest" href="/assets/favicon/manifest.json" />
          <meta name="og:title" content="Bye, explorer" />
          <meta name="og:description" content="bye, Internet explorer" />
          <meta name="og:type" content="website" />
          <meta name="og:url" content="https://bye-explorer.web.app/" />
          <meta name="og:image" content="/images/navbar/blue.png" />
          <meta property="og:article:author" content="bye exlorer" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
