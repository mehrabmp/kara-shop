import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { FiPhone, FiGrid, FiChevronDown } from 'react-icons/fi';
import { ChangeLocale } from './ChangeLocale';

export const TopBar = () => {
  const router = useRouter();

  const [isChangeLocaleOpen, setIsChangeLocaleOpen] = useState(false);

  const { t } = useTranslation('header');

  const topbarItems = [
    { label: t('topbar.careers'), href: '#' },
    { label: t('topbar.help'), href: '#' },
    { label: t('topbar.buyer'), href: '#' },
    { label: t('topbar.download'), href: '#', Icon: FiGrid },
    { label: t('topbar.phone'), href: '#', Icon: FiPhone },
  ];

  return (
    <StyledTopBar>
      <Container>
        <Title>{t('topbar.discount')}</Title>
        <List>
          {topbarItems.map(({ label, href, Icon }) => (
            <ListItem key={label}>
              <Link href={href}>
                <a>
                  {Icon && (
                    <Icon
                      className="icon"
                      color="rgba(255, 255, 255, 0.9)"
                    ></Icon>
                  )}
                  <span>{label}</span>
                </a>
              </Link>
            </ListItem>
          ))}
          <SelectLang onClick={() => setIsChangeLocaleOpen(prev => !prev)}>
            <div className="flag">
              <Image
                priority
                src={`/assets/${router.locale}-flag.svg`}
                alt={`${router.locale} locale`}
                layout="fill"
              />
            </div>
            <span>{router.locale?.toUpperCase()}</span>
            <FiChevronDown color="#fff"></FiChevronDown>
            <ChangeLocale
              isOpen={isChangeLocaleOpen}
              onClose={() => setIsChangeLocaleOpen(prev => !prev)}
            />
          </SelectLang>
        </List>
      </Container>
    </StyledTopBar>
  );
};

const StyledTopBar = styled.div`
  background-color: #212121;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.containerWidth};
  margin: 0 auto;
  padding: 1rem;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`;

const Title = styled.p`
  font-weight: 300;
`;

const ListItem = styled.li`
  margin-right: 2rem;

  a {
    transition: all 0.2s;
    display: flex;
    align-items: center;
  }

  .icon {
    margin: 0 0.5rem;
    transition: all 0.2s;
    font-size: 1.4rem;
  }

  &:hover,
  &:hover .icon {
    color: #fff !important;
  }

  &:nth-of-type(3),
  &:nth-of-type(5) {
    margin-right: 5rem;
  }

  @media (max-width: 900px) {
    &:nth-of-type(n) {
      margin: 0 0.5rem;
    }
  }

  @media (max-width: 800px) {
    .icon {
      font-size: 1rem;
    }
  }
`;

const List = styled.ul`
  margin-left: auto;
  display: flex;

  @media (max-width: 800px) {
    margin-left: 0;
    justify-content: center;
    flex-wrap: wrap;

    ${ListItem} {
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
    }
  }
`;

const SelectLang = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 1rem;
  position: relative;

  .flag {
    position: relative;
    width: 17px;
    height: 17px;
    margin-right: 0.5rem;
  }

  @media (max-width: 800px) {
    .flag {
      width: 14px;
      height: 14px;
    }
  }
`;
