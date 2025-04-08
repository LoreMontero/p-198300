
import React from "react";
import { Event } from "@/types/event";
import { MapPin, Calendar, Users } from "lucide-react";

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex flex-col border overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1),2px_2px_0_#000] bg-white rounded-[10px] border-solid border-black transition-transform hover:translate-y-[-4px]">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[120px] object-cover border-b-2 border-b-black border-solid"
        />
        <div className="absolute top-2 left-2 text-black text-[10px] font-medium border bg-[#4D9FFD] px-2 py-1 rounded-[4px] border-solid border-black flex items-center gap-1">
          <Calendar size={12} />
          <span>{event.date} - {event.time}</span>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-3">
        <h3 className="text-base font-bold mb-2 line-clamp-2">{event.title}</h3>
        
        <div className="flex flex-col gap-2 mt-1 mb-3">
          <div className="flex items-center gap-2 text-[10px] text-[#6E6E6E]">
            <div className="w-4 h-4 rounded-full bg-[#EFEFEF] flex items-center justify-center overflow-hidden">
              <img
                src={`https://placehold.co/16x16/8F8F8F/FFFFFF?text=${event.organizer.charAt(0)}`}
                alt={event.organizer}
                className="w-4 h-4 object-cover"
              />
            </div>
            <span className="font-medium">{event.organizer}</span>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] text-[#6E6E6E]">
            <MapPin size={12} className="text-[#8F8F8F]" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center p-3 border-t border-solid border-[#EFEFEF] mt-auto">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Users size={12} className="text-[#8F8F8F] mr-1" />
            <div className="text-[10px] font-medium">{event.attendees} GOING</div>
          </div>
        </div>
        <div className={`text-[10px] font-bold ${event.status === "open" ? "text-[#47ACDF]" : "text-[#FD4D50]"} uppercase`}>
          {event.status}
        </div>
      </div>
    </div>
  );
};
