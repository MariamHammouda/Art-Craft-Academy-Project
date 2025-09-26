import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import CategoriesBar from "./components/Categories/CategoriesBar"
import { VideosByCategory } from "./components/Videos/VideosByCategory"
import CategoryPage from './components/CategoryPage/CategoryPage'

function App() {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <NavBar/>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection/>
              <CategoriesBar />
              <VideosByCategory />
            </>
          } />
          <Route path="/category/:id" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
