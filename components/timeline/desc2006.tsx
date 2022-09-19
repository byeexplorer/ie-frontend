import Image from 'next/image';
import { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from 'styles/timeline.module.scss';

const description = [
  'Internet Explorer users were at risk for',
  '284 days in 2006 because of delays in',
  'patching known flaws, according to a',
  'security blog.',
  'This included at least 98 days',
  'in which no software fixes were available',
  'to plug browser flaws',
  'that were actively being used to steal',
  'personal and financial data.',
];

const Desc2006 = () => {
  const container = useRef<HTMLElement>(null);
  const background = useRef<HTMLDivElement>(null);

  const header1 = useRef<HTMLHeadingElement>(null);
  const header2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        start: 'top top',
        end: '+=400% bottom',
        scrub: true,
      },
    });
    tl.fromTo(background.current, { x: '100%' }, { x: '0' });

    gsap.set(header1.current, { x: 400 });
    gsap.to(header1.current, {
      x: 0,
      scrollTrigger: {
        trigger: header1.current,
        start: 'center top',
        end: '+=300% top',
        scrub: true,
      },
    });

    gsap.set(header2.current, { x: 500 });
    gsap.to(header2.current, {
      x: 0,
      scrollTrigger: {
        trigger: header2.current,
        start: 'bottom top',
        end: '+=500% top',
        scrub: true,
      },
    });

    for (let i = 0; i < 9; i++) {
      gsap.to(`#under-${i}`, {
        width: '100%',
        scrollTrigger: {
          trigger: `#under-${i}`,
          start: 'center center',
          end: '+=300',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <article className="bg-blue pt-[30vw] ">
      {/* <!-- 2006 3D object #1 --> */}
      <section id="fix-container">
        <video
          src="/under2006.mp4"
          loop={true}
          autoPlay={true}
          controls={false}
          muted={true}
          playsInline={true}
          className="w-full h-[30vw]"
        >
          {/* <source src="/under2006.mp4" /> */}
        </video>
        {/* <div
          id="fix-box"
          className="w-full h-[30vw] bg-slate-400"
          style={{ marginBottom: 'calc((100vh - 30vw) / 2)' }}
        /> */}
      </section>
      {/* <!-- 2006 Description --> */}
      <section className="w-full text-blue">
        <article className="w-[100vw] h-[100vh] relative" ref={container}>
          <div className="w-[100vw] h-[100vh] bg-white absolute" ref={background}>
            <h1 className="text-5xl ml-5 pt-10" ref={header1}>
              The Hiatus and Security
            </h1>
            <div className="flex ml-5" id="text-2" ref={header2}>
              <h1 className="text-5xl mt-3 mr-4">Troubles</h1>
              <Image src={'/icons/big-computer.svg'} alt="icon" width={147} height={145} />
            </div>
          </div>
        </article>
        <article className="bg-white">
          <div className="ml-[45%]">
            {description.map((desc, index) => (
              <dl
                className={styles.under}
                key={index}
                style={{
                  marginBottom: description.length - 1 === index ? 0 : '',
                }}
              >
                <dt>{desc}</dt>
                <dd className={styles.underline} id={`under-${index}`}>
                  <span>{desc}</span>
                </dd>
              </dl>
            ))}
          </div>
        </article>
      </section>
      {/* <!-- 2006 3D object #2 --> */}
      <section className="w-full py-[15%] bg-white">
        <article className="w-full h-[425px] bg-slate-300"></article>
      </section>
    </article>
  );
};

export default memo(Desc2006);
