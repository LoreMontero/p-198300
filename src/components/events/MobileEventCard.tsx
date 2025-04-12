
import React from "react";
import { Event } from "@/types/event";
import { Award, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MobileEventCardProps {
  event: Event;
}

export const MobileEventCard: React.FC<MobileEventCardProps> = ({ event }) => {
  return (
    <div className="border overflow-hidden shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] transition-all duration-200 bg-white rounded-[10px] border-solid border-black flex w-full transform hover:-translate-y-0.5">
      <div className="relative w-[100px] min-w-[100px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover border-r-2 border-r-black"
        />
      </div>
      <div className="flex flex-col flex-grow p-3">
        <div className="flex justify-between">
          <h3 className="text-base font-bold line-clamp-1">{event.title}</h3>
          <Badge 
            variant={event.status === "open" ? "default" : "secondary"} 
            className={`text-[10px] ml-2 ${
              event.status === "open" 
                ? "bg-green-500 hover:bg-green-600" 
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          >
            {event.status.toUpperCase()}
          </Badge>
        </div>
        
        <div className="flex items-center gap-1 text-[10px] text-[#8F8F8F] mt-1">
          <img
            src={`https://placehold.co/20x20/47ACDF/FFFFFF?text=${event.organizer.substring(0, 2)}`}
            alt={event.organizer}
            className="w-4 h-4 rounded-full border border-gray-200"
          />
          <span>{event.organizer}</span>
          <span className="mx-1">•</span>
          <span>{event.date} - {event.time}</span>
        </div>
        
        <div className="flex items-center gap-1 text-[10px] text-[#8F8F8F] mt-1">
          <MapPin className="h-3 w-3" />
          <span>{event.location}</span>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5 text-gray-500" />
            <div className="text-[10px]">{event.attendees} GOING</div>
          </div>
          
          {event.pointsForAttending && (
            <div className="bg-yellow-400 text-black text-[10px] px-1.5 py-px rounded-[3px] border-solid border border-black flex items-center gap-1">
              <Award className="h-3 w-3" />
              {event.pointsForAttending} pts
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
