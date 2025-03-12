import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Natural Language Processing",
    description: "Servio uses OpenAI's GPT models to understand complex customer requests in natural language. Whether customers are ordering a simple pizza or a complicated custom dish with multiple modifications, our AI can handle it all with ease. The system continuously learns from interactions to improve its understanding over time.",
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    reverse: false
  },
  {
    title: "Square Integration",
    description: "Seamlessly process orders via Square's API, ensuring reliable payment processing and order management. Servio connects directly to your existing Square account, allowing for real-time inventory updates, payment processing, and order tracking. This integration ensures that your POS system and Servio are always in sync.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    reverse: true
  },
  {
    title: "Multi-Channel Support",
    description: "Servio supports both voice interactions via Twilio and text-based interfaces, providing flexibility for customers. Whether your customers prefer to call in their orders, text them, or use your website or app, Servio provides a consistent experience across all channels. This omnichannel approach ensures that customers can order in whatever way is most convenient for them.",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    reverse: false
  },
  {
    title: "Consistent Messaging",
    description: "Enforce consistent messaging through predefined response templates stored in constants. This ensures that your brand voice remains consistent across all customer interactions, regardless of the channel or time of day. Templates can be customized to match your restaurant's tone and style, creating a cohesive brand experience.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    reverse: true
  },
  {
    title: "Robust Error Handling",
    description: "Servio implements comprehensive error handling for failed orders, ensuring a smooth customer experience even when things don't go as planned. The system can detect potential issues before they become problems, suggest alternatives when items are out of stock, and gracefully recover from interruptions in the ordering process.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    reverse: false
  },
  {
    title: "Comprehensive Testing",
    description: "Our system includes a robust testing framework to ensure reliability across different conversation flows. Before deploying any updates, we rigorously test all possible conversation paths to ensure that the system responds appropriately in every scenario. This commitment to quality means fewer errors and a better experience for your customers.",
    image: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    reverse: true
  }
];

const FeaturesPage: React.FC = () => {
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
            Powerful Features for Modern Restaurants
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover how Servio's advanced AI capabilities can transform your restaurant's ordering process
          </motion.p>
        </div>
      </div>
      
      {/* Features Detail */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="md:w-1/2">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-600">{feature.description}</p>
                </div>
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
            Ready to see Servio in action?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Schedule a personalized demo to see how these features can work for your restaurant
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="/demo" 
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium text-lg shadow-md transition duration-300"
            >
              Schedule a Demo
            </a>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default FeaturesPage;