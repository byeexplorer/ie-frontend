import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Scene = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // TODO: 왜 사파리에선 잘 되고 크롬에선 끊기지? autoPlay했을 땐 스무스한데
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();

    if (videoRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#video',
          start: 'top top',
          end: '+=10000',
          pin: true,
          scrub: true,
          markers: process.env.NODE_ENV === 'development',
        },
      });
      tl.to('#video', { currentTime: videoRef.current.duration }).to('#video', { opacity: 0 }, '-=10%');
    }
  }, []);
  return (
    <video id="video" ref={videoRef} muted className="w-screen h-screen" preload="auto">
      <source src="/videos/tmp.mp4" type="video/mp4" />
    </video>
  );
};

export default Scene;
