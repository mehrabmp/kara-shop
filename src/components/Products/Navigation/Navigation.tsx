import { ProductColor } from './ProductColor';
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

export const Navigation = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white p-2">
      <ProductSize />
      <ProductRate />
      <ProductPrice />
      <ProductColor />
    </div>
  );
};
