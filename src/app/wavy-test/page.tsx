'use client';

import React from 'react';
import { WavyBanner, Button } from '@/components';

export default function WavyTestPage() {
  return (
    <div>
      {/* Test 1: Original Colors */}
      <WavyBanner
        title="KSC"
        subtitle="Katun Solution Center"
        backgroundColor="bg-[#4973ff]"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#4973ff]"
          >
            Botón 1
          </Button>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-white text-[#4973ff] hover:bg-gray-100"
          >
            Botón 2
          </Button>
        </div>
      </WavyBanner>

      {/* Test 2: Different Colors */}
      <WavyBanner
        title="Wavy Animation"
        subtitle="Diferentes Colores"
        backgroundColor="bg-purple-700"
      >
        <p className="text-lg opacity-90 mt-4">
          Componente con fondo púrpura
        </p>
      </WavyBanner>

      {/* Test 3: Green Theme */}
      <WavyBanner
        title="Green Theme"
        backgroundColor="bg-green-600"
      >
        <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
          Explorar
        </Button>
      </WavyBanner>
    </div>
  );
}
