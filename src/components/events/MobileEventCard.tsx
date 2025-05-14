
import React from "react";
import { Event } from "@/types/event";
import { Award, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MobileEventCardProps {
  event: Event;
  onJoin?: () => void;
}

export const MobileEventCard: React.FC<MobileEventCardProps> = ({ event, onJoin }) => {
  return (
    <div className="border overflow-hidden shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] transition-all duration-200 bg-white rounded-[10px] border-solid border-black flex w-full transform hover:-translate-y-0.5">
      <div className="relative w-[90px] min-w-[90px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover border-r-2 border-r-black"
        />
        {event.pointsForAttending && (
          <div className="absolute top-1 left-1 bg-[#FF4D9F] text-white text-[9px] px-1 py-0.5 rounded-[2px] border-solid border border-black flex items-center gap-0.5 font-medium">
            <Award className="h-2.5 w-2.5" />
            {event.pointsForAttending}
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow p-2">
        <div className="flex justify-between">
          <h3 className="text-base font-bold line-clamp-1">{event.title}</h3>
        </div>
        
        <div className="flex items-center gap-1 text-[10px] text-[#8F8F8F] mt-1">
          <img
            src={`https://placehold.co/20x20/47ACDF/FFFFFF?text=${event.organizer.substring(0, 2)}`}
            alt={event.organizer}
            className="w-4 h-4 rounded-full border border-black"
          />
          <span>{event.organizer}</span>
          <span className="mx-1">•</span>
          <span className="bg-[#FFDE59] text-black text-[9px] px-1 py-0.5 rounded-[2px] border-solid border border-black font-medium">
            {event.date} • {event.time}
          </span>
        </div>
        
        <div className="flex items-center gap-1 text-[10px] text-[#8F8F8F] mt-1">
          <MapPin className="h-3 w-3" />
          <span>{event.location}</span>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3 text-gray-500" />
            <div className="text-[9px] font-medium">{event.attendees} GOING</div>
          </div>
          
          {event.status === "open" && onJoin ? (
            <Button 
              onClick={onJoin}
              className="bg-[#4D9FFD] hover:bg-[#3A8AE5] text-[10px] px-2 py-0.5 h-auto shadow-[1px_1px_0_#000] hover:shadow-[2px_2px_0_#000] border border-black"
            >
              Join
            </Button>
          ) : (
            <Badge 
              variant={event.status === "open" ? "default" : "secondary"} 
              className={`text-[9px] ${
                event.status === "open" 
                  ? "bg-green-500 hover:bg-green-600" 
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              {event.status.toUpperCase()}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};
