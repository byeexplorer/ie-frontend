import useResizeObserver from 'lib/hooks';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  const { isMobileScreen, ref } = useResizeObserver();
  const router = useRouter();

  useEffect(() => {
    if (isMobileScreen === null) return;
    const isChrome = /Chrome/.exec(navigator.userAgent);

    if (router.pathname === '/mobile') {
      if (!isMobileScreen && isChrome) router.replace('/');
    } else {
      if (!isChrome || isMobileScreen) router.replace('/mobile');
    }
  }, [isMobileScreen, router]);

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
      <main ref={ref}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
