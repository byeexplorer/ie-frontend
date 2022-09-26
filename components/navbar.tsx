import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Observer } from 'gsap/dist/Observer';
import Hamburger from './common/hamburger';

const MENU = [
  { menu: 'Overview', selector: '' },
  { menu: 'History', selector: '#timeline-1995' },
  { menu: 'Host Explorer', selector: '#host-explorer' },
  { menu: 'Guest Explorer', selector: '#guest-explorer' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuItemClick = () => setIsMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-20 flex justify-between text-blue px-[0.75rem] pt-[0.15rem]">
      <div>아이콘</div>
      <Hamburger onClick={handleHamburgerClick} isMenuOpen={isMenuOpen} />
      {/* <Menu></Menu> */}
    </div>
  );
};

export default Navbar;
