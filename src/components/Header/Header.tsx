import Link from 'next/link';
import Image from 'next/future/image';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Transition } from '@headlessui/react';
import { IconType } from 'react-icons';
import { FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { Search } from './Search';
import { TopBar } from './TopBar';
import { MegaMenu } from './MegaMenu';
import { Collections } from 'types';
import { BottomNavigation } from 'components/BottomNavigation/BottomNavigation';

interface Props {
  collections: Collections;
}

export interface NavLink {
  name: 'men' | 'women' | 'kids' | 'sale' | 'blog' | 'contacts';
  collapsible?: boolean;
}

export const Header = ({ collections }: Props) => {
  const { t } = useTranslation('header');

  const sideNavLinks: [string, IconType][] = [
    ['wishlist', FiHeart],
    ['cart', FiShoppingBag],
    ['login', FiUser],
  ];
  const [navLinks] = useState<NavLink[]>([
    { name: 'men', collapsible: true },
    { name: 'women', collapsible: true },
    { name: 'kids' },
    { name: 'sale' },
    { name: 'blog' },
    { name: 'contacts' },
  ]);
  const [hoveredNavLink, setHoveredNavLink] = useState<NavLink | null>();

  const handleShowMenu = (navLink: NavLink) => setHoveredNavLink(navLink);

  const handleCloseMenu = () => setHoveredNavLink(null);

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
            {navLinks.map((item, index) => (
              <li
                className={`text-neutral-700 font-medium transition-colors ${
                  hoveredNavLink === item && 'bg-violet-100 text-violet-700'
                }`}
                key={index}
                onMouseEnter={() => handleShowMenu(item)}
                onMouseLeave={handleCloseMenu}
              >
                <Link href={item.name}>
                  <a className="h-full flex items-center px-5">
                    {t(item.name)}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="items-center ml-auto md:flex">
            <Search onSearch={value => console.log(value)} />
            {sideNavLinks.map(([url, Icon]) => (
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
        <Transition show={Boolean(hoveredNavLink?.collapsible)}>
          {hoveredNavLink && (
            <MegaMenu
              type={hoveredNavLink.name === 'men' ? 'men' : 'women'}
              collections={collections}
              onShowMenu={() => handleShowMenu(hoveredNavLink)}
              onCloseMenu={handleCloseMenu}
            />
          )}
        </Transition>
      </div>
      <BottomNavigation navLinks={navLinks} collections={collections} />
    </header>
  );
};
