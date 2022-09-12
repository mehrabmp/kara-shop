import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { CSSTransition } from 'react-transition-group';
import { IconType } from 'react-icons';
import { FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { Search } from './Search';
import { BaseContainer, TopBar } from './TopBar';
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
      <NavBar>
        <Container>
          <Logo>
            <Link href="/" passHref>
              <a>
                <Image
                  priority
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={35}
                  layout="fixed"
                />
              </a>
            </Link>
          </Logo>
          <MainMenu>
            {menuItems.map(({ label, href, hasSubMenu = false }, index) => (
              <MenuItem
                key={index}
                active={currentMenuItem === label}
                onMouseEnter={() => handleShowMenu(label, hasSubMenu)}
                onMouseLeave={handleCloseMenu}
              >
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </MenuItem>
            ))}
          </MainMenu>
          <SideMenu>
            <Search onSearch={value => console.log(value)} />
            <SideMenuItem href="/account/wishlist" Icon={FiHeart} />
            <SideMenuItem href="/account/cart" Icon={FiShoppingBag} />
            <SideMenuItem href="/account/login" Icon={FiUser} />
          </SideMenu>
        </Container>
        <CSSTransition timeout={0} in={isMenuOpen} unmountOnExit>
          <MegaMenu
            currentMenuItem={currentMenuItem}
            onShowMenu={() => handleShowMenu(currentMenuItem, true)}
            onCloseMenu={handleCloseMenu}
          ></MegaMenu>
        </CSSTransition>
      </NavBar>
    </header>
  );
};

const NavBar = styled.div`
  background: #fff;
  height: 55px;
  box-shadow: rgb(0 0 0 / 10%) 0px 15px 20px -20px;
`;

const Container = styled(BaseContainer)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  a {
    display: flex;
    align-items: center;
    margin-right: 2rem;
  }
`;

const MainMenu = styled.ul`
  display: flex;
  margin-left: auto;
  height: 100%;

  @media (max-width: 900px) {
    display: none;
  }
`;

interface MenuItemProps {
  active: boolean;
}

const MenuItem = styled.li<MenuItemProps>`
  background-color: ${({ theme, active }) => active && theme.colors.primary10};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary100 : theme.colors.neutral80};
  font-weight: 500;
  transition: all 0.2s;

  a {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 2rem;
  }
`;

const SideMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

interface IconButtonProps {
  href: string;
  className?: string;
  Icon: IconType;
}

const IconButton = ({ href, className, Icon }: IconButtonProps) => (
  <Link href={href}>
    <a className={className}>
      <Icon size="2rem" className="icon" />
    </a>
  </Link>
);

const SideMenuItem = styled(IconButton)`
  margin-left: 2rem;
  margin-top: 0.5rem;

  &:first-of-type {
    margin-left: 3rem;
  }

  .icon {
    color: ${({ theme }) => theme.colors.neutral80};
    transition: all 0.2s;
  }

  &:hover .icon {
    color: ${({ theme }) => theme.colors.primary100};
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
