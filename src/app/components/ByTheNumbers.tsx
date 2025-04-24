// components/ByTheNumbers.js
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { id: 1, number: 20, label: "Clients" },
  { id: 2, number: 20, label: "Commissions" },
  { id: 3, number: 5, label: "Projects" },
  { id: 4, number: 15, label: "Side Projects" },
  { id: 5, number: 6, label: "Years of Experience" },
];

function AnimatedNumber({ value }: { value: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 1.5 },
      });

      // Animate the number counting up
      const interval = setInterval(() => {
        setCurrentValue((prev) => {
          if (prev >= value) {
            clearInterval(interval);
            return value;
          }
          return prev + 1;
        });
      }, 50); // Adjust speed here
    }
  }, [controls, inView, value]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
    >
      {currentValue}+
    </motion.span>
  );
}

export default function ByTheNumbers() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">By The Numbers</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A quick glance at my achievements and experience in the world of web development.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <AnimatedNumber value={stat.number} />
              <p className="text-lg sm:text-xl text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}