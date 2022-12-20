import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsHeart, BsStarFill } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import { Product } from 'types';
import { numberWithCommas } from 'utils';

export const ProductItem = ({
  id,
  title,
  price,
  rate,
  images,
  type,
  subCollection,
}: Product) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const productLink = `/product/${id}/slug`;

  return (
    <div className="group overflow-hidden">
      <div className="relative h-[350px] w-full overflow-hidden rounded-lg transition">
        <Link href={productLink}>
          <Image
            src={currentImage}
            alt={`${title} image`}
            className="duration-[2s] group-hover:scale-110"
            priority
            fill
          />
          <div className="h-full w-full bg-black opacity-0 duration-500 group-hover:opacity-10"></div>
        </Link>
        <button
          className="absolute top-3 right-3 z-10 hidden rounded-xl bg-white p-2.5 text-lg group-hover:block"
          onClick={() => console.log('wishlist')}
        >
          <BsHeart className="text-red-600" />
        </button>
        <button
          className="absolute bottom-3 right-3 z-10 hidden rounded-xl bg-white p-2.5 text-lg group-hover:block"
          onClick={() => console.log('cart')}
        >
          <FiShoppingBag className="text-blue-500" />
        </button>
      </div>
      <div className="my-3 flex gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            className={clsx('h-[35px] w-[35px] overflow-hidden rounded-full', {
              'border-2 border-solid border-violet-700': currentImage === img,
            })}
            onClick={() => setCurrentImage(img)}
          >
            <Image
              src={img}
              alt={`${title} image ${index + 1}`}
              className="object-cover"
              width={35}
              height={35}
              priority
            />
          </button>
        ))}
      </div>
      <Link href={productLink}>
        <h2 className="text-base font-medium">{title}</h2>
        <h3 className="py-1 text-xs font-normal capitalize text-neutral-500">
          {type.toString().toLowerCase()} {subCollection.title}
        </h3>
        <div className="flex items-center justify-between">
          <h3 className="my-3 text-xl font-medium text-black">
            ${numberWithCommas(price.toFixed(2))}
          </h3>
          <div className="flex items-center justify-center text-xs text-neutral-500">
            <BsStarFill className="mr-1 text-yellow-400" />
            <h4>{rate} (69 Reviews)</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};
