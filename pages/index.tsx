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
      <article className="bg-blue grid place-items-center pt-[20%]">
        <section className="text-xs font-thin leading-[140%] mb-[30%] text-center">
          In July 1995 Microsoft released Internet Explorer 1.0
          <br /> as an add-on to the Windows 95 operating system.
          <br /> In July 1995 Microsoft released Internet Explorer 1.0
          <br /> as an add-on to the Windows 95 operating system.
        </section>
        <Time2006 />
        <Desc2006 />
      </article>
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
