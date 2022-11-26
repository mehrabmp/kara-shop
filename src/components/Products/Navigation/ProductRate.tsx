import { Accordion, Rating } from 'components';
import { useRouter } from 'next/router';
import { useNavigationContext } from './NavigationContext';

const rateOptions = ['4.5', '4', '3'];

export const ProductRate = () => {
  const { addQueryParam, removeQueryParam } = useNavigationContext();

  const router = useRouter();

  const { rate = 0 } = router.query;

  return (
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
  );
};
