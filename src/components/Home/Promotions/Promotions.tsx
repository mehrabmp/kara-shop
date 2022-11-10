import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import promobanner1 from '../../../../public/assets/promo-banner-1.svg';
import promobanner2 from '../../../../public/assets/promo-banner-2.svg';
import promobanner3 from '../../../../public/assets/promo-banner-3.svg';
import promobanner4 from '../../../../public/assets/promo-banner-4.svg';

export const Promotions = () => {
  const { t } = useTranslation('home');

  return (
    <div className="mx-auto flex flex-col items-center px-4 py-10 md:container">
      <span className="mb-4 text-sm font-bold uppercase text-violet-700">
        {t('promotions.promotions')}
      </span>
      <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
        {t('promotions.title')}
      </h2>
      <div className="grid w-full max-w-[1150px] gap-3 md:grid-cols-4">
        <Link href="/" className="col-span-2">
          <Image src={promobanner1} alt="promo banner 1 image" />
        </Link>
        <Link href="/" className="row-span-2">
          <Image src={promobanner2} alt="promo banner 2 image" />
        </Link>
        <Link href="/" className="row-span-2">
          <Image src={promobanner3} alt="promo banner 3 image" />
        </Link>
        <Link href="/" className="col-span-2">
          <Image src={promobanner4} alt="promo banner 4 image" />
        </Link>
      </div>
    </div>
  );
};
