
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Grid2x2, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Define the club category type
interface ClubCategory {
  id: string;
  name: string;
  description: string;
  iconColor: string;
  backgroundColor: string;
  count: number;
}

interface ClubCategoriesSectionProps {
  categories: ClubCategory[];
}

export const ClubCategoriesSection: React.FC<ClubCategoriesSectionProps> = ({ categories }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-6">
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="bg-[#9b87f5] text-white px-2 py-1 -rotate-1 inline-block transform mr-2">
            Explore
          </span> 
          Club Categories
        </h2>
        <Link to="/clubs" className="text-[#9b87f5] text-sm font-medium">
          View all
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="relative flex flex-col border-2 border-black shadow-[4px_4px_0_#000] rounded-xl p-4 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] cursor-pointer"
            style={{ backgroundColor: category.backgroundColor }}
          >
            <div className="flex items-center justify-between mb-2">
              <div 
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center" 
                style={{ backgroundColor: category.iconColor }}
              >
                <Grid2x2 className="text-white" size={20} />
              </div>
              <div className="flex items-center text-xs gap-1 bg-black text-white px-2 py-1 rounded-full">
                <Users size={12} />
                <span>{category.count}</span>
              </div>
            </div>
            
            <h3 className="font-bold text-black mt-1">{category.name}</h3>
            <p className="text-sm text-gray-800 mt-1 line-clamp-2">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
