import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Using formsubmit.co since smtp.js domain is down
    fetch("https://formsubmit.co/ajax/sanjayit5029@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact from ${formData.name}`,
          _template: 'box'
      })
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      if (data.success === "true" || data.success === true) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(data.message || "Failed to send message.");
        setTimeout(() => setError(''), 5000);
      }
    })
    .catch(error => {
      setLoading(false);
      setError("Failed to send message. Please try again.");
      setTimeout(() => setError(''), 5000);
    });
  };

  const contactInfo = [
    { icon: <MapPin />, text: "Chennai, Tamil Nadu", href: null },
    { icon: <Phone />, text: "9843923663", href: "tel:9843923663" },
    { icon: <Mail />, text: "sanjayit5029@gmail.com", href: "mailto:sanjayit5029@gmail.com" },
  ];

  const socialLinks = [
    { icon: <Github />, href: "https://github.com/elagosan", label: "GitHub" },
    { icon: <Linkedin />, href: "https://www.linkedin.com/in/sanjay-e-934764343", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-t from-gray-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                      {info.icon}
                    </div>
                    {info.href ? (
                      <a href={info.href} className="hover:text-blue-400 transition-colors">
                        {info.text}
                      </a>
                    ) : (
                      <span>{info.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ y: -5, scale: 1.1 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-xl text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-70"
              >
                {loading ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </motion.button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center mt-2"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center mt-2"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;