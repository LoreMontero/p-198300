
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
    <div className="flex gap-3 mb-5 overflow-x-auto pb-2 no-scrollbar">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category)}
          className={`
            px-4 py-2 rounded-[5px] border-2 border-solid border-black transition-all
            whitespace-nowrap font-semibold min-w-[80px]
            ${category.active 
              ? "bg-[#4D9FFD] text-white shadow-[4px_4px_0_#000] -translate-y-1" 
              : "bg-white shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] hover:-translate-y-0.5"}
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
