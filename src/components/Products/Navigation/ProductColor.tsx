import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Accordion } from 'components';

const colorOptions = [
  { label: 'black', value: 'bg-black' },
  { label: 'white', value: 'bg-white' },
  { label: 'gray', value: 'bg-neutral-600' },
  { label: 'red', value: 'bg-red-700' },
  { label: 'orange', value: 'bg-orange-600' },
  { label: 'yellow', value: 'bg-yellow-500' },
  { label: 'green', value: 'bg-green-700' },
  { label: 'pink', value: 'bg-pink-700' },
  { label: 'blue', value: 'bg-blue-600' },
  { label: 'purple', value: 'bg-purple-700' },
];

export const ProductColor = () => {
  const router = useRouter();

  const { color = '', ...rest } = router.query;

  // convert color param to array
  const [colors, setColors] = useState([color].flat(1).filter(Boolean));

  const firstUpdate = useRef(true);

  const handleChange = (option: string) => {
    if (!colors.includes(option)) setColors([...colors, option]);
    else setColors(colors.filter(col => col !== option));
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    // remove color param if it's empty
    if (colors.length === 0) router.push({ query: { ...rest } });
    else router.push({ query: { ...rest, color: colors } });

    // eslint-disable-next-line
  }, [colors]);

  return (
    <div className="rounded-lg bg-neutral-100">
      <Accordion open>
        <Accordion.Header className="flex w-full items-center justify-between px-2.5 py-2.5 text-sm font-semibold text-neutral-600">
          PRODUCT COLOR
        </Accordion.Header>
        <Accordion.Body>
          <ul className="flex flex-wrap gap-2 px-2.5 pb-2.5">
            {colorOptions.map(({ label, value }) => (
              <li key={label} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id={label}
                  className="hidden"
                  checked={colors.includes(label)}
                  onChange={() => handleChange(label)}
                />
                <label htmlFor={label} className="flex items-center gap-1">
                  <span
                    className={clsx(
                      `h-6 w-6 cursor-pointer overflow-hidden rounded-full p-[2px]`,
                      {
                        'bg-violet-700': colors.includes(label),
                        [value]: !colors.includes(label),
                      }
                    )}
                  >
                    {colors.includes(label) && (
                      <div className="h-full w-full rounded-full bg-white p-[2px]">
                        <div
                          className={`${value} h-full w-full rounded-full`}
                        />
                      </div>
                    )}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion>
    </div>
  );
};
