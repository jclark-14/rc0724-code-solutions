import { useEffect, useState } from 'react';
import { type Item, readItem } from '../lib/read';
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Details() {
  const [item, setItem] = useState<Item>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const { itemId } = useParams();
  const id = Number(itemId);

  useEffect(() => {
    async function loadItem(id: number) {
      try {
        const item = await readItem(id);
        setItem(item);
        setError(undefined);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (id) {
      setIsLoading(true);
      loadItem(id);
    }
  }, [error, id]);

  if (isLoading) return <div>Loading...</div>;

  if (error || !item) {
    return <Navigate to="*" replace={true} />;
  }
  const { name, image, description } = item;
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to="/" className="p-3 text-gray-600 cursor-pointer">
            &lt; Back to Dashboard
          </Link>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={image}
                alt={name}
                className="w-full h-80 object-contain"
              />
            </div>
            <h2 className="w-full sm:w-1/2 md:w-3/5 px-4 font-bold">{name}</h2>
          </div>
          <div className="px-4">
            <p className="whitespace-pre-wrap">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
