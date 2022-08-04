import { memo, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import FloatingIcon from '../common/floating-icon';

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
        scrub: 1.5,
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
        scrub: 1.5,
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
        scrub: 1.5,
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
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <>
      {/* <!-- 2006 Timeline --> */}
      <section className="bg-blue flex justify-center gap-6 mt-5 relative">
        <FloatingIcon src={'/icons/book.svg'} className="absolute left-[6rem]" toParams={{ y: '-100' }} />
        <FloatingIcon
          src={'/icons/computer.svg'}
          className="absolute right-[4rem] top-[1rem]"
          toParams={{ y: '-300' }}
        />
        <FloatingIcon
          src={'/icons/folder.svg'}
          className="absolute right-[12.5rem] top-[3rem]"
          toParams={{ y: '-90', rotate: 70 }}
        />
        <FloatingIcon
          src={'/icons/tree.svg'}
          className="absolute left-[-2rem] top-[7rem]"
          toParams={{ y: '-250', rotate: 100 }}
        />
        <FloatingIcon
          src={'/icons/memo.svg'}
          className="absolute left-[10rem] bottom-[-3rem]"
          toParams={{ y: '-160', rotate: 120 }}
        />
        <FloatingIcon
          src={'/icons/draw.svg'}
          className="absolute right-[-2rem] bottom-[-1rem]"
          toParams={{ y: '-100', rotate: 85 }}
        />
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
