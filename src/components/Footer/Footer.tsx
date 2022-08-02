import React from 'react';
import styled from 'styled-components';

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <h1>footer</h1>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: #000;
  height: 100px;
`;
