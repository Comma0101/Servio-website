import React, { useState, useContext } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const DemoPage: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const [demoType, setDemoType] = useState<'text' | 'voice'>('text');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! I'm Servio, your AI restaurant ordering assistant. How can I help you today?", isUser: false }
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage = { text: inputText, isUser: true };
    setMessages([...messages, userMessage]);
    setInputText('');
    setLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      let botResponse = { text: '', isUser: false };
      
      // Simple response logic based on user input
      const userInput = inputText.toLowerCase();
      
      if (userInput.includes('pizza')) {
        botResponse.text = "Great choice! Would you like to order a pizza? We have pepperoni, cheese, veggie, and supreme options. What size would you prefer?";
      } else if (userInput.includes('burger')) {
        botResponse.text = "Our burgers are amazing! We offer classic, cheese, bacon, and veggie options. Would you like fries with that?";
      } else if (userInput.includes('menu')) {
        botResponse.text = "Our menu includes pizzas, burgers, pasta, salads, and desserts. What would you like to know more about?";
      } else if (userInput.includes('hours') || userInput.includes('open')) {
        botResponse.text = "We're open Monday to Friday from 11 AM to 10 PM, and weekends from 12 PM to 11 PM. Can I help you place an order?";
      } else if (userInput.includes('delivery')) {
        botResponse.text = "Yes, we offer delivery! It's free for orders over $25, and typically takes 30-45 minutes. Would you like to place a delivery order?";
      } else if (userInput.includes('thank')) {
        botResponse.text = "You're welcome! Is there anything else I can help you with today?";
      } else if (userInput.includes('bye') || userInput.includes('goodbye')) {
        botResponse.text = "Thank you for chatting with Servio! Have a great day, and we hope to serve you again soon.";
      } else {
        botResponse.text = "I'd be happy to help with your order. Could you tell me what you'd like to order today?";
      }
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setLoading(false);
    }, 1000);
  };

  const toggleVoiceRecording = () => {
    if (isListening) {
      // Stop recording
      setIsListening(false);
      
      // Simulate voice recognition result
      setTimeout(() => {
        const voiceText = "I'd like to order a large pepperoni pizza with extra cheese.";
        setInputText(voiceText);
        
        // Auto-send the message after a brief delay
        setTimeout(() => {
          const userMessage = { text: voiceText, isUser: true };
          setMessages([...messages, userMessage]);
          setInputText('');
          setLoading(true);
          
          // Simulate AI response
          setTimeout(() => {
            const botResponse = { 
              text: "Great choice! I've added a large pepperoni pizza with extra cheese to your order. Would you like any drinks or sides with that?", 
              isUser: false 
            };
            setMessages(prevMessages => [...prevMessages, botResponse]);
            setLoading(false);
          }, 1500);
        }, 500);
      }, 2000);
    } else {
      // Start recording
      setIsListening(true);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className={`${darkMode 
        ? 'bg-gradient-to-r from-indigo-900 to-purple-900' 
        : 'bg-gradient-to-r from-indigo-600 to-purple-600'} 
        text-white py-20 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Try Servio Demo
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience how Servio handles restaurant orders through voice and text conversations
          </motion.p>
          
          {/* Demo Type Toggle */}
          <motion.div
            className="mt-8 inline-flex p-1 bg-indigo-800 bg-opacity-50 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => setDemoType('text')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                demoType === 'text' 
                  ? 'bg-white text-indigo-600' 
                  : 'text-white hover:bg-indigo-700 hover:bg-opacity-50'
              }`}
            >
              Text Demo
            </button>
            <button
              onClick={() => setDemoType('voice')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                demoType === 'voice' 
                  ? 'bg-white text-indigo-600' 
                  : 'text-white hover:bg-indigo-700 hover:bg-opacity-50'
              }`}
            >
              Voice Demo
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Demo Chat Interface */}
      <div className={`py-16 ${darkMode ? 'bg-dark-bg' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className={`${darkMode ? 'bg-dark-card' : 'bg-white'} rounded-xl shadow-xl overflow-hidden transition-colors duration-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Chat Header */}
            <div className={`${darkMode ? 'bg-indigo-800' : 'bg-indigo-600'} text-white p-4 transition-colors duration-300`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${darkMode ? 'bg-dark-card' : 'bg-white'} rounded-full p-2 mr-3 transition-colors duration-300`}>
                    {demoType === 'text' ? (
                      <svg className={`w-6 h-6 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    ) : (
                      <svg className={`w-6 h-6 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Servio AI Assistant</h3>
                    <p className="text-xs text-indigo-200">Online | {demoType === 'text' ? 'Text' : 'Voice'} Demo Mode</p>
                  </div>
                </div>
                
                {/* Demo Type Toggle (Small) */}
                <div className="inline-flex p-1 bg-indigo-700 bg-opacity-50 rounded-lg">
                  <button
                    onClick={() => setDemoType('text')}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors duration-300 ${
                      demoType === 'text' 
                        ? 'bg-white text-indigo-600' 
                        : 'text-white hover:bg-indigo-600'
                    }`}
                  >
                    Text
                  </button>
                  <button
                    onClick={() => setDemoType('voice')}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors duration-300 ${
                      demoType === 'voice' 
                        ? 'bg-white text-indigo-600' 
                        : 'text-white hover:bg-indigo-600'
                    }`}
                  >
                    Voice
                  </button>
                </div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className={`h-96 overflow-y-auto p-4 ${darkMode ? 'bg-dark-bg' : 'bg-gray-50'} transition-colors duration-300`}>
              {messages.map((message, index) => (
                <motion.div 
                  key={index}
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                      message.isUser 
                        ? `${darkMode ? 'bg-indigo-700' : 'bg-indigo-600'} text-white rounded-br-none` 
                        : `${darkMode ? 'bg-dark-card' : 'bg-white'} ${darkMode ? 'text-gray-300' : 'text-gray-700'} shadow-sm rounded-bl-none`
                    } transition-colors duration-300`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              
              {loading && (
                <motion.div 
                  className="flex justify-start mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className={`${darkMode ? 'bg-dark-card text-gray-300' : 'bg-white text-gray-700'} rounded-lg p-3 shadow-sm rounded-bl-none flex items-center space-x-2 transition-colors duration-300`}>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </motion.div>
              )}
              
              {/* Voice recording indicator */}
              {demoType === 'voice' && isListening && (
                <motion.div 
                  className="flex justify-center mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className={`${darkMode ? 'bg-dark-card' : 'bg-white'} rounded-lg p-4 shadow-md flex flex-col items-center transition-colors duration-300`}>
                    <div className="flex items-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-red-500 rounded-full"
                          animate={{
                            height: [15, 30, 15],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>Listening...</p>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Chat Input */}
            <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
              {demoType === 'text' ? (
                <form onSubmit={handleSendMessage} className="flex items-center">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your order or question..."
                    className={`flex-grow px-4 py-2 border ${darkMode ? 'bg-dark-accent border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} rounded-l-md focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300`}
                  />
                  <button
                    type="submit"
                    className={`${darkMode ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-4 py-2 rounded-r-md transition duration-300`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              ) : (
                <div className="flex justify-center">
                  <button
                    onClick={toggleVoiceRecording}
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      isListening 
                        ? 'bg-red-500 hover:bg-red-600' 
                        : `${darkMode ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700'}`
                    } text-white transition duration-300`}
                  >
                    {isListening ? (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-2 text-center transition-colors duration-300`}>
                {demoType === 'text' 
                  ? "This is a demo version with limited functionality. Try asking about the menu, ordering a pizza, or inquiring about delivery options."
                  : "Click the microphone button to simulate voice ordering. In a real implementation, this would use your device's microphone."}
              </p>
            </div>
          </motion.div>
          
          {/* Demo Instructions */}
          <motion.div 
            className={`mt-12 ${darkMode ? 'bg-dark-card' : 'bg-white'} rounded-lg shadow-md p-6 transition-colors duration-300`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>How to Use This Demo</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>
              This interactive demo showcases Servio's voice and text processing capabilities. Try these sample interactions:
            </p>
            <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 transition-colors duration-300`}>
              <li className="flex items-start">
                <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mr-2 transition-colors duration-300`}>•</span>
                "I'd like to order a large pepperoni pizza with extra cheese"
              </li>
              <li className="flex items-start">
                <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mr-2 transition-colors duration-300`}>•</span>
                "What's on your menu?"
              </li>
              <li className="flex items-start">
                <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mr-2 transition-colors duration-300`}>•</span>
                "Do you offer delivery?"
              </li>
              <li className="flex items-start">
                <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mr-2 transition-colors duration-300`}>•</span>
                "What are your hours?"
              </li>
              <li className="flex items-start">
                <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mr-2 transition-colors duration-300`}>•</span>
                "I'd like a cheeseburger with fries"
              </li>
            </ul>
            <div className={`p-4 ${darkMode ? 'bg-indigo-900 bg-opacity-50' : 'bg-indigo-50'} rounded-lg mb-6 transition-colors duration-300`}>
              <h3 className={`font-semibold ${darkMode ? 'text-indigo-300' : 'text-indigo-700'} mb-2 transition-colors duration-300`}>Voice Ordering with Twilio</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                In the full version, customers can call a dedicated phone number powered by Twilio's voice API. The system converts speech to text, processes the order using AI, and responds naturally - all through a standard phone call.
              </p>
            </div>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
              The full version of Servio includes integration with your menu, payment processing via Square, and can handle much more complex voice and text interactions.
            </p>
          </motion.div>
          
          {/* CTA */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 transition-colors duration-300`}>Ready to implement Servio in your restaurant?</h3>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/Contact" 
                className={`${darkMode ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-6 py-3 rounded-lg font-medium text-lg shadow-md transition duration-300`}
              >
                Contact Sales
              </a>
              <a 
                href="/pricing" 
                className={`${darkMode ? 'bg-dark-accent text-white border border-indigo-500 hover:bg-indigo-900' : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'} px-6 py-3 rounded-lg font-medium text-lg transition duration-300`}
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default DemoPage;