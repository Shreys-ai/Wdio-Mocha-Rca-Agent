import '../styles/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <h1>🔍 RCA Test Data Generator</h1>
        <p className="hero-subtitle">
          Generate comprehensive test data for AI-powered Root Cause Analysis
        </p>
        <p className="hero-description">
          Phase 1: Comprehensive test pages with multiple sub-scenarios for each error type. 
          Each error has different root causes (e.g., NoSuchElement due to: element not present, element in iframe, element in different window, etc.)
          Perfect for WebDriverIO with Mocha testing on BrowserStack Automate with Test Observability integration.
        </p>
      </header>

      <section className="categories-section">
        <h2>Live Test Pages - Comprehensive Error Scenarios</h2>
        <p className="section-description">
          Each test page contains multiple sub-scenarios for different root causes of the same error type.
          Perfect for comprehensive WebDriverIO with Mocha testing on BrowserStack Automate.
        </p>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon">🔍</div>
            <h3>Selenium Level Errors</h3>
            <p>NoSuchElement, StaleElement, Timeout, ElementNotInteractable with multiple sub-scenarios for each error type</p>
            <div className="category-count">16 sub-scenarios</div>
            <a href="/selenium-level-tests.html" target="_blank" className="test-link">Open Test Page</a>
          </div>
          
          <div className="category-card">
            <div className="category-icon">🌐</div>
            <h3>Application Level Errors</h3>
            <p>HTTP errors (404, 500, 503, 403, 401), CORS, SSL/TLS certificate issues with different failure causes</p>
            <div className="category-count">20 sub-scenarios</div>
            <a href="/application-level-tests.html" target="_blank" className="test-link">Open Test Page</a>
          </div>
          
          <div className="category-card">
            <div className="category-icon">📡</div>
            <h3>Network Level Errors</h3>
            <p>Connection timeouts, DNS failures, API issues, resource loading problems with multiple root causes</p>
            <div className="category-count">18 sub-scenarios</div>
            <a href="/network-level-tests.html" target="_blank" className="test-link">Open Test Page</a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Phase 1: Test Data Generation Website</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🎯 Realistic Error Scenarios</h3>
            <p>Each test page contains actual HTML elements designed to trigger specific Selenium/WebDriver exceptions</p>
          </div>
          <div className="feature-card">
            <h3>🔧 WebDriverIO Ready</h3>
            <p>Optimized for WebDriverIO with Mocha testing framework on BrowserStack Automate platform</p>
          </div>
          <div className="feature-card">
            <h3>🤖 RCA Training Data</h3>
            <p>Structured error scenarios perfect for training AI-powered root cause analysis systems</p>
          </div>
          <div className="feature-card">
            <h3>📊 BrowserStack Integration</h3>
            <p>Designed to run on BrowserStack Automate with Test Observability for comprehensive error logging</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Next Steps</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Phase 2: WebDriverIO Tests</h3>
            <p>Create WebDriverIO with Mocha test suite to run against these test pages on BrowserStack</p>
          </div>
          <div className="feature-card">
            <h3>Phase 3: Error Collection</h3>
            <p>Collect failure logs and error data from BrowserStack Test Observability</p>
          </div>
          <div className="feature-card">
            <h3>Phase 4: RCA Training</h3>
            <p>Use collected error data to train and improve AI-powered root cause analysis</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
