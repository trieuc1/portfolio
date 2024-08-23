import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/small_logo.png';
import closed_menu from '../../assets/white_menu.png';
import open_menu from '../../assets/black_menu.png';
import menu_star from '../../assets/small_star.png';
import big_menu_star from '../../assets/menu_star.png';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpen = () => {
    setIsMenuOpen(true);
  };

  const menuClosed = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };




  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo'></img>
      <button className='menu-button' onClick={menuOpen}>
        <img src={closed_menu} alt="menu" className='menu-icon'></img>
      </button>
      {isMenuOpen && (
        <div className='menu'>
          <button className='menu-button align-left' onClick={menuClosed}>
            <img src={open_menu} alt="menu" className='menu-icon'></img>
          </button>
          <ul>
            <li className='menu-option' onClick={() => scrollToSection('home')}>
              <img src={menu_star} alt="menu star" className='menu-star'></img>
              home()
            </li>
            <li className='menu-option' onClick={() => scrollToSection('about-me')}>
              <img src={menu_star} alt="menu star" className='menu-star'></img>
              init(self)
            </li>
            <li className='menu-option' onClick={() => scrollToSection('journey')}>
              <img src={menu_star} alt="menu star" className='menu-star'></img>
              journey()
            </li>
            <li className='menu-option' onClick={() => scrollToSection('portfolio')}>
              <img src={menu_star} alt="menu star" className='menu-star'></img>
              portfolio()
            </li>
            <li className='menu-option' onClick={() => scrollToSection('footer')}>
              <img src={menu_star} alt="menu star" className='menu-star'></img>
              contact()
            </li>
          </ul>
            <img src={big_menu_star} alt="menu" className='big-menu-star'></img>
        </div>
      )}
    </nav>

  )
}

export default Navbar