import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className='bg-navRed text-white px-8 md:px-16 lg:px-24 py-4 sticky top-0 z-50'
      style={{ boxShadow: '2px 2px 4px rgba(42, 28, 35, .8)' }}
    >
      <div className='container py-2 flex justify-between items-center'>
        {/* Title */}
        <div className='w-[80px]'>
          <Link to="/home" aria-label="Go to homepage">
            <img src="/STAGEFRIGHTBAND/logo.png" alt="Stage Fright Logo" />
          </Link>
        </div>

        {/* Menu items */}
        <div className='hidden md:flex md:items-center space-x-8 text-m'>
          <Link to="/about" className='hover:text-yellow-400 font-bold' aria-label="About Page">
            ABOUT
          </Link>
          <Link to="/tours" className='hover:text-yellow-400 font-bold' aria-label="Tours Page">
            TOURS
          </Link>
          <Link to="/merch" className='hover:text-yellow-400 font-bold' aria-label="Merchandise Page">
            MERCH
          </Link>
          <Link to="/contact" className='hover:text-yellow-400 font-bold' aria-label="Contact Page">
            CONTACT
          </Link>
          <Link to="/frightclub" className='hover:text-yellow-400 font-bold' aria-label="Fright Club Page">
            FRIGHT CLUB
          </Link>
        </div>

        {/* Cart button */}
        <Link to="/cart">
          <button className='hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-200 transition duration-200 transform hover:-translate-y-1' aria-label="View cart">
            <FontAwesomeIcon icon={faShoppingCart} className="text-navRed" />
          </button>
        </Link>

        {/* Hamburger menu icon */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`flex flex-col items-center ${isOpen ? 'block' : 'hidden'} md:hidden space-y-2`}>
        <Link to="/about" className='hover:text-yellow-400 font-semibold' aria-label="About Page">
          ABOUT
        </Link>
        <Link to="/tours" className='hover:text-yellow-400 font-semibold' aria-label="Tours Page">
          TOURS
        </Link>
        <Link to="/merch" className='hover:text-yellow-400 font-semibold' aria-label="Merchandise Page">
          MERCH
        </Link>
        <Link to="/contact" className='hover:text-yellow-400 font-semibold' aria-label="Contact Page">
          CONTACT
        </Link>
        <Link to="/frightclub" className='hover:text-yellow-400 font-semibold' aria-label="Fright Club Page">
            FRIGHT CLUB
        </Link>
        <Link to="/cart">
          <button className='flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-200 transition duration-200 transform hover:-translate-y-1' aria-label="View cart">
            <FontAwesomeIcon icon={faShoppingCart} className="text-navRed" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
