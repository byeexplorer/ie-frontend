import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Hamburger from './hamburger';
import MenuList from './menu-list';
import MenuItem from './menu-item';

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
    const currentColor = gsap.getProperty('#navbar', 'color');
    currentNavbarColor.current = currentColor as string;
    if (isMenuOpen) {
      gsap.to('#navbar', { color: '#3834FF' });
      gsap.to('#hamburger > div', { background: '#3834FF' });
      previousNavbarColor.current = currentNavbarColor.current;
    } else if (previousNavbarColor.current === 'white') {
      gsap.to('#navbar', { color: 'white' });
      gsap.to('#hamburger > div', { background: 'white' });
      previousNavbarColor.current = currentNavbarColor.current;
    } else if (previousNavbarColor.current === '#3834ff') {
      gsap.to('#navbar', { color: '#3834ff' });
      gsap.to('#hamburger > div', { background: '#3834ff' });
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
        className="fixed top-0 left-0 w-full z-30 flex justify-between text-white px-[0.75rem] py-[0.15rem]"
      >
        <div className="z-20">아이콘</div>
        <Hamburger onClick={handleHamburgerClick} isMenuOpen={isMenuOpen} />
        <MenuList isMenuOpen={isMenuOpen}>
          <>
            {MENU.map((menuItem) => (
              <MenuItem
                key={menuItem.selector}
                onClick={() => {
                  gsap.to(window, { scrollTo: menuItem.selector, duration: 2 });
                }}
              >
                {menuItem.menu}
              </MenuItem>
            ))}
          </>
        </MenuList>
      </div>
    </>
  );
};

export default Navbar;
