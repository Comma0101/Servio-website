import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${darkMode ? 'bg-dark-card text-white' : 'bg-white text-gray-900'} shadow-md fixed w-full z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className={`text-2xl font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Servio</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-indigo-600'} px-3 py-2 text-sm font-medium transition-colors duration-300`}>
              Home
            </Link>
            <Link to="/features" className={`${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-indigo-600'} px-3 py-2 text-sm font-medium transition-colors duration-300`}>
              Features
            </Link>
            <Link to="/pricing" className={`${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-indigo-600'} px-3 py-2 text-sm font-medium transition-colors duration-300`}>
              Pricing
            </Link>
            <Link to="/contact" className={`${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-indigo-600'} px-3 py-2 text-sm font-medium transition-colors duration-300`}>
              Contact
            </Link>
            <Link to="/demo" className={`${darkMode ? 'bg-indigo-500' : 'bg-indigo-600'} text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300`}>
              Try Demo
            </Link>
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-indigo-600'} focus:outline-none transition-colors duration-300`}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-lg transition-colors duration-300`}>
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300`}
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300`}
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-indigo-600'} transition-colors duration-300`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="/demo" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'bg-indigo-500' : 'bg-indigo-600'} text-white hover:bg-indigo-700 transition-colors duration-300`}
              onClick={toggleMenu}
            >
              Try Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;