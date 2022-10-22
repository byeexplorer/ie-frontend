import { ImageWrapper } from 'components/common';
import Cursor from 'components/common/cursor';
import Portal from 'components/common/portal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { IMAGES } from 'lib/assets';
import { useEffect, useRef, useState } from 'react';
import styles from 'styles/timeline.module.scss';
import { useInView } from 'react-intersection-observer';
import HoverLogo from 'components/common/hover-logo';

const Time2008 = () => {
  const { ref, inView } = useInView();
  const [explorerHover, setExplorerHover] = useState(false);
  const [otherHover, setOtherHover] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const hoverRef = useRef<HTMLDivElement>(null);
  const explorerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const othericonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#container-2008',
        pin: true,
        start: '-50 top',
        scrub: true,
      },
    });
    tl.to('.title', { display: 'block', duration: 1 });
    tl.to('#title1', { autoAlpha: 1, duration: 0.3 });
    tl.to('#title2', { autoAlpha: 1, duration: 0.3 });

    // hover animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: hoverRef.current,
        start: 3100,
      },
    });
    tl2.to('.hover-image', { autoAlpha: 0.1 });
    tl2.to('.hover-image', { autoAlpha: 1 });
    tl2.to('.hover-image', { autoAlpha: 0.1 });
    tl2.to('.hover-image', { autoAlpha: 1 });

    textRef.current?.removeEventListener('mouseenter', () => {});
    textRef.current?.removeEventListener('', () => {});
    textRef.current?.removeEventListener('mouseleave', () => {});
    textRef.current?.removeEventListener('mousemove', () => {});
  }, []);

  useEffect(() => {
    gsap.to(othericonsRef.current, {
      scale: otherHover ? 2.2 : 1,
    });
    gsap.to(explorerRef.current, {
      width: otherHover ? 0 : '100%',
    });
  }, [otherHover]);

  useEffect(() => {
    gsap.to(othericonsRef.current, {
      scale: explorerHover ? '0.5' : '1',
    });
    gsap.to(textRef.current, {
      translateX: explorerHover ? '-45%' : '',
    });
    gsap.to(explorerRef.current, {
      scale: explorerHover ? '2.7' : '1',
      translateX: explorerHover ? 550 : '',
    });
  }, [explorerHover]);

  const handleOtherIconsMouseEnter = () => setOtherHover(true);
  const handleOtherIconsMouseLeave = () => setOtherHover(false);

  const handleExplorerMouseEnter = () => setExplorerHover(true);
  const handleExplorerMouseLeave = () => setExplorerHover(false);

  const handleMouseOver = () => setIsMouseOver(true);
  const handleMouseLeave = () => setIsMouseOver(false);
  return (
    <article
      className="relative pl-4 pb-10 pr-2 cursor-none"
      id="container-2008"
      ref={ref}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Portal>
        <Cursor visible={inView && isMouseOver} />
      </Portal>
      {/* <!-- 2008 Title --> */}
      <section className="h-screen flex justify-center flex-col">
        <h1 id="title1" className="title italic text-[7rem] leading-[70%] opacity-20 hidden">
          Browser
        </h1>
        <h1 id="title2" className="title italic text-[7rem] leading-[70%] opacity-20 hidden">
          wars
        </h1>
      </section>
      {/* <!-- 2008 wars --> */}
      <section className="mt-[30%] w-full h-full">
        <div className={`flex w-full items-end gap-1 relative min-h-[30vw]`} ref={hoverRef}>
          <article className="w-full h-full shrink-[1.5] flex justify-center">
            <HoverLogo />
            <ImageWrapper
              ref={explorerRef}
              src={IMAGES.BROWSER.EXPLORER}
              alt="explorer"
              className={`hover-image ${styles.explorerlogo} aspect-square relative w-full origin-bottom-left`}
            />
          </article>
          <h2 ref={textRef} className="text-[18vw] leading-[70%] z-10 pointer-events-none">
            2008
          </h2>
          <article className="w-full h-full flex justify-center">
            <HoverLogo />
            <div
              id="othericon"
              className={`${styles.otherlogo} flex w-full h-full gap-1 shrink-[1] origin-bottom-right`}
              ref={othericonsRef}
            >
              <ImageWrapper
                src={IMAGES.BROWSER.CHROME}
                alt="explorer"
                className="hover-image relative aspect-square flex-1"
              />
              <ImageWrapper
                src={IMAGES.BROWSER.SAFARI}
                alt="explorer"
                className="hover-image relative aspect-square flex-1"
              />
              <ImageWrapper
                src={IMAGES.BROWSER.FIREFOX}
                alt="explorer"
                className="hover-image relative aspect-square flex-1"
              />
            </div>
          </article>
          <aside
            className="absolute w-[30%] h-full left-0 z-30"
            onMouseEnter={handleExplorerMouseEnter}
            onMouseLeave={handleExplorerMouseLeave}
          />
          <aside
            className="absolute w-[40%] h-full right-0 z-30"
            onMouseEnter={handleOtherIconsMouseEnter}
            onMouseLeave={handleOtherIconsMouseLeave}
          />
        </div>
        <h4 className="text-[1rem] mt-3">Browser wars</h4>
        <p className="italic text-sm opacity-50 w-[90%]">
          Internet Explorer is exposed to so many security vulnerabilities and concerns that the amount of criticism
          against IE is unusually high. In 2008, several security vulnerabilities were published in Internet Explorer. A
          study conducted by security research firm Secunia found that Microsoft was not as fast as its competitors in
          fixing security holes and providing patches.
        </p>
      </section>
    </article>
  );
};

export default Time2008;
