import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <div className="">
      <div className="h-4 bg-blue-900"></div>
      <nav className="h-20 text-white bg-gray-800 flex items-center">
        <div className="w-11/12 mx-auto ">
          <ul>
            <li className="inline-block text-3xl mr-14">
              <Link to="about">About</Link>
            </li>
            <li className="inline-block text-3xl">
              <Link to="/">Catalog</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
