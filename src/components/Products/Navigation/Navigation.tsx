import clsx from 'clsx';
import { Accordion, Rating } from 'components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const sortOptions = [
  { name: 'Most Popular', href: '#' },
  { name: 'Best Rating', href: '#' },
  { name: 'Newest', href: '#' },
  { name: 'Price: Low to High', href: '#' },
  { name: 'Price: High to Low', href: '#' },
];
const sizeOptions = [
  { name: 'Small', sign: 'S' },
  { name: 'Medium', sign: 'M' },
  { name: 'Large', sign: 'L' },
  { name: 'Extra Large', sign: 'XL' },
  { name: 'Double Extra Large', sign: '2XL' },
  { name: 'Triple Extra Large', sign: '3XL' },
];
const colorOptions = [
  { value: 'white', label: 'White' },
  { value: 'beige', label: 'Beige' },
  { value: 'blue', label: 'Blue' },
  { value: 'brown', label: 'Brown' },
  { value: 'green', label: 'Green' },
  { value: 'purple', label: 'Purple' },
];
const rateOptions = ['4.5', '4', '3'];
const priceOptions = ['$', '$$', '$$$'];

export const Navigation = () => {
  const router = useRouter();

  const { rate = 0, price = '' } = router.query;

  const addQueryParam = (key: string, value: string) =>
    router.push({ query: { ...router.query, [key]: value } });

  const removeQueryParam = (key: string) => {
    delete router.query[key];
    router.push({ query: { ...router.query } });
  };

  return (
    <div className="flex h-[500px] flex-col gap-2 rounded-lg bg-white p-2">
      <div className="rounded-lg bg-neutral-100">
        <Accordion open>
          <Accordion.Header className="flex w-full items-center justify-between px-2.5 py-2.5 text-sm font-semibold text-neutral-600">
            PRODUCT RATE
          </Accordion.Header>
          <Accordion.Body>
            <ul className="flex flex-col gap-3 px-2.5 pb-2.5">
              {rateOptions.map(option => (
                <li key={option} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={String(option)}
                    className="h-4 w-4 rounded border-gray-300 text-violet-700 focus:ring-violet-700"
                    checked={option === rate}
                    onChange={() =>
                      option === rate
                        ? removeQueryParam('rate')
                        : addQueryParam('rate', option)
                    }
                  />
                  <label
                    htmlFor={String(option)}
                    className="flex items-center gap-3"
                  >
                    <Rating defaultValue={Number(option)} size="small" />
                    <span className="text-sm font-medium">{option}+</span>
                  </label>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion>
      </div>
      <div className="rounded-lg bg-neutral-100">
        <Accordion open>
          <Accordion.Header className="flex w-full items-center justify-between px-2.5 py-2.5 text-sm font-semibold text-neutral-600">
            PRODUCT PRICE
          </Accordion.Header>
          <Accordion.Body>
            <ul className="flex items-center justify-around gap-2 px-2.5 pb-2.5">
              {priceOptions.map(option => (
                <li key={option} className="flex">
                  <button
                    className={clsx(
                      'w-16 cursor-pointer rounded-full border border-solid py-1 text-center text-sm  tracking-wider',
                      {
                        'border-neutral-500 font-medium text-neutral-500':
                          price !== option,
                      },
                      {
                        'border-neutral-900 bg-neutral-900 font-normal text-white':
                          price === option,
                      }
                    )}
                    onClick={() =>
                      option === price
                        ? removeQueryParam('price')
                        : addQueryParam('price', option)
                    }
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion>
      </div>
    </div>
  );
};
