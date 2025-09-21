import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden'>

    <NavBar/>
    <HeroSection/>
    </div>
  )
}

export default App
