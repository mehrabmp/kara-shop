import { useRouter } from 'next/router';
import { Accordion } from 'components';

const sizeOptions = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

export const ProductSize = () => {
  const router = useRouter();

  const { size = '', ...rest } = router.query;

  const handleChange = (option: string) => {
    // conver size param to array
    const sizes = [size].flat(1).filter(Boolean);

    if (!sizes.includes(option)) sizes.push(option);
    else sizes.splice(sizes.indexOf(option), 1);

    // remove size param if it's empty
    if (sizes.length === 0) router.push({ query: { ...rest } });
    else router.push({ query: { ...rest, size: sizes } });
  };

  return (
    <div className="rounded-lg bg-neutral-100">
      <Accordion open>
        <Accordion.Header className="flex w-full items-center justify-between px-2.5 py-2.5 text-sm font-semibold text-neutral-600">
          PRODUCT SIZE
        </Accordion.Header>
        <Accordion.Body>
          <ul className="flex flex-col gap-3 px-2.5 pb-2.5">
            {sizeOptions.map(option => (
              <li key={option} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id={option}
                  className="h-4 w-4 rounded border-gray-300 text-violet-700 focus:ring-violet-700"
                  checked={[size].flat(1).includes(option)}
                  onChange={() => handleChange(option)}
                />
                <label htmlFor={option} className="flex items-center gap-1">
                  <span className="text-sm font-medium">{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion>
    </div>
  );
};
