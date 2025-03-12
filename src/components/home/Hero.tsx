import React, { useContext, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import GradientBlur from '../ui/GradientBlur';
import AnimatedText from '../ui/AnimatedText';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      } transition-colors duration-500`}
    >
      {/* Gradient blurs */}
      <GradientBlur
        color1={darkMode ? '#4338ca' : '#818cf8'}
        color2={darkMode ? '#6d28d9' : '#a78bfa'}
        position="top-right"
        width="600px"
        height="600px"
        opacity="0.15"
        blur="140px"
      />
      <GradientBlur
        color1={darkMode ? '#6d28d9' : '#c084fc'}
        color2={darkMode ? '#4338ca' : '#818cf8'}
        position="bottom-left"
        width="600px"
        height="600px"
        opacity="0.15"
        blur="140px"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
          >
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700">
              <span className={`animate-pulse mr-2 h-2 w-2 rounded-full ${darkMode ? 'bg-indigo-400' : 'bg-indigo-600'}`}></span>
              <span className={`text-sm font-medium ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
                AI-Powered Voice Ordering
              </span>
            </div>

            <div className="mb-6">
              <AnimatedText
                text="Voice-Powered Restaurant Ordering with AI"
                el="h1"
                className={`text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}
                animation={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.2 }
                  }
                }}
              />
            </div>

            <motion.p 
              className={`text-xl md:text-2xl mb-8 font-light leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Servio is an advanced conversational AI system that facilitates voice and text ordering through Twilio integration, powered by OpenAI's GPT models.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Button 
                to="/demo" 
                variant="primary"
                size="lg"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                }
              >
                Try Demo
              </Button>
              <Button 
                to="/contact" 
                variant="outline"
                size="lg"
              >
                Contact Sales
              </Button>
            </motion.div>

            <motion.div 
              className="mt-12 flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                <span className="font-semibold">500+</span> restaurants trust Servio
              </div>
            </motion.div>
          </motion.div>
          
          {/* Chat interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className={`relative ${darkMode ? 'bg-dark-card' : 'bg-white'} p-5 rounded-xl shadow-2xl transition-colors duration-300 backdrop-blur-sm`}>
              <div className={`${darkMode ? 'bg-dark-bg' : 'bg-gray-100'} rounded-lg p-4 transition-colors duration-300`}>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className={`${darkMode ? 'bg-dark-card' : 'bg-white'} rounded-lg p-4 shadow-sm transition-colors duration-300`}>
                  <div className="flex items-start mb-4">
                    <div className={`${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'} rounded-full p-2 mr-3 transition-colors duration-300`}>
                      <svg className={`w-6 h-6 ${darkMode ? 'text-indigo-300' : 'text-indigo-600'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className={`${darkMode ? 'bg-dark-accent text-gray-300' : 'bg-gray-100 text-gray-700'} rounded-lg p-3 text-sm transition-colors duration-300`}>
                      I'd like to order a large pepperoni pizza with extra cheese and a side of garlic knots.
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <div className={`${darkMode ? 'bg-indigo-700' : 'bg-indigo-600'} rounded-full p-2 mr-3 transition-colors duration-300`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div className={`${darkMode ? 'bg-indigo-700' : 'bg-indigo-600'} rounded-lg p-3 text-white text-sm transition-colors duration-300`}>
                      Great choice! I've added a large pepperoni pizza with extra cheese and a side of garlic knots to your order. Would you like to add any drinks to your order?
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className={`${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'} rounded-full p-2 mr-3 transition-colors duration-300`}>
                      <svg className={`w-6 h-6 ${darkMode ? 'text-indigo-300' : 'text-indigo-600'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className={`${darkMode ? 'bg-dark-accent text-gray-300' : 'bg-gray-100 text-gray-700'} rounded-lg p-3 text-sm transition-colors duration-300`}>
                      Yes, add a 2-liter bottle of Coke please.
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>Scroll to explore</span>
        <motion.div 
          className={`w-6 h-10 border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'} rounded-full flex justify-center`}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className={`w-1.5 h-1.5 ${darkMode ? 'bg-gray-400' : 'bg-gray-600'} rounded-full mt-2`}
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;