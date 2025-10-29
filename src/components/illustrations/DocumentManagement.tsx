'use client';

import { motion } from 'framer-motion';

export default function DocumentManagementIllustration() {
  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-purple-200">
      {/* Browser Window Header */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 ml-4">
          <div className="w-full max-w-md h-6 bg-gray-100 rounded-md flex items-center px-3 text-xs text-gray-400">
            docs.megaged.com/search
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="absolute top-10 left-0 right-0 bottom-0 p-6 overflow-hidden">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg mb-4 flex items-center px-4 py-3"
        >
          <div className="text-purple-500 mr-3">🔍</div>
          <div className="flex-1 text-sm text-gray-400">Pesquisar documentos...</div>
          <div className="text-xs text-gray-400 px-2 py-1 bg-gray-100 rounded">Ctrl+K</div>
        </motion.div>

        {/* Document List */}
        <div className="space-y-3">
          {[
            { name: 'Contrato_Cliente_2024.pdf', type: 'PDF', size: '2.4 MB', tags: ['Jurídico', 'Contrato'], color: 'red' },
            { name: 'Nota_Fiscal_45678.xml', type: 'XML', size: '156 KB', tags: ['Fiscal', 'NF-e'], color: 'orange' },
            { name: 'Relatório_Anual_2024.docx', type: 'DOCX', size: '8.1 MB', tags: ['Relatório', 'Financeiro'], color: 'blue' },
          ].map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3">
                {/* File Icon */}
                <div className={`w-10 h-10 rounded-lg bg-${doc.color}-100 flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xs font-bold text-${doc.color}-600">{doc.type}</span>
                </div>
                
                {/* File Info */}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-700 truncate">{doc.name}</div>
                  <div className="text-xs text-gray-500">{doc.size} • Modificado há 2 dias</div>
                </div>

                {/* Tags */}
                <div className="flex gap-1 flex-shrink-0">
                  {doc.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-1 flex-shrink-0">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-6 left-6 right-6 bg-white rounded-lg p-3 shadow-md"
        >
          <div className="flex justify-around text-center">
            <div>
              <div className="text-xl font-bold text-purple-600">12,458</div>
              <div className="text-xs text-gray-500">Documentos</div>
            </div>
            <div className="border-l border-gray-200"></div>
            <div>
              <div className="text-xl font-bold text-purple-600">45 GB</div>
              <div className="text-xs text-gray-500">Armazenado</div>
            </div>
            <div className="border-l border-gray-200"></div>
            <div>
              <div className="text-xl font-bold text-purple-600">98%</div>
              <div className="text-xs text-gray-500">Sem Papel</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
}
