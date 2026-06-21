import { useState } from 'react'
import { Link } from 'react-router-dom'
import articles from '../data/articles'
import './Articles.css'

const categories = ['All', 'Economics', 'Personal Finance', 'Investing']

function Articles() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  return (
    <div className="articles-page">
      <h1>Articles</h1>
      <p className="articles-subtitle">Simple explanations of finance and economics — no experience needed.</p>

      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="articles-list">
        {filtered.map((article) => (
          <div className="article-row" key={article.id}>
            <span className="article-category">{article.category}</span>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <Link to={`/articles/${article.id}`}>Read more →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Articles
