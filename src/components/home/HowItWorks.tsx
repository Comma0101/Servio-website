import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

const steps = [
  {
    number: "01",
    title: "Voice Call or Text",
    description: "Customers call a Twilio-powered phone number or send a text message to start their ordering experience.",
    color: "bg-blue-500"
  },
  {
    number: "02",
    title: "Voice Recognition",
    description: "Twilio's voice API converts speech to text, allowing customers to speak naturally as if talking to a human.",
    color: "bg-indigo-500"
  },
  {
    number: "03",
    title: "AI Understanding",
    description: "OpenAI's GPT models interpret the customer's spoken or written request, understanding complex orders and special instructions.",
    color: "bg-purple-500"
  },
  {
    number: "04",
    title: "Interactive Conversation",
    description: "Servio engages in a natural back-and-forth conversation, asking questions and confirming details through voice or text.",
    color: "bg-pink-500"
  },
  {
    number: "05",
    title: "Order Processing",
    description: "The system processes the confirmed order through Square's API, handling payment and sending it to the restaurant's system.",
    color: "bg-green-500"
  }
];

const HowItWorks: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <section className={`py-16 ${darkMode ? 'bg-dark-bg' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How Servio Works
          </motion.h2>
          <motion.p 
            className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto transition-colors duration-300`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A seamless process from customer request to order fulfillment
          </motion.p>
        </div>
        
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Step number */}
              <div className={`${step.color} text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                {step.number}
              </div>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className={`hidden md:block absolute top-6 left-12 w-full h-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transition-colors duration-300`}></div>
              )}
              
              {/* Content */}
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>{step.title}</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="/features" 
            className={`inline-flex items-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'} font-medium transition-colors duration-300`}
          >
            Learn more about our technology
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;