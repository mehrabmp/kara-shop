import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

interface Props {
  defaultValue: number;
  name?: 'read-only' | 'controlled';
  size?: 'small' | 'medium' | 'large';
  onChange?: (rating: number) => void;
}

export const Rating = ({
  defaultValue,
  name = 'read-only',
  size = 'medium',
  onChange,
}: Props) => {
  const [ratingValue, setRatingValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState(defaultValue);

  useEffect(() => onChange && onChange(ratingValue), [ratingValue, onChange]);

  const onStarHover = (index: number) =>
    name === 'controlled' && setHoverValue(index);
  const onStarLeave = () => name === 'controlled' && setHoverValue(ratingValue);
  const onStarClick = (index: number) =>
    name === 'controlled' && setRatingValue(index);

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => {
        const index = i + 1;

        return (
          <button
            type="button"
            key={index}
            className={clsx('text-yellow-400', {
              'text-base': size === 'small',
              'text-lg': size === 'medium',
              'text-xl': size === 'large',
              'cursor-default': name === 'read-only',
            })}
            onMouseEnter={() => onStarHover(index)}
            onMouseLeave={onStarLeave}
            onClick={() => onStarClick(index)}
          >
            {Math.max(hoverValue, ratingValue) >= index ? (
              <BsStarFill />
            ) : ratingValue >= index - 0.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </button>
        );
      })}
    </div>
  );
};
