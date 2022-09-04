import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scene from './scene';

const Overview = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <article className="flex flex-col">
      <section id="scene" className="w-screen h-screen">
        <Scene />
      </section>
      <section id="intro">
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="text-[1.6rem] leading-[2.2rem] text-center">
            Microsoft is finally retiring
            <br />
            consumer version of Internet Explorer.
            <br />
            It announced the plan last year,
            <br />
            making Internet Explorer 11 its final version.
          </p>
        </div>
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="text-[0.7rem] leading-[1rem]">Hello, Explorer!</p>
        </div>
      </section>
    </article>
  );
};

export default Overview;
