import { useState, useRef } from 'react';
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

  const showClearButton = !!value;

  return (
    <form
      className="relative flex h-10 max-w-[200px] content-between items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="h-full w-full rounded-lg border border-solid border-transparent bg-neutral-100 p-2.5 pr-9 text-neutral-900 placeholder-neutral-500 outline-none transition-colors focus:border-violet-500"
        type="text"
        name="search"
        id="search"
        placeholder={`${t('search')}`}
        aria-label="Search"
        value={value}
        ref={inputRef}
        onChange={e => setValue(e.target.value)}
      />
      {showClearButton ? (
        <button
          type="button"
          className="absolute right-0 h-full w-[30px] cursor-pointer pr-2.5 text-neutral-500"
          aria-label="Clear search input"
          onClick={handleClearInput}
        >
          <FiX size="1.25rem" />
        </button>
      ) : (
        <button
          type="submit"
          className="absolute right-0 h-full w-[30px] cursor-pointer pr-2.5 text-neutral-500"
          aria-label="Submit search"
        >
          <FiSearch size="1.25rem" />
        </button>
      )}
    </form>
  );
};
