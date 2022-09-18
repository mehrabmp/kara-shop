import React from 'react';

interface Props {
  onCloseMenu: () => void;
  onShowMenu: () => void;
  currentMenuItem: string;
}

export const MegaMenu = ({
  onCloseMenu,
  onShowMenu,
  currentMenuItem,
}: Props) => {
  return (
    <div
      onMouseEnter={onShowMenu}
      onMouseLeave={onCloseMenu}
      className="bg-white p-12 h-[300px] shadow-md shadow-neutral-300 border-t border-solid border-neutral-200 absolute w-full"
    >
      <h1>{currentMenuItem}</h1>
    </div>
  );
};
