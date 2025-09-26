import React from "react";
import { useTranslation } from 'react-i18next';
import { useLatestVideos } from "../../hooks/useYouTubeVideos.js";
import VideoCard from "./VideoCard.jsx";

const LatestVideos = () => {
  const { t } = useTranslation();
  const { videos, loading, error } = useLatestVideos(5);
  
  const topVideos = [...videos]
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, 5);

  if (loading) {
    return (
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('videos.latest')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-xl animate-pulse">
                <div className="aspect-video bg-gray-300 rounded-t-xl"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('videos.latest')}</h2>
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">{t('common.error')}: {error}</p>
            <p className="text-sm text-gray-400">{t('videos.noVideos')}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('videos.latest')}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {topVideos.map((video) => (
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
      </div>
    </section>
  );
};

export default LatestVideos;