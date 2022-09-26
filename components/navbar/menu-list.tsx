import React, { ReactElement } from 'react';

interface Props {
  isMenuOpen: boolean;
  children?: ReactElement;
}

const MenuList = ({ isMenuOpen, children }: Props) => {
  return (
    <>
      <div
        className={`absolute top-0 right-0 h-[100vh] py-4 flex flex-col justify-around bg-white transition-[width] duration-[300ms] ease-in-out z-10 ${
          isMenuOpen ? 'w-[70vw]' : 'w-[0]'
        }`}
      >
        {children}
      </div>
      {isMenuOpen && <div className="absolute top-0 right-0 w-[100vw] h-[100vh] bg-black z-0 opacity-[0.5]" />}
    </>
  );
};

export default MenuList;
