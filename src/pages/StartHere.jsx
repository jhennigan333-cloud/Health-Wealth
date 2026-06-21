import { Link } from 'react-router-dom'
import articles from '../data/articles'
import learningPath from '../data/learningPath'
import './StartHere.css'

const pathArticles = learningPath.map((id) => articles.find((a) => a.id === id))

function StartHere() {
  return (
    <div className="start-here-page">

      <section className="start-welcome">
        <h1>Welcome. You're in the right place.</h1>
        <p>
          Thank you for choosing to spend your time here. The fact that you clicked
          this button says a lot about you — you're someone who wants to take control
          of their future, and that is genuinely something to be proud of.
        </p>
      </section>

      <section className="start-pep">
        <p>
          Before you dive in, we want to say something important:
        </p>
        <blockquote className="pep-talk">
          Don't be overwhelmed. These topics can sound intimidating at first — and
          that's completely normal. The fact that you're actively making the decision
          to learn puts you ahead of most people. Take your time. There is no rush,
          no test, and no judgment here. Go at your own pace, and you will get to
          where you want to be. We promise.
        </blockquote>
      </section>

      <section className="start-path">
        <h2>Your learning path</h2>
        <p className="path-description">
          We've put together a simple starting point — five short reads that build on
          each other. Start at the top and work your way down whenever you're ready.
        </p>

        <div className="path-list">
          {pathArticles.map((article, index) => (
            <Link
              to={`/articles/${article.id}`}
              className="path-item"
              key={article.id}
            >
              <span className="path-number">{index + 1}</span>
              <div className="path-info">
                <span className="path-category">{article.category}</span>
                <span className="path-title">{article.title}</span>
                <span className="path-summary">{article.summary}</span>
              </div>
              <span className="path-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}

export default StartHere
