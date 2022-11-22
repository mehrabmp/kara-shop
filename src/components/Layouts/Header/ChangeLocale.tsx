import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';

interface Props {
  isOpen: boolean;
}

export const ChangeLocale = ({ isOpen }: Props) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

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
      <ul className="absolute right-0 flex w-[90px] flex-col overflow-hidden rounded-lg bg-black text-xs shadow-md shadow-neutral-400">
        {locales.map(([locale, label, flagURL]) => (
          <li key={locale} className="transition-colors hover:bg-neutral-600">
            <button
              className="flex items-center py-1 px-2 text-white"
              onClick={() =>
                router.push({ pathname, query }, asPath, { locale })
              }
            >
              <Image
                priority
                src={flagURL}
                alt={`${locale} locale`}
                width={17}
                height={17}
              />
              <span className="ml-2">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </Transition>
  );
};
