import '../styles/Navigation.css'

const Navigation = () => {
  const testPages = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/selenium-level-errors.html', label: 'Selenium Level Errors', icon: '🔍' },
    { href: '/application-level-errors.html', label: 'Application Level Errors', icon: '🌐' },
    { href: '/network-level-errors.html', label: 'Network Level Errors', icon: '📡' },
  ]

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h2>🔍 RCA Test Data Generator</h2>
        <p>Phase 1: Comprehensive Error Sub-Scenarios</p>
      </div>
      <ul className="nav-list">
        {testPages.map((item) => (
          <li key={item.href} className="nav-item">
            <a
              href={item.href}
              className="nav-link"
              target={item.href !== '/' ? '_blank' : '_self'}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      
      <div className="nav-footer">
        <h3>🚀 Next Phases</h3>
        <p>Phase 2: WebDriverIO + Mocha tests</p>
        <p>Phase 3: BrowserStack execution</p>
        <p>Phase 4: RCA data collection</p>
      </div>
    </nav>
  )
}

export default Navigation
