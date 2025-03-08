import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { menuData } from '../data/menuData';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden theme-toggle"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Brand */}
          <div className="brand">
            <span role="img" aria-label="crown">👑</span>
            <span>کافه لونا</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
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

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="brand">
            <span role="img" aria-label="crown">👑</span>
            <span>کافه لونا</span>
          </div>
          <button
            className="theme-toggle"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mobile-menu-content">
          {Object.entries(menuData).map(([category, { title }]) => (
            <NavLink
              key={category}
              to={`/${category}`}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              {title}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`mobile-backdrop ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navigation;