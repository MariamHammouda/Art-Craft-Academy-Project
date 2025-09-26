import { useNavigate } from 'react-router-dom';
import { videosData } from '../../mockData/videosData.js';

const CategoryCard = ({ title, icon, color, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Filter videos for this category
    const categoryVideos = videosData.filter(video => video.categoryId === id);
    
    navigate(`/category/${id}`, { 
      state: { 
        categoryTitle: title,
        videos: categoryVideos
      }
    });
  };

  return (
    <div 
      className="flex flex-col items-center text-center min-w-fit cursor-pointer group"
      onClick={handleClick}
    >
      <div
        className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center transition transform group-hover:scale-110"
        style={{ backgroundColor: color }}
      >
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>
      <h3 className="text-sm font-semibold mt-2 text-gray-700 group-hover:text-blue-600 transition-colors">{title}</h3>
    </div>
  );
};

export default CategoryCard;
