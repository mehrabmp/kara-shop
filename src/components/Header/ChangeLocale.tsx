import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const ChangeLocale = ({ isOpen }: Props) => {
  const ref = useRef(null);

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="fadedown"
      unmountOnExit
      nodeRef={ref}
    >
      <StyledChangeLocale ref={ref}>
        <StyledItem label="English" locale="en" iconURL="/assets/en-flag.svg" />
        <li>
          <div className="divider"></div>
        </li>
        <StyledItem label="German" locale="de" iconURL="/assets/de-flag.svg" />
      </StyledChangeLocale>
    </CSSTransition>
  );
};

const StyledChangeLocale = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0 8px 40px rgb(13 77 91 / 6%);
  top: 150%;
  right: 0;
  width: 90px;
  font-size: 1.2rem;
  position: absolute;
  overflow: hidden;
  z-index: 300;

  .divider {
    background: #e5e5e5;
    width: 100%;
    height: 1px;
    opacity: 0.3;
  }
`;

interface ItemProps {
  className?: string;
  locale: string;
  label: string;
  iconURL: string;
}

const Item = ({ className, locale, label, iconURL }: ItemProps) => (
  <li className={className}>
    <Link href="/" locale={locale}>
      <a>
        <Image src={iconURL} alt={`${locale} locale`} width={15} height={15} />
        <span>{label}</span>
      </a>
    </Link>
  </li>
);

const StyledItem = styled(Item)`
  a {
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
  }

  span {
    margin-left: 0.5rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
