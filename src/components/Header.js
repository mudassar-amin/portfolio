import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-end items-center px-8 py-4 gradient-background text-white shadow-md fixed w-full top-0 z-10">
      {/* Logo or Header Title */}
      

      {/* Menu for Desktop and Mobile */}
      <nav className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/resume" className="hover:text-yellow-300">Resume</Link>
        <Link to="/projects" className="hover:text-yellow-300">Projects</Link>
        <a 
          href="/path-to-your-resume.pdf" 
          download 
          className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300 transition duration-300"
        >
          Download CV
        </a>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu" className="focus:outline-none">
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-20 flex flex-col items-center justify-center space-y-4 text-xl">
          <Link to="/" className="text-white hover:text-yellow-300" onClick={toggleMenu}>Home</Link>
          <Link to="/resume" className="text-white hover:text-yellow-300" onClick={toggleMenu}>Resume</Link>
          <Link to="/projects" className="text-white hover:text-yellow-300" onClick={toggleMenu}>Projects</Link>
          <a 
            href="/path-to-your-resume.pdf" 
            download 
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
