import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// Import gallery images
import drawingImage from '../../assets/images/picture-gallary-images/drawing.jpg';
import origamiImage from '../../assets/images/picture-gallary-images/orgami.jpg';
import preschoolImage from '../../assets/images/picture-gallary-images/preschool.jpg';

const PicturesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  console.log("PicturesPage component loaded!");

  // Picture categories data
  const pictureCategories = [
    {
      id: 1,
      key: 'origamiPaperCrafts',
      color: 'bg-pink-50 border-pink-200 hover:bg-pink-100',
      textColor: 'text-pink-800',
      iconBg: 'bg-pink-100',
      backgroundImage: origamiImage
    },
    {
      id: 2,
      key: 'drawing',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      textColor: 'text-blue-800',
      iconBg: 'bg-blue-100',
      backgroundImage: drawingImage
    },
    {
      id: 3,
      key: 'recyclingArt',
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      textColor: 'text-green-800',
      iconBg: 'bg-green-100'
    },
    {
      id: 4,
      key: 'beadsAccessories',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      textColor: 'text-purple-800',
      iconBg: 'bg-purple-100'
    },
    {
      id: 5,
      key: 'clayCreations',
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      textColor: 'text-orange-800',
      iconBg: 'bg-orange-100'
    },
    {
      id: 6,
      key: 'preschoolCrafts',
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
      textColor: 'text-yellow-800',
      iconBg: 'bg-yellow-100',
      backgroundImage: preschoolImage
    },
    {
      id: 7,
      key: 'perlerBeads',
      color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
      textColor: 'text-indigo-800',
      iconBg: 'bg-indigo-100'
    },
    {
      id: 8,
      key: '3dPenFun',
      color: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
      textColor: 'text-teal-800',
      iconBg: 'bg-teal-100'
    },
    {
      id: 9,
      key: 'miniatureWonders',
      color: 'bg-red-50 border-red-200 hover:bg-red-100',
      textColor: 'text-red-800',
      iconBg: 'bg-red-100'
    },
    {
      id: 10,
      key: 'scienceDiyExperiments',
      color: 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100',
      textColor: 'text-cyan-800',
      iconBg: 'bg-cyan-100'
    },
    {
      id: 11,
      key: 'tipsTricks',
      color: 'bg-gray-50 border-gray-200 hover:bg-gray-100',
      textColor: 'text-gray-800',
      iconBg: 'bg-gray-100'
    }
  ];

  const handleCategoryClick = (categoryId) => {
    navigate(`/pictures/category/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate("/")}
              className="text-[#003FBC] hover:text-[#FCD11A] font-medium transition-colors duration-200"
            >
              ← {t('common.backToHome')}
            </button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('pictures.title')}</h1>
            <p className="text-gray-600 text-lg">{t('pictures.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pictureCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="bg-white border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden h-80 flex flex-col"
            >
              {/* Image Section - أكبر ارتفاع */}
              {category.backgroundImage ? (
                <div className="flex-grow overflow-hidden">
                  <img
                    src={category.backgroundImage}
                    alt={t(`pictures.categories.${category.key}`)}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ) : (
                <div className={`flex-grow ${category.color} flex items-center justify-center`}>
                  <div className={`${category.iconBg} w-20 h-20 rounded-full flex items-center justify-center`}>
                    <div className={`w-10 h-10 ${category.textColor} flex items-center justify-center text-3xl font-bold`}>
                      {category.id}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Text Content في النهاية - ارتفاع ثابت ومضغوط */}
              <div className="p-4 bg-white mt-auto">
                {/* Category Title */}
                <h3 className={`text-lg font-bold ${category.textColor} text-center mb-2`}>
                  {t(`pictures.categories.${category.key}`)}
                </h3>
                
                {/* View Gallery Button */}
                <div className="text-center">
                  <span className={`inline-block px-3 py-1 ${category.textColor} bg-white border-2 border-current rounded-full text-xs font-medium transition-all duration-200 hover:bg-current hover:text-white`}>
                    {t('pictures.viewGallery')}
                  </span>
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
              <div className="inline-flex items-center px-6 py-3 bg-[#003FBC] text-white rounded-lg">
                <span className="mr-2">📸</span>
                Stay tuned for updates!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicturesPage;