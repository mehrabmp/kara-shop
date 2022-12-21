import { Product } from 'types';
import { ProductItem } from '../ProductItem/ProductItem';

interface Props {
  products: Product[];
}

export const ProductsList = ({ products }: Props) => {
  return (
    <div className="rounded-lg bg-white">
      <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((product, index) => (
          <div key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <ProductItem {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};
