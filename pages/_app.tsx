import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bye, explorer</title>
        <meta name="description" content="Bye, Internet explorer" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <meta name="og:title" content="Bye, explorer" />
        <meta name="og:description" content="Bye, Internet explorer" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://bye-explorer.web.app/" />
        <meta name="og:image" content="/images/navbar/blue.png" />
        <meta property="og:article:author" content="bye exlorer" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
