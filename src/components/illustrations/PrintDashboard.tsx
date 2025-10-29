'use client';

import { motion } from 'framer-motion';

export default function PrintDashboardIllustration() {
  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-green-200">
      {/* Browser Window Header */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 ml-4">
          <div className="w-full max-w-md h-6 bg-gray-100 rounded-md flex items-center px-3 text-xs text-gray-400">
            dashboard.papercut.com
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="absolute top-10 left-0 right-0 bottom-0 p-6 overflow-hidden">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg p-4 shadow-md"
          >
            <div className="text-xs text-gray-500 mb-1">Total Impressões</div>
            <div className="text-2xl font-bold text-[#004990]">24,567</div>
            <div className="text-xs text-green-600">↑ 12% vs mês anterior</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg p-4 shadow-md"
          >
            <div className="text-xs text-gray-500 mb-1">Economia</div>
            <div className="text-2xl font-bold text-green-600">R$ 8.450</div>
            <div className="text-xs text-green-600">↑ 30% de redução</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg p-4 shadow-md"
          >
            <div className="text-xs text-gray-500 mb-1">Usuários Ativos</div>
            <div className="text-2xl font-bold text-[#004990]">342</div>
            <div className="text-xs text-blue-600">↑ 5 novos hoje</div>
          </motion.div>
        </div>

        {/* Chart Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg p-4 shadow-md h-40"
        >
          <div className="text-sm font-semibold text-gray-700 mb-3">Volume de Impressões - Últimos 7 Dias</div>
          <div className="flex items-end justify-between h-24 gap-2">
            {[65, 52, 78, 85, 71, 90, 82].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-400 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
}
