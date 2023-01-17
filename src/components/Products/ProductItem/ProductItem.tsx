import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsHeart, BsStarFill } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import { Product } from 'types';
import { numberWithCommas } from 'utils';

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent`;

export const Skeleton = () => {
  return (
    <div className="space-y-3">
      <div className={`h-[350px] rounded-xl bg-neutral-200 ${shimmer}`} />
      <div className="flex gap-2">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={`h-[40px] w-[40px] rounded-full bg-neutral-200 ${shimmer}`}
            ></div>
          ))}
      </div>
      <div className={`h-4 w-full rounded-lg bg-neutral-200 ${shimmer}`} />
      <div className={`h-4 w-1/2 rounded-lg bg-neutral-200 ${shimmer}`} />
      <div className="flex justify-between">
        <div className={`h-4 w-1/3 rounded-lg bg-neutral-200 ${shimmer}`} />
        <div className={`h-4 w-1/3 rounded-lg bg-neutral-200 ${shimmer}`} />
      </div>
    </div>
  );
};

export const ProductItem = ({
  id,
  title,
  price,
  rate,
  images,
  type,
  subCollection,
}: Product) => {
  const [currentImage, setCurrentImage] = useState(images[0].imageURL);

  const productLink = `/product/${id}/slug`;

  return (
    <div className="group">
      <div className="relative h-[400px] overflow-hidden rounded-lg transition sm:h-[350px]">
        <Link href={productLink} className="relative block h-full w-full">
          {images.map(({ imageURL, imageBlur }) => (
            <Image
              key={imageURL}
              src={imageURL}
              alt={`${title} image`}
              className={clsx(
                'absolute h-full w-full duration-700 group-hover:scale-110',
                {
                  'opacity-100': currentImage === imageURL,
                  'opacity-0': currentImage !== imageURL,
                }
              )}
              width={350}
              height={350}
              placeholder="blur"
              blurDataURL={imageBlur}
            />
          ))}
          <div className="absolute h-full w-full bg-black opacity-0 duration-500 group-hover:opacity-10"></div>
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
        {images.map(({ imageURL, imageBlur }, index) => (
          <button
            key={index}
            className="h-[40px] w-[40px] overflow-hidden rounded-full"
            onClick={() => setCurrentImage(imageURL)}
          >
            <Image
              src={imageURL}
              alt={`${title} image ${index + 1}`}
              className="object-cover"
              width={40}
              height={40}
              placeholder="blur"
              blurDataURL={imageBlur}
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
