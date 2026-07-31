export default function Home() {
  return (
    <main className="site-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Kevin6 home">
          <span className="brand-mark">K6</span>
          <span className="brand-name">kevin6.com</span>
        </a>

        <a
          className="nav-link"
          href="https://toolbox.kevin6.com"
          aria-label="Open Kevin's Toolbox"
        >
          Toolbox <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            An independent digital workshop
          </p>

          <h1>
            Useful things,
            <br />
            <span>made simple.</span>
          </h1>

          <p className="intro">
            A growing collection of small, thoughtful tools for everyday work.
            Nothing extra—just what helps.
          </p>

          <a className="primary-action" href="https://toolbox.kevin6.com">
            <span>Open the Toolbox</span>
            <span className="action-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <div className="toolbox-preview" aria-hidden="true">
          <div className="preview-glow" />
          <div className="preview-window">
            <div className="window-bar">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="window-address">toolbox.kevin6.com</span>
              <span className="window-plus">+</span>
            </div>

            <div className="window-content">
              <div className="preview-heading">
                <span>THE TOOLBOX</span>
                <span>06</span>
              </div>

              <p>Pick a tool.<br />Get it done.</p>

              <div className="tool-grid">
                <div className="tool-tile tool-tile-accent">
                  <span>01</span>
                  <i>Think</i>
                </div>
                <div className="tool-tile">
                  <span>02</span>
                  <i>Make</i>
                </div>
                <div className="tool-tile">
                  <span>03</span>
                  <i>Check</i>
                </div>
                <div className="tool-tile tool-tile-dark">
                  <span>04</span>
                  <i>Finish</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Small tools. Clear thinking.</p>
        <p>© 2026 Kevin</p>
      </footer>
    </main>
  );
}
