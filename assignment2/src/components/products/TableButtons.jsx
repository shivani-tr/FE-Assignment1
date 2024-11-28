import React from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory, resetProducts } from "../../store/reducers/productSlice.js";
import { GiLipstick, GiPerfumeBottle, GiSofa, GiBeachBag, GiCeilingLight, GiCogLock } from "react-icons/gi";


const btnConfig = {
  beauty: { component: GiLipstick },
  fragrance: { component: GiPerfumeBottle },
  furniture: { component: GiSofa },
  groceries: { component: GiBeachBag },
  "home-decoration": { component: GiCeilingLight },
};

const TableButtons = () => {
  
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const selectedCategory = useSelector((state) => state.product.selectedCategory);

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    debugger;
    dispatch(setSelectedCategory(category));
    navigate(`/products?category=${category}`)
  };

  const handleReset = () => {
    dispatch(resetProducts());
    dispatch(setSelectedCategory(null));
  };

  return (
    <div className="flex justify-start items-center">
      {categories.slice(0, 5).map((category) => {
        
        const Icon = btnConfig[category.slug]?.component || GiCogLock; 

        return (
          <button
            key={category.slug}
            onClick={() => handleCategoryClick(category.slug)}
            className={`px-4 py-2 m-2 rounded-md hover:bg-indigo-300 ${
              selectedCategory === category.slug ? "bg-indigo-700 text-white" : "bg-[#D4D8E5]"
            }`}
          >
            <Icon className="inline-block mr-2" /> 
            {category.name}
          </button>
        );
      })}
      <button
        onClick={handleReset}
        className="px-4 py-2 m-2 rounded-md bg-red-300 text-white"
      >
        Clear
      </button>
    </div>
  );
};

export default TableButtons;
