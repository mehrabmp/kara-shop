import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FiPhone, FiGrid, FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';
import { IconType } from 'react-icons';

interface TopBarItem {
  label: string;
  href: string;
  Icon?: IconType;
}

export const TopBar: React.FC = () => {
  const topbarItems: TopBarItem[] = [
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
            {topbarItems.map(({ label, href, Icon }) => (
              <ListItem key={label}>
                <StyledLink href={href}>
                  {Icon && <Icon className="icon" color="#fff"></Icon>}
                  <span>{label}</span>
                </StyledLink>
              </ListItem>
            ))}
          </ListGroup>
          <ListGroup>
            <ListItem>
              <SelectLang>
                <Image
                  className="flag"
                  src="/eng-flag.svg"
                  alt="English language"
                  width={22}
                  height={22}
                />
                <span>ENG</span>
                <FiChevronDown color="#fff"></FiChevronDown>
              </SelectLang>
            </ListItem>
          </ListGroup>
        </List>
      </Container>
    </StyledTopBar>
  );
};

const StyledTopBar = styled.div`
  background: #222831;
  color: #fff;
  font-size: 1.4rem;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

const Container = styled.div`
  max-width: 1550px;
  margin: 0 auto;
  padding: 1.25rem 1rem;
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 1rem;
  }
`;

const Title = styled.p``;

const ListGroup = styled.div`
  margin-left: 2rem;
  display: flex;

  @media (max-width: 1000px) {
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
  }
`;

const ListItem = styled.li`
  margin-left: 1.5rem;
  display: flex;

  svg {
    margin: 0 0.5rem;
  }

  @media (max-width: 1000px) {
    margin: 0 0.75rem;
  }
`;

const List = styled.ul`
  margin-left: auto;
  display: flex;

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;

    ${ListGroup}:first-of-type ${ListItem} {
      margin-bottom: 0.5rem;
    }
  }
`;

interface NextLinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const NextLink: React.FC<NextLinkProps> = ({ className, children, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

const StyledLink = styled(NextLink)`
  color: #fff;
  display: flex;
  align-items: center;
  transition: all 0.2s;

  .icon {
    transition: all 0.2s;
  }

  &:hover,
  &:hover .icon {
    color: ${({ theme }) => theme.colors.primary40} !important;
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
