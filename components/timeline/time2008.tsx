import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

const Time2008 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#container',
        pin: true,
        start: 'top top',
        scrub: true,
      },
    });
    tl.to('.title', { display: 'block', duration: 1 });
    tl.to('#title1', { autoAlpha: 1, duration: 0.5 });
    tl.to('#title2', { autoAlpha: 1, duration: 0.5 });
  }, []);

  return (
    <article className="pl-4 pb-10" id="container">
      {/* <!-- 2008 Title --> */}
      <section className="h-screen flex justify-center flex-col">
        <h1 id="title1" className="title italic text-[7rem] leading-[70%] opacity-50 hidden">
          Browser
        </h1>
        <h1 id="title2" className="title italic text-[7rem] leading-[70%] opacity-50 hidden">
          wars
        </h1>
      </section>
      {/* <!-- 2008 wars --> */}
      <section className="mt-[50%]">
        <h2 className="text-[5rem] leading-[70%]">2008</h2>
        <h4 className="text-[1rem] mt-3">Browser wars</h4>
        <p className="italic text-sm opacity-50 w-[90%]">
          Internet Explorer is exposed to so many security vulnerabilities and concerns that the amount of criticism
          against IE is unusually high. In 2008, several security vulnerabilities were published in Internet Explorer. A
          study conducted by security research firm Secunia found that Microsoft was not as fast as its competitors in
          fixing security holes and providing patches.
        </p>
      </section>
    </article>
  );
};

export default Time2008;
