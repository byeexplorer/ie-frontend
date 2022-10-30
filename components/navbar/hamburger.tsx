import React, { useState } from 'react';

interface Props {
  isMenuOpen: boolean;
  onClick: () => void;
}

function Hamburger({ isMenuOpen, onClick }: Props) {
  return (
    <div id="hamburger-container" className="flex flex-col justify-center align-center z-20" onClick={onClick}>
      <div id="hamburger" className="flex flex-col justify-around align-center h-[0.8rem]">
        <div
          className={`h-[0.07rem] w-[0.75rem] transition-all bg-white rounded origin-top-left ${
            isMenuOpen ? 'rotate-45' : 'none'
          }`}
        />
        <div
          className={`h-[0.07rem] w-[0.75rem] transition-all bg-white rounded ${
            isMenuOpen ? 'opacity-0 translate-x-[-10px]' : 'opacity-1'
          }`}
        />
        <div
          className={`h-[0.07rem] w-[0.75rem] transition-all bg-white rounded origin-top-left ${
            isMenuOpen ? '-translate-x-[2px] -rotate-45' : 'none'
          }`}
        />
      </div>
    </div>
  );
}

export default Hamburger;
