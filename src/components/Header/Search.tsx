import React, { useState, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
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
    <form
      className="flex content-between items-center max-w-[200px] h-10 relative"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-neutral-100 border border-solid border-transparent focus:border-violet-500 transition-colors outline-none p-2.5 rounded-lg text-neutral-900 w-full h-full pr-9 placeholder-neutral-500"
        type="text"
        name="search"
        id="search"
        placeholder={`${t('search')}`}
        value={value}
        ref={inputRef}
        onChange={e => setValue(e.target.value)}
      />
      {value ? (
        <FiX
          className="absolute w-[30px] h-full right-0 pr-2.5 text-neutral-500 cursor-pointer"
          data-testid="clear"
          onClick={handleClearInput}
        />
      ) : (
        <FiSearch className="absolute w-[30px] h-full right-0 pr-2.5 text-neutral-500 cursor-pointer" />
      )}
    </form>
  );
};
