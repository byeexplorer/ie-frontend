import { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { url } from 'inspector';

const Time1995 = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const q = gsap.utils.selector(cardsRef);
  const angle = 360 / 6;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(cardsRef.current, {
      css: { transformStyle: 'preserve-3d', perspective: 800, perspectiveOrigin: 'center 440' },
    });
    gsap.set(q('#card'), {
      css: {
        rotationY: (i: number) => i * angle,
        transformOrigin: '50% 50% -360',
        backfaceVisibility: 'hidden',
      },
    });

    gsap.to(q('#card'), {
      rotateY: (i: number) => i * angle + 300, // 이거에 맞게 도는구나..
      duration: 1,
      ease: 'none',
      scrollTrigger: { trigger: '#roller', pin: true, scrub: true, start: 'top top', end: '+=10000' },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#roller',
          pin: true,
          scrub: true,
          start: 'top top',
          end: '+=10000',
          immediateRender: false,
        },
      })
      .to('#overlay', { opacity: 0 })
      .to('#roller', { background: '#FFFFFF' })
      .to('#roller', { background: '#FF5959' })
      .to('#roller', { background: '#0500FF' })
      .to('#roller', { background: '#008080' })
      .to('#roller', { background: '#D7D7D7' });
  }, []);
  return (
    <>
      <div id="roller" className="w-screen h-screen bg-white">
        <div id="overlay" className="absolute w-full h-full bg-[url('/images/BG.png')] bg-cover z-0"></div>
        {/* <div className="w-full flex flex-col z-30">
          <div>Microsoft Windows98</div>
          <div>Now Released!</div>
          <div>1995</div>
        </div> */}
        <div className="w-[8rem] h-full mx-auto">
          <div id="cards" ref={cardsRef} className="h-[279]">
            <div id="card" className="absolute h-[279] mt-24">
              <Image src="/images/1.png" alt="" width={400} height={279} />
            </div>
            <div id="card" className="absolute h-[279] mt-24">
              <Image src="/images/2.png" alt="" width={400} height={279} />
            </div>
            <div id="card" className="absolute h-[279] mt-24">
              <Image src="/images/3.png" alt="" width={400} height={279} />
            </div>
            <div id="card" className="absolute h-[279] mt-24">
              <Image src="/images/4.png" alt="" width={400} height={279} />
            </div>
            <div id="card" className="absolute h-[279] mt-24">
              <Image src="/images/5.png" alt="" width={400} height={185} />
            </div>
            <div id="card" className="absolute h-[279] mt-24">
              <Image src="/images/6.png" alt="" width={400} height={279} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Time1995);
