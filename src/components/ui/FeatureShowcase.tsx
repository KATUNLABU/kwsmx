'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface FeatureShowcaseProps {
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
  children?: ReactNode;
  gradient?: string;
  icon?: ReactNode;
}

export default function FeatureShowcase({
  title,
  description,
  imagePosition = 'right',
  children,
  gradient = 'from-blue-50 to-purple-50',
  icon
}: FeatureShowcaseProps) {
  return (
    <section className={`py-20 bg-gradient-to-br ${gradient}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          imagePosition === 'left' ? 'lg:grid-flow-dense' : ''
        }`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={imagePosition === 'left' ? 'lg:col-start-2' : ''}
          >
            <div className="flex items-center gap-4 mb-6">
              {icon && (
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-lg">
                  {icon}
                </div>
              )}
              <h3 className="text-3xl md:text-4xl font-bold text-[#004990]">
                {title}
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {description}
            </p>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <div className="relative">
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
