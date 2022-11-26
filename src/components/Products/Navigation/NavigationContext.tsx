import { createContext, useContext } from 'react';

interface ContextInterface {
  addQueryParam: (key: string, value: string) => void;
  removeQueryParam: (key: string) => void;
}

export const NavigationContext = createContext<ContextInterface | null>(null);

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);

  if (!context) throw new Error('Error in creating the context');

  return context;
};
