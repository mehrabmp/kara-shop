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
import { MegaMenu } from './MegaMenu';

interface Props {
  collections: inferProcedureOutput<AppRouter['collection']['all']> | undefined;
}

export interface MenuItem {
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
            <MegaMenu
              currentMenuItem={currentMenuItem}
              onShowMenu={() => handleShowMenu(currentMenuItem)}
              onCloseMenu={handleCloseMenu}
            />
          )}
        </Transition>
      </div>
    </header>
  );
};
