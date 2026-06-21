import glossaryTerms from '../data/glossary'
import GlossaryTooltip from '../components/GlossaryTooltip'

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Sort longest terms first so "Federal Reserve" matches before "reserve"
const sortedTerms = [...glossaryTerms].sort((a, b) => b.term.length - a.term.length)

const pattern = new RegExp(
  `\\b(${sortedTerms.map((t) => escapeRegex(t.term)).join('|')})\\b`,
  'gi'
)

export function highlightTerms(text) {
  const parts = text.split(pattern)

  return parts.map((part, i) => {
    const match = sortedTerms.find(
      (t) => t.term.toLowerCase() === part.toLowerCase()
    )
    if (match) {
      return (
        <GlossaryTooltip
          key={i}
          term={part}
          definition={match.definition}
          example={match.example}
        />
      )
    }
    return part
  })
}
