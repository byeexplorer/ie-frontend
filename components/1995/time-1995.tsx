import { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

const Time1995 = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const q = gsap.utils.selector(cardsRef);
  const angle = 360 / 6;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(cardsRef.current, {
      css: { transformStyle: 'preserve-3d' },
    });
    gsap.set(q('div'), {
      css: {
        rotationY: (i: number) => i * angle,
        transformOrigin: '50% 50% -225',
        backfaceVisibility: 'hidden',
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: { trigger: '#container', pin: true, scrub: true, start: 'top top', end: '+=10000' },
    });

    timeline.to(q('div'), {
      rotateY: (i: number) => i * angle + 360, // 이거에 맞게 도는구나..
      duration: 1,
      ease: 'none',
    });
  }, []);
  return (
    <>
      <div id="container" className="bg-red-500 w-screen h-screen">
        <div id="cards" ref={cardsRef} className="relative inset-1/2 w-full">
          <div className="absolute">
            <Image src="/images/1.png" alt="" width={247} height={184} />
          </div>
          <div className="absolute">
            <Image src="/images/2.png" alt="" width={247} height={184} />
          </div>
          <div className="absolute">
            <Image src="/images/3.png" alt="" width={247} height={184} />
          </div>
          <div className="absolute ">
            <Image src="/images/4.png" alt="" width={247} height={184} />
          </div>
          <div className="absolute ">
            <Image src="/images/5.png" alt="" width={247} height={184} />
          </div>
          <div className="absolute ">
            <Image src="/images/6.png" alt="" width={247} height={184} />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Time1995);
