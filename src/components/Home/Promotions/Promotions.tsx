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
    <div className="mx-auto px-4 py-10 md:container flex flex-col items-center">
      <span
        data-aos="fade-up"
        className="font-bold text-sm text-violet-700 uppercase mb-4"
      >
        {t('promotions.promotions')}
      </span>
      <h2
        data-aos="fade-up"
        data-aos-delay="200"
        className="font-bold text-3xl text-black text-center mb-6 md:text-4xl"
      >
        {t('promotions.title')}
      </h2>
      <div className="grid gap-3 max-w-[1150px] w-full md:grid-cols-4">
        <Link href="/" className="col-span-2" data-aos="fade">
          <Image src={promobanner1} alt="promo banner 1 image" />
        </Link>
        <Link href="/" className="row-span-2" data-aos="fade">
          <Image src={promobanner2} alt="promo banner 2 image" />
        </Link>
        <Link href="/" className="row-span-2" data-aos="fade">
          <Image src={promobanner3} alt="promo banner 3 image" />
        </Link>
        <Link href="/" className="col-span-2" data-aos="fade">
          <Image src={promobanner4} alt="promo banner 4 image" />
        </Link>
      </div>
    </div>
  );
};
