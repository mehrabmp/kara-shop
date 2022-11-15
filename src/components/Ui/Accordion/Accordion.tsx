import clsx from 'clsx';
import AnimateHeight from 'react-animate-height';
import { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

interface Props {
  name: string;
  children?: React.ReactNode;
}

export const Accordion = ({ name, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`flex w-full justify-between rounded-lg px-4 py-2.5 text-left text-sm font-medium text-neutral-900 outline-none transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 focus-visible:ring-opacity-75`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span>{name}</span>
        <FiChevronUp
          className={clsx('h-5 w-5 transition duration-150', {
            'rotate-180 transform': isOpen,
          })}
        />
      </button>
      <AnimateHeight duration={150} height={isOpen ? 'auto' : 0} animateOpacity>
        <div className="px-4 py-2">{children}</div>
      </AnimateHeight>
    </>
  );
};
