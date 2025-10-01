import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

// Import gallery images
import drawingImage from '../../assets/images/picture-gallary-images/drawing.jpg';
import origamiImage from '../../assets/images/picture-gallary-images/orgami.jpg';
import preschoolImage from '../../assets/images/picture-gallary-images/preschool.jpg';
import clayImage from '../../assets/images/picture-gallary-images/clay.jpg';
import beadsAccessoriesImage from '../../assets/images/picture-gallary-images/beads-accessories.jpg';
import recyclingImage from '../../assets/images/picture-gallary-images/recycling.jpg';
import perlerBeadsImage from '../../assets/images/picture-gallary-images/perler-beads.jpg';
import threeDPenImage from '../../assets/images/picture-gallary-images/3D-pen-letters.jpg';
import miniatureWondersImage from '../../assets/images/picture-gallary-images/miniature-wonders.jpg';
import scienceImage from '../../assets/images/picture-gallary-images/science.png';
import tipsTricksImage from '../../assets/images/picture-gallary-images/tips-and-tricks.jpg';

// Import header image (using existing image as placeholder)
import drawingCategoryHeaderImg from '../../assets/images/hero-images/girl.jpg';

const PicturesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("PicturesPage component mounted successfully!");
    console.log("Translation function available:", typeof t);
    console.log("Navigate function available:", typeof navigate);
  }, [t, navigate]);

  // Picture categories data with multiple images for Pinterest-style cards
  const pictureCategories = [
    {
      id: 1,
      key: 'origamiPaperCrafts',
      color: 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      textColor: 'text-pink-800',
      iconBg: 'bg-pink-100',
      backgroundImage: origamiImage,
      images: [origamiImage, drawingImage, clayImage]
    },
    {
      id: 2,
      key: 'drawing',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      textColor: 'text-[#59ACBE]',
      iconBg: 'bg-blue-100',
      backgroundImage: drawingImage,
      images: [drawingImage, origamiImage, perlerBeadsImage]
    },
    {
      id: 3,
      key: 'recyclingArt',
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      textColor: 'text-green-800',
      iconBg: 'bg-green-100',
      backgroundImage: recyclingImage,
      images: [recyclingImage, beadsAccessoriesImage, threeDPenImage]
    },
    {
      id: 4,
      key: 'beadsAccessories',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      textColor: 'text-purple-800',
      iconBg: 'bg-purple-100',
      backgroundImage: beadsAccessoriesImage,
      images: [beadsAccessoriesImage, clayImage, miniatureWondersImage]
    },
    {
      id: 5,
      key: 'clayCreations',
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      textColor: 'text-orange-800',
      iconBg: 'bg-orange-100',
      backgroundImage: clayImage,
      images: [clayImage, preschoolImage, scienceImage]
    },
    {
      id: 6,
      key: 'preschoolCrafts',
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      textColor: 'text-yellow-800',
      iconBg: 'bg-yellow-100',
      backgroundImage: preschoolImage,
      images: [preschoolImage, tipsTricksImage, origamiImage]
    },
    {
      id: 7,
      key: 'perlerBeads',
      color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
      textColor: 'text-indigo-800',
      iconBg: 'bg-indigo-100',
      backgroundImage: perlerBeadsImage,
      images: [perlerBeadsImage, drawingImage, recyclingImage]
    },
    {
      id: 8,
      key: '3dPenFun',
      color: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      textColor: 'text-teal-800',
      iconBg: 'bg-teal-100',
      backgroundImage: threeDPenImage,
      images: [threeDPenImage, beadsAccessoriesImage, clayImage]
    },
    {
      id: 9,
      key: 'miniatureWonders',
      color: 'bg-red-50 border-red-200 hover:bg-red-100',
      textColor: 'text-red-800',
      iconBg: 'bg-red-100',
      backgroundImage: miniatureWondersImage,
      images: [miniatureWondersImage, origamiImage, preschoolImage]
    },
    {
      id: 10,
      key: 'scienceDiyExperiments',
      color: 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      textColor: 'text-cyan-800',
      iconBg: 'bg-cyan-100',
      backgroundImage: scienceImage,
      images: [scienceImage, tipsTricksImage, perlerBeadsImage]
    },
    {
      id: 11,
      key: 'tipsTricks',
      color: 'bg-gray-50 border-gray-200 hover:bg-gray-100',
      textColor: 'text-gray-800',
      iconBg: 'bg-gray-100',
      backgroundImage: tipsTricksImage,
      images: [tipsTricksImage, threeDPenImage, miniatureWondersImage]
    }
  ];

  const handleCategoryClick = (categoryId) => {
    console.log("Category clicked:", categoryId);
    navigate(`/pictures/category/${categoryId}`);
  };

  // Add error handling for rendering
  try {
    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Hero Header with Image */}
      <div className="relative">
        {/* Header Image */}
        <div className="h-80 w-full overflow-hidden relative">
          <img
            src={drawingCategoryHeaderImg}
            alt="Picture Gallery Header"
            className="w-full h-full object-cover scale-125 transform"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        {/* Header Content Over Image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <div className="text-center px-6">
            {/* Content removed as requested */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        {/* Pinterest-style Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {pictureCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="bg-white rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden break-inside-avoid mb-6 border border-gray-200 hover:border-[#59ACBE]"
            >
              {/* Pinterest-style Image Layout */}
              {category.images && category.images.length >= 3 ? (
                <div className="relative">
                  {/* Main large image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={category.images[0]}
                      alt={t(`pictures.categories.${category.key}`)}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Two smaller images side by side */}
                  <div className="flex">
                    <div className="flex-1 relative overflow-hidden">
                      <img
                        src={category.images[1]}
                        alt={t(`pictures.categories.${category.key}`)}
                        className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 relative overflow-hidden">
                      <img
                        src={category.images[2]}
                        alt={t(`pictures.categories.${category.key}`)}
                        className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {/* Overlay with count if more images */}
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">+{category.images.length - 3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Fallback single image */
                <div className="relative overflow-hidden">
                  <img
                    src={category.backgroundImage}
                    alt={t(`pictures.categories.${category.key}`)}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}
              
              {/* Card Footer */}
              <div className="p-4">
                {/* Category Title */}
                <h3 className={`text-lg font-bold ${category.textColor} mb-2`}>
                  {t(`pictures.categories.${category.key}`)}
                </h3>
                
                {/* Category Description */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {t(`pictures.descriptions.${category.key}`) || 'Explore beautiful craft ideas and tutorials'}
                </p>
                
                {/* Stats and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>📸 {category.images?.length || 1} photos</span>
                  </div>
                  <button className={`px-3 py-1 ${category.textColor} bg-transparent border border-current rounded-full text-xs font-medium hover:bg-current hover:text-white transition-all duration-200`}>
                    {t('pictures.viewGallery')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Coming Soon Message */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎨 Picture Gallery Coming Soon!</h3>
            <p className="text-gray-600 leading-relaxed">
              We're currently building an amazing collection of craft pictures for each category. 
              Each gallery will showcase beautiful examples, step-by-step progress photos, and inspiring finished projects 
              from our community of crafters.
            </p>
            <div className="mt-6">
              <div className="inline-flex items-center px-6 py-3 bg-[#59ACBE] text-white rounded-lg">
                <span className="mr-2">📸</span>
                Stay tuned for updates!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  } catch (error) {
    console.error("Error rendering PicturesPage:", error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-4">There was an error loading the Pictures page.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#59ACBE] text-white rounded-lg hover:bg-[#FCD11A] hover:text-[#59ACBE] transition-colors duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }
};

export default PicturesPage;