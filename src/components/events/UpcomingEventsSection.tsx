
import React from "react";
import { Event } from "@/types/event";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronRight, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface UpcomingEventsSectionProps {
  events: Event[];
  onJoinEvent: (eventId: string) => void;
}

export const UpcomingEventsSection: React.FC<UpcomingEventsSectionProps> = ({ 
  events,
  onJoinEvent 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="bg-[#FFDE59] text-black px-2 py-1 -rotate-1 inline-block transform mr-2">
            Recommended
          </span> 
          Events
        </h2>
        <button className="flex items-center text-[#FF4D9F] text-sm font-medium">
          View all
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      
      <div className="space-y-4">
        {events.map((event) => (
          <div 
            key={event.id}
            className="flex bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] transition-all overflow-hidden"
          >
            {!isMobile && (
              <div className="w-28 bg-[#FFDE59] border-r-2 border-black flex flex-col items-center justify-center">
                <CalendarDays className="w-6 h-6" />
                <div className="text-lg font-bold mt-1">{event.date}</div>
                <div className="text-sm">{event.time}</div>
              </div>
            )}
            
            <div className="flex flex-1">
              <img 
                src={event.image}
                alt={event.title}
                className="w-24 h-auto object-cover border-r-2 border-black"
              />
              
              <div className="p-3 flex flex-col flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{event.title}</h3>
                    
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
                      <img
                        src={`https://placehold.co/20x20/47ACDF/FFFFFF?text=${event.organizer.substring(0, 2)}`}
                        alt={event.organizer}
                        className="w-5 h-5 rounded-full border border-black"
                      />
                      <span>{event.organizer}</span>
                      {isMobile && (
                        <>
                          <span className="mx-1">•</span>
                          <span className="bg-[#FFDE59] text-black px-1 py-0.5 rounded-sm border border-black text-[10px]">
                            {event.date} • {event.time}
                          </span>
                        </>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => onJoinEvent(event.id)}
                    className="bg-[#4D9FFD] hover:bg-[#3A8AE5] text-white font-medium px-4 py-1 h-auto shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] border-2 border-black transition-all transform hover:-translate-y-0.5"
                  >
                    Join
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
