import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './i18n/i18n' // Initialize i18n
import NavBar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import CategoriesBar from "./components/Categories/CategoriesBar"
import { VideosByCategory } from "./components/Videos/VideosByCategory"
import LatestVideos from './components/Videos/LatestVideos'
import FeaturedStories from './components/Stories/FeaturedStories'
import ShortsStories from './components/Stories/ShortsStories'
import CategoryPage from './components/CategoryPage/CategoryPage'
import VideoDetailPage from './components/VideoDetail/VideoDetailPage'
import CoursesPage from './components/Pages/CoursesPage'
import ShopPage from './components/Pages/ShopPage'
import AboutPage from './components/Pages/AboutPage'
import Footer from './components/Footer/Footer'
import QuotaManager from './components/Debug/QuotaManager'

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
        
              <CategoriesBar />
              <VideosByCategory />
            </>
          } />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/video/:videoId" element={<VideoDetailPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
        <QuotaManager />
      </div>
    </Router>
  )
}

export default App
