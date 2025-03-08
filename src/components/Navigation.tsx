import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuData } from '../data/menuData';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">منوی کافه لونا</h1>
          <nav className="hidden lg:flex header-nav">
            {Object.entries(menuData).map(([category, { title }]) => (
              <NavLink
                key={category}
                to={`/${category}`}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {title}
              </NavLink>
            ))}
          </nav>
          <button
            className="lg:hidden text-blue-500 p-3 hover:bg-green-100/50 rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mobile-menu-header">
          <h2 className="text-2xl font-bold text-green-500 flex items-center gap-3">
            <span>👑</span>
            منوی کافه لونا
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-green-500 p-3 hover:bg-green-900/50 rounded-xl transition-all duration-300"
          >
            <X size={32} />
          </button>
        </div>
        <div className="mobile-menu-content">
          {Object.entries(menuData).map(([category, { title }]) => (
            <NavLink
              key={category}
              to={`/${category}`}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;