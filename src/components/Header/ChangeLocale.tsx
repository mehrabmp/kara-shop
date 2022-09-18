import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  isOpen: boolean;
}

export const ChangeLocale = ({ isOpen }: Props) => {
  const ref = useRef(null);

  const locales = [
    ['en', 'English', '/assets/en-flag.svg'],
    ['de', 'German', '/assets/de-flag.svg'],
  ];

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="fadedown"
      unmountOnExit
      nodeRef={ref}
    >
      <ul
        ref={ref}
        className="flex flex-col bg-black rounded-lg absolute overflow-hidden z-50 text-[11px] md:text-xs w-[90px] top-[120%] md:top-[130%] right-0 shadow-md shadow-neutral-400"
      >
        {locales.map(([locale, label, flagURL]) => (
          <li key={locale} className="hover:bg-neutral-600 transition-colors">
            <Link href="/" locale={locale}>
              <a className="text-white flex items-center py-1 px-2">
                <Image src={flagURL} alt="en locale" width={17} height={17} />
                <span className="ml-2">{label}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </CSSTransition>
  );
};
