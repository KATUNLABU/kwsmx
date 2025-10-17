'use client';

import React from 'react';
import Counter from './Counter';

const CounterExample: React.FC = () => {
  // Custom formatter for currency
  const currencyFormatter = (value: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Custom formatter for percentages
  const percentageFormatter = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#004990]">
          Nuestros Resultados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Basic Counter */}
          <Counter
            end={150}
            duration={2.5}
            delay={0.2}
            label="Proyectos Completados"
            suffix="+"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />

          {/* Currency Counter */}
          <Counter
            end={2500000}
            duration={3}
            delay={0.4}
            label="Facturación Anual"
            formatter={currencyFormatter}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />

          {/* Percentage Counter */}
          <Counter
            end={98.5}
            duration={2}
            delay={0.6}
            label="Satisfacción del Cliente"
            formatter={percentageFormatter}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />

          {/* Years Counter */}
          <Counter
            end={12}
            duration={1.5}
            delay={0.8}
            label="Años de Experiencia"
            suffix=" años"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default CounterExample;
