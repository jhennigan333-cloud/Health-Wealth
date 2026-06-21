import './Help.css'

const HELP_EMAIL = 'help@healthandwealth.com'

function Help() {
  return (
    <div className="help-page">

      <section className="help-hero">
        <h1>We're here to help.</h1>
        <p>
          This website exists for you — so if something isn't working, isn't clear,
          or just isn't what you hoped for, we genuinely want to hear about it.
        </p>
      </section>

      <section className="help-reasons">
        <div className="help-card">
          <span className="help-icon">🧭</span>
          <h2>Not sure where to start?</h2>
          <p>
            Finance can feel like a lot. If you're not sure which articles to read
            first or where you fit in, just ask. We'll point you in the right direction
            based on what you're trying to learn.
          </p>
        </div>

        <div className="help-card">
          <span className="help-icon">💬</span>
          <h2>Questions about the website?</h2>
          <p>
            Whether it's a technical issue, a term you can't find in the glossary,
            or a topic you wish we covered — reach out. If enough people ask the same
            question, it probably means we should address it.
          </p>
        </div>

        <div className="help-card">
          <span className="help-icon">🔨</span>
          <h2>Have criticism? Please send it.</h2>
          <p>
            We mean this. If something we wrote is confusing, wrong, or could be
            explained better — tell us. This website is supposed to serve you, not
            the other way around. Critical feedback is the most valuable kind.
          </p>
        </div>
      </section>

      <section className="help-contact">
        <h2>Get in touch</h2>
        <p>Send us an email at any time. We read every message.</p>
        <a href={`mailto:${HELP_EMAIL}`} className="help-email">
          {HELP_EMAIL}
        </a>
      </section>

      <section className="help-research">
        <h2>How we create our content</h2>
        <p className="research-intro">
          We take accuracy seriously. Simple explanations only work if they are also
          correct. Here is how we approach every piece of content on this site:
        </p>

        <div className="research-steps">
          <div className="research-step">
            <span className="step-number">01</span>
            <div>
              <h3>We start with established sources</h3>
              <p>
                Every topic we cover is grounded in material from trusted institutions —
                the Federal Reserve, the US Bureau of Economic Analysis, academic
                economics textbooks, and peer-reviewed research. We do not invent
                definitions or rely on opinion.
              </p>
            </div>
          </div>

          <div className="research-step">
            <span className="step-number">02</span>
            <div>
              <h3>We simplify without distorting</h3>
              <p>
                Making something easy to understand does not mean making it inaccurate.
                We ask ourselves: would a leading expert in this field agree with what
                we've written, even if they would phrase it differently? If the answer
                is no, we rewrite it.
              </p>
            </div>
          </div>

          <div className="research-step">
            <span className="step-number">03</span>
            <div>
              <h3>We use real examples</h3>
              <p>
                Abstract concepts stick when they're tied to something real. Every
                explanation on this site is paired with a concrete, real-world example
                so you can see exactly how it applies to everyday life.
              </p>
            </div>
          </div>

          <div className="research-step">
            <span className="step-number">04</span>
            <div>
              <h3>We update when things change</h3>
              <p>
                The economy changes. Laws change. Data gets revised. We are committed
                to keeping our content current so that what you read here reflects
                the world as it actually is.
              </p>
            </div>
          </div>
        </div>

        <p className="research-footer">
          If you ever spot something on this site that you believe is inaccurate,
          please email us. We will look into it and correct it if needed.{' '}
          <a href={`mailto:${HELP_EMAIL}`}>{HELP_EMAIL}</a>
        </p>
      </section>

    </div>
  )
}

export default Help
