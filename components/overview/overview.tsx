import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Overview = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#scene',
        start: `top top`,
        end: '+=300%',
        pin: true,
        scrub: 0.3,
      },
    });

    timeline.to('#scene', { color: '#000' });
    timeline.fromTo('#video', { width: '600px' }, { width: '2400px', opacity: 0 }, '<');

    const introTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#intro',
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 0.5,
      },
    });

    introTimeline.from('#intro1', { opacity: 0, y: 100 }, '+=30%');
    introTimeline.to('#intro1', { opacity: 1, y: 0 }, '+=30%');
    introTimeline.to('#intro1', { opacity: 0, y: -100, delay: 0.5 }, '+=30%');
    introTimeline.from('#intro2', { opacity: 0, y: 100 }, '+=30%');
    introTimeline.to('#intro2', { opacity: 1, y: 0 }, '+=30%');
    introTimeline.to('#intro2', { opacity: 0, y: -100, delay: 0.5 }, '+=30%');
  }, []);

  return (
    <article>
      <section id="scene" className="relative">
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="text-[11vw] leading-[13vw] text-center z-20">
            <p>Internet Explorer,</p>
            <p className="italic">Rest In Peace.</p>
          </div>
          <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
            <video autoPlay loop muted playsInline id="video">
              <source src="/videos/ie-rotate.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </section>
      <section id="intro" className="w-screen h-screen relative">
        <div id="intro1" className="w-screen h-screen flex justify-center items-center absolute">
          <div className="text-[3vw] leading-[4vw] text-center italic">
            <p>
              <b className="not-italic font-normal">Microsoft</b> is finally retiring
            </p>
            <p>
              consumer version of <b className="not-italic font-normal">Internet Explorer.</b>
            </p>
            <p>It announced the plan last year,</p>
            <p>
              making <b className="not-italic font-normal">Internet Explorer 11</b> its final version.
            </p>
          </div>
        </div>
        <div id="intro2" className="w-full h-full flex justify-center items-center absolute">
          <p className="text-[0.7rem] leading-[1rem]">Hello, Explorer!</p>
        </div>
      </section>
    </article>
  );
};

export default Overview;
