import { motion } from 'framer-motion';
import React from 'react';

const Test = () => {
  return (
    <motion.svg className="absolute inset-0 z-0" viewBox="0 0 163.38 51.61" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        className="fill-transparent stroke-satin-linen-200 stroke-2"
        d="M140.66,3.91S27.1-5.68,6.41,13.06C-14.28,31.8,27.05,45.8,85.71,47.8c58.66,2,76.36-8.65,76.67-21.33.54-22.18-55.55-24.82-98.11-22.08S6.62,12.9,9.17,27.02c2.55,14.12,36.16,24.89,96.1,23.46,59.23-1.41,58.71-29.07,45.8-35.12C131.68,6.25,67.3-15.01,5.59,22.11"
        initial={{ pathLength: 0 }}
        strokeDasharray="0 1"
        strokeLinecap="round"
        transition={{ duration: 1, ease: 'easeInOut' }}
        whileInView={{ pathLength: 1 }}
      />
    </motion.svg>
  );
};

export default Test;
