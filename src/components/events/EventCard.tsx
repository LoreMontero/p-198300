import React from "react";
import { Event } from "@/types/event";

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="border overflow-hidden shadow-[2px_2px_0_#000] bg-white rounded-[10px] border-solid border-black">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[99px] object-cover border-b-2 border-b-black border-solid"
      />
      <div className="text-black text-[10px] border relative top-[-67px] bg-[#4D9FFD] px-1.5 py-px rounded-[3px] border-solid border-black left-2.5">
        {event.date} - {event.time}
      </div>
      <div className="text-base font-bold mt-[-50px] px-2.5 py-0">
        {event.title}
      </div>
      <div className="flex items-center gap-1 text-[10px] text-[#8F8F8F] mt-1 px-2.5 py-0">
        <img
          src="https://placehold.co/12x12/8F8F8F/8F8F8F"
          alt="Organizer"
          className="w-3 h-3"
        />
        <span>{event.organizer}</span>
      </div>
      <div className="flex items-center gap-1 text-[10px] text-[#8F8F8F] mt-1 px-2.5 py-0">
        <i className="ti ti-map-pin" />
        <span>{event.location}</span>
      </div>
      <div className="flex justify-between items-center p-2.5 border-t-[#eee] border-t border-solid">
        <div className="flex items-center gap-1">
          <div className="flex">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src="https://placehold.co/12x12/8F8F8F/8F8F8F"
                alt="Attendee"
                className="w-3 h-3 -mr-1 rounded-[50%] border-[0.5px] border-solid border-black"
              />
            ))}
          </div>
          <div className="text-[10px]">{event.attendees} GOING</div>
        </div>
        <div className="text-[#FD4D50] text-[10px]">{event.status}</div>
      </div>
    </div>
  );
};
