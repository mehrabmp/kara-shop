import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Accordion } from 'components';

const priceOptions = ['$', '$$', '$$$'];

export const ProductPrice = () => {
  const router = useRouter();

  const { price = '', ...rest } = router.query;

  const handleChange = (option: string) => {
    const query = option === price ? { ...rest } : { ...rest, price: option };
    router.push({ query }, undefined, { shallow: true, scroll: true });
  };

  return (
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
                  onClick={() => handleChange(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion>
    </div>
  );
};
