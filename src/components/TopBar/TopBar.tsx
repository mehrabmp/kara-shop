import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { IconType } from 'react-icons';
import { FiPhone, FiGrid, FiChevronDown } from 'react-icons/fi';

interface Item {
  label: string;
  href: string;
  Icon?: IconType;
}

export const TopBar: React.FC = () => {
  const topbarItems: Item[] = [
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
          <ListGroup>
            {topbarItems.map(
              item => !item.Icon && <TopBarItem key={item.label} {...item} />
            )}
          </ListGroup>
          <ListGroup>
            {topbarItems.map(
              item => item.Icon && <TopBarItem key={item.label} {...item} />
            )}
          </ListGroup>
          <ListGroup>
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
          </ListGroup>
        </List>
      </Container>
    </StyledTopBar>
  );
};

const TopBarItem: React.FC<Item> = ({ label, href, Icon }) => {
  return (
    <ListItem>
      <Link href={href}>
        <a>
          {Icon && <Icon className="icon" color="#fff"></Icon>}
          <span>{label}</span>
        </a>
      </Link>
    </ListItem>
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

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
  }
`;

const Title = styled.p`
  font-weight: 300;
`;

const ListGroup = styled.div`
  margin-left: 4rem;
  display: flex;

  @media (max-width: 950px) {
    margin: 0;
  }
`;

const ListItem = styled.li`
  margin-left: 2rem;

  a {
    transition: all 0.2s;
    display: flex;
    align-items: center;
  }

  .icon {
    transition: all 0.2s;
  }

  &:hover,
  &:hover .icon {
    color: ${({ theme }) => theme.colors.primary40} !important;
  }

  svg {
    margin: 0 0.5rem;
  }

  @media (max-width: 950px) {
    margin: 0 0.75rem;
  }
`;

const List = styled.ul`
  margin-left: auto;
  display: flex;

  @media (max-width: 850px) {
    margin-left: 0;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;

    ${ListGroup}:nth-of-type(1) ${ListItem},
    ${ListGroup}:nth-of-type(2) ${ListItem} {
      margin-bottom: 0.5rem;
    }
  }
`;

const SelectLang = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 0.5rem;
  }
`;
