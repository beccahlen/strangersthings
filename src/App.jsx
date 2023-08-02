import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Header />
    <NavBar />
    <LoginPage />
    strangers things
    </>
  )
}

export default App
