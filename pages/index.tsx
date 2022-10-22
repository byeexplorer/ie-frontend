import Aboutus from 'components/aboutus';
import Guest from 'components/guest';
import Navbar from 'components/navbar';
import Otherpeople from 'components/otherpeople';
import Overview from 'components/overview/overview';
import { Desc2006, Bug2006, Time2006, Time2008, Time2022, Time1995 } from 'components/timeline';
import { CommentContext, useComment } from 'lib/hooks';

export default function MainPage() {
  return (
    <>
      <Navbar />
      {/* <!-- Overview --> */}
      {/* <Overview /> */}
      {/* <!-- Timeline --> */}
      {/* <Time1995 /> */}
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
    </>
  );
}
