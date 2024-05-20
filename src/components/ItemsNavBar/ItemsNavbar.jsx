import { Link } from 'react-router-dom';

const ItemsNavbar = () => {
  const menuItems = [
    { name: 'Monitores', to: '/monitores' },
    { name: 'Tarjetas de Video', to: '/tarjetas-de-video' },
    { name: 'Microprocesadores', to: '/microprocesadores' },
  ];

  return (
    <ul className="hidden lg:flex">
      <li>
        {menuItems.map((item, index) => (
          <Link
            className="px-[8px] font uppercase font-bold font-dosis rounded py-[4px] hover:bg-gray-100 hover:underline text-sm"
            key={index}
            to={item.to}
          >
            {item.name}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default ItemsNavbar;
