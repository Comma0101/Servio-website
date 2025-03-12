import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

const CTA: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section className={`py-16 ${darkMode 
      ? 'bg-gradient-to-r from-indigo-900 to-purple-900' 
      : 'bg-gradient-to-r from-indigo-600 to-purple-600'} 
      text-white transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Restaurant's Ordering Experience?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-8 text-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join hundreds of restaurants already using Servio to streamline operations, reduce errors, and delight customers.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/demo" 
              className={`${darkMode 
                ? 'bg-indigo-200 text-indigo-900 hover:bg-white' 
                : 'bg-white text-indigo-600 hover:bg-indigo-50'} 
                px-6 py-3 rounded-lg font-medium text-lg shadow-md transition duration-300`}
            >
              Schedule a Demo
            </Link>
            <Link 
              to="/pricing" 
              className={`bg-transparent border-2 border-white text-white 
                ${darkMode 
                  ? 'hover:bg-indigo-800 hover:text-white hover:border-indigo-800' 
                  : 'hover:bg-white hover:text-indigo-600'} 
                px-6 py-3 rounded-lg font-medium text-lg transition duration-300`}
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;