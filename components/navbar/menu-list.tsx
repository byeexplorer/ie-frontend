import React, { ReactElement } from 'react';

interface Props {
  isMenuOpen: boolean;
  children?: ReactElement;
}

const MenuList = ({ isMenuOpen, children }: Props) => {
  return (
    <div
      className={`absolute top-0 right-0 h-[100vh] flex flex-col justify-around bg-white transition-[width] duration-[300ms] ease-in-out ${
        isMenuOpen ? 'w-[60vw]' : 'w-[0]'
      }`}
    >
      {children}
    </div>
  );
};

export default MenuList;
