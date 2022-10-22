import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { memo, useEffect } from 'react';

const Time2022 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#ending',
        start: 'top top',
        end: '+=150%',
        scrub: 0.3,
        pin: true,
      },
    });
    tl.to('#ending1', { y: -20, autoAlpha: 0, delay: 1.5 }, '>');
    tl.fromTo('#ending2', { y: 20, autoAlpha: 0, delay: 1.5 }, { y: 0, autoAlpha: 1, delay: 1.5 });
    tl.to('#ending2', { y: -20, autoAlpha: 0, delay: 1.5 });
  }, []);

  return (
    <article id="ending">
      <section className="flex justify-center items-center flex-col text-center w-screen h-screen" id="ending1">
        <div className="absolute w-[40%] aspect-square">
          <Image src={'/videos/ie-rotate.gif'} className="absolute w-full h-full" alt="object" layout="fill" />
        </div>
        <h4 className="fadeout text-[1.2rem] z-10">2022</h4>
        <p className="fadeout z-10">
          After 25+ years of helping people use and experience the web,
          <br />
          Internet Explorer (IE) is officially retired and
          <br />
          out of support as of today, June 15, 2022.
        </p>
      </section>
      <p id="ending2" className="absolute middle">
        Bye, Explorer!
      </p>
    </article>
  );
};

export default memo(Time2022);
