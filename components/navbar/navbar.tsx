import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Hamburger from './hamburger';
import MenuList from './menu-list';
import MenuItem from './menu-item';
import Image from 'next/image';

const DURATION = 2;

const MENU = [
  { menu: 'Overview', selector: '' },
  { menu: 'History', selector: '#container-1995' },
  { menu: 'Host Explorer', selector: '#host-explorer' },
  { menu: 'Guest Explorer', selector: '#guest-explorer' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const previousNavbarColor = useRef<string>('white');
  const currentNavbarColor = useRef<string>('white');

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useEffect(() => {
    gsap.set('#navbar-icon', { filter: 'brightness(0) invert(1)' });

    const currentColor = gsap.getProperty('#navbar', 'color');
    currentNavbarColor.current = currentColor as string;
    if (isMenuOpen) {
      gsap.to('#navbar', { color: '#3834FF' });
      gsap.to('#hamburger > div', { background: '#3834FF' });
      gsap.to('#navbar-icon', { filter: 'none' });
      previousNavbarColor.current = currentNavbarColor.current;
    } else if (previousNavbarColor.current === 'white') {
      gsap.to('#navbar', { color: 'white' });
      gsap.to('#hamburger > div', { background: 'white' });
      gsap.to('#navbar-icon', { filter: 'brightness(0) invert(1)' });
      previousNavbarColor.current = currentNavbarColor.current;
    } else if (previousNavbarColor.current === '#3834ff') {
      gsap.to('#navbar', { color: '#3834ff' });
      gsap.to('#hamburger > div', { background: '#3834ff' });
      gsap.to('#navbar-icon', { filter: 'none' });
      previousNavbarColor.current = currentNavbarColor.current;
    }
  }, [isMenuOpen]);

  return (
    <>
      <div
        id="navbar-background"
        className="fixed top-0 left-0 w-full h-[1.8rem] z-20 transition bg-gradient-to-b from-gray-800 to-transparent"
      />
      <div
        id="navbar"
        className="fixed top-0 left-0 w-full z-30 flex justify-between text-white px-[0.75rem] py-[0.4rem]"
      >
        <div id="navbar-icon" className="z-20 relative w-[4.5rem] aspect-[13/3] translate-y-1">
          <Image src="/images/navbar/blue.png" alt="" layout="fill" priority />
        </div>
        <Hamburger onClick={handleHamburgerClick} isMenuOpen={isMenuOpen} />
        <MenuList isMenuOpen={isMenuOpen}>
          <>
            {MENU.map((menuItem) => (
              <MenuItem
                key={menuItem.selector}
                onClick={() => {
                  gsap.to(window, { scrollTo: menuItem.selector, duration: DURATION });
                  handleHamburgerClick();
                  // setIsMenuClick(true);
                }}
              >
                {menuItem.menu}
              </MenuItem>
            ))}
          </>
        </MenuList>
      </div>
      {/* {isMenuClick && <div id="menuclick-overlay" className="fixed top-0 left-0 h-full w-full bg-black z-20"></div>} */}
    </>
  );
};

export default Navbar;
