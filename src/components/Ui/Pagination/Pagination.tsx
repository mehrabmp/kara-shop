import { usePagination } from 'hooks/usePagination';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { cn } from 'utils';

interface Props {
  totalCount?: number;
  currentPage: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  totalCount = 1,
  currentPage,
  pageSize = 1,
  onPageChange,
}: Props) => {
  const paginationRange = usePagination({
    totalCount,
    currentPage,
    pageSize,
  });

  const lastPage = paginationRange
    ? paginationRange[paginationRange?.length - 1]
    : currentPage;

  if (totalCount <= pageSize || currentPage > lastPage) return null;

  return (
    <div className="flex items-center justify-center gap-2 text-lg text-neutral-700">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition hover:bg-neutral-300"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        <FiChevronLeft />
      </button>
      {paginationRange &&
        paginationRange.map((page, index) => (
          <button
            key={index}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full text-base transition hover:bg-neutral-300',
              {
                'bg-neutral-800 text-white': currentPage === page,
              }
            )}
            onClick={() => typeof page !== 'string' && onPageChange(page)}
          >
            {page}
          </button>
        ))}
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition hover:bg-neutral-300"
        onClick={() => currentPage < lastPage && onPageChange(currentPage + 1)}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};
