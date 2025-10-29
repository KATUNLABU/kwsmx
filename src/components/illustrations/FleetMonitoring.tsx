'use client';

import { motion } from 'framer-motion';

export default function FleetMonitoringIllustration() {
  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-200">
      {/* Browser Window Header */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 ml-4">
          <div className="w-full max-w-md h-6 bg-gray-100 rounded-md flex items-center px-3 text-xs text-gray-400">
            fleet.kpax.com/monitoring
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="absolute top-10 left-0 right-0 bottom-0 p-6 overflow-hidden">
        {/* Equipment Cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg p-3 shadow-md border-l-4 border-green-500"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-gray-700">Impressora HP-001</div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Status:</span>
                <span className="text-green-600 font-semibold">Online</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Toner:</span>
                <span className="text-gray-700">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ delay: 0.5 }}
                  className="bg-green-500 h-1.5 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg p-3 shadow-md border-l-4 border-yellow-500"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-gray-700">Multifunc-002</div>
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Status:</span>
                <span className="text-yellow-600 font-semibold">Alerta</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Toner:</span>
                <span className="text-gray-700">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '15%' }}
                  transition={{ delay: 0.5 }}
                  className="bg-yellow-500 h-1.5 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map/Location Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg p-4 shadow-md h-32 relative overflow-hidden"
        >
          <div className="text-sm font-semibold text-gray-700 mb-2">Localização da Frota</div>
          
          {/* Simplified Map */}
          <div className="absolute inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded">
            {/* Location Pins */}
            {[
              { top: '30%', left: '25%', color: 'green' },
              { top: '50%', left: '45%', color: 'yellow' },
              { top: '40%', left: '65%', color: 'green' },
              { top: '70%', left: '35%', color: 'green' },
            ].map((pin, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="absolute"
                style={{ top: pin.top, left: pin.left }}
              >
                <div className={`w-3 h-3 rounded-full bg-${pin.color}-500 border-2 border-white shadow-lg`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alert Banner */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-6 left-6 right-6 bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded shadow-md"
        >
          <div className="flex items-center gap-2">
            <div className="text-yellow-600 text-sm">⚠️</div>
            <div className="text-xs text-gray-700">
              <span className="font-semibold">Alerta:</span> Multifunc-002 precisa de reposição de toner
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
}
