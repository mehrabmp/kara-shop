import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
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
    [t('topbar.careers'), 'careers'],
    [t('topbar.help'), 'help'],
    [t('topbar.buyer'), 'buyer'],
    [t('topbar.download'), 'https://play.google.com/store/apps', FiGrid],
    [t('topbar.phone'), 'tel:+0125258192502', FiPhone],
  ];

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => setIsChangeLocaleOpen(false));

  return (
    <div className="bg-[#232323] text-[10px] text-gray-300 md:text-xs">
      <div className="mx-auto flex flex-col items-center px-4 py-1 md:flex-row md:py-2.5 xl:container">
        <p className="pb-2 md:pb-0">{t('topbar.discount')}</p>
        <ul className="flex flex-wrap justify-center md:ml-auto">
          {topbarItems.map(([label, url, Icon]) => (
            <li
              key={label}
              className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-10 lg:[&:nth-of-type(5)]:mr-10"
            >
              <Link
                href={url}
                className="flex items-center transition-colors hover:text-white"
              >
                {Icon && <Icon className="mx-1 md:text-sm"></Icon>}
                <span>{label}</span>
              </Link>
            </li>
          ))}
          <div
            className="relative z-50 ml-2.5 flex cursor-pointer items-center"
            ref={ref}
            onClick={() => setIsChangeLocaleOpen(prev => !prev)}
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
            <ChangeLocale isOpen={isChangeLocaleOpen} />
          </div>
        </ul>
      </div>
    </div>
  );
};
