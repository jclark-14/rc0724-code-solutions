import { Link, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return isOpen ? (
    <AppDrawerOpen menuItems={menuItems} onClick={handleClick} />
  ) : (
    <AppDrawerClosed menuItems={menuItems} onClick={handleClick} />
  );
}

type DrawerProps = {
  menuItems: MenuItem[];
  onClick: () => void;
};

function AppDrawerOpen({ menuItems, onClick }: DrawerProps) {
  return (
    <div className="flex w-screen h-screen">
      <div className="basis-96 pl-2 flex flex-col">
        <button className="w-fit h-fit">
          <FaBars size="50px" className="my-8" onClick={onClick} />
        </button>
        <h2 className="text-4xl my-8">Hylian Shopping</h2>
        {menuItems.map((item) => (
          <Link
            to={item.path}
            className="text-2xl py-4 flex items-center isOpen">
            <img src={item.iconUrl} className=" h-8 w-8 mr-2 inline-block" />
            {item.name}
          </Link>
        ))}
      </div>
      <div className="grow border-l-2 drop-shadow-lg pl-1 pt-6">
        <Outlet />
      </div>
    </div>
  );
}

function AppDrawerClosed({ menuItems, onClick }: DrawerProps) {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-24 pl-2 flex flex-col items-center">
        <button className="w-fit h-fit">
          <FaBars size="50px" className="my-8 pr-2" onClick={onClick} />
        </button>
        {menuItems.map((item) => (
          <Link
            to={item.path}
            className="text-2xl my-4 flex items-center justify-center">
            <img src={item.iconUrl} className=" h-8 w-8 mr-2 inline-block" />
          </Link>
        ))}
      </div>
      <div className="grow border-l-2 drop-shadow-lg pl-1 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
