import Link from 'next/link';
import { Product } from 'types';
import { ProductItem } from '../ProductItem/ProductItem';

interface Props {
  products: Product[];
}

export const ProductsList = ({ products }: Props) => {
  return (
    <div className="rounded-lg bg-white">
      <div className="grid grid-cols-4 gap-5 p-4">
        {products.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
