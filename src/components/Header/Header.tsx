import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { useTranslation } from 'next-i18next';
import { CSSTransition } from 'react-transition-group';
import { IconType } from 'react-icons';
import { FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { Search } from './Search';
import { TopBar } from './TopBar';
import { MegaMenu } from './MegaMenu';

export const Header = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useTranslation('header');

  const menuItems = [
    { label: t('men'), href: '/men', hasSubMenu: true },
    { label: t('women'), href: '/women', hasSubMenu: true },
    { label: t('kids'), href: '/kids' },
    { label: t('sale'), href: '/sale' },
    { label: t('blog'), href: '/blog' },
    { label: t('contacts'), href: '/contacts' },
  ];

  const sideMenuItems: [string, IconType][] = [
    ['/account/wishlist', FiHeart],
    ['/account/cart', FiShoppingBag],
    ['/account/login', FiUser],
  ];

  const handleShowMenu = (value: string, hasSubMenu: boolean) => {
    setCurrentMenuItem(value);
    if (hasSubMenu) setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setCurrentMenuItem('');
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
                />
              </a>
            </Link>
          </div>
          <ul className="hidden h-full ml-auto md:flex">
            {menuItems.map(({ label, href, hasSubMenu = false }, index) => (
              <li
                className={`text-neutral-700 font-medium transition-colors ${
                  currentMenuItem === label && 'bg-violet-100 text-violet-700'
                }`}
                key={index}
                onMouseEnter={() => handleShowMenu(label, hasSubMenu)}
                onMouseLeave={handleCloseMenu}
              >
                <Link href={href}>
                  <a className="h-full flex items-center px-5">{label}</a>
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
        <CSSTransition timeout={0} in={isMenuOpen} unmountOnExit>
          <MegaMenu
            currentMenuItem={currentMenuItem}
            onShowMenu={() => handleShowMenu(currentMenuItem, true)}
            onCloseMenu={handleCloseMenu}
          ></MegaMenu>
        </CSSTransition>
      </div>
    </header>
  );
};
