import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

const socialMedias: [IconType, string][] = [
  [BsInstagram, 'https://instagram.com'],
  [BsTwitter, 'https://twitter.com'],
  [BsFacebook, 'https://facebook.com'],
  [BsLinkedin, 'https://linkedin.com'],
];

export const Footer = () => {
  const { t } = useTranslation('footer');

  const footerLinks = [
    {
      label: t('company'),
      links: [
        [t('companyLinks.about'), '/about'],
        [t('companyLinks.termOfUse'), '/term-of-use'],
        [t('companyLinks.privacyPolicy'), '/privacy-policy'],
        [t('companyLinks.howItWorks'), '/how-works'],
        [t('companyLinks.contactUs'), '/contact-us'],
      ],
    },
    {
      label: t('support'),
      links: [
        [t('supportLinks.supportCareer'), '/support'],
        [t('supportLinks.service'), '/24-service'],
        [t('supportLinks.quickChat'), '/quick-chat'],
      ],
    },
    {
      label: t('contact'),
      links: [
        [t('contactLinks.whatsapp'), '/whatsapp'],
        [t('contactLinks.support'), '/24-service'],
      ],
    },
  ];

  return (
    <footer className="mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-1">
            <Link href="/">
              <Image
                priority
                src="/logo.png"
                alt="kara shop logo"
                width={100}
                height={35}
                quality={100}
              />
            </Link>
            <p className="text-sm font-normal text-neutral-500 py-4">
              {t('kara')}
            </p>
            <div className="flex justify-center my-5 md:justify-start">
              {socialMedias.map(([Icon, href]) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="bg-neutral-200 text-neutral-600 rounded-lg p-2 mr-2 hover:bg-neutral-300 hover:text-neutral-700 transition"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-5 md:flex-[2] md:justify-around md:mt-0">
            {footerLinks.map(({ label, links }) => (
              <div key={label} className="flex flex-col">
                <strong className="mb-5 text-neutral-600 font-bold text-sm md:text-base">
                  {label}
                </strong>
                <ul className="flex flex-col gap-2 font-normal text-xs text-neutral-500 md:text-sm">
                  {links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="hover:text-neutral-700 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-neutral-100">
        <div className="max-w-7xl mx-auto px-2 py-3">
          <div className="flex flex-col gap-3 justify-between items-center text-neutral-700 font-medium text-xs md:flex-row">
            <p>{t('copyright')}</p>
            <Link href="https://github.com/mehrabmp/kara-shop" target="_blank">
              <BsGithub size="1.25rem" />
            </Link>
            <p>
              {`${t('createdBy')} `}
              <strong>
                <Link href="https://github.com/mehrabmp" target="_blank">
                  Mehrab
                </Link>
              </strong>
              {'. '}
              {t('reserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
