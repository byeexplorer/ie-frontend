import { memo, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Time2006 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#first', {
      x: 0,
      y: '20%',
      rotate: 10,
    });
    gsap.to('#first', {
      x: 0,
      y: '-20%',
      rotate: -10,
      scrollTrigger: {
        trigger: '#first',
        start: 'top bottom',
        scrub: true,
      },
    });

    gsap.from('#second', {
      x: 0,
      y: '40%',
      rotate: 20,
    });
    gsap.to('#second', {
      x: 0,
      y: '-40%',
      rotate: -20,
      scrollTrigger: {
        trigger: '#second',
        start: 'top bottom',
        scrub: true,
      },
    });

    gsap.from('#third', {
      x: 0,
      y: '60%',
      rotate: 30,
    });
    gsap.to('#third', {
      x: 0,
      y: '-60%',
      rotate: -30,
      scrollTrigger: {
        trigger: '#third',
        start: 'top bottom',
        scrub: true,
      },
    });
    gsap.from('#fourth', {
      x: 0,
      y: '70%',
      rotate: 50,
    });
    gsap.to('#fourth', {
      x: 0,
      y: '-80%',
      rotate: -50,
      scrollTrigger: {
        trigger: '#fourth',
        start: 'top bottom',
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <section className="bg-blue flex justify-center gap-6 mt-5 ">
        <span className="text-[11rem] leading-[7.5rem]" id="first">
          2
        </span>
        <span className="text-[11rem] leading-[7.5rem]" id="second">
          0
        </span>
        <span className="text-[11rem] leading-[7.5rem]" id="third">
          0
        </span>
        <span className="text-[11rem] leading-[7.5rem]" id="fourth">
          6
        </span>
      </section>
      <section>
        <div className="w-[30vw] h-[30vw] bg-slate-400 mt-[50vh] mb-[13vw]" />
      </section>
    </>
  );
};

export default memo(Time2006);
