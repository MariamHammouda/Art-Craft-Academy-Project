const CategoryCard = ({ title, icon, color }) => {
  return (
    <div className="flex flex-col items-center text-center min-w-fit">
      <div
        className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-110 cursor-pointer"
        style={{ backgroundColor: color }}
      >
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>
      <h3 className="text-sm font-semibold mt-2 text-gray-700">{title}</h3>
    </div>
  );
};

export default CategoryCard;
