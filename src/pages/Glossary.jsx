import { Link } from 'react-router-dom'
import glossaryLevels from '../data/glossaryLevels'
import './Glossary.css'

const terms = [
  { term: 'Inflation', slug: 'inflation', definition: 'When prices for everyday things go up over time, so your money buys less than it used to.', example: 'If a coffee costs $3 today and $3.15 next year, that\'s inflation.' },
  { term: 'Interest Rate', slug: 'interest-rate', definition: 'The cost of borrowing money, shown as a percentage. If you borrow $100 at 5% interest, you pay back $105.', example: 'Banks charge interest on loans. They also pay you interest on savings accounts.' },
  { term: 'GDP (Gross Domestic Product)', slug: 'gdp', definition: 'The total value of everything a country produces in a year. It\'s the main way we measure how big an economy is.', example: 'If the US GDP grows 3%, it means the economy produced 3% more goods and services than last year.' },
  { term: 'Stock', slug: 'stock', definition: 'A small piece of ownership in a company. When you buy a stock, you own a tiny slice of that business.', example: 'Buying one share of Apple means you own a tiny fraction of Apple the company.' },
  { term: 'Budget', slug: 'budget', definition: 'A plan for how you\'ll spend and save your money over a period of time.', example: 'Deciding to spend $200 on food, $100 on fun, and save $150 each month is a budget.' },
  { term: 'Recession', slug: 'recession', definition: 'When the economy shrinks for at least two quarters in a row. People tend to spend less, businesses earn less, and unemployment goes up.', example: 'During the 2008 recession, many people lost jobs and home values dropped.' },
  { term: 'Federal Reserve', slug: 'federal-reserve', definition: 'The central bank of the United States. It controls interest rates and tries to keep the economy stable.', example: 'When inflation gets too high, the Fed raises interest rates to slow down spending.' },
]

function Glossary() {
  return (
    <div className="glossary-page">
      <h1>Glossary</h1>
      <p className="glossary-subtitle">Plain-English definitions for every finance and economics term you'll find on this site. Click any term to go deeper.</p>

      <div className="terms-list">
        {terms.map(({ term, slug, definition, example }) => {
          const hasLevels = glossaryLevels.some((g) => g.slug === slug)
          return (
            <div className="term-card" key={term}>
              <div className="term-card-header">
                <h2 className="term-name">{term}</h2>
                {hasLevels && (
                  <Link to={`/glossary/${slug}`} className="term-deep-link">
                    Go deeper →
                  </Link>
                )}
              </div>
              <p className="term-definition">{definition}</p>
              <div className="term-example">
                <span className="example-label">Example:</span> {example}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Glossary
