import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import Countdown from 'react-countdown';
import { FiChevronRight, FiX } from 'react-icons/fi';

const AnnouncementBar = () => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isBarHovered, setIsBarHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsBarOpen(true), 2000);
  }, []);

  const epochMs = new Date(2022, 0).valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  const index = Math.floor((now - epochMs) / msInDay);
  const nextday = (index + 1) * msInDay + epochMs;

  return (
    <AnimateHeight duration={300} height={isBarOpen ? 'auto' : 0}>
      <div className="relative flex h-8 items-center justify-center overflow-hidden bg-[#e91e63] text-[10px] font-normal text-white transition-all duration-300 md:h-9 md:text-sm">
        <Link
          href={'/off'}
          className="flex h-full w-full items-center justify-center p-2"
          onMouseEnter={() => setIsBarHovered(true)}
          onMouseLeave={() => setIsBarHovered(false)}
        >
          <h4 className="mr-1">
            Today deal sale off <b>50%</b>. End in{' '}
            {<b>{<Countdown date={nextday} />}</b>}. Shop Now
          </h4>
          <FiChevronRight
            className={`transition-all duration-200 ${
              isBarHovered && 'ml-1.5'
            }`}
          />
        </Link>
        <div className="absolute bottom-0 right-0 top-0 flex cursor-pointer items-center justify-center px-2">
          <FiX size="1.25rem" onClick={() => setIsBarOpen(false)} />
        </div>
      </div>
    </AnimateHeight>
  );
};

export default AnnouncementBar;
