import React, { useState, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

interface Props {
  onSearch: (value: string) => void;
}

export const Search = ({ onSearch }: Props) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { t } = useTranslation('common');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) onSearch(value);
  };

  const handleClearInput = () => {
    setValue('');
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        id="search"
        placeholder={`${t('search')}`}
        value={value}
        ref={inputRef}
        onChange={e => setValue(e.target.value)}
      />
      {value ? (
        <FiX data-testid="clear" onClick={handleClearInput} />
      ) : (
        <FiSearch />
      )}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
  height: 40px;
  position: relative;

  svg {
    position: absolute;
    width: 30px;
    height: 100%;
    right: 0;
    padding-right: 1rem;
    color: ${({ theme }) => theme.colors.neutral50};
    cursor: pointer;
  }
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.neutral05};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.neutral90};
  width: 100%;
  height: 100%;
  padding-right: 3.5rem;
  outline: none;
  transition: border 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral60};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary100};
  }
`;
