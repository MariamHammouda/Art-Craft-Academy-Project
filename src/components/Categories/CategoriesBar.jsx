import { useState, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { categoriesData } from "../../mockData/categoriesData.js";
import CategoryCard from "./CategoryCard.jsx";

const CategoriesBar = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Show different number of categories based on screen size
  const [visibleCount, setVisibleCount] = useState(3);
  
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      let newCount;
      if (width >= 1280) {
        newCount = 4; // xl screens - reduced to ensure full visibility
      } else if (width >= 1024) {
        newCount = 3; // lg screens - reduced
      } else if (width >= 768) {
        newCount = 2; // md screens - reduced
      } else if (width >= 640) {
        newCount = 2; // sm screens
      } else {
        newCount = 1; // xs screens
      }
      
      setVisibleCount(prev => prev !== newCount ? newCount : prev);
    };
    
    // Throttle resize events to improve performance
    let timeoutId;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateVisibleCount, 150);
    };
    
    updateVisibleCount();
    window.addEventListener('resize', throttledResize, { passive: true });
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(timeoutId);
    };
  }, []);
  
  const totalCategories = categoriesData.length;
  const maxIndex = Math.max(0, totalCategories - visibleCount);
  
  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };
  
  // Removed auto-slide to prevent performance issues
  
  const showNavigation = totalCategories > visibleCount;
  const totalDots = Math.max(1, maxIndex + 1);
  
  return (
    <section id="categories" className="p-10 m-10 w-full" >
      <h2 className="text-2xl font-bold mb-6 text-center">{t('categories.title')}</h2>
      <p className="text-gray-600 text-center mb-8">{t('categories.subtitle')}</p>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Previous Button */}
        {showNavigation && currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous categories"
          >
            <FiChevronLeft className="w-6 h-6 text-[#59ACBE]" />
          </button>
        )}

     
             {/* Categories Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-out gap-2"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              willChange: 'transform'
            }}
          >
            {categoriesData.map((cat) => (
              <div 
                key={cat.id} 
                className="flex-shrink-0"
                style={{ 
                  width: `calc((100% - ${(visibleCount - 1) * 8}px) / ${visibleCount})`
                }}
              >
                <CategoryCard
                  id={cat.id}
                  titleKey={cat.titleKey}
                  icon={cat.icon}
                  color={cat.color}
                  bannerImage={cat.bannerImage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        {showNavigation && currentIndex < maxIndex && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next categories"
          >
            <FiChevronRight className="w-6 h-6 text-[#59ACBE]" />
          </button>
        )}
      </div>

      {/* Dots Indicator */}
      {showNavigation && totalDots > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex 
                  ? 'bg-[#59ACBE]' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default memo(CategoriesBar);
