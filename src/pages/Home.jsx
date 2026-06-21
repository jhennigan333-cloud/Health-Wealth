import { Link } from 'react-router-dom'
import articles from '../data/articles'
import './Home.css'

const featuredArticles = articles.slice(0, 3)

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Health & Wealth</h1>
        <p className="hero-tagline">
          Pursue wealth to fund your health. Pursue health to enjoy your wealth.
        </p>
        <p>
          No jargon. No Wall Street talk. Just clear, honest explanations of
          money, the economy, and how it all affects you.
        </p>
        <div className="hero-actions">
          <Link to="/newsletter" className="hero-btn">Get the newsletter</Link>
          <Link to="/start-here" className="hero-btn-secondary">New to this? Start here →</Link>
        </div>
      </section>

      <section className="articles-preview">
        <h2>Latest Articles</h2>
        <div className="article-cards">
          {featuredArticles.map((article) => (
            <div className="article-card" key={article.id}>
              <span className="article-category">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <Link to={`/articles/${article.id}`}>Read more →</Link>
            </div>
          ))}
        </div>
        <Link to="/articles" className="see-all">See all articles →</Link>
      </section>

      <section className="newsletter-strip">
        <h2>Stay in the loop</h2>
        <p>A weekly breakdown of what's happening in the economy — in plain English.</p>
        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  )
}

export default Home
