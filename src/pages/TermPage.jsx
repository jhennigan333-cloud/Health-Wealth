import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import glossaryLevels from '../data/glossaryLevels'
import { useProgress } from '../hooks/useProgress'
import { useLockSetting } from '../hooks/useLockSetting'
import Quiz from '../components/Quiz'
import './TermPage.css'

function TermPage() {
  const { term } = useParams()
  const entry = glossaryLevels.find((g) => g.slug === term)
  const [activeLevel, setActiveLevel] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const { isComplete, isUnlocked, markComplete } = useProgress(term)
  const { locked, toggle: toggleLock } = useLockSetting()

  if (!entry) {
    return (
      <div className="term-not-found">
        <h1>Term not found</h1>
        <Link to="/glossary">← Back to glossary</Link>
      </div>
    )
  }

  const current = entry.levels[activeLevel]
  const totalLevels = entry.levels.length

  const handleTabClick = (index) => {
    if (locked && !isUnlocked(index)) return
    setActiveLevel(index)
    setShowQuiz(false)
  }

  const handlePass = () => {
    markComplete(activeLevel)
    setShowQuiz(false)
    if (activeLevel < totalLevels - 1) {
      setActiveLevel(activeLevel + 1)
    }
  }

  return (
    <div className="term-page">
      <Link to="/glossary" className="back-link">← Back to glossary</Link>

      <div className="term-header">
        <h1>{entry.term}</h1>
        <div className="mode-selector">
          <span className="mode-label">Choose your mode:</span>
          <div className="mode-buttons">
            <button
              className={`mode-btn ${locked ? 'mode-active' : ''}`}
              onClick={() => !locked && toggleLock()}
            >
              📚 Learn It
            </button>
            <button
              className={`mode-btn ${!locked ? 'mode-active' : ''}`}
              onClick={() => locked && toggleLock()}
            >
              🔥 Burn It
            </button>
          </div>
          <p className="term-subtitle">
            {locked ? 'Pass each level\'s quiz to unlock the next.' : 'All levels open — read at your own pace.'}
          </p>
        </div>
      </div>

      <div className="level-tabs">
        {entry.levels.map((level, index) => {
          const unlocked = !locked || isUnlocked(index)
          const complete = isComplete(index)
          return (
            <button
              key={index}
              className={`level-tab ${activeLevel === index ? 'active' : ''} ${!unlocked ? 'locked' : ''} ${complete ? 'complete' : ''}`}
              onClick={() => handleTabClick(index)}
              disabled={!unlocked}
            >
              <span className="tab-number">
                {complete ? '✓' : !unlocked ? '🔒' : `Level ${index + 1}`}
              </span>
              <span className="tab-title">{level.title}</span>
            </button>
          )
        })}
      </div>

      {!showQuiz ? (
        <>
          <div className="level-content">
            <div className="level-badge">Level {activeLevel + 1} — {current.title}</div>
            <p className="level-explanation">{current.explanation}</p>
            <div className="level-example">
              <span className="example-label">Example: </span>
              {current.example}
            </div>
          </div>

          <div className="level-actions">
            {isComplete(activeLevel) ? (
              <div className="level-complete-msg">✓ You've completed this level</div>
            ) : (
              <button className="test-btn" onClick={() => setShowQuiz(true)}>
                Ready to test yourself? →
              </button>
            )}
          </div>
        </>
      ) : (
        <Quiz
          slug={entry.slug}
          levelIndex={activeLevel}
          totalLevels={totalLevels}
          onPass={handlePass}
          onClose={() => setShowQuiz(false)}
        />
      )}
    </div>
  )
}

export default TermPage
