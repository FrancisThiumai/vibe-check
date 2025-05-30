'use client'

import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShareIcon, ArrowPathIcon } from '@heroicons/react/24/solid'

const getVibeDescription = (score: number) => {
  if (score >= 9) return { emoji: '✨', text: 'Absolutely Radiant', description: 'Your vibe is off the charts! You\'re basically a walking ray of sunshine right now.' }
  if (score >= 7) return { emoji: '🌟', text: 'High Vibe', description: 'You\'re bringing the positive energy! Keep that awesome momentum going.' }
  if (score >= 5) return { emoji: '😌', text: 'Chill Vibes', description: 'You\'re in a nice, balanced state. Not too high, not too low - just right.' }
  if (score >= 3) return { emoji: '🌤️', text: 'Mild Mood', description: 'Taking it easy today. Sometimes that\'s exactly what you need.' }
  return { emoji: '🫂', text: 'Low Key', description: 'Everyone has these days. Tomorrow is a new opportunity to reset your vibe.' }
}

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const score = Number(searchParams.get('score')) || 5
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
    <main className="container mx-auto px-4 py-16 flex flex-col items-center min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-8"
      >
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">{vibe.emoji}</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {vibe.text}
          </h1>
          <div className="text-2xl font-bold">
            Score: {score}/10
          </div>
          <p className="text-gray-600">
            {vibe.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <ShareIcon className="w-5 h-5" />
            <span>Share Your Vibe</span>
          </motion.button>

          <Link href="/quiz">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-2 bg-white text-gray-800 border border-gray-200 px-6 py-3 rounded-lg font-medium hover:border-purple-400 transition-colors w-full"
            >
              <ArrowPathIcon className="w-5 h-5" />
              <span>Check Again</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </main>
  )
} 