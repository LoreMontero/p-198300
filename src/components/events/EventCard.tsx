
import React from "react";
import { Event } from "@/types/event";
import { Award, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  event: Event;
  onJoin?: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onJoin }) => {
  return (
    <div className="border overflow-hidden shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] transition-all duration-200 bg-white rounded-[10px] border-solid border-black flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[140px] object-cover border-b-2 border-b-black"
        />
        <div className="absolute top-3 left-3 text-black text-xs bg-[#FFDE59] px-2 py-1 rounded-[3px] border-solid border border-black shadow-[1px_1px_0_#000] font-medium">
          {event.date} • {event.time}
        </div>
        {event.pointsForAttending && (
          <div className="absolute top-3 right-3 bg-[#FF4D9F] text-white text-xs px-2 py-1 rounded-[3px] border-solid border border-black shadow-[1px_1px_0_#000] flex items-center gap-1 font-medium">
            <Award className="h-3 w-3" />
            {event.pointsForAttending} pts
          </div>
        )}
      </div>
      <div className="p-3 flex-grow">
        <h3 className="text-lg font-bold line-clamp-2 mb-2">{event.title}</h3>
        <div className="flex items-center gap-1 text-xs text-[#8F8F8F] mt-2">
          <img
            src={`https://placehold.co/30x30/47ACDF/FFFFFF?text=${event.organizer.substring(0, 2)}`}
            alt={event.organizer}
            className="w-5 h-5 rounded-full border border-black"
          />
          <span>{event.organizer}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-[#8F8F8F] mt-1">
          <MapPin className="h-3 w-3" />
          <span>{event.location}</span>
        </div>
      </div>
      <div className="flex justify-between items-center p-3 border-t border-t-gray-200">
        <div className="flex items-center gap-1">
          <Users className="h-3.5 w-3.5 text-gray-500" />
          <div className="text-[11px] font-medium">{event.attendees} GOING</div>
        </div>
        
        {event.status === "open" && onJoin ? (
          <Button 
            onClick={onJoin}
            className="bg-[#4D9FFD] hover:bg-[#3A8AE5] text-xs px-3 py-1 h-auto shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] border border-black"
          >
            Join
          </Button>
        ) : (
          <Badge 
            variant={event.status === "open" ? "default" : "secondary"} 
            className={`text-[10px] ${
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
  );
};
