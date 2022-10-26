import Link from 'next/link';
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { FiChevronRight, FiX } from 'react-icons/fi';

const AnnouncementBar = () => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isBarHovered, setIsBarHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsBarOpen(true), 3000);
  }, []);

  const epochMs = new Date(2022, 0).valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  const index = Math.floor((now - epochMs) / msInDay);
  const nextday = (index + 1) * msInDay + epochMs;

  return (
    <div
      className={`bg-[#e91e63] text-[10px] md:text-sm font-normal text-white flex justify-center items-center relative overflow-hidden transition-all duration-300 ${
        isBarOpen ? 'h-8 md:h-9' : 'h-0'
      }`}
    >
      <Link
        href={'/off'}
        className="flex justify-center items-center w-full h-full p-2"
        onMouseEnter={() => setIsBarHovered(true)}
        onMouseLeave={() => setIsBarHovered(false)}
      >
        <h4 className="mr-1">
          Today deal sale off <b>50%</b>. End in{' '}
          {<b>{<Countdown date={nextday} />}</b>}. Shop Now
        </h4>
        <FiChevronRight
          className={`transition-all duration-200 ${isBarHovered && 'ml-1.5'}`}
        />
      </Link>
      <div className="absolute right-0 top-0 bottom-0 px-2 cursor-pointer flex justify-center items-center">
        <FiX size="1.25rem" onClick={() => setIsBarOpen(false)} />
      </div>
    </div>
  );
};

export default AnnouncementBar;
