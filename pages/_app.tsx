import useResizeObserver from 'lib/hooks';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  const { isMobileScreen, ref } = useResizeObserver();
  const router = useRouter();

  useEffect(() => {
    if (isMobileScreen && router.pathname !== '/mobile') {
      router.replace('/mobile');
    }
    if (!isMobileScreen && router.pathname !== '/') {
      router.replace('/');
    }
  }, [isMobileScreen, router]);

  return (
    <main ref={ref}>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
