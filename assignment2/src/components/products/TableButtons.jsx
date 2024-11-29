import React from "react";
// import { useNavigate } from "react-router";
import { GiLipstick, GiPerfumeBottle, GiSofa, GiBeachBag, GiCeilingLight, GiCogLock } from "react-icons/gi";


const btnConfig = {
  beauty: { component: GiLipstick },
  fragrance: { component: GiPerfumeBottle },
  furniture: { component: GiSofa },
  groceries: { component: GiBeachBag },
  "home-decoration": { component: GiCeilingLight },
};

const TableButtons = ({categories, selectedCategory, onCategoryChange}) => {
  return (
    <div className="flex justify-start items-center">
      {categories.slice(0, 5).map((category) => {
        
        const Icon = btnConfig[category.slug]?.component || GiCogLock; 

        return (
          <button
            key={category.slug}
            onClick={() => onCategoryChange(category.slug)}
            className={`px-4 py-2 m-2 rounded-md ${
              selectedCategory === category.slug ? "bg-indigo-700 text-white" : "bg-[#D4D8E5]"
            }`}
          >
            <Icon className="inline-block mr-2" /> 
            {category.name}
          </button>
        );
      })}
      <button
        onClick={()=> onCategoryChange(null)}
        className="px-4 py-2 m-2 rounded-md bg-red-300 text-white"
      >
        Clear
      </button>
      <button 
        
        className="px-4 py-2 m-2 rounded-md bg-lime-400 text-white"
      >
        Add
      </button>
    </div>
  );
};

export default TableButtons;
