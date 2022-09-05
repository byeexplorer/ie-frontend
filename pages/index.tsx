import Aboutus from 'components/aboutus';
import Guest from 'components/guest';
import Navbar from 'components/navbar';
import Otherpeople from 'components/otherpeople';
import { Desc2006, Bug2006, Time2006, Time2008, Time2022, Time1995 } from 'components/timeline';

export default function MainPage() {
  return (
    <>
      {/* <!-- Timeline --> */}
      <Navbar />
      <Time1995 />
      <Time2006 />
      <Desc2006 />
      <Bug2006 />
      <Time2008 />
      <Time2022 />
      {/* <!-- Aboutus --> */}
      <Aboutus />
      {/* <!-- Guest Explorer --> */}
      <Guest />
      <Otherpeople />
    </>
  );
}
