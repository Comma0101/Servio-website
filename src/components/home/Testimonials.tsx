import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

const testimonials = [
  {
    quote: "Servio has completely transformed our ordering process. Our staff can focus on food preparation while the AI handles customer orders flawlessly.",
    name: "Maria Rodriguez",
    title: "Owner, Taqueria Buena Vista",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "The natural language processing is incredible. Customers love how easy it is to place complex orders, and we've seen a 30% increase in online orders since implementing Servio.",
    name: "James Chen",
    title: "Manager, Fusion Kitchen",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    quote: "Integration with our existing Square system was seamless. Servio has reduced order errors by 95% and improved our customer satisfaction ratings.",
    name: "Sarah Johnson",
    title: "Operations Director, Urban Slice Pizza",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonials: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <section className={`py-16 ${darkMode ? 'bg-indigo-900' : 'bg-indigo-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className={`text-xl ${darkMode ? 'text-indigo-100' : 'text-gray-600'} max-w-3xl mx-auto transition-colors duration-300`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Restaurants across the country are transforming their operations with Servio
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className={`${darkMode ? 'bg-dark-card' : 'bg-white'} rounded-lg shadow-md p-6 relative transition-colors duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote mark */}
              <div className={`absolute top-4 right-4 ${darkMode ? 'text-indigo-800' : 'text-indigo-200'} text-5xl font-serif transition-colors duration-300`}>"</div>
              
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 relative z-10 transition-colors duration-300`}>{testimonial.quote}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>{testimonial.name}</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm transition-colors duration-300`}>{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="/features" 
            className={`${darkMode ? 'text-indigo-200 hover:text-white' : 'text-indigo-600 hover:text-indigo-800'} font-medium transition-colors duration-300`}
          >
            Read more success stories →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;