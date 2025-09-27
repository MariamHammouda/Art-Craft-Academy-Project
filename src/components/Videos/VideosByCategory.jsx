import React from "react";
import { useTranslation } from 'react-i18next';
import VideoCard from "./VideoCard.jsx";
import { videosData } from "../../mockData/videosData.js";
import { categoriesData } from "../../mockData/categoriesData.js";
import { useNavigate } from "react-router-dom";
import { useLatestVideos } from "../../hooks/useYouTubeVideos.js";

export const VideosByCategory = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Fetch videos from YouTube API
  const { videos: apiVideos, loading, error } = useLatestVideos(50);
  
  // Use API videos if available, otherwise fallback to mock data
  const videosToUse = apiVideos.length > 0 ? apiVideos : videosData;

  // Group videos by category
  const videosByCategory = videosToUse.reduce((acc, video) => {
    const key = Number(video.categoryId);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(video);
    return acc;
  }, {});

  const handleCategoryClick = (categoryId, categoryTitle) => {
    navigate(`/category/${categoryId}`, { 
      state: { 
        categoryTitle,
        videos: videosByCategory[categoryId] || []
      }
    });
  };

  return (
    <section id="video-categories" className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        {t('videos.byCategory')}
      </h2>
      
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#59ACBE]"></div>
        </div>
      )}
      
      {error && (
        <div className="text-center py-8">
          <p className="text-red-600 mb-2">Error loading videos: {error}</p>
          <p className="text-gray-600">Showing fallback content...</p>
        </div>
      )}
      
      <div className="space-y-16">
        {categoriesData.map((category) => {
          const categoryVideos = videosByCategory[category.id] || [];
          const categoryVideosSorted = [...categoryVideos].sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
          
          if (categoryVideos.length === 0) return null;
          
          return (
            <div key={category.id} id={`cat-${category.id}`} className="max-w-7xl mx-auto">
              {/* Category Header */}
              <div 
                className="flex items-center justify-between mb-6 cursor-pointer group"
                onClick={() => handleCategoryClick(category.id, t(category.titleKey))}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition transform group-hover:scale-110"
                    style={{ backgroundColor: category.color }}
                  >
                    <img src={category.icon} alt={category.title} className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {t(category.titleKey)}
                  </h3>
                </div>
                <div className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                  {t('categories.viewAll')} →
                </div>
              </div>
              
              {/* Videos Grid */}
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryVideosSorted.slice(0, 4).map((video) => (
                  <VideoCard 
                    key={video.id} 
                    id={video.id}
                    url={video.url} 
                    titleKey={video.titleKey}
                    categoryTitleKey={video.categoryTitleKey}
                    title={video.title}
                    categoryTitle={video.categoryTitle}
                  />
                ))}
              </div>
              
              {/* Show More Button if there are more videos */}
              {categoryVideosSorted.length > 4 && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => handleCategoryClick(category.id, t(category.titleKey))}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {t('categories.viewAll')} {categoryVideosSorted.length - 4} {t('videos.loadMore')}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};