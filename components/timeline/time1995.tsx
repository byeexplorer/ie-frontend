import { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

const ANGLE = 360 / 6;

const Time1995 = () => {
  const cardWrapperRef = useRef<HTMLDivElement | null>(null);
  const q = gsap.utils.selector(cardWrapperRef);

  useEffect(() => {
    ScrollTrigger.refresh();
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(cardWrapperRef.current, {
      css: { transformStyle: 'preserve-3d', perspective: 1000, perspectiveOrigin: 'center' },
    });

    gsap.set(q('#card'), {
      css: {
        rotationY: (i: number) => i * ANGLE,
        transformOrigin: '50% 50% -460',
        backfaceVisibility: 'hidden',
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#container-1995',
          pin: true,
          scrub: true,
          start: 'top top',
          end: '+=10000',
          immediateRender: false,
        },
      })
      .fromTo('#container-1995', { opacity: 0 }, { opacity: 1 }, '1')
      .to('#container-1995', { background: '#FFFFFF' })
      .to('#overlay', { opacity: 0 }, '<')
      .to(q('#card'), { rotateY: (i) => i * ANGLE + 60, ease: 'linear' }, '<')
      .to('#container-1995', { background: '#FF5959' })
      .to(q('#card'), { rotateY: (i) => i * ANGLE + 120, ease: 'linear' }, '<')
      .to('#container-1995', { background: '#0500FF' })
      .to('#head-1995', { color: 'white' }, '<')
      .to(q('#card'), { rotateY: (i) => i * ANGLE + 180, ease: 'linear' }, '<')
      .to('#container-1995', { background: '#008080' })
      .to('#head-1995', { color: 'white' }, '<')
      .to(q('#card'), { rotateY: (i) => i * ANGLE + 240, ease: 'linear' }, '<')
      .to('#container-1995', { background: '#D7D7D7' })
      .to('#head-1995', { color: 'black' }, '<')
      .to(q('#card'), { rotateY: (i) => i * ANGLE + 300, ease: 'linear' }, '<');
  }, [q]);

  return (
    <>
      <div id="container-1995" className="w-screen h-screen bg-white">
        <div id="overlay" className="absolute w-full h-full">
          <Image
            src="/images/BG.png"
            alt="Windows' most famous wallpaper"
            layout="fill"
            objectFit="cover"
            priority
          ></Image>
        </div>
        <div id="text-wrapper" className="absolute w-full flex flex-col text-black top-5">
          <p id="head-1995" className="text-center text-xl">
            Microsoft Windows98
          </p>
          <p id="head-1995" className="text-center text-tiny">
            Now Released!
          </p>
          <p id="head-1995" className="text-center text-6xl">
            1995
          </p>
        </div>
        <div ref={cardWrapperRef} className="absolute left-1/2 ml-[-5rem] bottom-8 w-[10rem] h-[7rem]">
          <div id="card" className="absolute w-40 h-28">
            <Image src="/images/1.png" alt="" layout="fill" />
          </div>
          <div id="card" className="absolute w-40 h-28">
            <Image src="/images/2.png" alt="" layout="fill" />
          </div>
          <div id="card" className="absolute w-40 h-28">
            <Image src="/images/3.png" alt="" layout="fill" />
          </div>
          <div id="card" className="absolute w-40 h-28">
            <Image src="/images/4.png" alt="" layout="fill" />
          </div>
          <div id="card" className="absolute w-40 h-20 top-1/2 mt-[-2.5rem]">
            <Image src="/images/5.png" alt="" layout="fill" />
          </div>
          <div id="card" className="absolute w-40 h-28">
            <Image src="/images/6.png" alt="" layout="fill" />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Time1995);
