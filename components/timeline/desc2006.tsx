import Image from 'next/image';
import { memo, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Desc2006 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const rowSection = gsap.utils.toArray('#row');

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#row',
          pin: true,
          start: 'top top',
          scrub: true,
        },
      })
      .to(rowSection, { xPercent: -100, ease: 'none' })
      .to('#text-1', { x: 0 })
      .to('#text-2', { x: 0 });
  }, []);

  return (
    <>
      {/* <!-- 2006 3D object --> */}
      <section id="fix-container">
        <div
          id="fix-box"
          className="w-[30vw] h-[30vw] bg-slate-400"
          style={{ marginBottom: 'calc((100vh - 30vw) / 2)', marginTop: 'calc((100vh - 30vw) / 2)' }}
        />
      </section>
      {/* <!-- 2006 Description --> */}
      <section className="w-full text-blue">
        <article id="row" className="w-[100vw] h-[130vh] bg-white translate-x-full">
          <h1 className="text-5xl ml-5 pt-10 translate-x-16" id="text-1">
            The Hiatus and Security
          </h1>
          <div className="flex ml-5 translate-x-36" id="text-2">
            <h1 className="text-5xl mt-3 mr-4">Troubles</h1>
            <Image src={'/icons/big-computer.svg'} alt="icon" width={147} height={145} />
          </div>
        </article>
        <article className="bg-white ">
          <p className=" ml-[45%]">
            Internet Explorer users were at risk for <br />
            284 days in 2006 because of delays in <br />
            patching known flaws, according to a <br />
            security blog. <br />
            This included at least 98 days <br />
            in which no software fixes were available <br />
            to plug browser flaws <br />
            that were actively being used to steal <br />
            personal and financial data.
          </p>
        </article>
      </section>
    </>
  );
};

export default memo(Desc2006);
