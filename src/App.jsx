import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import './i18n/i18n' // Initialize i18n
import NavBar from './components/Navbar/NavBar.jsx'
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
import PicturesPage from './components/Pages/PicturesPage'
import PictureCategoryPage from './components/Pages/PictureCategoryPage'
import DrawingDetailPage from './components/Pages/DrawingDetailPage'
import Footer from './components/Footer/Footer'
import QuotaManager from './components/Debug/QuotaManager'


// Component to track navigation changes
function NavigationTracker() {
  const location = useLocation();
  
  useEffect(() => {
    console.log('🧭 Navigation changed to:', location.pathname, location.hash);
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <NavigationTracker />
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
          <Route path="/pictures" element={
            <div style={{padding: '20px'}}>
              <h1>Pictures Page Test</h1>
              <p>If you see this, routing works!</p>
              <PicturesPage />
            </div>
          } />
          <Route path="/pictures/category/:categoryId" element={<PictureCategoryPage />} />
          <Route path="/pictures/drawing/:drawingId" element={<DrawingDetailPage />} />
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
