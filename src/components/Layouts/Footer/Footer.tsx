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

const footerLinks = [
  {
    label: 'Company',
    links: [
      ['About', '/about'],
      ['Term of Use', '/term-of-use'],
      ['Privacy Policy', '/privacy-policy'],
      ['How it Works', '/how-works'],
      ['Contact Us', '/contact-us'],
    ],
  },
  {
    label: 'Support',
    links: [
      ['Support Carrer', '/support'],
      ['24h Service', '/24-service'],
      ['Quick Chat', '/quick-chat'],
    ],
  },
  {
    label: 'Contact',
    links: [
      ['Whatsapp', '/whatsapp'],
      ['Support 24', '/24-service'],
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border border-t-1 mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto px-2 py-10">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col md:flex-[2]">
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
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="flex mt-5">
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
          {footerLinks.map(({ label, links }) => (
            <div key={label} className="flex flex-col px-10 md:flex-1">
              <strong className="mb-5 text-neutral-600 font-bold text-base">
                {label}
              </strong>
              <ul className="flex flex-col gap-2 font-normal text-sm text-neutral-500">
                {links.map(([label, href]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-neutral-100">
        <div className="max-w-7xl mx-auto px-2 py-3">
          <div className="flex flex-col gap-3 justify-between items-center text-neutral-700 font-normal text-xs md:flex-row">
            <p>Copyright © 2022 KARA Shop</p>
            <Link href="https://github.com/mehrabmp/kara-shop" target="_blank">
              <BsGithub size="1.25rem" />
            </Link>
            <p>
              Created By{' '}
              <strong>
                <Link href="https://github.com/mehrabmp" target="_blank">
                  Mehrab
                </Link>
              </strong>
              {'. '}
              All Right Reserved{' '}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
