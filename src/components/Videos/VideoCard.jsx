import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VideoCard = ({ id, url, titleKey, categoryTitleKey, title, categoryTitle, thumbnail }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showIframe, setShowIframe] = useState(false);
  
  // Use translation key if available, otherwise fallback to direct title
  const displayTitle = titleKey ? t(titleKey) : title;
  const displayCategoryTitle = categoryTitleKey ? t(categoryTitleKey) : categoryTitle;
  
  // Extract video ID from URL for thumbnail
  const getVideoId = (url) => {
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : null;
  };
  
  const videoId = getVideoId(url);
  const thumbnailUrl = thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : null);
  
  const handleClick = () => {
    console.log('🎬 VideoCard clicked:', { id, title: displayTitle });
    
    // Use window.location for reliable navigation
    window.location.href = `/video/${id}`;
  };
  
  const handleMouseEnter = () => {
    // Lazy load iframe on hover for better performance
    setShowIframe(true);
  };
  
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
      onMouseEnter={handleMouseEnter}
    >
      <div className="aspect-video relative bg-gray-100">
        {showIframe ? (
          <iframe
            className="w-full h-full pointer-events-none"
            src={url}
            title={displayTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <>
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={displayTitle}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </>
        )}
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

export default memo(VideoCard)