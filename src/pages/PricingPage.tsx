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
      <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Try Servio FREE for 3 months</h2>
        <p className="text-xl md:text-2xl text-indigo-100 font-medium">Book a 15-min call & start free today &rarr;</p>
      </div>
      {/* Hero Section */}
      <div className={`py-14 ${darkMode ? 'bg-dark-bg' : 'bg-black'} text-white font-display relative`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-xl font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-2xl max-w-3xl mx-auto mb-10 font-medium opacity-90 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the plan that’s right for your réaurant
          </motion.p>
        </div>
      </div>
      {/* Pricing Cards */}
      <div className={`py-16 ${darkMode ? 'bg-dark-bg' : 'bg-gray-50'} font-sans`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Column: Stacked Cards */}
            <div className="flex flex-col gap-4 h-full">
              {/* Starter Plan Card */}
              <div className={`rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-100 dark:border-gray-800 bg-dark-card p-8 flex flex-col justify-between flex-1`}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-base font-semibold text-indigo-100">Starter</span>
                  </div>
                  <div className="text-lg text-indigo-100 mb-3">For small restaurants just getting started with AI ordering</div>
                  <div className="text-3xl font-bold text-white mb-2">Up to 50 orders/mo</div>
                  <ul className="space-y-2 mb-6 text-indigo-100 list-none pl-0">
                    <li>Text & Clover integration</li>
                    <li>Basic analytics</li>
                  </ul>
                </div>
                <button
                  className="w-full mt-6 py-3 px-4 rounded-xl font-bold text-xl font-display bg-white text-indigo-700 border-2 border-indigo-700 hover:bg-indigo-50 transition duration-300"
                  onClick={() => navigate('/contact')}
                >Get Trial</button>
              </div>
            </div>
            {/* Professional Card */}
            <div className={`rounded-2xl shadow-2xl overflow-hidden border-4 ring-2 ring-indigo-600 relative border-indigo-300 dark:border-indigo-900 bg-dark-card p-8 flex flex-col justify-between`}> 
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base font-semibold text-indigo-100">Professional</span>
                  <span className="ml-3 px-3 py-1 absolute top-6 right-6 rounded-full bg-indigo-600 text-white text-xs font-bold">Most Popular</span>
                </div>
                <div className="text-lg text-indigo-100 mb-3">Ideal for growing restaurants with higher order volume</div>
                <div className="text-4xl font-extrabold text-white mb-1">$0 <span className="text-lg font-medium">for 3 months</span></div>
                <div className="text-lg text-indigo-200 mb-2">then $99/mo</div>
                <ul className="space-y-2 mb-6 text-indigo-100 list-none pl-0">
                  <li>Up to 2,000 orders/mo</li>
                  <li>Text & voice ordering</li>
                  <li>Square & Clover Integration</li>
                  <li>Advanced analytics</li>
                  <li>Automated promotions</li>
                  <li>Custom response templates</li>
                </ul>
              </div>
              <button
                className="w-full mt-6 py-3 px-4 rounded-xl font-bold text-xl font-display bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 ring-2 ring-indigo-900 transition duration-300"
                onClick={() => navigate('/contact')}
              >Get Trial</button>
            </div>
            {/* Enterprise Card */}
            <div className={`rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-100 dark:border-gray-800 bg-dark-card p-8 flex flex-col justify-between`}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base font-semibold text-indigo-100">Enterprise</span>
                </div>
                <div className="text-lg text-indigo-100 mb-3">For high volume restaurants needing full service solutions</div>
                <div className="text-2xl font-bold text-white mb-2">Contact us</div>
                <ul className="space-y-2 mb-6 text-indigo-100 list-none pl-0">
                  <li>All ordering channels</li>
                  <li>All POS integrations</li>
                  <li>Custom analytics reports</li>
                  <li>Detailed performance tracking</li>
                  <li>Dedicated account manager</li>
                </ul>
              </div>
              <button
                className="w-full mt-6 py-3 px-4 rounded-xl font-bold text-xl font-display bg-white text-indigo-700 border-2 border-indigo-700 hover:bg-indigo-50 transition duration-300"
                onClick={() => navigate('/contact')}
              >Contact Sales</button>
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