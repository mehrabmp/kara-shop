import Link from 'next/link';
import Image from 'next/future/image';
import type { inferProcedureOutput } from '@trpc/server';
import type { AppRouter } from 'server/routers/_app';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { CollectionType } from '@prisma/client';
import { Transition } from '@headlessui/react';
import { IconType } from 'react-icons';
import { FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { Search } from './Search';
import { TopBar } from './TopBar';
import { capitalizeFirstLetter, convertToSlug } from 'utils';

interface Props {
  collections: inferProcedureOutput<AppRouter['collection']['all']> | undefined;
}

interface MenuItem {
  title: 'men' | 'women' | 'kids' | 'sale' | 'blog' | 'contacts';
  collections?: MenuItemCollection[];
}

interface MenuItemCollection {
  id: number;
  title: string;
  subCollections: {
    id: number;
    title: string;
    type: CollectionType;
  }[];
}

export const Header = ({ collections }: Props) => {
  const { t } = useTranslation('header');

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { title: 'men' },
    { title: 'women' },
    { title: 'kids' },
    { title: 'sale' },
    { title: 'blog' },
    { title: 'contacts' },
  ]);
  const [sideMenuItems] = useState<[string, IconType][]>([
    ['wishlist', FiHeart],
    ['cart', FiShoppingBag],
    ['login', FiUser],
  ]);
  const [currentMenuItem, setCurrentMenuItem] = useState<MenuItem | null>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (collections) {
      setMenuItems(menuItems => {
        menuItems[0].collections = getCollectionsByType('MEN');
        menuItems[1].collections = getCollectionsByType('WOMEN');
        return menuItems;
      });

      const getCollectionsByType = (type: CollectionType) =>
        collections.map(col => ({
          id: col.id,
          title: col.title,
          type,
          subCollections: col.subCollections
            .filter(subCol => subCol.type.includes(type))
            .map(subCol => ({ ...subCol, type })),
        }));
    }
  }, [collections]);

  const handleShowMenu = (menuItem: MenuItem) => {
    setCurrentMenuItem(menuItem);
    if (menuItem.collections) setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setCurrentMenuItem(null);
    setIsMenuOpen(false);
  };

  return (
    <header>
      <TopBar />
      <div className="bg-white h-14 shadow-md shadow-neutral-300 relative">
        <div className="mx-auto px-4 xl:container h-full flex items-center">
          <div className="flex items-center shrink-0 mr-5">
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={35}
                  quality={100}
                />
              </a>
            </Link>
          </div>
          <ul className="hidden h-full ml-auto md:flex">
            {menuItems &&
              menuItems?.length > 0 &&
              menuItems.map((item, index) => (
                <li
                  className={`text-neutral-700 font-medium transition-colors ${
                    currentMenuItem === item && 'bg-violet-100 text-violet-700'
                  }`}
                  key={index}
                  onMouseEnter={() => handleShowMenu(item)}
                  onMouseLeave={handleCloseMenu}
                >
                  <Link href={item.title}>
                    <a className="h-full flex items-center px-5">
                      {t(item.title)}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
          <ul className="items-center ml-auto md:flex">
            <Search onSearch={value => console.log(value)} />
            {sideMenuItems.map(([url, Icon]) => (
              <Link key={url} href={url}>
                <a className="hidden md:block ml-5 first-of-type:ml-8">
                  <Icon
                    className="text-neutral-700 transition-colors hover:text-violet-700"
                    size="20px"
                  />
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <Transition show={isMenuOpen}>
          {currentMenuItem && (
            <div
              onMouseEnter={() => handleShowMenu(currentMenuItem)}
              onMouseLeave={handleCloseMenu}
              className="bg-white shadow-md shadow-neutral-300 border-t border-solid border-neutral-200 absolute w-full"
            >
              <div className="flex max-w-7xl mx-auto">
                <div className="flex-1 flex">
                  <div className="py-8 ml-4">
                    <Link href={`${currentMenuItem.title}`}>
                      <a>
                        <p className="font-bold text-sm uppercase text-neutral-800 tracking-widest leading-4 hover:underline">
                          New & Trending
                        </p>
                      </a>
                    </Link>
                    <ul className="pt-2">
                      {[
                        'New Arrivals',
                        'Best Sellers',
                        'Only at Kara',
                        'Members Exclusives',
                        'Release Dates',
                      ].map((item, index) => (
                        <li key={index}>
                          <Link href={convertToSlug(item)}>
                            <a className="font-normal text-xs text-neutral-700 mb-1.5 hover:underline">
                              {item}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="pt-3 mb-2">
                      {[
                        'Fall Collection',
                        'Vintage 70s Collection',
                        'Pharrell Premium Basics',
                        'Tee Bundle:2 for $39 or 3 for $49',
                        'Breast Cancer Awareness Collection',
                      ].map((item, index) => (
                        <li key={index}>
                          <Link href={convertToSlug(item)}>
                            <a className="font-normal text-xs text-neutral-700 mb-1.5 hover:underline">
                              {item}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="offer">
                      <a>
                        <Image
                          priority
                          src="/assets/offer.webp"
                          alt="offer"
                          width={130}
                          height={100}
                          quality={100}
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex-[3] flex shadow-neutral-300 border-l border-solid">
                  {currentMenuItem.collections?.map(collection => (
                    <div
                      key={collection.id}
                      className="max-w-[150px] w-full py-8 ml-4"
                    >
                      <Link
                        href={`${currentMenuItem.title}/${convertToSlug(
                          collection.title
                        )}`}
                      >
                        <a>
                          <p className="font-bold text-sm uppercase text-neutral-800 tracking-widest leading-4 hover:underline">
                            {collection.title}
                          </p>
                        </a>
                      </Link>
                      <ul className="pt-2">
                        {collection.subCollections.map(subCollection => (
                          <li key={subCollection.id}>
                            <Link
                              href={`${currentMenuItem.title}/${convertToSlug(
                                collection.title
                              )}/${convertToSlug(subCollection.title)}`}
                            >
                              <a className="font-normal text-xs text-neutral-700 mb-1.5 hover:underline">
                                {subCollection.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="shadow-neutral-300 border-t border-solid">
                <div className="flex max-w-7xl mx-auto">
                  <div className="flex-1 flex items-center">
                    <Link href="sale">
                      <a className="font-bold text-xs text-neutral-800 hover:underline max-w-[150px] w-full py-3 ml-4">
                        Sale
                      </a>
                    </Link>
                  </div>
                  <div className="flex-[3] flex items-center">
                    {['shoes', 'clothing', 'accessories', 'sport', ''].map(
                      (item, index) => (
                        <Link
                          key={index}
                          href={`${currentMenuItem.title}/${item}`}
                        >
                          <a className="font-bold text-xs text-neutral-800 hover:underline max-w-[150px] w-full py-3 ml-4">
                            {`All ${capitalizeFirstLetter(
                              currentMenuItem.title
                            )}'s ${capitalizeFirstLetter(item)}`}
                          </a>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </header>
  );
};
