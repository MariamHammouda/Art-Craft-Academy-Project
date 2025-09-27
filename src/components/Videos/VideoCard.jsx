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
    console.log('🎬 VideoCard clicked:', { id, title: displayTitle });
    navigate(`/video/${id}`);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="aspect-video relative">
        <iframe
          className="w-full h-full pointer-events-none"
          src={url}
          title={displayTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* Click overlay */}
        <div 
          className="absolute inset-0 cursor-pointer bg-transparent hover:bg-black hover:bg-opacity-10 transition-all"
          onClick={handleClick}
          title="Click to view video details"
        />
      </div>
      <div 
        className="p-4 cursor-pointer"
        onClick={handleClick}
      >
        <h4 className="font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#59ACBE] transition-colors">{displayTitle}</h4>
        {displayCategoryTitle && (
          <p className="text-sm text-gray-500">{displayCategoryTitle}</p>
        )}
      </div>
    </div>
  );
}

export default VideoCard