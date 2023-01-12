import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Accordion } from 'components';

const colorOptions = [
  { label: 'BLACK', value: 'bg-black' },
  { label: 'WHITE', value: 'bg-white' },
  { label: 'GRAY', value: 'bg-neutral-600' },
  { label: 'RED', value: 'bg-red-700' },
  { label: 'ORANGE', value: 'bg-orange-600' },
  { label: 'YELLOW', value: 'bg-yellow-500' },
  { label: 'GREEN', value: 'bg-green-700' },
  { label: 'PINK', value: 'bg-pink-700' },
  { label: 'BLUE', value: 'bg-blue-600' },
  { label: 'PURPLE', value: 'bg-purple-700' },
];

export const ProductColor = () => {
  const router = useRouter();
  const { color = '', ...rest } = router.query;

  // convert color param to array
  const colors = [color].flat(1).filter(Boolean);

  const handleChange = (option: string) => {
    if (!colors.includes(option)) colors.push(option);
    else colors.splice(colors.indexOf(option), 1);

    // remove color param if it's empty
    if (colors.length === 0) router.push({ query: { ...rest } });
    else router.push({ query: { ...rest, color: colors } });
  };

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
