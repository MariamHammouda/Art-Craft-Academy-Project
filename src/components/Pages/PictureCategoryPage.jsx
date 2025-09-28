import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// Import gallery images
import drawingImage from '../../assets/images/picture-gallary-images/drawing.jpg';
import origamiImage from '../../assets/images/picture-gallary-images/orgami.jpg';
import preschoolImage from '../../assets/images/picture-gallary-images/preschool.jpg';

// Import drawing gallery images
import drawingImg1 from '../../assets/images/picture-gallary-images/drawing-images/img1.jpg';
import drawingImg2 from '../../assets/images/picture-gallary-images/drawing-images/img2.jpg';
import drawingImg3 from '../../assets/images/picture-gallary-images/drawing-images/img3.jpg';
import drawingImg4 from '../../assets/images/picture-gallary-images/drawing-images/img4.jpg';
import drawingImg5 from '../../assets/images/picture-gallary-images/drawing-images/img5.jpg';
import drawingImg6 from '../../assets/images/picture-gallary-images/drawing-images/img6.jpg';
import drawingImg7 from '../../assets/images/picture-gallary-images/drawing-images/img7.jpg';
import drawingImg8 from '../../assets/images/picture-gallary-images/drawing-images/img8.jpg';

const PictureCategoryPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { categoryId } = useParams();

  // Picture categories data (same as in PicturesPage for consistency)
  const pictureCategories = [
    { id: 1, key: 'origamiPaperCrafts', color: 'bg-pink-50', textColor: 'text-pink-800', backgroundImage: origamiImage },
    { id: 2, key: 'drawing', color: 'bg-blue-50', textColor: 'text-blue-800', backgroundImage: drawingImage },
    { id: 3, key: 'recyclingArt', color: 'bg-green-50', textColor: 'text-green-800' },
    { id: 4, key: 'beadsAccessories', color: 'bg-purple-50', textColor: 'text-purple-800' },
    { id: 5, key: 'clayCreations', color: 'bg-orange-50', textColor: 'text-orange-800' },
    { id: 6, key: 'preschoolCrafts', color: 'bg-yellow-50', textColor: 'text-yellow-800', backgroundImage: preschoolImage },
    { id: 7, key: 'perlerBeads', color: 'bg-indigo-50', textColor: 'text-indigo-800' },
    { id: 8, key: '3dPenFun', color: 'bg-teal-50', textColor: 'text-teal-800' },
    { id: 9, key: 'miniatureWonders', color: 'bg-red-50', textColor: 'text-red-800' },
    { id: 10, key: 'scienceDiyExperiments', color: 'bg-cyan-50', textColor: 'text-cyan-800' },
    { id: 11, key: 'tipsTricks', color: 'bg-gray-50', textColor: 'text-gray-800' }
  ];

  // Drawing gallery images data
  const drawingGalleryImages = [
    { id: 1, title: 'Drawing Art 1', url: drawingImg1, description: 'Beautiful drawing artwork' },
    { id: 2, title: 'Drawing Art 2', url: drawingImg2, description: 'Creative drawing piece' },
    { id: 3, title: 'Drawing Art 3', url: drawingImg3, description: 'Artistic drawing creation' },
    { id: 4, title: 'Drawing Art 4', url: drawingImg4, description: 'Stunning drawing work' },
    { id: 5, title: 'Drawing Art 5', url: drawingImg5, description: 'Amazing drawing art' },
    { id: 6, title: 'Drawing Art 6', url: drawingImg6, description: 'Wonderful drawing piece' },
    { id: 7, title: 'Drawing Art 7', url: drawingImg7, description: 'Impressive drawing artwork' },
    { id: 8, title: 'Drawing Art 8', url: drawingImg8, description: 'Excellent drawing creation' }
  ];

  // Find the current category
  const currentCategory = pictureCategories.find(cat => cat.id === parseInt(categoryId));

  // If category not found, show error
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <button
            onClick={() => navigate("/pictures")}
            className="px-6 py-3 bg-[#003FBC] text-white rounded-lg hover:bg-[#FCD11A] hover:text-[#003FBC] transition-colors duration-200"
          >
            {t('pictures.backToPictures')}
          </button>
        </div>
      </div>
    );
  }

  // Get images based on category
  const getImagesForCategory = () => {
    if (currentCategory.id === 2) { // Drawing category
      return drawingGalleryImages;
    }
    // For other categories, use placeholder images
    return Array.from({ length: 12 }, (_, index) => ({
      id: index + 1,
      title: `${t(`pictures.categories.${currentCategory.key}`)} ${index + 1}`,
      url: `https://via.placeholder.com/300x300/e2e8f0/64748b?text=${encodeURIComponent(t(`pictures.categories.${currentCategory.key}`))}+${index + 1}`,
      description: `Beautiful example of ${t(`pictures.categories.${currentCategory.key}`).toLowerCase()}`
    }));
  };

  const galleryImages = getImagesForCategory();

  return (
    <div className={`min-h-screen ${currentCategory.color}`}>
      {/* Header */}
      <div>
        {/* Image Section */}
        {currentCategory.backgroundImage && (
          <div className="h-80 w-full overflow-hidden">
            <img
              src={currentCategory.backgroundImage}
              alt={t(`pictures.categories.${currentCategory.key}`)}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Text Content Below Image */}
        <div className={`${currentCategory.backgroundImage ? 'bg-white' : currentCategory.color} shadow-sm`}>
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => navigate("/pictures")}
                className="text-[#003FBC] hover:text-[#FCD11A] font-medium transition-colors duration-200"
              >
                ← {t('pictures.backToPictures')}
              </button>
            </div>
            
            <div className="text-center">
              <h1 className={`text-4xl font-bold ${currentCategory.textColor} mb-4`}>
                {t(`pictures.categories.${currentCategory.key}`)}
              </h1>
              <p className="text-gray-600 text-lg">
                {t(`pictures.descriptions.${currentCategory.key}`)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Image Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Images Message (only for categories without real images) */}
        {currentCategory.id !== 2 && (
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t(`pictures.categories.${currentCategory.key}`)} Gallery
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('pictures.noImages')}
              </p>
              <p className="text-sm text-gray-500">
                The placeholder images above show what the gallery will look like once we add real craft pictures for this category.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <button
                  onClick={() => navigate("/pictures")}
                  className="px-6 py-3 bg-[#003FBC] text-white rounded-lg hover:bg-[#FCD11A] hover:text-[#003FBC] transition-colors duration-200"
                >
                  {t('pictures.backToPictures')}
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-3 border-2 border-[#003FBC] text-[#003FBC] rounded-lg hover:bg-[#003FBC] hover:text-white transition-colors duration-200"
                >
                  {t('common.backToHome')}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Real Images Message (for Drawing category) */}
        {currentCategory.id === 2 && (
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Amazing Drawing Gallery!
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Explore our beautiful collection of drawing artworks. Each piece showcases creativity, skill, and artistic expression.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <button
                  onClick={() => navigate("/pictures")}
                  className="px-6 py-3 bg-[#003FBC] text-white rounded-lg hover:bg-[#FCD11A] hover:text-[#003FBC] transition-colors duration-200"
                >
                  {t('pictures.backToPictures')}
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-3 border-2 border-[#003FBC] text-[#003FBC] rounded-lg hover:bg-[#003FBC] hover:text-white transition-colors duration-200"
                >
                  {t('common.backToHome')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PictureCategoryPage;
