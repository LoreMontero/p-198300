import React from "react";
import { Category } from "@/types/event";

interface CategoryFilterProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  onSelect,
}) => {
  return (
    <div className="flex gap-5 mb-5 max-sm:flex-wrap max-sm:justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category)}
          className={`bg-white px-4 py-2 rounded-[5px] border-2 border-solid border-black ${
            category.active ? "bg-[#4D9FFD] text-white" : ""
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
