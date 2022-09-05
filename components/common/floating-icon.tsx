import Image from 'next/image';
import { memo, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface Props {
  src: string;
  className?: string;
  id?: string;
  toParams: GSAPTweenVars;
}

const FloatingIcon = ({ src, className, toParams, id = 'section2' }: Props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      `#${id}`,
      { y: 0 },
      {
        rotate: 90,
        scrollTrigger: {
          trigger: `#${id}`,
          start: 'top center',
          scrub: 1,
        },
        ...toParams,
      }
    );
  }, [toParams, id]);

  return (
    <div className={className} id={id}>
      <Image src={src} alt="icon" width={72} height={72} />
    </div>
  );
};

export default memo(FloatingIcon);
