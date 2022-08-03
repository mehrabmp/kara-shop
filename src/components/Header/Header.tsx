import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { TopBar, Search } from 'components';
import { IconType } from 'react-icons';
import { FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';

export const Header: React.FC = () => {
  return (
    <header>
      <TopBar />
      <NavBar>
        <Container>
          <Link href="/" passHref>
            <Logo>KARA</Logo>
          </Link>
          <MainMenu>
            <MenuItem>Men</MenuItem>
            <MenuItem>Women</MenuItem>
            <MenuItem>Kids</MenuItem>
            <MenuItem>Back To School</MenuItem>
            <MenuItem>Sale</MenuItem>
            <MenuItem>3 Stripe Life</MenuItem>
          </MainMenu>
          <SideMenu>
            <Search onSearch={value => console.log(value)} />
            <SideMenuItem href="/account/wishlist" Icon={FiHeart} />
            <SideMenuItem href="/account/cart" Icon={FiShoppingBag} />
            <SideMenuItem href="/account/login" Icon={FiUser} />
          </SideMenu>
        </Container>
      </NavBar>
    </header>
  );
};

const NavBar = styled.div`
  background: #fff;
  height: 65px;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.containerWidth};
  margin: 0 auto;
  padding: 1rem;
  height: 100%;
  display: flex;
`;

const Logo = styled.a`
  font-family: 'Blanka';
  font-size: 3rem;
  color: #000;
  letter-spacing: 5px;
`;

const MainMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 10rem;
`;

const MenuItem = styled.li`
  font-weight: 500;
  margin: 0 2rem;
  color: ${({ theme }) => theme.colors.neutral80};
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary100};
  }
`;

const SideMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

interface IconButtonProps {
  children?: React.ReactNode;
  href: string;
  className?: string;
  Icon: IconType;
}

const IconButton: React.FC<IconButtonProps> = ({ href, className, Icon }) => (
  <Link href={href}>
    <a className={className}>
      <Icon size="2.25rem" className="icon" />
    </a>
  </Link>
);

const SideMenuItem = styled(IconButton)`
  margin-left: 2rem;
  margin-top: 0.5rem;

  .icon {
    color: ${({ theme }) => theme.colors.neutral80};
    transition: all 0.2s;
  }

  &:hover .icon {
    color: ${({ theme }) => theme.colors.primary100};
  }
`;
