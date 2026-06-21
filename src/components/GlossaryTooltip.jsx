import { useState, useRef, useEffect } from 'react'
import './GlossaryTooltip.css'

function GlossaryTooltip({ term, definition, example }) {
  const [open, setOpen] = useState(false)
  const [align, setAlign] = useState('center')
  const wrapperRef = useRef(null)

  const computeAlign = () => {
    if (!wrapperRef.current) return
    const rect = wrapperRef.current.getBoundingClientRect()
    const tooltipWidth = 280
    if (rect.left < tooltipWidth / 2) setAlign('left')
    else if (window.innerWidth - rect.right < tooltipWidth / 2) setAlign('right')
    else setAlign('center')
  }

  const show = () => { computeAlign(); setOpen(true) }
  const hide = () => setOpen(false)
  const toggle = (e) => { e.stopPropagation(); open ? hide() : show() }

  // close when tapping anywhere else on mobile
  useEffect(() => {
    if (!open) return
    const handler = () => setOpen(false)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [open])

  return (
    <span
      className="glossary-term"
      ref={wrapperRef}
      onMouseEnter={show}
      onMouseLeave={hide}
      onClick={toggle}
    >
      <span className="glossary-highlight">{term}</span>
      {open && (
        <span className={`glossary-tooltip tooltip-${align}`}>
          <span className="tooltip-term">{term}</span>
          <span className="tooltip-definition">{definition}</span>
          <span className="tooltip-example">
            <span className="tooltip-example-label">Example: </span>
            {example}
          </span>
        </span>
      )}
    </span>
  )
}

export default GlossaryTooltip
