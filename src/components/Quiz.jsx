import { useState, useEffect } from 'react'
import quizzes from '../data/quizzes'
import './Quiz.css'

const PASS_SCORE = 4

function Quiz({ slug, levelIndex, totalLevels, onPass, onClose }) {
  const questions = quizzes[slug]?.[levelIndex] || []
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [phase, setPhase] = useState('question')

  const question = questions[current]
  const score = answers.filter(Boolean).length
  const passed = score >= PASS_SCORE
  const isLastLevel = levelIndex === totalLevels - 1

  const handleSelect = (optionIndex) => {
    if (selected !== null) return
    const correct = optionIndex === question.correct
    const newAnswers = [...answers, correct]
    setSelected(optionIndex)
    setAnswers(newAnswers)

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((c) => c + 1)
        setSelected(null)
      } else {
        setPhase('results')
      }
    }, 900)
  }

  if (phase === 'results') {
    return (
      <div className="quiz-results">
        <div className={`quiz-score ${passed ? 'passed' : 'failed'}`}>
          {score} / {questions.length}
        </div>

        {passed ? (
          <>
            <h3>Level {levelIndex + 1} complete!</h3>
            <p>
              {isLastLevel
                ? 'You\'ve mastered this term. Seriously impressive.'
                : `Great work. Level ${levelIndex + 2} is now unlocked.`}
            </p>
            <button className="quiz-btn primary" onClick={onPass}>
              {isLastLevel ? 'Back to glossary' : `Continue to Level ${levelIndex + 2} →`}
            </button>
          </>
        ) : (
          <>
            <h3>Not quite — but you're close.</h3>
            <p>
              You need {PASS_SCORE}/5 to unlock the next level. Take another look at Level {levelIndex + 1} and give it another shot.
            </p>
            <button className="quiz-btn secondary" onClick={onClose}>
              Review the level
            </button>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <span className="quiz-label">Level {levelIndex + 1} Quiz</span>
        <span className="quiz-counter">{current + 1} of {questions.length}</span>
      </div>

      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${(current / questions.length) * 100}%` }} />
      </div>

      <p className="quiz-question">{question.question}</p>

      <div className="quiz-options">
        {question.options.map((option, i) => {
          let cls = 'quiz-option'
          if (selected !== null) {
            if (i === question.correct) cls += ' correct'
            else if (i === selected) cls += ' wrong'
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Quiz
