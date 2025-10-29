'use client';

import { motion } from 'framer-motion';

export default function LearningPlatformIllustration() {
  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-200">
      {/* Browser Window Header */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 ml-4">
          <div className="w-full max-w-md h-6 bg-gray-100 rounded-md flex items-center px-3 text-xs text-gray-400">
            learn.wikialphabet.com/courses
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="absolute top-10 left-0 right-0 bottom-0 p-6 overflow-hidden">
        {/* Course Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[
            { title: 'Gestão de Projetos', progress: 75, lessons: 12, color: 'blue', icon: '📊' },
            { title: 'Marketing Digital', progress: 45, lessons: 18, color: 'pink', icon: '📱' },
          ].map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Course Thumbnail */}
              <div className={`h-20 bg-gradient-to-br from-${course.color}-400 to-${course.color}-500 flex items-center justify-center`}>
                <span className="text-4xl">{course.icon}</span>
              </div>
              
              {/* Course Info */}
              <div className="p-3">
                <div className="text-sm font-semibold text-gray-700 mb-2">{course.title}</div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>{course.lessons} aulas</span>
                  <span>{course.progress}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`bg-${course.color}-500 h-1.5 rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg p-4 shadow-md mb-4"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-gray-700">Atividade Recente</div>
            <div className="text-xs text-gray-400">Últimas 24h</div>
          </div>
          
          <div className="space-y-2">
            {[
              { user: 'Ana Silva', action: 'completou', course: 'Gestão de Projetos - Módulo 3', time: '2h atrás', avatar: '👩' },
              { user: 'Carlos Santos', action: 'iniciou', course: 'Marketing Digital - Módulo 1', time: '5h atrás', avatar: '👨' },
              { user: 'Maria Costa', action: 'obteve certificado', course: 'Liderança', time: '1 dia atrás', avatar: '👩‍💼' },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 text-xs"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center flex-shrink-0">
                  <span>{activity.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-700">
                    <span className="font-semibold">{activity.user}</span> {activity.action} <span className="font-semibold">{activity.course}</span>
                  </div>
                  <div className="text-gray-400">{activity.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 shadow-md border border-orange-200"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🏆</div>
              <div>
                <div className="text-sm font-semibold text-gray-700">Continue aprendendo!</div>
                <div className="text-xs text-gray-500">Você está a 2 aulas de conquistar um badge</div>
              </div>
            </div>
            <div className="flex gap-1">
              {['🥇', '⭐', '🎯'].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1 + index * 0.1, type: 'spring' }}
                  className="text-lg"
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
}
