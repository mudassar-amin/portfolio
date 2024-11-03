import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-end items-center px-8 py-4 gradient-background text-white shadow-md fixed w-full top-0 z-10">
      <nav className="space-x-8">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/resume" className="hover:text-yellow-300">Resume</Link>
        <Link to="/projects" className="hover:text-yellow-300">Projects</Link>

        {/* Download Resume Button */}
        <a 
          href="/path-to-your-resume.pdf" // Replace with the actual path to your resume filedownload 
          className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300 transition duration-300">
          Download CV
        </a>

      </nav>
    </header>
  );
};

export default Header;
