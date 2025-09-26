import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import CategoriesBar from "./components/Categories/CategoriesBar"
import { VideosByCategory } from "./components/Videos/VideosByCategory"
import LatestVideos from './components/Videos/LatestVideos'
import FeaturedStories from './components/Stories/FeaturedStories'
import ShortsStories from './components/Stories/ShortsStories'
import CategoryPage from './components/CategoryPage/CategoryPage'
import CoursesPage from './components/Pages/CoursesPage'
import ShopPage from './components/Pages/ShopPage'
import AboutPage from './components/Pages/AboutPage'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <NavBar/>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection/>
              <LatestVideos />
              <ShortsStories />
              <FeaturedStories />
              <CategoriesBar />
              <VideosByCategory />
            </>
          } />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
