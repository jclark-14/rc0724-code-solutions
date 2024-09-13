import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="w-4/5 mx-auto mt-20">
      <h1 className="text-4xl font-semibold">Page Not Found.</h1>
      <Link to="/">
        <h2 className="text-3xl mt-10">Click here to return to the catalog!</h2>
      </Link>
    </div>
  );
}
