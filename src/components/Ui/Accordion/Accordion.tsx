import clsx from 'clsx';
import AnimateHeight from 'react-animate-height';
import { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

interface Props {
  name: string;
  open?: boolean;
  children?: React.ReactNode;
}

export const Accordion = ({ name, open, children }: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <>
      <button
        className={`flex w-full justify-between rounded-lg px-4 py-2.5 text-left text-sm font-semibold text-neutral-600 outline-none transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-700 focus-visible:ring-opacity-75`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span>{name}</span>
        <FiChevronUp
          size="1rem"
          className={clsx('transition duration-200', {
            'rotate-180 transform': isOpen,
          })}
        />
      </button>
      <AnimateHeight duration={200} height={isOpen ? 'auto' : 0} animateOpacity>
        <div className="px-4 pb-3">{children}</div>
      </AnimateHeight>
    </>
  );
};
