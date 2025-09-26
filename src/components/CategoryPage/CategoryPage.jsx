import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import VideoCard from "../Videos/VideoCard.jsx";
import { categoriesData } from "../../mockData/categoriesData.js";
import { videosData } from "../../mockData/videosData.js";

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id: idParam } = useParams();
  const { categoryTitle: stateTitle, videos: stateVideos } = location.state || {};

  const resolvedCategory = (() => {
    // First try to find by translated title (stateTitle is now the translated title)
    if (stateTitle) {
      return categoriesData.find(c => t(c.titleKey) === stateTitle);
    }
    // Fallback to finding by ID
    const idNum = Number(idParam);
    return categoriesData.find(c => c.id === idNum);
  })();

  const resolvedVideos = stateVideos && stateVideos.length
    ? stateVideos
    : (() => {
        if (!resolvedCategory) return [];
        return videosData.filter(v => v.categoryId === resolvedCategory.id);
      })();

  // Find category data for styling
  const categoryData = resolvedCategory;

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate("/")}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </button>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow flex items-center justify-center"
                style={{ backgroundColor: categoryData.color }}
              >
                <img src={categoryData.icon} alt={t(categoryData.titleKey)} className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                {t(categoryData.titleKey)}
              </h1>
            </div>
            <p className="text-gray-600 text-lg">
              Explore creative {t(categoryData.titleKey).toLowerCase()} tutorials
              <span className="hidden sm:inline"> for all ages!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...resolvedVideos]
            .sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
            .map((video) => (
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
    </div>
  );
};

export default CategoryPage;