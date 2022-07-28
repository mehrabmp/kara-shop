import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { IconType } from 'react-icons';
import { FiPhone, FiGrid, FiChevronDown } from 'react-icons/fi';

interface TobBarItem {
  label: string;
  href: string;
  Icon?: IconType;
}

export const TopBar: React.FC = () => {
  const topbarItems: TobBarItem[] = [
    { label: 'Careers', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'Buyer Protection', href: '#' },
    { label: 'Download Mobile App', href: '#', Icon: FiGrid },
    { label: '+0125 258 192 502', href: '#', Icon: FiPhone },
  ];

  return (
    <StyledTopBar>
      <Container>
        <Title>Get 25% discount on a first purchase.</Title>
        <List>
          {topbarItems.map(({ label, href, Icon }) => (
            <ListItem key={label}>
              <Link href={href}>
                <a>
                  {Icon && <Icon className="icon" color="#fff"></Icon>}
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
            <span>ENG</span>
            <FiChevronDown color="#fff"></FiChevronDown>
          </SelectLang>
        </List>
      </Container>
    </StyledTopBar>
  );
};

const StyledTopBar = styled.div`
  background: #03140f;
  color: #fff;
  font-size: 1.2rem;
`;

const Container = styled.div`
  max-width: 1550px;
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
    color: ${({ theme }) => theme.colors.primary40} !important;
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
