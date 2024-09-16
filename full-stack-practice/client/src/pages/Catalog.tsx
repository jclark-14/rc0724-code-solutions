import { type Product } from '../lib/types';
import { Link } from 'react-router-dom';
import { toDollars } from '../lib';
import { useEffect, useState } from 'react';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const products: Product[] = await res.json();
        setProducts(products);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (isLoading) {
    return <p className="m-4 text-lg">Loading...</p>;
  }

  if (error) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    products && (
      <div className="w-10/12 mx-auto mt-2">
        <div className="border-b-4 b-grey-600">
          <h1 className="text-6xl mb-4 pl-2">Catalog</h1>
        </div>
        <div className="flex flex-wrap">
          {products.map((product) => (
            <Link
              to={`product/${product.productId}`}
              key={product.productId}
              className="basis-1/3">
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    )
  );
}

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { imageUrl, shortDescription, name, price } = product;
  return (
    <div className="border-2 b-grey-600 my-6 mx-4 rounded-md flex flex-col h-fit">
      <div className="catalog-img-div flex justify-center pt-6 mb-14">
        <img src={imageUrl} className="catalog-img" />
      </div>
      <div className="h-1/3 pl-8">
        <h3 className="text-4xl font-semibold  mb-6">{name}</h3>
        <p className="text-2xl text-slate-400 mb-6">{toDollars(price)}</p>
        <p className="text-2xl mb-8">{shortDescription}</p>
      </div>
    </div>
  );
}
