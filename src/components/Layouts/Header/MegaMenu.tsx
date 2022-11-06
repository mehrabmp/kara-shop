import Image from 'next/image';
import Link from 'next/link';
import { capitalizeFirstLetter, convertToSlug } from 'utils';
import { Collections } from 'types';

interface Props {
  type: 'men' | 'women';
  collections: Collections;
  onShowMenu: () => void;
  onCloseMenu: () => void;
}

export const MegaMenu = ({
  type,
  collections,
  onShowMenu,
  onCloseMenu,
}: Props) => {
  return (
    <div
      onMouseEnter={onShowMenu}
      onMouseLeave={onCloseMenu}
      className="absolute z-[500] w-full border-t border-solid border-neutral-200 bg-white shadow-md shadow-neutral-300"
    >
      <div className="mx-auto flex max-w-7xl">
        <div className="flex flex-1">
          <div className="ml-4 py-8">
            <Link href={type}>
              <p className="text-sm font-bold uppercase leading-4 tracking-widest text-neutral-800 hover:underline">
                New & Trending
              </p>
            </Link>
            <ul className="pt-2">
              {[
                'New Arrivals',
                'Best Sellers',
                'Only at Kara',
                'Members Exclusives',
                'Release Dates',
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={convertToSlug(item)}
                    className="mb-1.5 text-xs font-normal text-neutral-700 hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mb-2 pt-3">
              {[
                'Fall Collection',
                'Vintage 70s Collection',
                'Pharrell Premium Basics',
                'Tee Bundle:2 for $39 or 3 for $49',
                'Breast Cancer Awareness Collection',
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={convertToSlug(item)}
                    className="mb-1.5 text-xs font-normal text-neutral-700 hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="offer">
              <Image
                priority
                src="/assets/offer.webp"
                alt="offer"
                width={130}
                height={100}
                quality={100}
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-[3] border-l border-solid shadow-neutral-300">
          {collections &&
            collections[type].map(collection => (
              <div
                key={collection.id}
                className="ml-4 w-full max-w-[150px] py-8"
              >
                <Link href={`${type}/${convertToSlug(collection.title)}`}>
                  <p className="text-sm font-bold uppercase leading-4 tracking-widest text-neutral-800 hover:underline">
                    {collection.title}
                  </p>
                </Link>
                <ul className="pt-2">
                  {collection.subCollections.map(subCollection => (
                    <li key={subCollection.id}>
                      <Link
                        href={`${type}/${convertToSlug(
                          collection.title
                        )}/${convertToSlug(subCollection.title)}`}
                        className="mb-1.5 text-xs font-normal text-neutral-700 hover:underline"
                      >
                        {subCollection.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="border-t border-solid shadow-neutral-300">
        <div className="mx-auto flex max-w-7xl">
          <div className="flex flex-1 items-center">
            <Link
              href="sale"
              className="ml-4 w-full max-w-[150px] py-3 text-xs font-bold text-neutral-800 hover:underline"
            >
              Sale
            </Link>
          </div>
          <div className="flex flex-[3] items-center">
            {['shoes', 'clothing', 'accessories', 'sport', ''].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`${type}/${item}`}
                  className="ml-4 w-full max-w-[150px] py-3 text-xs font-bold text-neutral-800 hover:underline"
                >
                  {`All ${capitalizeFirstLetter(
                    type
                  )}'s ${capitalizeFirstLetter(item)}`}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
