
import React from "react";
import { Event } from "@/types/event";
import { EventCard } from "./EventCard";
import { MobileEventCard } from "./MobileEventCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface EventGridProps {
  events: Event[];
}

export const EventGrid: React.FC<EventGridProps> = ({ events }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`
      ${isMobile 
        ? 'flex flex-col gap-3'
        : 'grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-5 max-md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))]'}
    `}>
      {events.map((event) => (
        isMobile ? (
          <MobileEventCard key={event.id} event={event} />
        ) : (
          <EventCard key={event.id} event={event} />
        )
      ))}
    </div>
  );
};
