import React, { useState, useContext } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: "Starter",
    price: { monthly: 99, annual: 79 },
    description: "Perfect for small restaurants just getting started with AI ordering",
    features: [
      "Up to 500 orders per month",
      "Text-based ordering",
      "Square integration",
      "Basic analytics",
      "Email support",
      "1 menu integration"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: { monthly: 199, annual: 159 },
    description: "Ideal for growing restaurants with moderate order volume",
    features: [
      "Up to 2,000 orders per month",
      "Text & voice ordering",
      "Square & Clover integration",
      "Advanced analytics",
      "Priority email & chat support",
      "3 menu integrations",
      "Custom response templates"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: { monthly: 399, annual: 319 },
    description: "For high-volume restaurants and small chains",
    features: [
      "Unlimited orders",
      "All ordering channels",
      "All POS integrations",
      "Advanced analytics & reporting",
      "24/7 priority support",
      "Unlimited menu integrations",
      "Custom AI training",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    question: "How does billing work?",
    answer: "We offer both monthly and annual billing options. Annual plans come with a 20% discount. You can upgrade or downgrade your plan at any time, and the price difference will be prorated."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll have access to Servio until the end of your current billing period."
  },
  {
    question: "How do I integrate Servio with my existing systems?",
    answer: "Servio integrates seamlessly with popular POS systems like Square and Clover. Our team will guide you through the integration process, which typically takes less than a day."
  },
  {
    question: "Do I need technical knowledge to use Servio?",
    answer: "No technical knowledge is required. Our team handles the setup and integration, and the dashboard is designed to be user-friendly for restaurant staff."
  },
  {
    question: "Can Servio handle custom menu items and modifications?",
    answer: "Yes, Servio's AI is trained to understand and process complex orders with custom modifications, special requests, and dietary restrictions."
  },
  {
    question: "Is there a limit to how many orders Servio can process?",
    answer: "The Starter and Professional plans have monthly order limits as specified. The Enterprise plan offers unlimited orders to accommodate high-volume restaurants and chains."
  }
];

const PricingPage: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const [tab, setTab] = useState<'monthly'|'annual'|'trial'>('trial');
  const navigate = useNavigate();
  
  return (
    <Layout>
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-14 text-center flex flex-col items-center relative shadow-2xl z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl uppercase tracking-tight animate-pulse">
          Try Servio FREE for 3 months
        </h2>
        <p className="text-2xl md:text-3xl text-indigo-100 font-semibold mb-3">
          No credit card required. Cancel anytime.
        </p>
        <div className="inline-flex items-center bg-white/90 dark:bg-indigo-900/90 px-6 py-3 rounded-full shadow-lg border-2 border-indigo-600 mt-2">
          <span className="text-lg md:text-xl font-bold text-indigo-700 dark:text-indigo-200 mr-3">
            Trial ends →
          </span>
          <span className="text-2xl md:text-3xl font-extrabold text-indigo-700 dark:text-indigo-200">
            $99/mo
          </span>
        </div>
        <p className="text-lg text-indigo-100 mt-4">Book a 15-min call & start free today &rarr;</p>
      </div>
      {/* SVG Curved Divider */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-20 lg:h-24">
          <path d="M0 0h1440v40c-200 40-400 40-720 40S200 80 0 40V0z" fill="#111827" fillOpacity="0.96" />
        </svg>
      </div>
      {/* Pricing Section with Gradient BG */}
      <div className={`relative py-20 ${darkMode ? 'bg-dark-bg' : 'bg-gradient-to-b from-gray-50 via-white to-gray-200'} font-sans`}> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              className={`text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-xl font-display ${darkMode ? 'text-indigo-100' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p 
              className={`text-2xl max-w-3xl mx-auto mb-10 font-medium opacity-90 font-sans ${darkMode ? 'text-indigo-200' : 'text-gray-700'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Choose the plan that’s right for your restaurant
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {/* Starter Card */}
            <div className="flex flex-col gap-4 h-full">
              <div className={`rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border ${darkMode ? 'bg-gradient-to-br from-indigo-950 via-indigo-900 to-gray-900 border-indigo-800' : 'bg-white border-gray-200'} p-10 flex flex-col justify-between flex-1 transition-all duration-300`}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-base font-semibold ${darkMode ? 'text-indigo-100' : 'text-indigo-700'}`}>Starter</span>
                  </div>
                  <div className={`text-lg mb-3 ${darkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>For small restaurants just getting started with AI ordering</div>
                  <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Up to 50 orders/mo</div>
                  <ul className={`space-y-2 mb-6 list-none pl-0 ${darkMode ? 'text-indigo-100' : 'text-gray-700'}`}> 
                    <li>Text & Clover integration</li>
                    <li>Basic analytics</li>
                  </ul>
                </div>
                <button
                  className={`w-full mt-6 py-3 px-4 rounded-xl font-bold text-xl font-display bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 hover:from-indigo-600 hover:to-purple-700 shadow-lg transition duration-300 ${darkMode ? 'ring-2 ring-indigo-400 shadow-indigo-900/40' : ''}`}
                  onClick={() => navigate('/contact')}
                >Get Trial</button>
              </div>
            </div>
            {/* Professional Card (Highlighted) */}
            <div className="flex flex-col gap-4 h-full">
              <div className={`rounded-3xl shadow-2xl hover:shadow-3xl overflow-hidden border-4 ${darkMode ? 'border-indigo-400 bg-gradient-to-br from-indigo-900 via-indigo-800 to-gray-900' : 'border-indigo-500 bg-gradient-to-br from-indigo-50 via-white to-indigo-100'} p-12 flex flex-col justify-between flex-1 relative scale-105 z-10 transition-all duration-300`}>
                <div>
                  <div className="flex items-center gap-2 mb-4 relative">
                    <span className={`text-base font-semibold ${darkMode ? 'text-indigo-100' : 'text-indigo-700'}`}>Professional</span>
                    <span className={`ml-3 px-4 py-1 absolute -top-6 right-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold shadow-lg ${darkMode ? 'ring-2 ring-indigo-300' : ''}`}>Most Popular</span>
                  </div>
                  <div className={`text-lg mb-3 ${darkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>Ideal for growing restaurants with higher order volume</div>
                  <div className={`text-4xl font-extrabold mb-1 animate-pulse ${darkMode ? 'text-white' : 'text-gray-900'}`}>$0 <span className="text-lg font-medium">for 3 months</span></div>
                  <div className={`text-lg mb-2 font-bold ${darkMode ? 'text-indigo-100' : 'text-indigo-800'}`}>Trial ends → $99/mo</div>
                  <ul className={`space-y-2 mb-6 list-none pl-0 ${darkMode ? 'text-indigo-100' : 'text-gray-700'}`}> 
                    <li>Up to 2,000 orders/mo</li>
                    <li>Text & voice ordering</li>
                    <li>Square & Clover Integration</li>
                    <li>Advanced analytics</li>
                    <li>Automated promotions</li>
                    <li>Custom response templates</li>
                  </ul>
                </div>
                <button
                  className={`w-full mt-6 py-3 px-4 rounded-xl font-bold text-xl font-display bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 ring-2 shadow-xl transition duration-300 animate-bounce ${darkMode ? 'ring-indigo-400 shadow-indigo-900/40' : 'ring-indigo-500'}`}
                  onClick={() => navigate('/contact')}
                >Get Trial</button>
              </div>
            </div>
            {/* Enterprise Card */}
            <div className="flex flex-col gap-4 h-full">
              <div className={`rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border ${darkMode ? 'bg-gradient-to-br from-indigo-950 via-indigo-900 to-gray-900 border-indigo-800' : 'bg-white border-gray-200'} p-10 flex flex-col justify-between flex-1 transition-all duration-300`}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-base font-semibold ${darkMode ? 'text-indigo-100' : 'text-indigo-700'}`}>Enterprise</span>
                  </div>
                  <div className={`text-lg mb-3 ${darkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>For high volume restaurants needing full service solutions</div>
                  <div className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact us</div>
                  <ul className={`space-y-2 mb-6 list-none pl-0 ${darkMode ? 'text-indigo-100' : 'text-gray-700'}`}>
                    <li>All ordering channels</li>
                    <li>All POS integrations</li>
                    <li>Custom analytics reports</li>
                    <li>Detailed performance tracking</li>
                    <li>Dedicated account manager</li>
                  </ul>
                </div>
                <button
                  className={`w-full mt-6 py-3 px-4 rounded-xl font-bold text-xl font-display bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 hover:from-indigo-600 hover:to-purple-700 shadow-lg transition duration-300 ${darkMode ? 'ring-2 ring-indigo-400 shadow-indigo-900/40' : ''}`}
                  onClick={() => navigate('/contact')}
                >Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQs */}
      <div className={`py-16 ${darkMode ? 'bg-dark-secondary' : 'bg-white'} font-sans`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className={`text-4xl font-extrabold mb-12 text-center font-display tracking-tight ${darkMode ? 'text-indigo-200' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className={`border-b pb-6 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className={`text-2xl font-bold mb-2 font-display ${darkMode ? 'text-indigo-100' : 'text-gray-900'}`}>{faq.question}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-sans`}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className={`py-16 ${darkMode ? 'bg-dark-bg' : 'bg-indigo-50'} font-display`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className={`text-4xl font-extrabold mb-6 tracking-tight font-display ${darkMode ? 'text-indigo-200' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Still have questions?
          </motion.h2>
          <motion.p 
            className={`text-2xl mb-8 max-w-3xl mx-auto font-medium opacity-90 font-sans ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our team is here to help you find the perfect plan for your restaurant
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              className={`bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 px-8 py-4 rounded-xl font-bold text-2xl shadow-xl transition duration-300 font-display ${darkMode ? 'ring-2 ring-indigo-900' : ''}`}
              onClick={() => navigate('/contact')}
            >
              Contact Sales
            </button>
            <button
              className={`bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl font-bold text-2xl transition duration-300 font-display ${darkMode ? 'bg-dark-secondary text-indigo-200 border-indigo-900 hover:bg-dark-bg' : ''}`}
              onClick={() => navigate('/demo')}
            >
              Schedule a Demo
            </button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;