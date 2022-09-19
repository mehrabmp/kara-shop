import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/future/image';
import { useTranslation } from 'next-i18next';
import { FiPhone, FiGrid, FiChevronDown } from 'react-icons/fi';
import { ChangeLocale } from './ChangeLocale';
import { useClickAway } from 'react-use';
import { IconType } from 'react-icons';

export const TopBar = () => {
  const [isChangeLocaleOpen, setIsChangeLocaleOpen] = useState(false);

  const router = useRouter();

  const { t } = useTranslation('header');

  const topbarItems: [string, string, IconType?][] = [
    [t('topbar.careers'), '#'],
    [t('topbar.help'), '#'],
    [t('topbar.buyer'), '#'],
    [t('topbar.download'), '#', FiGrid],
    [t('topbar.phone'), '#', FiPhone],
  ];

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => setIsChangeLocaleOpen(false));

  return (
    <div className="bg-[#232323] text-gray-300 text-[10px] md:text-xs">
      <div className="mx-auto px-4 py-1 flex flex-col items-center md:flex-row md:py-2.5 xl:container">
        <p className="pb-2 md:pb-0">{t('topbar.discount')}</p>
        <ul className="flex justify-center flex-wrap md:ml-auto">
          {topbarItems.map(([label, url, Icon]) => (
            <li
              key={label}
              className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-10 lg:[&:nth-of-type(5)]:mr-10"
            >
              <Link href={url}>
                <a className="flex items-center hover:text-white transition-colors">
                  {Icon && <Icon className="mx-1 md:text-sm"></Icon>}
                  <span>{label}</span>
                </a>
              </Link>
            </li>
          ))}
          <div
            className="flex items-center cursor-pointer ml-2.5 relative z-50"
            ref={ref}
            onClick={() => setIsChangeLocaleOpen(prev => !prev)}
          >
            <div className="relative mr-1.5 w-3.5 h-3.5 md:w-[17px] md:h-[17px]">
              <Image
                priority
                src={`/assets/${router.locale}-flag.svg`}
                alt={`${router.locale} locale`}
                fill
              />
            </div>
            <span>{router.locale?.toUpperCase()}</span>
            <FiChevronDown color="#fff"></FiChevronDown>
            <ChangeLocale isOpen={isChangeLocaleOpen} />
          </div>
        </ul>
      </div>
    </div>
  );
};
