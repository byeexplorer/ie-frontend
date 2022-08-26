import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { IMAGES } from 'lib/assets';
import styles from 'styles/bug.module.scss';
import { memo, useEffect } from 'react';
import ImageWrapper from 'components/common/image-wrapper';

const Bug2006 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#bug-container',
        pin: true,
        start: 'top top',
        end: '+=1000%',
        scrub: true,
      },
    });
    tl.to('#bug-container', { duration: 1, backgroundColor: '#1C1A80', ease: 'none' }, 0);
    tl.to('#bug-container', { duration: 1, backgroundColor: '#11104D', ease: 'none' }, 1);
    tl.to('#bug1', { display: 'block', duration: 1 });
    tl.to('#bug2', { display: 'block', duration: 0.2 });
    tl.to('#bug3', { display: 'block', duration: 0.2 });
    tl.to('#bug4', { display: 'block', duration: 0.2 });
    tl.to('#bug5', { display: 'block', duration: 0.2 });
    tl.to('#bug6', { display: 'block', duration: 0.2 });
    tl.to('#bug7', { display: 'block', duration: 0.2 });

    tl.to('#bug-container', { duration: 1, backgroundColor: '#3834ff', ease: 'none' });
    tl.to('#bug8', { display: 'block', duration: 0.2 });
    tl.to('#bug9', { display: 'block', duration: 0.2 });
    tl.to('#bug10', { display: 'block', duration: 0.2 });
    tl.to('#bug11', { display: 'block', duration: 0.2 });
    tl.to('#bug12', { display: 'block', duration: 0.2 });
    tl.to('#bug13', { display: 'block', duration: 0.2 });
    tl.to('#bug14', { display: 'block', duration: 0.2 });
  }, []);

  return (
    <>
      {/* <!-- 2006 Bug --> */}
      <section id="bug-container" className="relative h-screen w-screen bg-white">
        <ImageWrapper src={IMAGES.BUG.BUG1} alt="bug" className={`${styles.bug1} middle`} id="bug1" />
        <ImageWrapper src={IMAGES.BUG.BUG2} alt="bug" className={`${styles.bug2} right-0 top-5`} id="bug2" />
        <ImageWrapper src={IMAGES.BUG.BUG3} alt="bug" className={`${styles.bug3} left-8 top-2`} id="bug3" />
        <ImageWrapper
          src={IMAGES.BUG.BUG3}
          alt="bug"
          className={`${styles.bug3} right-32 bottom-0 translate-y-[55%]`}
          id="bug4"
        />
        <ImageWrapper
          src={IMAGES.BUG.BUG2}
          alt="bug"
          className={`${styles.bug2} left-0 translate-x-[-40%] top-7`}
          id="bug5"
        />
        <ImageWrapper
          src={IMAGES.BUG.BUG3}
          alt="bug"
          className={`${styles.bug3} right-0 bottom-16 translate-x-6`}
          id="bug6"
        />
        <ImageWrapper src={IMAGES.BUG.BUG4} alt="bug" className={`${styles.bug4} left-3 bottom-0`} id="bug7" />

        {/* after bg BLUE */}
        <ImageWrapper
          src={IMAGES.BUG.BUG2}
          alt="bug"
          className={`${styles.bug2} left-[50%] top-[30%] translate-x-[-50%]`}
          id="bug7"
        />
        <ImageWrapper
          src={IMAGES.BUG.BUG2}
          alt="bug"
          className={`${styles.bug2} right-0 bottom-2 translate-x-4`}
          id="bug8"
        />
        <ImageWrapper src={IMAGES.BUG.BUG1} alt="bug" className={`${styles.bug1} right-10 bottom-10`} id="bug9" />
        <ImageWrapper
          src={IMAGES.BUG.BUG2}
          alt="bug"
          className={`${styles.bug2} left-0 bottom-14 translate-x-[-30%]`}
          id="bug10"
        />
        <ImageWrapper
          src={IMAGES.BUG.BUG2}
          alt="bug"
          className={`${styles.bug2} left-0 bottom-16 translate-x-[-33%]`}
          id="bug11"
        />
        <ImageWrapper src={IMAGES.BUG.BUG5} alt="bug" className={`${styles.bug5} left-12 top-10`} id="bug12" />
        <ImageWrapper src={IMAGES.BUG.BUG1} alt="bug" className={`${styles.bug1} right-16 top-[40%]`} id="bug13" />
        <ImageWrapper
          src={IMAGES.BUG.BUG5}
          alt="bug"
          className={`${styles.bug5} right-0 top-3 translate-x-5`}
          id="bug14"
        />
      </section>

      {/* <section id="bug-middle-container" className="h-screen bg-[#11104D]" /> */}
    </>
  );
};

export default memo(Bug2006);
