import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
