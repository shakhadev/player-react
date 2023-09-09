import { createContext, useContext, useState } from "react";
import { Data } from "../mock";
const CategoryContext = createContext();

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(Data[0].musics);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <CategoryContext.Provider
      value={{
        setSelectedCategory,
        selectedCategory,
        handleCategoryClick,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
