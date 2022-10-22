import Image from 'next/image';
import { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from 'styles/timeline.module.scss';
import { ImageWrapper } from 'components/common';

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
  const blueContainer = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLDivElement>(null);

  const squareContainer = useRef<HTMLElement>(null);
  const square = useRef<HTMLDivElement>(null);

  const header1 = useRef<HTMLHeadingElement>(null);
  const header2 = useRef<HTMLHeadingElement>(null);
  const header3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // square container
    const sqaureTl = gsap.timeline({
      scrollTrigger: {
        trigger: squareContainer.current,
        start: 'center center',
        end: '+=550% bottom',
        scrub: true,
        pin: true,
      },
    });
    sqaureTl.to(square.current, { height: '120%' });
    sqaureTl.to(square.current, { rotate: '120deg' });
    sqaureTl.to(square.current, { width: '150vw', height: '200vw' });

    sqaureTl.fromTo(background.current, { x: '100%' }, { x: '0' });

    gsap.set(header1.current, { x: 800 });
    gsap.to(header1.current, {
      x: 0,
      scrollTrigger: {
        trigger: header1.current,
        start: '+=1000% top',
        end: '+=80%',
        scrub: true,
        onEnter: () => {
          gsap.to('#navbar', { color: '#3834FF' });
          gsap.to('#hamburger > div', { background: '#3834FF' });
        },
        onLeaveBack: () => {
          gsap.to('#navbar', { color: 'white' });
          gsap.to('#hamburger > div', { background: 'white' });
        },
      },
    });

    gsap.set(header2.current, { x: 1000 });
    gsap.to(header2.current, {
      x: 0,
      scrollTrigger: {
        trigger: header2.current,
        start: '+=1500% top',
        end: '+=110%',
        scrub: true,
      },
    });

    gsap.set(header3.current, { x: 1200 });
    gsap.to(header3.current, {
      x: 0,
      scrollTrigger: {
        trigger: header3.current,
        start: '+=1100% top',
        end: '+=150%',
        scrub: true,
      },
    });

    for (let i = 0; i < 9; i++) {
      gsap.to(`#under-${i}`, {
        width: '100%',
        scrollTrigger: {
          trigger: `#under-${i}`,
          start: 'center center',
          end: '+=30%',
          scrub: true,
        },
      });
    }

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: blueContainer.current,
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
    });
    tl2.to(blueContainer.current, { duration: 0.3, backgroundColor: '#1C1A80', ease: 'none' });
    tl2.to(blueContainer.current, { duration: 0.3, backgroundColor: '#11104D', ease: 'none' });
  }, []);

  return (
    <article className="bg-blue relative">
      {/* <!-- 2006 3D object #1 --> */}
      <section className="fix-container relative w-screen h-screen grid place-items-center" ref={squareContainer}>
        <div
          className="bg-[#010652] absolute origin-center w-[35vw] h-[35vw] rounded-[50%] z-0"
          style={{ transform: 'rotate(75deg)' }}
          ref={square}
        />
        <ImageWrapper src="videos/under2006.gif" className="w-[50%] aspect-square relative" />
        <article className="w-[100vw] h-[100vh] absolute text-blue z-20" ref={container}>
          <div className="w-[100vw] h-[100vh] bg-white absolute" ref={background}>
            <h1 className="text-[8vw] leading-[120%] ml-5 pt-10" ref={header1}>
              The Hiatus and
            </h1>
            <h1 className="text-[8vw] leading-[120%] ml-5" ref={header2}>
              Security
            </h1>
            <div className="flex ml-5" id="text-2" ref={header3}>
              <h1 className="text-[8vw] leading-[120%] mt-3 mr-4">Troubles</h1>
              <Image src={'/icons/big-computer.svg'} alt="icon" width={147} height={145} />
            </div>
          </div>
        </article>
      </section>
      {/* <!-- 2006 Description --> */}
      <section className="w-full text-blue">
        <article className="bg-white pt-[10%] pb-[60%] relative" ref={blueContainer}>
          {/* <!-- 2006 3D object #2 --> */}
          <div className="absolute bottom-10 w-full h-[60%] overflow-hidden">
            <iframe src={'/videos/IE_updown_motion.gif'} className="w-full h-full" scrolling="no" />
          </div>
          <div className="ml-[37%]">
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
    </article>
  );
};

export default memo(Desc2006);
