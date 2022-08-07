import React from 'react';
import styled from 'styled-components';

interface Props {
  onCloseMenu: () => void;
  onShowMenu: () => void;
  menuItem: string;
}

export const MegaMenu = ({ onCloseMenu, onShowMenu, menuItem }: Props) => {
  return (
    <StyledMegaMenu onMouseOver={onShowMenu} onMouseOut={onCloseMenu}>
      <h1>{menuItem}</h1>
    </StyledMegaMenu>
  );
};

const StyledMegaMenu = styled.div`
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral10};
  box-shadow: rgb(0 0 0 / 10%) 0px 15px 20px -20px;
  padding: 5rem;
  height: 300px;
`;
