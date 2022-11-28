import { ProductPrice } from './ProductPrice';
import { ProductRate } from './ProductRate';
import { ProductSize } from './ProductSize';

// const sortOptions = [
//   { name: 'Most Popular', href: '#' },
//   { name: 'Best Rating', href: '#' },
//   { name: 'Newest', href: '#' },
//   { name: 'Price: Low to High', href: '#' },
//   { name: 'Price: High to Low', href: '#' },
// ];
// const colorOptions = [
//   { value: 'white', label: 'White' },
//   { value: 'beige', label: 'Beige' },
//   { value: 'blue', label: 'Blue' },
//   { value: 'brown', label: 'Brown' },
//   { value: 'green', label: 'Green' },
//   { value: 'purple', label: 'Purple' },
// ];

export const Navigation = () => {
  return (
    <div className="flex h-[500px] flex-col gap-2 rounded-lg bg-white p-2">
      <ProductSize />
      <ProductRate />
      <ProductPrice />
    </div>
  );
};
