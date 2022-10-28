import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';

export const Hero = () => {
  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="min-h-[80vh] max-w-7xl mx-auto px-4 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-center pt-10 md:items-start md:pt-0 md:px-4">
          <span
            data-aos="fade-down"
            data-aos-delay="700"
            className="bg-blue-100 text-blue-600 font-semibold text-sm rounded-md py-1 px-4 mb-2.5 md:mb-5"
          >
            Sale 70%
          </span>
          <h2
            data-aos="fade-right"
            data-aos-delay="700"
            className="font-bold text-black mb-5 text-[2.5rem] leading-tight text-center md:text-left md:text-5xl"
          >
            An Industrial Take on Streetwear
          </h2>
          <h3
            data-aos="fade-right"
            data-aos-delay="700"
            className="font-regular text-lg text-neutral-700 mb-5 leading-tight text-center md:text-left md:mb-10"
          >
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </h3>
          <Link
            href={''}
            data-aos="fade-up"
            data-aos-delay="700"
            className="font-normal text-white text-base bg-zinc-900 flex items-center py-2.5 px-8 mb-10 rounded shadow-sm shadow-zinc-500"
          >
            <FiShoppingCart />
            <span className="ml-2">Start Shopping</span>
          </Link>
          <div className="flex flex-wrap justify-center w-full mb-5 md:justify-between">
            {['bazaar', 'bustle', 'versace', 'instyle'].map((brand, index) => (
              <Image
                key={index}
                priority
                src={`/assets/${brand}.svg`}
                alt={`${brand} brand`}
                width={0}
                height={0}
                className={'mx-4 my-1 w-auto h-auto'}
                data-aos="flip-right"
                data-aos-delay="700"
              />
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-start items-end">
          <Image
            priority
            src="/assets/hero.webp"
            alt="hero"
            quality={100}
            width={550}
            height={550}
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
      </div>
    </div>
  );
};
