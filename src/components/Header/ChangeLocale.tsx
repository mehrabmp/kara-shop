import Link from 'next/link';
import Image from 'next/future/image';
import { Transition } from '@headlessui/react';

interface Props {
  isOpen: boolean;
}

export const ChangeLocale = ({ isOpen }: Props) => {
  const locales = [
    ['en', 'English', '/assets/en-flag.svg'],
    ['de', 'German', '/assets/de-flag.svg'],
  ];

  return (
    <Transition
      show={isOpen}
      enter="transition-all duration-300"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-3"
      leave="transition-all duration-300"
      leaveFrom="opacity-100 translate-y-3"
      leaveTo="opacity-0 translate-y-1"
    >
      <ul className="flex flex-col bg-black rounded-lg absolute overflow-hidden text-xs w-[90px] right-0 shadow-md shadow-neutral-400">
        {locales.map(([locale, label, flagURL]) => (
          <li key={locale} className="hover:bg-neutral-600 transition-colors">
            <Link href="/" locale={locale}>
              <a className="text-white flex items-center py-1 px-2">
                <Image
                  priority
                  src={flagURL}
                  alt="en locale"
                  width={17}
                  height={17}
                />
                <span className="ml-2">{label}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Transition>
  );
};
