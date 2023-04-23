import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import { FiChevronDown, FiGrid, FiPhone } from 'react-icons/fi';
import { useClickAway } from 'react-use';
import { LocaleSelector } from './LocaleSelector';

interface TopbarItemProps {
  label: string;
  url: string;
  Icon?: IconType;
}

const TopbarItem = ({ label, url, Icon }: TopbarItemProps) => (
  <li className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-10 lg:[&:nth-of-type(5)]:mr-10">
    <Link
      href={url}
      className="flex items-center transition-colors hover:text-white"
    >
      {Icon && <Icon className="mx-1 md:text-sm"></Icon>}
      <span>{label}</span>
    </Link>
  </li>
);

export const TopBar = () => {
  const [isLocaleSelectorOpen, setIsLocaleSelectorOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('header');
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => setIsLocaleSelectorOpen(false));

  const topbarItems: TopbarItemProps[] = [
    { label: t('topbar.careers'), url: 'careers' },
    { label: t('topbar.help'), url: 'help' },
    { label: t('topbar.buyer'), url: 'buyer' },
    {
      label: t('topbar.download'),
      url: 'https://play.google.com/store/apps',
      Icon: FiGrid,
    },
    { label: t('topbar.phone'), url: 'tel:+0125258192502', Icon: FiPhone },
  ];

  return (
    <div className="bg-[#232323] text-[10px] text-gray-300 md:text-xs">
      <div className="mx-auto flex flex-col items-center px-4 py-1 xl:container md:flex-row md:py-2.5">
        <p className="pb-2 md:pb-0">{t('topbar.discount')}</p>
        <ul className="flex flex-wrap justify-center md:ml-auto">
          {topbarItems.map(item => (
            <TopbarItem key={item.label} {...item} />
          ))}
          <div
            className="relative z-50 ml-2.5 flex cursor-pointer items-center"
            ref={ref}
            onClick={() => setIsLocaleSelectorOpen(prev => !prev)}
          >
            <div className="relative mr-1.5 h-3.5 w-3.5 md:h-[17px] md:w-[17px]">
              <Image
                priority
                src={`/assets/${router.locale}-flag.svg`}
                alt={`${router.locale} locale`}
                fill
              />
            </div>
            <span>{router.locale?.toUpperCase()}</span>
            <FiChevronDown color="#fff"></FiChevronDown>
            <LocaleSelector isOpen={isLocaleSelectorOpen} />
          </div>
        </ul>
      </div>
    </div>
  );
};
