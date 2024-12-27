import React, { useEffect, useRef, useState } from 'react';
import ubaid from '../assets/ubaid.jpg';
import MobMenu from './MobMenu';
import { Menus } from '../utils';
import DeskMenu from './DeskMenu';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
   
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    // Check if the route has changed
    if (previousPath.current !== location.pathname) {
      previousPath.current = location.pathname; // Update the previous path
      window.location.reload(); // Refresh the page
    }
  }, [location.pathname]);


  const handleSearch = (e) => {
    e.preventDefault();
    const allSubMenus = Menus.flatMap((menu) => menu.subMenu || []);
    const matchedSubMenu = allSubMenus.find((subMenu) =>
      subMenu.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchedSubMenu) {
      navigate(matchedSubMenu.path);
      setSearchTerm('');
    } else {
      alert('No matching menu item found.');
    }
  };

  return (
    <header
      className="h-16 text-[15px] fixed top-0 left-0 right-0 flex-center bg-[#18181A] z-[1000]"
    >
      <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
        {/* Logo and Title */}
        <div className="flex-center gap-x-3">
          <img
            className="w-16 h-16 rounded-full"
            src={ubaid}
            alt="Error"
          />
          <h2 className="text-lg font-semibold">Animated Navbar</h2>
        </div>

        {/* Desktop Menu */}


        



        <ul className="gap-x-1 lg:flex-center hidden">
          {Menus.map((menu) => (
            <DeskMenu menu={menu} key={menu.name} />
          ))}
        </ul>

        {/* Search Bar for Desktop */}
        <form
          onSubmit={handleSearch}
          className="hidden lg:flex-center gap-x-2 bg-white/5 px-3 py-1.5 rounded-xl"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-48"
          />
          <button type="submit" className="text-white hover:text-gray-300">
            Search
          </button>
        </form>


        {/* Mobile Menu */}
        <div className="flex-center gap-x-5">
          {/* Search Bar for Mobile */}
          {/* <form
            onSubmit={handleSearch}
            className="lg:hidden flex gap-x-2 bg-white/5 px-3 py-1.5 rounded-xl"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-32"
            />
            <button type="submit" className="text-white hover:text-gray-300">
              Search
            </button>
          </form> */}


          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

