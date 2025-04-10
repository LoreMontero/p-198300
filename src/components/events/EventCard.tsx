
import React from "react";
import { Event } from "@/types/event";
import { Award, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="border overflow-hidden shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] transition-shadow bg-white rounded-[10px] border-solid border-black flex flex-col h-full">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[99px] object-cover border-b-2 border-b-black"
        />
        <div className="absolute top-2 left-2 text-black text-[10px] bg-[#4D9FFD] px-1.5 py-px rounded-[3px] border-solid border border-black">
          {event.date} - {event.time}
        </div>
        {event.pointsForAttending && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-black text-[10px] px-1.5 py-px rounded-[3px] border-solid border border-black flex items-center gap-1">
            <Award className="h-3 w-3" />
            {event.pointsForAttending} pts
          </div>
        )}
      </div>
      <div className="p-2.5 flex-grow">
        <h3 className="text-base font-bold line-clamp-2">{event.title}</h3>
        <div className="flex items-center gap-1 text-[10px] text-[#8F8F8F] mt-1">
          <img
            src={`https://placehold.co/20x20/47ACDF/FFFFFF?text=${event.organizer.substring(0, 2)}`}
            alt={event.organizer}
            className="w-4 h-4 rounded-full border border-gray-200"
          />
          <span>{event.organizer}</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-[#8F8F8F] mt-1">
          <MapPin className="h-3 w-3" />
          <span>{event.location}</span>
        </div>
      </div>
      <div className="flex justify-between items-center p-2.5 border-t border-t-gray-200">
        <div className="flex items-center gap-1">
          <Users className="h-3.5 w-3.5 text-gray-500" />
          <div className="text-[10px]">{event.attendees} GOING</div>
        </div>
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
      </div>
    </div>
  );
};
