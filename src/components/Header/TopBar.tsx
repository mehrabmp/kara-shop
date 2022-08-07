import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { IconType } from 'react-icons';
import { FiPhone, FiGrid, FiChevronDown } from 'react-icons/fi';

interface TobBarItem {
  label: string;
  href: string;
  Icon?: IconType;
}

export const TopBar = () => {
  const { t } = useTranslation('topbar');

  const topbarItems: TobBarItem[] = [
    { label: t('careers'), href: '#' },
    { label: t('help'), href: '#' },
    { label: t('buyer'), href: '#' },
    { label: t('download'), href: '#', Icon: FiGrid },
    { label: t('phone'), href: '#', Icon: FiPhone },
  ];

  return (
    <StyledTopBar>
      <Container>
        <Title>{t('discount')}</Title>
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
          <SelectLang>
            <Image
              className="flag"
              src="/eng-flag.svg"
              alt="English language"
              width={17}
              height={17}
            />
            <span>EN</span>
            <FiChevronDown color="#fff"></FiChevronDown>
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
`;

const List = styled.ul`
  margin-left: auto;
  display: flex;

  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 1rem;
    justify-content: center;
    flex-wrap: wrap;

    ${ListItem} {
      margin-bottom: 0.5rem;
    }
  }
`;

const SelectLang = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 1rem;

  span {
    margin-left: 0.5rem;
  }
`;
