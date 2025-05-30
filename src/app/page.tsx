import Link from 'next/link'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16 flex flex-col items-center min-h-screen">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ✨ Vibe Check ✨
          </h1>
          <p className="text-gray-600 text-lg">
            Discover your current energy and share it with friends!
          </p>
        </div>

        <div className="space-y-6">
          <Link
            href="/quiz"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <span>Start Your Vibe Check</span>
            <ArrowRightCircleIcon className="w-6 h-6" />
          </Link>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Quick, fun, and totally scientific* 😉</p>
          <p>*Results may vary based on your current mood</p>
        </div>
      </div>
    </main>
  )
}
