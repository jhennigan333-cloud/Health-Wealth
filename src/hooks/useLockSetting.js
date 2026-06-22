import { useState } from 'react'

const KEY = 'hw_lock_setting'

export function useLockSetting() {
  const [locked, setLocked] = useState(() => {
    const stored = localStorage.getItem(KEY)
    return stored === null ? true : stored === 'true'
  })

  const toggle = () => {
    const next = !locked
    localStorage.setItem(KEY, String(next))
    setLocked(next)
  }

  return { locked, toggle }
}
