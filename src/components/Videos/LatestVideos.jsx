import React from "react";
import { useTranslation } from 'react-i18next';
import { videosData } from "../../mockData/videosData.js";
import VideoCard from "./VideoCard.jsx";

const LatestVideos = () => {
  const { t } = useTranslation();
  const topVideos = [...videosData]
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, 5);

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('videos.latest')}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {topVideos.map((video) => (
            <VideoCard
              key={video.id}
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