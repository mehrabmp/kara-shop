import { useRouter } from 'next/router';
import { NavigationContext } from './NavigationContext';
import { ProductPrice } from './ProductPrice';
import { ProductRate } from './ProductRate';

const sortOptions = [
  { name: 'Most Popular', href: '#' },
  { name: 'Best Rating', href: '#' },
  { name: 'Newest', href: '#' },
  { name: 'Price: Low to High', href: '#' },
  { name: 'Price: High to Low', href: '#' },
];
const sizeOptions = [
  { name: 'Small', sign: 'S' },
  { name: 'Medium', sign: 'M' },
  { name: 'Large', sign: 'L' },
  { name: 'Extra Large', sign: 'XL' },
  { name: 'Double Extra Large', sign: '2XL' },
  { name: 'Triple Extra Large', sign: '3XL' },
];
const colorOptions = [
  { value: 'white', label: 'White' },
  { value: 'beige', label: 'Beige' },
  { value: 'blue', label: 'Blue' },
  { value: 'brown', label: 'Brown' },
  { value: 'green', label: 'Green' },
  { value: 'purple', label: 'Purple' },
];

export const Navigation = () => {
  const router = useRouter();

  const addQueryParam = (key: string, value: string) =>
    router.push({ query: { ...router.query, [key]: value } });

  const removeQueryParam = (key: string) => {
    delete router.query[key];
    router.push({ query: { ...router.query } });
  };

  return (
    <NavigationContext.Provider value={{ addQueryParam, removeQueryParam }}>
      <div className="flex h-[500px] flex-col gap-2 rounded-lg bg-white p-2">
        <ProductRate />
        <ProductPrice />
      </div>
    </NavigationContext.Provider>
  );
};
