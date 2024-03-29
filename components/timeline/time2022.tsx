import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

const Time2022 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#ending',
        start: 'top top',
        end: '+=600%',
        scrub: 0.3,
        pin: true,
      },
    });
    tl.to('#ending1', { y: -40, autoAlpha: 0, delay: 2 }, '>');
    tl.fromTo('#ending2', { y: 40, autoAlpha: 0, delay: 2 }, { y: 0, autoAlpha: 1, delay: 2 });
    tl.to('#ending2', { y: -40, autoAlpha: 0, delay: 2 });
  }, []);

  return (
    <article id="ending" className="relative">
      <section className="flex justify-center items-center flex-col text-center w-screen h-screen" id="ending1">
        <div className="absolute w-[40%] aspect-square">
          <video autoPlay loop muted playsInline className="absolute w-full h-full">
            <source src="/videos/ie-rotate.webm" type="video/webm" />
          </video>
        </div>
        <h4 className="fadeout text-[1.2rem] z-10">2022</h4>
        <p className="fadeout z-10  text-[0.7rem] leading-[1rem]">
          After 25+ years of helping people use and experience the web,
          <br />
          Internet Explorer (IE) is officially retired and
          <br />
          out of support as of today, June 15, 2022.
        </p>
      </section>
      <p id="ending2" className="absolute middle text-[0.7rem] leading-[1rem]">
        Bye, Explorer!
      </p>
    </article>
  );
};

export default Time2022;
