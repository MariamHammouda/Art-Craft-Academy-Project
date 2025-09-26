import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VideoCard = ({ id, url, titleKey, categoryTitleKey, title, categoryTitle }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Use translation key if available, otherwise fallback to direct title
  const displayTitle = titleKey ? t(titleKey) : title;
  const displayCategoryTitle = categoryTitleKey ? t(categoryTitleKey) : categoryTitle;
  
  const handleClick = () => {
    navigate(`/video/${id}`);
  };
  
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={handleClick}
    >
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={url}
          title={displayTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#59ACBE] transition-colors">{displayTitle}</h4>
        {displayCategoryTitle && (
          <p className="text-sm text-gray-500">{displayCategoryTitle}</p>
        )}
      </div>
    </div>
  );
}

export default VideoCard