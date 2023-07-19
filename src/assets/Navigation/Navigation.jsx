import React, { useState } from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation">
      <div>
        <NavLink className="navigation__logo" to="/vite-react/">MoGo</NavLink>
      </div>
      <div className="navigation__links-wrapper">
        {/* Mobile Navigation */}
        <div className={`navigation__mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="navigation__icons">
            <img src="img/cart-icon.svg" className="navigation__icon" alt="Koszyk zakupowy" />
            <img src="img/magnifying-glass-icon.svg" className="navigation__icon" alt="Lupa, wyszukaj" />
          </div>
          <div className="navigation__mobile-menu-button" onClick={toggleMobileMenu}>
            <img src="img/hamburger.svg" className={`hamburger ${isMobileMenuOpen ? 'hamburger--close' : 'hamburger--open'}`} alt="Menu" />
            <img src="img/close.svg" className={`x ${isMobileMenuOpen ? 'x--open' : 'x--close'}`} alt="Menu" />
          </div>
          <div className="navigation__mobile-menu-links">
            <NavLink className="navigation__link" to="/vite-react/about" onClick={toggleMobileMenu}>About</NavLink>
            <NavLink className="navigation__link" to="/vite-react/service" onClick={toggleMobileMenu}>Service</NavLink>
            <NavLink className="navigation__link" to="/vite-react/work" onClick={toggleMobileMenu}>Work</NavLink>
            <NavLink className="navigation__link" to="/vite-react/blog" onClick={toggleMobileMenu}>Blog</NavLink>
            <NavLink className="navigation__link" to="/vite-react/contact" onClick={toggleMobileMenu}>Contact</NavLink>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navigation__desktop-menu">
          <NavLink className="navigation__link" to="/vite-react/about">About</NavLink>
          <NavLink className="navigation__link" to="/vite-react/service">Service</NavLink>
          <NavLink className="navigation__link" to="/vite-react/work">Work</NavLink>
          <NavLink className="navigation__link" to="/vite-react/blog">Blog</NavLink>
          <NavLink className="navigation__link" to="/vite-react/contact">Contact</NavLink>
        </div>
        <div className="navigation__icons--desktop">
          <img src="img/cart-icon.svg" className="navigation__icon" alt="Koszyk zakupowy" />
          <img src="img/magnifying-glass-icon.svg" className="navigation__icon" alt="Lupa, wyszukaj" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
