import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Observer } from 'gsap/dist/Observer';

const MENU = [
  { menu: 'Overview', selector: '' },
  { menu: 'History', selector: '#timeline-1995' },
  { menu: 'Host Explorer', selector: '#host-explorer' },
  { menu: 'Guest Explorer', selector: '#guest-explorer' },
];

const Navbar = () => {
  const [isSlideIn, setIsSlideIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const slideInRef = useRef<boolean>(false);
  const timerRef = useRef<NodeJS.Timer>();

  const handleBtnClick = () => {
    setIsSlideIn(!isSlideIn);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, Observer);
  }, []);

  useEffect(() => {
    if (isSlideIn) {
      setIsOpen(true);
    } else {
      timerRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 900);
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [isOpen, isSlideIn]);

  return (
    <div>
      <section
        id="navbar"
        className="fixed top-0 left-0 w-full z-20 flex justify-between text-blue px-[0.75rem] pt-[0.15rem]"
      >
        <button id="navbar-icon" className="">
          아이콘
        </button>
        <button id="menu" className="" onClick={handleBtnClick}>
          햄버거
        </button>
      </section>
      {isOpen && (
        <ul
          className={`fixed top-0 right-0 z-10 w-3/5 h-full p-[1rem] flex flex-col justify-between bg-white text-blue text-[2rem] leading-[3rem] ${
            isSlideIn ? 'animate-slide-in' : 'animate-slide-out'
          }`}
        >
          {MENU.map((item) => (
            <li key={item.selector} onClick={() => gsap.to(window, { scrollTo: item.selector })}>
              {item.menu}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
