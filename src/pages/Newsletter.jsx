import './Newsletter.css'

function Newsletter() {
  return (
    <div className="newsletter-page">
      <div className="newsletter-content">
        <h1>The Health & Wealth Newsletter</h1>
        <p className="newsletter-lead">
          Every week, we break down what's happening in finance and the economy
          — clearly, simply, and in a way that actually makes sense.
        </p>

        <ul className="newsletter-promises">
          <li>No jargon — every term explained</li>
          <li>Short enough to read in 5 minutes</li>
          <li>Free, always</li>
        </ul>

        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Your email address</label>
          <div className="form-row">
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
            <button type="submit">Subscribe</button>
          </div>
          <p className="form-note">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
