import { useState } from 'react'

const STORAGE_KEY = 'hw_level_progress'

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

export function useProgress(slug) {
  const [allProgress, setAllProgress] = useState(load)
  const completed = allProgress[slug] || []

  const isComplete = (i) => completed.includes(i)
  const isUnlocked = (i) => i === 0 || isComplete(i - 1)

  const markComplete = (i) => {
    if (isComplete(i)) return
    const updated = { ...allProgress, [slug]: [...completed, i] }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setAllProgress(updated)
  }

  return { isComplete, isUnlocked, markComplete }
}
