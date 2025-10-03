import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import './i18n/i18n' // Initialize i18n
import NavBar from './components/NavBar/NavBar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import CategoriesBar from "./components/Categories/CategoriesBar.jsx"
import { VideosByCategory } from "./components/Videos/VideosByCategory.jsx"
import LatestVideos from './components/Videos/LatestVideos.jsx'
import LatestPicturesSlider from './components/Pictures/LatestPicturesSlider.jsx'
import PictureDetailPage from './components/Pictures/PictureDetailPage.jsx'
import FeaturedStories from './components/Stories/FeaturedStories.jsx'
import ShortsStories from './components/Stories/ShortsStories.jsx'
import CategoryPage from './components/CategoryPage/CategoryPage.jsx'
import VideoDetailPage from './components/VideoDetail/VideoDetailPage.jsx'
import AboutPage from './components/Pages/AboutPage.jsx'
import CoursesPage from './components/Pages/CoursesPage.jsx'
import ShopPage from './components/Pages/ShopPage.jsx'
import PicturesPage from './components/Pages/PicturesPage.jsx'
import PictureCategoryPage from './components/Pages/PictureCategoryPage.jsx'
import DrawingDetailPage from './components/Pages/DrawingDetailPage.jsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'
import Footer from './components/Footer/Footer.jsx'
import QuotaManager from './components/Debug/QuotaManager.jsx'

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
              <ErrorBoundary fallbackMessage="Unable to load latest videos. Please try refreshing the page.">
                <LatestVideos />
              </ErrorBoundary>
              <ErrorBoundary fallbackMessage="Unable to load latest pictures. Please try refreshing the page.">
                <LatestPicturesSlider />
              </ErrorBoundary>
              <CategoriesBar />
              <ErrorBoundary fallbackMessage="Unable to load video categories. Please try refreshing the page.">
                <VideosByCategory />
              </ErrorBoundary>
            </>
          } />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/video/:videoId" element={<VideoDetailPage />} />
          <Route path="/pictures" element={<PicturesPage />} />
          <Route path="/pictures/category/:categoryId" element={<PictureCategoryPage />} />
          <Route path="/pictures/detail/:id" element={<PictureDetailPage />} />
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
