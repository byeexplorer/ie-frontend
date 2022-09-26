import React from 'react';

interface Props {
  children: string;
  onClick: () => void;
}

const MenuItem = ({ children, onClick }: Props) => {
  return (
    <div className="h-[2.5rem] overflow-hidden" onClick={onClick}>
      <div className="whitespace-nowrap text-[2rem] leading-[2.5rem] pl-4 transition duration-[500ms] hover:-translate-y-[2.5rem]">
        <div>{children}</div>
        <div className="italic">{children}</div>
      </div>
    </div>
  );
};

export default MenuItem;
