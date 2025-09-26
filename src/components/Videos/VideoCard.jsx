import React from 'react'
import { useTranslation } from 'react-i18next';

const VideoCard = ({ url, titleKey, categoryTitleKey, title, categoryTitle }) => {
  const { t } = useTranslation();
  
  // Use translation key if available, otherwise fallback to direct title
  const displayTitle = titleKey ? t(titleKey) : title;
  const displayCategoryTitle = categoryTitleKey ? t(categoryTitleKey) : categoryTitle;
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
        <h4 className="font-semibold text-gray-800 mb-1 line-clamp-2">{displayTitle}</h4>
        {displayCategoryTitle && (
          <p className="text-sm text-gray-500">{displayCategoryTitle}</p>
        )}
      </div>
    </div>
  );
}

export default VideoCard