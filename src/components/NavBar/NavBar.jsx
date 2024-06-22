import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import DarkMode from '../DarkMode/DarkMode';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'Monitores', to: `category/monitores` },
    { name: 'Tarjetas de Video', to: `category/tarjetas%20de%20video` },
    { name: 'Microprocesadores', to: `category/microprocesadores` },
  ];

  return (
    <header
      className={`fixed sm:px-16 left-0 py-3 px-5 transition duration-300 dark:text-black text-white flex justify-between top-0 items-center z-50 dark:shadow-md shadow-custom w-full ${
        scrolled ? 'backdrop-blur-md' : 'backdrop-blur-sm'
      }`}
    >
      <span className="text-lg flex flex-grow basis-0 font-mono">
        <Link to="/" className="sm:flex hidden">
          XARC
        </Link>
        <MenuBar />
      </span>

      <div className='items-center flex text-center'>
        <Link to="/" className="sm:hidden font-semibold flex text-lg">
          XARC
        </Link>
        <ul className="hidden sm:flex">
          {menuItems.map(({ to, name }, index) => (
            <li key={index}>
              <Link
                className="sm:flex hidden px-[8px] uppercase font-bold font-dosis rounded py-[4px] dark:hover:text-black dark:hover:bg-gray-200 hover:bg-gray-500 text-sm"
                to={to}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end flex-grow basis-0 items-center">
        <DarkMode />
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
