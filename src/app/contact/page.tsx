'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import SocialMedia from '../components/SocialMedia';
import { sendEmail } from '../lib/email';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);
    setSuccess(null);

    try {
      await sendEmail(formData); // We no longer need to store the response value
      setIsSending(false);
      setSuccess('Your message has been sent successfully!');
      setFormData({ name: '', email: '', phone: '', topic: '', message: '' });

      // Show notification
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000); // Hide after 5 seconds
    } catch {
      setIsSending(false);
      setError('There was an issue sending your message. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center pt-24 px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">Let&apos;s Connect</h1>
          <p className="text-xl sm:text-2xl text-black">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact Form Section */}
            <motion.div
              className="rounded-2xl p-8 border-2 border-black"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition text-black"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition text-black"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Phone & Topic Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Number Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black" htmlFor="phone">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition text-black"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Topic Dropdown */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black" htmlFor="topic">
                      Topic
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition text-black"
                      value={formData.topic}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a Topic</option>
                      <option value="commission">Commission</option>
                      <option value="hosting">Hosting</option>
                      <option value="freelancer">Freelancer Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-black" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition text-black"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg text-lg font-medium hover:bg-black/80 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSending}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSending ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information Section */}
            <motion.div
              className="rounded-2xl p-8 border-2 border-black"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-black">Email</h3>
                  <a
                    href="mailto:hi@ruhanpacolli.online"
                    className="text-lg text-black hover:opacity-70 transition-opacity flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    hi@ruhanpacolli.online
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-black">Connect with me</h3>
                  <SocialMedia />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success/Error Notifications */}
      {showNotification && (
        <motion.div
          className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <div className="flex items-center gap-3">
            {success ? (
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            ) : (
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            )}
            <p className="text-sm">{success || error}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
