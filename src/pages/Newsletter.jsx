import SignupForm from '../components/SignupForm'
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

        <SignupForm buttonText="Subscribe" />
        <p className="form-note">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  )
}

export default Newsletter
