import Aboutus from 'components/aboutus';
import Guest from 'components/guest';
import Navbar from 'components/navbar';
import Otherpeople from 'components/otherpeople';
import Overview from 'components/overview/overview';
import { Desc2006, Bug2006, Time2006, Time2008, Time2022, Time1995 } from 'components/timeline';
import { CommentContext, useComment } from 'lib/hooks';
import { NextPageContext } from 'next';

function MainPage() {
  return (
    <main>
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

MainPage.getInitialProps = async ({ res, req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const isMobile = /Mobile/i.exec(userAgent ?? '');

  if (isMobile && res) {
    res.writeHead(307, { Location: '/mobile' });
    res.end();
  }

  return {};
};

export default MainPage;
