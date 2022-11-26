import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FiX } from 'react-icons/fi';
import { Collections } from 'types';
import { NavLink } from 'components/Layouts/Header/Header';
import { convertToSlug } from 'utils';
import { Accordion } from 'components';

interface Props {
  navLinks: NavLink[];
  collections: Collections;
  onPageClose: () => void;
}

export const CollectionsPage = ({
  navLinks,
  collections,
  onPageClose,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 bottom-0 z-50 h-full w-full overflow-y-auto bg-white px-5 pt-5">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium">{t('common:collections')}</h2>
        <FiX
          className="cursor-pointer"
          size="1.5rem"
          data-testid="close"
          onClick={onPageClose}
        />
      </div>
      <ul className="mt-5 flex flex-col px-2">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="border-b border-solid border-neutral-100 font-medium text-neutral-800"
          >
            {item.collapsible ? (
              <Accordion>
                <Accordion.Header>{t(`header:${item.name}`)}</Accordion.Header>
                <Accordion.Body className="px-2 text-sm">
                  <ul>
                    {collections?.[item.name === 'men' ? 'men' : 'women'].map(
                      collection => (
                        <li
                          key={collection.id}
                          className="block border-b border-solid border-neutral-100"
                        >
                          <Accordion>
                            <Accordion.Header>
                              {collection.title}
                            </Accordion.Header>
                            <Accordion.Body className="px-2 text-xs">
                              <ul>
                                {collection.subCollections.map(
                                  subCollection => (
                                    <li
                                      key={subCollection.id}
                                      className="block border-b border-solid border-neutral-100 py-2"
                                    >
                                      <Link
                                        href={`/products/${
                                          item.name
                                        }/${convertToSlug(
                                          collection.title
                                        )}/${convertToSlug(
                                          subCollection.title
                                        )}`}
                                        onClick={onPageClose}
                                      >
                                        <h3>{subCollection.title}</h3>
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </Accordion.Body>
                          </Accordion>
                        </li>
                      )
                    )}
                  </ul>
                </Accordion.Body>
              </Accordion>
            ) : (
              <Link
                href={item.name}
                className="block py-4"
                onClick={onPageClose}
              >
                <h3>{t(`header:${item.name}`)}</h3>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
