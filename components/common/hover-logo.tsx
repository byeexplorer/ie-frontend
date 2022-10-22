import React, { useEffect, useRef } from 'react';
import styles from 'styles/component.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const HoverLogo = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 3100,
      },
    });

    timeline.to(ref.current, { y: '20px' });
    timeline.to(ref.current, { y: '0' });
    timeline.to(ref.current, { y: '20px' });
    timeline.to(ref.current, { y: '0' });
    timeline.to(ref.current, { autoAlpha: 0 });

    const timer = setTimeout(() => {}, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <mark
      className={`text-white flex flex-col items-center bg-transparent gap-1 absolute ${className} top-0`}
      ref={ref}
    >
      <p className="text-[1.2vw]">hover over logos</p>
      <div className={styles.arrow} />
    </mark>
  );
};

export default HoverLogo;
