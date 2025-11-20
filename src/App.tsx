import './App.css'
import LandingPage from './components/LandingPage'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <LandingPage />
      </main>
    </div>
  )
}

export default App
