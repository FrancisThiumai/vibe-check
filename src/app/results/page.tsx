'use client'

import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShareIcon, ArrowPathIcon } from '@heroicons/react/24/solid'
import { Suspense } from 'react'
import MoodBackground from '../components/MoodBackground'

const getVibeDescription = (score: number) => {
  if (score >= 9) return { emoji: '✨', text: 'Absolutely Radiant', description: 'Your vibe is off the charts! You\'re basically a walking ray of sunshine right now.' }
  if (score >= 7) return { emoji: '🌟', text: 'High Vibe', description: 'You\'re bringing the positive energy! Keep that awesome momentum going.' }
  if (score >= 5) return { emoji: '😌', text: 'Chill Vibes', description: 'You\'re in a nice, balanced state. Not too high, not too low - just right.' }
  if (score >= 3) return { emoji: '🌤️', text: 'Mild Mood', description: 'Taking it easy today. Sometimes that\'s exactly what you need.' }
  return { emoji: '🫂', text: 'Low Key', description: 'Everyone has these days. Tomorrow is a new opportunity to reset your vibe.' }
}

function ResultsContent() {
  const searchParams = useSearchParams()
  const score = Number(searchParams.get('score') || '0')
  const vibe = getVibeDescription(score)

  const handleShare = async () => {
    const shareText = `My current vibe check: ${vibe.emoji} ${vibe.text} (${score}/10) - Take yours at vibecheck.app!`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Vibe Check Results',
          text: shareText,
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(shareText)
        .then(() => alert('Copied to clipboard!'))
        .catch(err => console.error('Failed to copy:', err))
    }
  }

  return (
    <main className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center justify-center min-h-screen">
      <MoodBackground score={score} />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[90%] sm:max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 sm:space-y-8 border border-white/20"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-5xl sm:text-6xl mb-4"
          >
            {vibe.emoji}
          </motion.div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent">
            {vibe.text}
          </h1>
          <div className="text-xl sm:text-2xl font-bold">
            Score: {score}/10
          </div>
          <p className="text-gray-600 text-base sm:text-lg">
            {vibe.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleShare}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
          >
            <ShareIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Share Your Vibe</span>
          </motion.button>

          <Link href="/quiz" className="block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center space-x-2 bg-white text-gray-800 border border-gray-200 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium hover:border-purple-400 transition-colors text-sm sm:text-base"
            >
              <ArrowPathIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Check Again</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </main>
  )
}

export default function Results() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-2xl">Loading your vibe score...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
} 