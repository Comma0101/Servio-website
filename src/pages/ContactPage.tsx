import React, { useState, useContext } from 'react';
import Layout from '../components/layout/Layout';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../context/ThemeContext';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SERVICE_ID = 'service_go9yj53';
const TEMPLATE_ID = 'template_s98283u';
const PUBLIC_KEY = 'JuLih-rxStulr5zdC';

const PRODUCT_BULLETS = [
  'Fast setup, no coding required',
  '24/7 customer support',
  'Trusted by businesses',
  'Flexible pricing plans',
];

const FAQS = [
  {
    q: 'How do I purchase Servio?',
    a: 'Simply fill out the contact form and select "Purchase" as your subject. We will contact you with next steps.'
  },
  {
    q: 'Can I request a demo?',
    a: 'Yes! Select "Demo" in the subject field and we will arrange a live demo at your convenience.'
  },
  {
    q: 'What support do you offer?',
    a: 'We provide 24/7 support for all customers via email and phone.'
  }
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    subject: '',
    location: '',
    pos_system: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          business: formData.business,
          location: formData.location,
          reply_to: formData.email,
          to_email: formData.email,
          phone: formData.phone,
          pos_system: formData.pos_system,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setStatus('Your message has been sent! We will contact you soon.');
      setFormData({ name: '', business: '', email: '', phone: '', subject: '', location: '', pos_system: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <Layout>
      <section className={`max-w-4xl mx-auto py-16 px-4 ${darkMode ? 'bg-dark-bg text-white' : 'bg-white text-gray-900'} transition-colors duration-300 rounded-2xl shadow-2xl`}> 
        <h1 className="text-5xl font-extrabold mb-4 text-center tracking-tight leading-tight drop-shadow-lg">Contact Us to Purchase Servio</h1>
        <p className={`text-xl mb-10 text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Ready to get started, need a demo, or have a question? Fill out the form below and our team will reach out to you promptly.</p>
        <div className="flex flex-col md:flex-row md:space-x-12 gap-8">
          <div className={`flex-1 ${darkMode ? 'bg-dark-secondary/80' : 'bg-white/90'} rounded-2xl shadow-lg p-10 mb-8 md:mb-0 border border-gray-200 dark:border-gray-700`}> 
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block font-semibold mb-1 ${darkMode ? 'text-gray-200' : ''}`}>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className={`w-full border-2 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${darkMode ? 'bg-dark-bg border-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-400'}`} placeholder="Your full name" />
              </div>
              <div>
                <label className={`block font-semibold mb-1 ${darkMode ? 'text-gray-200' : ''}`}>Business/Restaurant Name</label>
                <input type="text" name="business" value={formData.business} onChange={handleChange} required className={`w-full border-2 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${darkMode ? 'bg-dark-bg border-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-400'}`} placeholder="Your business name" />
              </div>
              <div>
                <label className={`block font-semibold mb-1 ${darkMode ? 'text-gray-200' : ''}`}>Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} required className={`w-full border-2 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${darkMode ? 'bg-dark-bg border-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-400'}`} placeholder="City, State or Country" />
              </div>
              <div>
                <label className={`block font-semibold mb-1 ${darkMode ? 'text-gray-200' : ''}`}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className={`w-full border-2 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${darkMode ? 'bg-dark-bg border-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-400'}`} placeholder="you@email.com" />
              </div>
              <div>
                <label className={`block font-semibold mb-1 ${darkMode ? 'text-gray-200' : ''}`}>Phone (optional)</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full border-2 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${darkMode ? 'bg-dark-bg border-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-400'}`} placeholder="+1 234 567 890" />
              </div>
              <div>
                <label className={`block font-semibold mb-1 ${darkMode ? 'text-gray-200' : ''}`}>Current POS System</label>
                <input type="text" name="pos_system" value={formData.pos_system} onChange={handleChange} required className={`w-full border-2 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${darkMode ? 'bg-dark-bg border-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-400'}`} placeholder="e.g., Toast, Square, Clover" />
              </div>
              <div>
                <label className={`block font-semibold mb-1 ${darkMode ? 'text-gray-200' : ''}`}>Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange} required className={`w-full border-2 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${darkMode ? 'bg-dark-bg border-gray-700 text-white' : 'border-gray-300 text-gray-900'}`}> 
                  <option value="">Select...</option>
                  <option value="Purchase">Purchase</option>
                  <option value="Demo">Demo</option>
                  <option value="Support">Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={`block font-semibold mb-1 ${darkMode ? 'text-gray-200' : ''}`}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required className={`w-full border-2 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${darkMode ? 'bg-dark-bg border-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-400'}`} rows={4} placeholder="Type your message here..." />
              </div>
              <button type="submit" className={`w-full font-bold py-3 rounded-lg text-lg shadow-md transition active:scale-95 ${darkMode ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`} disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status && <div className={`mt-4 text-center text-lg font-semibold ${status.startsWith('Your') ? 'text-green-400' : 'text-red-400'}`}>{status}</div>}
            </form>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="mb-8">
              <h2 className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>Why Choose Servio?</h2>
              <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}> 
                {PRODUCT_BULLETS.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <h2 className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>Contact Details</h2>
              <div className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                <div>Email: <a href="mailto:comma10@yahoo.com" className="text-indigo-400 underline">servio_ai@yahoo.com</a></div>
                <div>Phone: <a href="tel:+1234567890" className="text-indigo-400 underline">+1 (000) 000-000</a></div>
                <div>Support Hours: 24/7</div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition text-xl flex items-center justify-center shadow-md hover:scale-110 ${darkMode ? 'bg-indigo-950 text-indigo-300 hover:bg-indigo-900' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'}`}><FaFacebookF /></a>
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition text-xl flex items-center justify-center shadow-md hover:scale-110 ${darkMode ? 'bg-indigo-950 text-indigo-300 hover:bg-indigo-900' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'}`}><FaTwitter /></a>
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition text-xl flex items-center justify-center shadow-md hover:scale-110 ${darkMode ? 'bg-indigo-950 text-indigo-300 hover:bg-indigo-900' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'}`}><FaInstagram /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition text-xl flex items-center justify-center shadow-md hover:scale-110 ${darkMode ? 'bg-indigo-950 text-indigo-300 hover:bg-indigo-900' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'}`}><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className={`mt-12 rounded-xl p-8 ${darkMode ? 'bg-dark-secondary' : 'bg-gray-50'}`}> 
          <h2 className={`text-2xl font-semibold mb-4 text-center ${darkMode ? 'text-indigo-200' : ''}`}>Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {FAQS.map((faq, idx) => (
              <div key={idx} className={`rounded-lg shadow p-4 ${darkMode ? 'bg-dark-bg text-gray-200' : 'bg-white text-gray-700'}`}> 
                <div className="font-semibold mb-2">{faq.q}</div>
                <div>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;