import { type Product } from './lib/data';
import { Link } from 'react-router-dom';
import { readCatalog, toDollars } from './lib';
import { useEffect, useState } from 'react';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    async function loadCatalog() {
      const products = await readCatalog();
      try {
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    loadCatalog();
  }, []);

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
