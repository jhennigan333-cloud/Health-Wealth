import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import glossaryLevels from '../data/glossaryLevels'
import './TermPage.css'

function TermPage() {
  const { term } = useParams()
  const entry = glossaryLevels.find((g) => g.slug === term)
  const [activeLevel, setActiveLevel] = useState(0)

  if (!entry) {
    return (
      <div className="term-not-found">
        <h1>Term not found</h1>
        <Link to="/glossary">← Back to glossary</Link>
      </div>
    )
  }

  const current = entry.levels[activeLevel]
  const isFirst = activeLevel === 0
  const isLast = activeLevel === entry.levels.length - 1

  return (
    <div className="term-page">
      <Link to="/glossary" className="back-link">← Back to glossary</Link>

      <div className="term-header">
        <h1>{entry.term}</h1>
        <p className="term-subtitle">Start at Level 1 and go as deep as you like.</p>
      </div>

      <div className="level-tabs">
        {entry.levels.map((level, index) => (
          <button
            key={index}
            className={`level-tab ${activeLevel === index ? 'active' : ''}`}
            onClick={() => setActiveLevel(index)}
          >
            <span className="tab-number">Level {index + 1}</span>
            <span className="tab-title">{level.title}</span>
          </button>
        ))}
      </div>

      <div className="level-content">
        <div className="level-badge">Level {activeLevel + 1} — {current.title}</div>
        <p className="level-explanation">{current.explanation}</p>
        <div className="level-example">
          <span className="example-label">Example: </span>
          {current.example}
        </div>
      </div>

      <div className="level-nav">
        <button
          className="level-nav-btn"
          onClick={() => setActiveLevel((l) => l - 1)}
          disabled={isFirst}
        >
          ← Previous
        </button>
        <span className="level-nav-indicator">
          {activeLevel + 1} / {entry.levels.length}
        </span>
        <button
          className="level-nav-btn"
          onClick={() => setActiveLevel((l) => l + 1)}
          disabled={isLast}
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default TermPage
