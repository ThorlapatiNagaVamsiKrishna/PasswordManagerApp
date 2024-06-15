import PasswordManager from './components/PasswordManager'
import './App.css'

const App = () => {
  return (
    <div className="password-manager-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
        className="logo-image"
      />
      <PasswordManager />
    </div>
  )
}

export default App
