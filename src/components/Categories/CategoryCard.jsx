import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const CategoryCard = ({ titleKey, icon, color, id }) => {
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
      className="flex flex-col items-center text-center min-w-fit group"
    >
      <div 
        className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
        onClick={handleCategoryClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleCategoryClick(e);
          }
        }}
      >
        <div
          className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl mb-2"
          style={{ backgroundColor: color }}
        >
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        <p className="text-sm font-semibold text-gray-700 group-hover:text-[#003FBC] transition-colors duration-200 whitespace-nowrap">
          {title}
        </p>
      </div>
    </div>
  );
};

export default memo(CategoryCard);
