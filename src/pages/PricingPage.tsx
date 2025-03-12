import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

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
  const [annual, setAnnual] = useState(false);
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the plan that's right for your restaurant
          </motion.p>
          
          {/* Billing toggle */}
          <motion.div 
            className="flex justify-center items-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={`text-lg ${!annual ? 'text-white' : 'text-indigo-200'}`}>Monthly</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-indigo-300"
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  annual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${annual ? 'text-white' : 'text-indigo-200'}`}>
              Annual <span className="text-sm font-medium bg-indigo-500 px-2 py-1 rounded-full">Save 20%</span>
            </span>
          </motion.div>
        </div>
      </div>
      
      {/* Pricing Cards */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-indigo-600 relative' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">${annual ? plan.price.annual : plan.price.monthly}</span>
                    <span className="text-gray-600">/month</span>
                    {annual && <p className="text-sm text-gray-500">Billed annually</p>}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 px-4 rounded-lg font-medium ${
                      plan.popular 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    } transition duration-300`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQs */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
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
                className="border-b border-gray-200 pb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Still have questions?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
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
            <a 
              href="/contact" 
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium text-lg shadow-md transition duration-300"
            >
              Contact Sales
            </a>
            <a 
              href="/demo" 
              className="bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium text-lg transition duration-300"
            >
              Schedule a Demo
            </a>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;