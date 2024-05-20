import { Link } from 'react-router-dom';

import ItemsNavbar from '../ItemsNavBar/ItemsNavbar.jsx';
import IconsNavBar from '../IconsNavBar/IconsNavBar.jsx';

const NavBar = () => {
  return (
    <header className="fixed lg:px-10 py-3 px-5 bg-white text-black flex justify-between top-0 items-center z-40 shadow-md w-full">
      <span className="text-lg py-0 flex flex-grow basis-0 font-mono">
        <Link to="/">XARC</Link>
      </span>
      <ItemsNavbar />
      <IconsNavBar />
    </header>
  );
};

export default NavBar;
