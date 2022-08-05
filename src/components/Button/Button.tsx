import React from 'react';
import styled from 'styled-components';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  /** Button text */
  label: string;
  /** Button color variants */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Button with full width */
  full?: boolean;
  /** Disabled button */
  disabled?: boolean;
}

export const Button = ({
  label,
  children,
  variant = 'primary',
  full = false,
  disabled = false,
  ...props
}: Props) => {
  return (
    <StyledButton variant={variant} full={full} disabled={disabled} {...props}>
      {label || children}
    </StyledButton>
  );
};

interface ButtonProps {
  variant: string;
  full: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${({ full }) => (full ? '100%' : 'auto')};
  background-color: ${({ theme, variant }) =>
    variant === 'primary'
      ? theme.colors.primary100
      : variant === 'secondary'
      ? theme.colors.neutral10
      : theme.colors.tertiary};
  border: ${({ theme, variant }) =>
    variant === 'tertiary' && `2px solid ${theme.colors.neutral10}`};
  color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.neutral00 : theme.colors.neutral80};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  transition: background-color 0.3s;
  outline-color: ${({ theme }) => theme.colors.neutral90};
  outline-width: thin;

  &:hover,
  &:active {
    background-color: ${({ theme, variant }) =>
      variant === 'primary'
        ? theme.colors.primary140
        : variant === 'secondary'
        ? theme.colors.neutral20
        : theme.colors.neutral10};
    border: ${({ theme, variant }) =>
      variant === 'tertiary' ? `2px solid ${theme.colors.neutral20}` : 'none'};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.neutral30};
    border: ${({ theme }) => `2px solid ${theme.colors.neutral10}`};
    background-color: ${({ theme }) => theme.colors.neutral05};
  }
`;
