import { useTranslation } from 'react-i18next';
import { categoriesData } from "../../mockData/categoriesData.js";
import CategoryCard from "./CategoryCard.jsx";

const CategoriesBar = () => {
  const { t } = useTranslation();
  
  return (
    <section id="categories" className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">{t('categories.title')}</h2>

      <div className="flex justify-center items-center gap-8 overflow-x-auto">
        {categoriesData.map((cat) => (
          <CategoryCard
            key={cat.id}
            id={cat.id}
            titleKey={cat.titleKey}
            icon={cat.icon}
            color={cat.color}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoriesBar
