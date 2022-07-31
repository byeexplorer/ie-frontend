import Image from 'next/image';
import { memo, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface Props {
  src: string;
  className?: string;
  toParams: GSAPTweenVars;
}

const FloatingIcon = ({ src, className, toParams }: Props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#icon', {
      y: 0,
    });
    gsap.to('#icon', {
      rotate: 90,
      scrollTrigger: {
        trigger: '#icon',
        start: 'top center',
        scrub: 1,
      },
      ...toParams,
    });
  }, []);

  return (
    <div className={className} id="icon">
      <Image src={src} alt="icon" width={72} height={72} />
    </div>
  );
};

export default memo(FloatingIcon);
