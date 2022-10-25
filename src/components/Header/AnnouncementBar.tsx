import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiChevronRight, FiX } from 'react-icons/fi';

export const AnnouncementBar = () => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isBarHovered, setIsBarHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsBarOpen(true), 3000);
  }, []);

  return (
    <div
      className={`bg-[#e91e63] text-xs md:text-sm text-white flex justify-center items-center relative overflow-hidden transition-all duration-300 ${
        isBarOpen ? 'h-8 md:h-9' : 'h-0'
      }`}
    >
      <Link href={'/off'}>
        <a
          className="flex justify-center items-center w-full h-full p-2"
          onMouseEnter={() => setIsBarHovered(true)}
          onMouseLeave={() => setIsBarHovered(false)}
        >
          <h4>
            Today deal sale off <b>70%</b>. Hurry Up
          </h4>
          <FiChevronRight
            className={`transition-all duration-200 ${
              isBarHovered && 'ml-1.5'
            }`}
          />
        </a>
      </Link>
      <div className="absolute right-0 top-0 bottom-0 px-2 cursor-pointer flex justify-center items-center">
        <FiX size="1.25rem" onClick={() => setIsBarOpen(false)} />
      </div>
    </div>
  );
};
