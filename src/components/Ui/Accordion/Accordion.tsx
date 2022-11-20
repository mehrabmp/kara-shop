import clsx from 'clsx';
import AnimateHeight from 'react-animate-height';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { AccordionContext, useAccordionContext } from './AccordionContext';

interface Props {
  isOpen?: boolean;
  children: React.ReactNode;
}

export const Accordion = ({ isOpen = false, children }: Props) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(isOpen);

  return (
    <AccordionContext.Provider value={{ isAccordionOpen, setIsAccordionOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};

const Header = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { isAccordionOpen, setIsAccordionOpen } = useAccordionContext();

  return (
    <button
      className={`flex w-full items-center justify-between py-4 text-left`}
      onClick={() => setIsAccordionOpen(prev => !prev)}
      {...props}
    >
      <span>{children}</span>
      <FiChevronDown
        size="1rem"
        className={clsx('mr-1 transition duration-200', {
          'rotate-180 transform': isAccordionOpen,
        })}
      />
    </button>
  );
};

const Body = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { isAccordionOpen } = useAccordionContext();

  return (
    <AnimateHeight
      duration={200}
      height={isAccordionOpen ? 'auto' : 0}
      animateOpacity
      {...props}
    >
      {children}
    </AnimateHeight>
  );
};

Accordion.Header = Header;
Accordion.Body = Body;
