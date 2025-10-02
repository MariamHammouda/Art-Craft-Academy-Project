import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const CategoryCard = ({ titleKey, icon, color, id, bannerImage }) => {
  const { t } = useTranslation();
  
  const title = t(titleKey);

  const handleCategoryClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Category clicked:', id, title);
    
    try {
      // Scroll to the video category section
      const targetElement = document.getElementById(`cat-${id}`);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      } else {
        console.warn(`Category section with id 'cat-${id}' not found`);
      }
    } catch (error) {
      console.error('Scroll error:', error);
    }
  }, [id, title]);

  return (
    <div 
      className="group cursor-pointer"
      onClick={handleCategoryClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCategoryClick(e);
        }
      }}
    >
      <div className="bg-white rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 overflow-hidden w-full">
        {/* Image Section */}
        <div className="relative h-32 overflow-hidden">
          <img
            src={bannerImage || icon}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Color overlay */}
          <div 
            className="absolute inset-0 opacity-80"
            style={{ backgroundColor: color }}
          ></div>
          
          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={icon} 
              alt={title} 
              className="w-12 h-12 filter drop-shadow-lg" 
            />
          </div>
        </div>
        
        {/* White Content Section */}
        <div className="p-4 text-center bg-white">
          {/* Title */}
          <h3 className="text-gray-800 font-bold text-sm mb-3 leading-tight">
            {title}
          </h3>
          
          {/* Explore Button */}
          <button className="bg-[#59ACBE] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#FCD11A] hover:text-[#59ACBE] transition-colors duration-200 w-full">
            {t('common.explore')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CategoryCard);
