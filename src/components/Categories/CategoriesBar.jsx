import { categoriesData } from "../../mockData/categoriesData.js";
import CategoryCard from "./CategoryCard.jsx";

const CategoriesBar = () => {
 return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>

      <div className="flex justify-center items-center gap-8 overflow-x-auto">
        {categoriesData.map((cat) => (
          <CategoryCard
            key={cat.id}
            title={cat.title}
            icon={cat.icon}
            color={cat.color}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoriesBar
