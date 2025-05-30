'use client'

import { motion } from 'framer-motion'

type MoodBackgroundProps = {
  score?: number
}

export default function MoodBackground({ score }: MoodBackgroundProps) {
  // Define background gradients based on mood score
  const getBackgroundGradient = (score?: number) => {
    if (!score) {
      return 'from-violet-500 via-fuchsia-500 to-amber-400' // Default gradient
    }
    
    if (score >= 9) {
      return 'from-yellow-400 via-orange-500 to-pink-500' // Radiant, energetic
    }
    if (score >= 7) {
      return 'from-violet-500 via-fuchsia-500 to-amber-400' // High vibe, vibrant
    }
    if (score >= 5) {
      return 'from-blue-400 via-purple-500 to-pink-500' // Balanced, calm
    }
    if (score >= 3) {
      return 'from-indigo-600 via-purple-600 to-pink-600' // Mild, mellow
    }
    return 'from-blue-700 via-purple-800 to-indigo-900' // Low key, soothing
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`fixed inset-0 bg-gradient-to-br ${getBackgroundGradient(score)} animate-gradient-slow`}
      />
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </>
  )
} 