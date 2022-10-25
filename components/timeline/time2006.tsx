import { memo, useEffect } from 'react';
import FloatingIcon from '../common/floating-icon';
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
    <article className="bg-blue grid place-items-center pb-[30vw]">
      {/* <!-- 2006 Description --> */}
      <section className="text-xs font-thin leading-[140%] pb-[30%] text-center relative pt-[20%] w-full">
        <FloatingIcon
          src={'/icons/computer.svg'}
          className="absolute right-[10rem] top-[4rem]"
          toParams={{ y: '-100' }}
          id="com1"
        />
        <FloatingIcon
          src={'/icons/computer.svg'}
          className="absolute left-[1rem] bottom-[4rem]"
          toParams={{ y: '-160', rotate: 80 }}
          id="com2"
        />
        <FloatingIcon
          src={'/icons/tree.svg'}
          className="absolute right-[2rem] top-[2.3rem]"
          toParams={{ y: '-200', rotate: 100 }}
          id="tree1"
        />
        <FloatingIcon
          src={'/icons/tree.svg'}
          className="absolute left-[3rem] bottom-[8rem]"
          toParams={{ y: '-80', rotate: 30 }}
          id="tree2"
        />
        <FloatingIcon
          src={'/icons/memo.svg'}
          className="absolute left-[2.2rem] top-[4rem]"
          toParams={{ y: '-40', rotate: -10 }}
          id="memo1"
        />
        <FloatingIcon
          src={'/icons/memo.svg'}
          className="absolute right-[13rem] bottom-[5rem]"
          toParams={{ y: '-170', rotate: -42 }}
          id="memo2"
        />
        <FloatingIcon
          src={'/icons/draw.svg'}
          className="absolute left-[6rem] top-[1.7rem]"
          toParams={{ y: '-72', rotate: -18 }}
          id="draw1"
        />
        <FloatingIcon
          src={'/icons/draw.svg'}
          className="absolute right-[3rem] bottom-[6rem]"
          toParams={{ y: '-142', rotate: 70 }}
          id="draw2"
        />
        <FloatingIcon
          src={'/icons/folder.svg'}
          className="absolute right-[5rem] bottom-[1.8rem]"
          toParams={{ y: '-142', rotate: 74 }}
          id="folder1"
        />
        <p>
          In July 1995 Microsoft released Internet Explorer 1.0
          <br /> as an add-on to the Windows 95 operating system.
          <br /> In July 1995 Microsoft released Internet Explorer 1.0
          <br /> as an add-on to the Windows 95 operating system.
        </p>
      </section>
      <section className="bg-blue flex justify-center gap-6 mt-5 relative mb-10">
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
        <span className="text-[38vmax] leading-[7.5rem]" id="first">
          2
        </span>
        <span className="text-[38vmax] leading-[7.5rem]" id="second">
          0
        </span>
        <span className="text-[38vmax] leading-[7.5rem]" id="third">
          0
        </span>
        <span className="text-[38vmax] leading-[7.5rem]" id="fourth">
          6
        </span>
      </section>
    </article>
  );
};

export default memo(Time2006);
