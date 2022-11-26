import { Accordion } from 'components';
import { useRouter } from 'next/router';
import { useNavigationContext } from './NavigationContext';

const sizeOptions = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

export const ProductSize = () => {
  const { addQueryParam, removeQueryParam } = useNavigationContext();

  const router = useRouter();

  const { size = [''] } = router.query;

  const handleChange = (option: string) => {
    if (!Array.isArray(size)) return;

    if (size.includes(option))
      addQueryParam(
        'size',
        size.filter(str => str !== option)
      );
    else addQueryParam('size', [...new Set([...size, option])]);
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
                  checked={Array.isArray(size) && size.includes(option)}
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
