import Aboutus from 'components/aboutus';
import Guest from 'components/guest';
import Navbar from 'components/navbar';
import Otherpeople from 'components/otherpeople';
import Overview from 'components/overview/overview';
import { Desc2006, Bug2006, Time2006, Time2008, Time2022, Time1995 } from 'components/timeline';
import useResizeObserver, { CommentContext, useComment } from 'lib/hooks';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MainPage() {
  const { isMobileScreen, ref } = useResizeObserver();
  const router = useRouter();

  useEffect(() => {
    if (isMobileScreen) {
      router.replace('/mobile');
    }
  }, [isMobileScreen, router]);

  return (
    <main ref={ref}>
      <Navbar />
      {/* <!-- Overview --> */}
      <Overview />
      {/* <!-- Timeline --> */}
      <Time1995 />
      <Time2006 />
      <Desc2006 />
      <Bug2006 />
      <div id="cursor-portal">
        <Time2008 />
      </div>
      <Time2022 />
      {/* <!-- Aboutus --> */}
      <Aboutus />
      {/* <!-- Guest Explorer --> */}
      <CommentContext.Provider value={useComment()}>
        <Guest />
        <Otherpeople />
      </CommentContext.Provider>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'];

  if (!/Chrome/.exec(userAgent ?? '')) {
    return {
      redirect: { destination: '/mobile' },
      props: {},
    };
  }
  return { props: {} };
};

export default MainPage;
