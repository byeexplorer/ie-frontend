import { useEffect, useRef } from 'react';
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
      // navbar 색깔 변경.. 더 깔끔한 방법을 찾아야 함
      .to('#navbar', {
        color: 'white',
      })
      .to('#hamburger > div', { background: 'white' }, '<')
      // navbar
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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#intermediate',
          pin: true,
          scrub: true,
          start: 'top top',
          end: 'bottom bottom',
          immediateRender: false,
        },
      })
      .to('#navbar-background', { opacity: 0, duration: 1 });
  }, [q]);

  return (
    <>
      <div id="container-1995" className="w-screen h-screen bg-white">
        <div id="overlay" className="absolute w-full h-full">
          <Image
            src="/images/BG.webp"
            alt="Windows' most famous wallpaper"
            layout="fill"
            objectFit="cover"
            priority
          ></Image>
        </div>
        <div className="absolute w-full h-screen flex flex-col text-black">
          <div id="text-wrapper">
            <p id="head-1995" className="text-center pt-[12vh] text-[4vw]">
              Microsoft Windows98
            </p>
            <p id="head-1995" className="text-center text-[2vw]">
              Now Released!
            </p>
            <p id="head-1995" className="text-center  text-[8vw]">
              1995
            </p>
          </div>
          <div className="relative w-full h-full flex justify-center items-center">
            <div
              ref={cardWrapperRef}
              className="relative w-40 h-28"
              style={{ transformStyle: 'preserve-3d', perspective: 1000, perspectiveOrigin: 'center' }}
            >
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
        </div>
      </div>
      <div id="intermediate" className="w-screen h-screen bg-gradient-to-b from-[#d7d7d7] to-[#3834ff]"></div>
    </>
  );
};

export default Time1995;
