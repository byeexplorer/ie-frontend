import { Desc2006, Bug2006, Time2006, Time2008 } from 'components/timeline';

export default function MainPage() {
  return (
    <div>
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
    </div>
  );
}
