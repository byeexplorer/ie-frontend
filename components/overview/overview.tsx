import { useEffect } from 'react';
import { gsap } from 'gsap';
// import Scene from './scene';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Overview = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('#intro > div', { opacity: 0, y: 50 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#overview',
        start: `top top`,
        end: '+=10000',
        pin: true,
        scrub: 0.3,
      },
    });

    timeline.to('#scene', { color: 'rgba(0, 0, 0, 0)' });
    timeline.fromTo('#scene img', { width: '600px' }, { width: '2400px', opacity: 0 }, '<');
    timeline.to('#intro > div:nth-of-type(1)', { opacity: 1, y: 0 }, '+=5%');
    timeline.to('#intro > div:nth-of-type(1)', { opacity: 0, y: -50 }, '+=5%');
    timeline.to('#intro > div:nth-of-type(2)', { opacity: 1, y: 0, delay: 0.5 }, '+=5%');
    timeline.to('#intro > div:nth-of-type(2)', { opacity: 0, y: -50 }, '+=5%');
  }, []);
  return (
    <article id="overview">
      <section id="scene">
        <div className="absolute w-screen h-screen flex justify-center items-center">
          <div className="text-[12vw] leading-[16vw] text-center z-20">
            <p>Internet Explorer,</p>
            <p>Rest In Peace.</p>
          </div>
          <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
            <Image src={'/videos/ie-rotate.gif'} alt="object" width={600} height={600} />
          </div>
        </div>
      </section>
      <section id="intro" className="relative">
        <div className="absolute w-screen h-screen flex justify-center items-center">
          <div className="text-[5vw] leading-[8vw] text-center">
            <p>Microsoft is finally retiring</p>
            <p>consumer version of Internet Explorer.</p>
            <p>It announced the plan last year,</p>
            <p>making Internet Explorer 11 its final version.</p>
          </div>
        </div>
        <div className="absolute w-screen h-screen flex justify-center items-center">
          <p className="text-[0.7rem] leading-[1rem]">Hello, Explorer!</p>
        </div>
      </section>
    </article>
  );
};

export default Overview;
