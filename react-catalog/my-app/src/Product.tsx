import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { readProduct, toDollars } from './lib';
import { type Product } from './lib/data';

export function Product() {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const productId = Number(id);

  useEffect(() => {
    async function loadProduct() {
      try {
        const product = await readProduct(productId);
        setProduct(product);
        console.log(product);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProduct();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <Navigate to="*" />;
  }
  const { name, longDescription, price, imageUrl } = product;

  function handleClick() {
    alert(`${name}added to cart`);
  }

  console.log(product);
  return (
    <div className="w-10/12 mx-auto mt-2">
      <Link to="/">
        <p className="text-3xl mt-10">{`< Back to catalog`}</p>
      </Link>
      <div className="border-4 rounded-md mt-10 mb-6 py-14 b-grey-600 flex ">
        <div className=" flex justify-center pt-6 mb-14 basis-1/3 product-img">
          <img src={imageUrl} />
        </div>
        <div className="basis-2/3 pl-8">
          <h3 className="text-4xl font-semibold  mb-6">{name}</h3>
          <p className="text-2xl text-slate-400 mb-6">{toDollars(price)}</p>
          <p className="text-2xl mb-8">{longDescription}</p>
        </div>
      </div>
      <Link to="/">
        <button
          className=" bg-slate-200 px-8 py-4 rounded-md text-2xl"
          onClick={handleClick}>
          Add to Cart
        </button>
      </Link>
    </div>
  );
}
