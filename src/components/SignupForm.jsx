import { useState } from 'react'
import './SignupForm.css'

function SignupForm({ buttonText = 'Subscribe free' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        const data = await res.json().catch(() => ({}))
        console.error('Subscribe error:', res.status, data)
        setStatus('error')
      }
    } catch (err) {
      console.error('Subscribe fetch error:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="signup-success">
        <span className="signup-success-icon">✓</span>
        <p>You're in! Check your inbox for a confirmation email.</p>
      </div>
    )
  }

  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Subscribing...' : buttonText}
        </button>
      </form>
      {status === 'error' && (
        <p className="signup-error">Something went wrong. Please try again.</p>
      )}
    </div>
  )
}

export default SignupForm
