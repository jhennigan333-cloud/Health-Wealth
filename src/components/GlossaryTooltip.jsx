import './GlossaryTooltip.css'

function GlossaryTooltip({ term, definition, example }) {
  return (
    <span className="glossary-term">
      <span className="glossary-highlight">{term}</span>
      <span className="glossary-tooltip">
        <span className="tooltip-term">{term}</span>
        <span className="tooltip-definition">{definition}</span>
        <span className="tooltip-example">
          <span className="tooltip-example-label">Example: </span>
          {example}
        </span>
      </span>
    </span>
  )
}

export default GlossaryTooltip
