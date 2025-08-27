'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features = [],
  className
}) => {
  return (
    <motion.div
      className={cn(
        'bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300',
        className
      )}
      whileHover={{ 
        y: -8,
        scale: 1.02
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center text-sm text-gray-700"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
              {feature}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ServiceCard;
