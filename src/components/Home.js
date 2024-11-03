import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-8 slide-in-bottom space-y-6 md:space-y-0">
      {/* Profile Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <img 
          src={`${process.env.PUBLIC_URL}/img/new mudass (2).PNG`} 
          alt="Mudassar Amin" 
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover" 
        />
      </div>
      
      {/* Text and Buttons */}
      <div className="text-center md:text-left md:ml-10">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Hi there!</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">I'm Mudassar Amin</h2>
        <p className="text-gray-600 max-w-md mb-8">
          A bit about me: I am a Master's graduate in Applied Computer Science with a strong interest in Machine Learning and AI. I’m passionate about technology and always eager to learn and solve problems.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link to="/resume">
            <button className="px-6 py-3 bg-yellow-400 text-white rounded-full font-semibold hover:bg-yellow-500">
              Resume
            </button>
          </Link>
          <Link to="/projects">
            <button className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600">
              Projects
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-6 py-3 bg-teal-400 text-white rounded-full font-semibold hover:bg-teal-500">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
