'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import SocialMedia from '../components/SocialMedia';
import { sendEmail } from '../lib/email';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';

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
      <section className="min-h-[40vh] flex items-center justify-center pt-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[#f3f3f3] z-0">
          <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
        </div>
        <motion.div 
          className="text-center max-w-3xl mx-auto z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-black">Let&apos;s Connect</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-black/80 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;m always open to discussing new opportunities and ideas.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact Form Section */}
            <motion.div
              className="rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-black bg-white shadow-sm"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-black">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    rows={5}
                    className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition text-black resize-none"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-black text-white py-3.5 rounded-lg text-lg font-medium hover:bg-black/80 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
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
              className="rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-black bg-white shadow-sm"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="flex items-center text-lg font-semibold mb-2 text-black gap-2">
                    <FaEnvelope className="text-black" />
                    Email
                  </h3>
                  <a
                    href="mailto:hi@ruhanpacolli.online"
                    className="text-base text-black hover:underline transition-all flex items-center gap-2"
                  >
                    hi@ruhanpacolli.online
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="flex items-center text-lg font-semibold mb-2 text-black gap-2">
                    <FaWhatsapp className="text-green-500" />
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.link/tpbnvt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-black hover:underline transition-all flex items-center gap-2"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="flex items-center text-lg font-semibold mb-2 text-black gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    Location
                  </h3>
                  <p className="text-base text-black">
                    Kosovo, Europe
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-black">Connect with me</h3>
                  <SocialMedia />
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-600">
                      Prefer a quick response? Send me a direct message through WhatsApp or email.
                    </p>
                    <p className="text-sm text-gray-600">
                      For professional inquiries, please include project details and timeline.
                    </p>
                  </div>
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

// Add this to your global CSS or as a class
// .bg-grid-pattern {
//   background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E");
// }
