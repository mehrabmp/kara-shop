import { createContext, Dispatch, SetStateAction, useContext } from 'react';

interface ContextInterface {
  isAccordionOpen: boolean;
  setIsAccordionOpen: Dispatch<SetStateAction<boolean>>;
}

export const AccordionContext = createContext<ContextInterface | null>(null);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) throw new Error('Error in creating the context');

  return context;
};
