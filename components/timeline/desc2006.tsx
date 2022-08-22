import Image from 'next/image';
import { memo, useEffect } from 'react';
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
      .to(rowSection, { xPercent: -100, ease: 'Power0.easeNone' });

    gsap.to('#text-1', {
      x: 0,
      scrollTrigger: {
        trigger: '#text-1',
        start: 'center end',
        end: '+=500',
        scrub: true,
      },
    });

    gsap.to('#text-2', {
      x: 0,
      scrollTrigger: {
        trigger: '#text-2',
        start: 'top end',
        end: '+=500',
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
          markers: true,
        },
      });
    }
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
          <h1 className="text-5xl ml-5 pt-10 translate-x-full" id="text-1">
            The Hiatus and Security
          </h1>
          <div className="flex ml-5 translate-x-full" id="text-2">
            <h1 className="text-5xl mt-3 mr-4">Troubles</h1>
            <Image src={'/icons/big-computer.svg'} alt="icon" width={147} height={145} />
          </div>
        </article>
        <article className="bg-white">
          <div className="ml-[45%]">
            {description.map((desc, index) => (
              <dl className={styles.under} key={index}>
                <dt>{desc}</dt>
                <dd className={styles.underline} id={`under-${index}`}>
                  <span>{desc}</span>
                </dd>
              </dl>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default memo(Desc2006);
