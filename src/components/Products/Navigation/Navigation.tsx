import { Accordion, Rating } from 'components';
import Link from 'next/link';

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
const rateOptions = [4.5, 4, 3];

export const Navigation = () => {
  return (
    <div className="flex h-[500px] flex-col gap-2 rounded-lg bg-white p-2">
      <div className="rounded-lg bg-neutral-100">
        <Accordion open>
          <Accordion.Header className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-semibold text-neutral-600">
            PRODUCT RATE
          </Accordion.Header>
          <Accordion.Body>
            <ul className="flex flex-col gap-3 px-4 pb-2.5">
              {rateOptions.map(rate => (
                <li key={rate} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="high-rate"
                    id="high-rate"
                    className="h-4 w-4 rounded border-gray-300 text-violet-700 focus:ring-violet-700"
                  />
                  <label
                    htmlFor="high-rate"
                    className="flex items-center gap-3"
                  >
                    <Rating defaultValue={rate} size="small" />
                    <span className="text-sm font-medium">{rate}+</span>
                  </label>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion>
      </div>
    </div>
  );
};
