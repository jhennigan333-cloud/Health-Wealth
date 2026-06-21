import { useParams, Link } from 'react-router-dom'
import articles from '../data/articles'
import learningPath from '../data/learningPath'
import { highlightTerms } from '../utils/highlightTerms'
import './ArticlePage.css'

function ArticlePage() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === Number(id))

  const pathIndex = learningPath.indexOf(article?.id)
  const nextId = pathIndex !== -1 ? learningPath[pathIndex + 1] : null
  const nextArticle = nextId ? articles.find((a) => a.id === nextId) : null

  if (!article) {
    return (
      <div className="article-not-found">
        <h1>Article not found</h1>
        <Link to="/articles">← Back to articles</Link>
      </div>
    )
  }

  return (
    <div className="article-page">
      <div className="article-header">
        <span className="article-category">{article.category}</span>
        <h1>{article.title}</h1>
        <p className="article-date">{article.date}</p>
      </div>

      <div className="article-body">
        {article.body.map((paragraph, index) => (
          <p key={index}>{highlightTerms(paragraph)}</p>
        ))}
      </div>

      <div className="article-newsletter">
        <h2>Enjoyed this? Get more like it.</h2>
        <p>
          We break down one big finance or economy topic every week — in plain
          English, no jargon required.
        </p>
        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe free</button>
        </form>
      </div>

      {nextArticle && (
        <div className="next-lesson">
          <span className="next-lesson-label">Next in your learning path</span>
          <Link to={`/articles/${nextArticle.id}`} className="next-lesson-link">
            {nextArticle.title} →
          </Link>
        </div>
      )}

      <Link to="/articles" className="back-link">← Back to articles</Link>
    </div>
  )
}

export default ArticlePage
