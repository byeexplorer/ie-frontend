import { useEffect, useState } from 'react';
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

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  useEffect(() => {}, []);
  return (
    <div className="fixed top-0 left-0 w-full z-30 flex justify-between text-blue px-[0.75rem] pt-[0.15rem]">
      <div>아이콘</div>
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
  );
};

export default Navbar;
