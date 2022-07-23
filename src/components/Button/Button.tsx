import React from 'react';
import styled, { useTheme, DefaultTheme } from 'styled-components';
import { getTextColorByContrast, LightenDarkenColor } from 'utils';

export interface Props {
  /** Button text */
  label: string;
  /** Button color variants */
  variant?: keyof DefaultTheme['colors'];
  /** Button with full width */
  block?: boolean;
  /** Type of button */
  type?: 'button' | 'submit' | 'reset' | undefined;
  /** Optional children elements */
  children?: React.ReactNode;
  /** Optional click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({
  label,
  children,
  variant = 'primary',
  block = false,
  type,
  onClick,
  ...props
}) => {
  const themeContext = useTheme();

  return (
    <StyledButton
      color={themeContext.colors[variant]}
      block={block}
      type={type}
      onClick={onClick}
      {...props}
    >
      {label || children}
    </StyledButton>
  );
};

interface ButtonProps {
  color: string;
  block: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${({ block }) => (block ? '100%' : 'auto')};
  background-color: ${({ color }) => color};
  color: ${({ color }) => getTextColorByContrast(color)};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 400;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ color }) => LightenDarkenColor(color, -40)};
  }
`;
