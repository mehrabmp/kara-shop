import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

interface Props {
  onSearch: (value: string) => void;
}

export const Search: React.FC<Props> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) onSearch(value);
  };

  return (
    <StyledSearch>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search on KARA"
          aria-label="Search on KARA"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <FiSearch
          className="search-icon"
          size="2rem"
          onClick={() => value && onSearch(value)}
          data-testid="search-icon"
        />
      </Form>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral05};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 250px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .search-icon {
    color: ${({ theme }) => theme.colors.neutral50};
    margin-right: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

const Input = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.neutral90};
  font-size: 1.4rem;
  outline: none;
  max-width: 220px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral60};
  }
`;
