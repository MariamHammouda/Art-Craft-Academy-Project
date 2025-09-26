import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VideoCard from "../Videos/VideoCard.jsx";
import { categoriesData } from "../../mockData/categoriesData.js";

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { categoryTitle, videos } = location.state || {};

  // Find category data for styling
  const categoryData = categoriesData.find(cat => cat.title === categoryTitle);

  if (!categoryTitle || !videos) {
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
          
          <div className="flex items-center gap-6">
            {categoryData && (
              <div
                className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center"
                style={{ backgroundColor: categoryData.color }}
              >
                <img src={categoryData.icon} alt={categoryTitle} className="w-10 h-10" />
              </div>
            )}
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{categoryTitle}</h1>
              <p className="text-gray-600 mt-2">{videos.length} videos available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard 
              key={video.id} 
              url={video.url} 
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