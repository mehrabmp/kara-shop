import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { Collections } from 'types';
import { NavLink } from 'components/Layouts/Header/Header';
import { convertToSlug } from 'utils';

interface Props {
  navLinks: NavLink[];
  collections: Collections;
  onPageClose: () => void;
}

export const CollectionsPage = ({
  navLinks,
  collections,
  onPageClose,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 bottom-0 z-50 h-full w-full overflow-y-auto bg-white px-5 pt-5">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium">{t('common:collections')}</h2>
        <FiX
          className="cursor-pointer"
          size="1.5rem"
          data-testid="close"
          onClick={onPageClose}
        />
      </div>
      <ul className="mt-5 flex flex-col px-2">
        {navLinks.map((item, index) => (
          <li key={index} className="font-medium text-neutral-800">
            {item.collapsible ? (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between border-b border-solid border-neutral-100 py-4">
                      <span>{t(`header:${item.name}`)}</span>
                      <FiChevronDown
                        className={`transition-transform duration-200 ${
                          open ? 'rotate-180 transform' : ''
                        }`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-2 text-sm">
                        <ul>
                          {collections?.[
                            item.name === 'men' ? 'men' : 'women'
                          ].map(collection => (
                            <Disclosure key={collection.id}>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className="flex w-full items-center justify-between border-b border-solid border-neutral-100 py-4">
                                    <span>{collection.title}</span>
                                    <FiChevronDown
                                      className={`transition-transform duration-200 ${
                                        open ? 'rotate-180 transform' : ''
                                      }`}
                                    />
                                  </Disclosure.Button>
                                  <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                  >
                                    <Disclosure.Panel className="px-2 text-xs text-neutral-700">
                                      <ul>
                                        {collection.subCollections.map(
                                          subCollection => (
                                            <li key={subCollection.id}>
                                              <Link
                                                href={`${
                                                  item.name
                                                }/${convertToSlug(
                                                  collection.title
                                                )}/${convertToSlug(
                                                  subCollection.title
                                                )}`}
                                                className="block border-b border-solid border-neutral-100 py-2"
                                              >
                                                <h3>{subCollection.title}</h3>
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </Disclosure.Panel>
                                  </Transition>
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ) : (
              <Link
                href={item.name}
                className="block border-b border-solid border-neutral-100 py-4"
              >
                <h3>{t(`header:${item.name}`)}</h3>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
