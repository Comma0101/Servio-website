import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeContext } from '../../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-dark-bg text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;