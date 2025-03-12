import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import Button from '../ui/Button';
import GradientBlur from '../ui/GradientBlur';

const VoiceFeature: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <section className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Background elements */}
      <GradientBlur
        color1={darkMode ? '#4f46e5' : '#818cf8'}
        color2={darkMode ? '#7e22ce' : '#c084fc'}
        position="left-center"
        width="500px"
        height="500px"
        opacity="0.1"
        blur="120px"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900/30 opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 opacity-70"></div>
              
              <div className="relative">
                {/* Phone device */}
                <div className="relative mx-auto w-72 h-[500px]">
                  {/* Phone frame */}
                  <div className={`absolute inset-0 rounded-[40px] ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} shadow-xl transition-colors duration-300`}>
                    {/* Phone inner frame */}
                    <div className="absolute inset-2 rounded-[35px] bg-black overflow-hidden border-4 border-black">
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-gray-600 mr-2"></div>
                        <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                      </div>
                      
                      {/* Phone screen */}
                      <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-indigo-50'} transition-colors duration-300`}>
                        {/* App header */}
                        <div className={`pt-10 pb-4 px-6 ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-500/10'} transition-colors duration-300`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'} flex items-center justify-center`}>
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                              </div>
                              <div className="ml-3">
                                <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Servio</div>
                                <div className={`text-xs ${darkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>Voice Ordering</div>
                              </div>
                            </div>
                            <div className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-700'}`}>
                              Live
                            </div>
                          </div>
                        </div>
                        
                        {/* Voice visualization */}
                        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex flex-col items-center">
                          {/* Animated waveform */}
                          <div className="mb-8 flex items-center justify-center h-24">
                            <div className="flex items-end space-x-1">
                              {[4, 6, 8, 10, 12, 10, 14, 16, 12, 10, 8, 14, 16, 8, 6, 4].map((height, i) => (
                                <motion.div
                                  key={i}
                                  className={`w-1.5 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-indigo-600'}`}
                                  animate={{
                                    height: [height, height * 2, height],
                                  }}
                                  transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay: i * 0.05,
                                    ease: "easeInOut"
                                  }}
                                  style={{ height: height }}
                                />
                              ))}
                            </div>
                          </div>
                          
                          {/* Pulsing circle */}
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`w-20 h-20 rounded-full ${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'} flex items-center justify-center`}
                          >
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                          </motion.div>
                          
                          {/* Status text */}
                          <div className={`mt-8 text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <p className="text-lg font-medium">Listening...</p>
                            <p className="text-sm mt-1 opacity-70">Speak your order now</p>
                          </div>
                        </div>
                        
                        {/* Bottom controls */}
                        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                          <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Voice waves radiating out */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-72 h-72 rounded-full border-2 ${darkMode ? 'border-indigo-500/20' : 'border-indigo-600/20'} transition-colors duration-300`}
                      animate={{
                        scale: [1, 1.5, 2],
                        opacity: [0.6, 0.3, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Text Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6">
              <div className={`inline-flex items-center px-4 py-1.5 rounded-full ${darkMode ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-800'} text-sm font-medium transition-colors duration-300 border ${darkMode ? 'border-indigo-800' : 'border-indigo-200'}`}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Powered by Twilio
              </div>
              
              <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                Voice-First Ordering Experience
              </h2>
              
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                Servio leverages Twilio's powerful voice API to create a seamless phone ordering experience. Customers can place orders naturally by speaking, just as they would with a human.
              </p>
              
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-indigo-900/20 border border-indigo-800/50' : 'bg-indigo-50 border border-indigo-100'} transition-colors duration-300`}>
                <div className="flex items-start">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-indigo-800/50' : 'bg-indigo-100'}`}>
                    <svg className={`w-6 h-6 ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>How it works</h3>
                    <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Customers call your Twilio-powered number, Servio converts speech to text, processes the order with AI, and responds naturally - all through a standard phone call.
                    </p>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-5">
                {[
                  {
                    title: "Natural Voice Conversations",
                    description: "Our AI understands natural speech patterns, slang, and even accents, making ordering as simple as having a conversation.",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    )
                  },
                  {
                    title: "24/7 Availability",
                    description: "Never miss an order with round-the-clock voice ordering capabilities that handle peak times without adding staff.",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Seamless Phone Integration",
                    description: "Integrate with your existing phone number or use a dedicated Servio line that connects directly to your POS system.",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="flex"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${darkMode ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-600'} flex items-center justify-center transition-colors duration-300`}>
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>{item.title}</h3>
                      <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <div className="pt-6">
                <Button 
                  to="/demo" 
                  variant="primary"
                  size="lg"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                  iconPosition="right"
                >
                  Try Voice Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoiceFeature;