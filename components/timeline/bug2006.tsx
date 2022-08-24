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
        trigger: '#bug-start-container',
        pin: true,
        start: 'top top',
        end: '+=200%',
        scrub: true,
        markers: true,
      },
    });
    tl.to('#bug-start-container', { duration: 1, backgroundColor: '#1C1A80', ease: 'none' }, 0);
    tl.to('#bug-start-container', { duration: 1, backgroundColor: '#11104D', ease: 'none' }, 1);
    tl.to('#bug1', { display: 'block' });
  }, []);

  return (
    <>
      {/* <!-- 2006 Bug --> */}
      <section id="bug-start-container" className="relative h-screen w-screen bg-white">
        <ImageWrapper src={IMAGES.BUG.BUG1} alt="bug" className={styles.bug1} id="bug1" />
      </section>
      {/* <section id="bug-middle-container" className="h-screen bg-[#11104D]" /> */}
    </>
  );
};

export default memo(Bug2006);
