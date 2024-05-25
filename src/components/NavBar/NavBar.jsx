import { Link } from 'react-router-dom';

const NavBar = () => {
  const menuItems = [
    { name: 'Monitores', to: `category/monitores` },
    { name: 'Tarjetas de Video', to: `category/tarjetas de video` },
    { name: 'Microprocesadores', to: `category/microprocesadores` },
  ];

  const menuIcons = [
    { src: '/user.svg', alt: 'iconUser', responsive: 'hidden sm:flex' },
    { src: '/search.svg', alt: 'iconSearch', responsive: 'hidden sm:flex' },
    { src: '/shopping-cart.svg', alt: 'iconCart', responsive: 'hidden sm:flex' },
    { src: '/menu.svg', alt: 'iconMenu', responsive: 'flex sm:hidden' },
  ];

  return (
    <header className="fixed sm:px-16 py-3 px-5 bg-white text-black flex justify-between top-0 items-center z-40 shadow-md w-full">
      <span className="text-lg py-0 flex flex-grow basis-0 font-mono">
        <Link to="/">XARC</Link>
      </span>

      <ul className="hidden sm:flex">
        <li>
          {menuItems.map(({ to, name }, index) => (
            <Link
              className="px-[8px] font uppercase font-bold font-dosis rounded py-[4px] hover:bg-gray-100 hover:underline text-sm"
              key={index}
              to={to}
            >
              {name}
            </Link>
          ))}
        </li>
      </ul>

      <div className="flex gap-1 items-center justify-end flex-grow basis-0">
        {menuIcons.map(({ src, alt, responsive }, index) => (
          <button
            key={index}
            className={`flex gap-1 rounded-full items-center hover:bg-gray-100 p-[3px] ${responsive}`}
          >
            <img src={src} alt={alt} className="size-5" />
          </button>
        ))}
      </div>
    </header>
  );
};

export default NavBar;
