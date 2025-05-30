'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const questions = [
  {
    id: 1,
    question: "How's your energy right now?",
    options: [
      { text: "✨ High-key vibrant", score: 10 },
      { text: "😌 Feeling balanced", score: 7 },
      { text: "😴 Pretty mellow", score: 4 },
      { text: "🫠 Zero battery", score: 1 }
    ]
  },
  {
    id: 2,
    question: "Pick your current mood color:",
    options: [
      { text: "💜 Deep Purple (mysterious)", score: 8 },
      { text: "💖 Pink (playful)", score: 10 },
      { text: "💙 Blue (calm)", score: 6 },
      { text: "💚 Green (grounded)", score: 4 }
    ]
  },
  {
    id: 3,
    question: "What sounds best right now?",
    options: [
      { text: "🎉 Dancing with friends", score: 10 },
      { text: "🎧 Chilling with music", score: 7 },
      { text: "🌿 Nature walk", score: 5 },
      { text: "🛋️ Cozy nap", score: 2 }
    ]
  },
  {
    id: 4,
    question: "Your current communication style:",
    options: [
      { text: "📢 ALL CAPS ENERGY!!!", score: 10 },
      { text: "💬 Full conversations", score: 7 },
      { text: "👍 Quick reactions", score: 4 },
      { text: "🤫 Silent mode", score: 1 }
    ]
  }
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const router = useRouter()

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate final vibe score and redirect to results
      const totalScore = newAnswers.reduce((a, b) => a + b, 0)
      const averageScore = Math.round(totalScore / questions.length)
      router.push(`/results?score=${averageScore}`)
    }
  }

  return (
    <main className="container mx-auto px-4 py-16 flex flex-col items-center min-h-screen">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {questions[currentQuestion].question}
            </h2>
            <div className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(option.score)}
                className="w-full text-left p-4 rounded-lg bg-white shadow-sm border border-gray-200 hover:border-purple-400 transition-colors"
              >
                {option.text}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
} 