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
  const [showPopup, setShowPopup] = useState(false);
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

      // Show popup
      setShowPopup(true);

      // Show notification
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000); // Hide after 5 seconds
    } catch {
      setIsSending(false);
      setError('There was an issue sending your message. Please try again later.');

      // Show popup for error
      setShowPopup(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-6 text-center text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>

          <motion.form
            className="space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </motion.div>

            {/* Phone Number Field (Optional) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="phone">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </motion.div>

            {/* Topic Dropdown */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="topic">
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
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
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <label className="block text-lg font-medium mb-2 text-black" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-lg mt-4 text-lg hover:bg-gray-800 transition"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </motion.div>

            {/* Error or Success Message */}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            {success && <p className="text-green-500 text-center mt-4">{success}</p>}
          </motion.form>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-6 text-center text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Contact Information
          </motion.h2>
          <p className="text-lg mb-4 text-black">
            If you&aposd prefer to email me directly, you can reach me at:
          </p>
          <p className="text-xl font-semibold text-black mb-4">
            <a
              href="mailto:hi@ruhanpacolli.online"
              className="hover:text-gray-700 transition"
            >
              hi@ruhanpacolli.online
            </a>
          </p>

          <SocialMedia />
        </motion.div>
      </div>

      {/* Popup After Submission */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-black hover:text-gray-700 transition"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-black">Thank you for contacting me!</h3>
            <p className="text-lg mb-4 text-black">I&aposll get back to you shortly.</p>
          </div>
        </div>
      )}

      {/* Notification Box */}
      {showNotification && (
        <motion.div
          className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg">Your message has been sent!</p>
        </motion.div>
      )}
    </div>
  );
}
