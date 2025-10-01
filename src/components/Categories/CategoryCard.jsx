import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CategoryCard = ({ titleKey, icon, color, id }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const title = t(titleKey);

  const handleCategoryClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Category clicked:', id, title);
    
    try {
      // Navigate directly to category page
      navigate(`/category/${id}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }, [id, title, navigate]);

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
          <img src={icon} alt={title} className="w-10 h-10" />
        </div>
        <p className="text-sm font-semibold text-gray-700 group-hover:text-[#003FBC] transition-colors duration-200">
          {title}
        </p>
      </div>
    </div>
  );
};

export default memo(CategoryCard);
