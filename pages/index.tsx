import { Time2006 } from 'components/timeline';

export default function MainPage() {
  return (
    <div>
      <article className="bg-blue grid place-items-center pt-[20%]">
        <section className="text-xs font-thin leading-[140%]  mb-[20%] text-center">
          In July 1995 Microsoft released Internet Explorer 1.0
          <br /> as an add-on to the Windows 95 operating system.
          <br /> In July 1995 Microsoft released Internet Explorer 1.0
          <br /> as an add-on to the Windows 95 operating system.
        </section>
        <Time2006 />
      </article>
    </div>
  );
}
