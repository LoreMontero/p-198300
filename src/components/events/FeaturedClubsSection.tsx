
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Club {
  id: string;
  name: string;
  description: string;
  members: number;
  logo: string;
  category: string;
}

interface FeaturedClubsSectionProps {
  clubs: Club[];
}

export const FeaturedClubsSection: React.FC<FeaturedClubsSectionProps> = ({ clubs }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-2">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className="bg-[#4D9FFD] text-white px-2 py-1 -rotate-1 inline-block transform mr-2">
          Featured
        </span> 
        Clubs
      </h2>
      
      <Carousel
        opts={{ align: "start" }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {clubs.map((club) => (
            <CarouselItem 
              key={club.id} 
              className={isMobile ? "pl-4 basis-full sm:basis-1/2" : "pl-4 basis-1/3 md:basis-1/4"}
            >
              <div className="bg-white border-2 border-black shadow-[4px_4px_0_#000] rounded-xl p-4 h-full flex flex-col">
                <div className="flex gap-3 items-center mb-3">
                  <img 
                    src={club.logo} 
                    alt={club.name} 
                    className="w-12 h-12 rounded-full border-2 border-black object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{club.name}</h3>
                    <div className="flex items-center text-xs text-gray-600">
                      <Users className="h-3 w-3 mr-1" />
                      {club.members} members
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">{club.description}</p>
                <button className="mt-auto bg-[#FFDE59] hover:bg-[#FFCC00] text-black font-medium text-sm py-2 px-4 rounded-md border-2 border-black shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] transition-all transform hover:-translate-y-0.5">
                  View Club
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {!isMobile && (
          <>
            <CarouselPrevious className="bg-white border-2 border-black shadow-[2px_2px_0_#000]" />
            <CarouselNext className="bg-white border-2 border-black shadow-[2px_2px_0_#000]" />
          </>
        )}
      </Carousel>
    </div>
  );
};
