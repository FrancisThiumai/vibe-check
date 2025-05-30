import Link from 'next/link'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16 flex flex-col items-center min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 space-y-8 border border-white/20"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent">
              ✨ Vibe Check ✨
            </h1>
          </motion.div>
          <p className="text-gray-600 text-lg">
            Discover your current energy and share it with friends!
          </p>
        </div>

        <div className="space-y-6">
          <Link href="/quiz" className="block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <span>Start Your Vibe Check</span>
              <ArrowRightCircleIcon className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-gray-500"
        >
          <p>Quick, fun, and totally scientific* 😉</p>
          <p>*Results may vary based on your current mood</p>
        </motion.div>
      </motion.div>
    </main>
  )
}
