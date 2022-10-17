import Image from 'next/future/image';
import Link from 'next/link';
import { capitalizeFirstLetter, convertToSlug } from 'utils';
import { MenuItem } from './Header';

interface Props {
  currentMenuItem: MenuItem;
  onShowMenu: (menuItem: MenuItem) => void;
  onCloseMenu: () => void;
}

export const MegaMenu = ({
  currentMenuItem,
  onShowMenu,
  onCloseMenu,
}: Props) => {
  return (
    <div
      onMouseEnter={() => onShowMenu(currentMenuItem)}
      onMouseLeave={onCloseMenu}
      className="bg-white shadow-md shadow-neutral-300 border-t border-solid border-neutral-200 absolute w-full"
    >
      <div className="flex max-w-7xl mx-auto">
        <div className="flex-1 flex">
          <div className="py-8 ml-4">
            <Link href={`${currentMenuItem.title}`}>
              <a>
                <p className="font-bold text-sm uppercase text-neutral-800 tracking-widest leading-4 hover:underline">
                  New & Trending
                </p>
              </a>
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
                  <Link href={convertToSlug(item)}>
                    <a className="font-normal text-xs text-neutral-700 mb-1.5 hover:underline">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="pt-3 mb-2">
              {[
                'Fall Collection',
                'Vintage 70s Collection',
                'Pharrell Premium Basics',
                'Tee Bundle:2 for $39 or 3 for $49',
                'Breast Cancer Awareness Collection',
              ].map((item, index) => (
                <li key={index}>
                  <Link href={convertToSlug(item)}>
                    <a className="font-normal text-xs text-neutral-700 mb-1.5 hover:underline">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="offer">
              <a>
                <Image
                  priority
                  src="/assets/offer.webp"
                  alt="offer"
                  width={130}
                  height={100}
                  quality={100}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex-[3] flex shadow-neutral-300 border-l border-solid">
          {currentMenuItem.collections?.map(collection => (
            <div key={collection.id} className="max-w-[150px] w-full py-8 ml-4">
              <Link
                href={`${currentMenuItem.title}/${convertToSlug(
                  collection.title
                )}`}
              >
                <a>
                  <p className="font-bold text-sm uppercase text-neutral-800 tracking-widest leading-4 hover:underline">
                    {collection.title}
                  </p>
                </a>
              </Link>
              <ul className="pt-2">
                {collection.subCollections.map(subCollection => (
                  <li key={subCollection.id}>
                    <Link
                      href={`${currentMenuItem.title}/${convertToSlug(
                        collection.title
                      )}/${convertToSlug(subCollection.title)}`}
                    >
                      <a className="font-normal text-xs text-neutral-700 mb-1.5 hover:underline">
                        {subCollection.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="shadow-neutral-300 border-t border-solid">
        <div className="flex max-w-7xl mx-auto">
          <div className="flex-1 flex items-center">
            <Link href="sale">
              <a className="font-bold text-xs text-neutral-800 hover:underline max-w-[150px] w-full py-3 ml-4">
                Sale
              </a>
            </Link>
          </div>
          <div className="flex-[3] flex items-center">
            {['shoes', 'clothing', 'accessories', 'sport', ''].map(
              (item, index) => (
                <Link key={index} href={`${currentMenuItem.title}/${item}`}>
                  <a className="font-bold text-xs text-neutral-800 hover:underline max-w-[150px] w-full py-3 ml-4">
                    {`All ${capitalizeFirstLetter(
                      currentMenuItem.title
                    )}'s ${capitalizeFirstLetter(item)}`}
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
