import { useLocation, useNavigate } from 'react-router-dom';
import { videosData } from '../../mockData/videosData.js';

const CategoryCard = ({ title, icon, color, id }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToCategoryPage = () => {
    const categoryVideos = videosData.filter(video => video.categoryId === id);
    navigate(`/category/${id}`, {
      state: {
        categoryTitle: title,
        videos: categoryVideos,
      },
    });
  };

  const scrollToHomeCategory = () => {
    const anchorId = `cat-${id}`;
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      requestAnimationFrame(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
    const el = document.getElementById(anchorId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="flex flex-col items-center text-center min-w-fit group"
    >
      <button
        type="button"
        onClick={scrollToHomeCategory}
        className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center transition transform group-hover:scale-110"
        style={{ backgroundColor: color }}
      >
        <img src={icon} alt={title} className="w-10 h-10" />
      </button>
      <button
        type="button"
        onClick={goToCategoryPage}
        className="text-sm font-semibold mt-2 text-gray-700 group-hover:text-blue-600 transition-colors"
      >
        {title}
      </button>
    </div>
  );
};

export default CategoryCard;
