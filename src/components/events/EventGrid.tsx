
import React from "react";
import { Event } from "@/types/event";
import { EventCard } from "./EventCard";
import { MobileEventCard } from "./MobileEventCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface EventGridProps {
  events: Event[];
  onJoinEvent?: (eventId: string) => void;
}

export const EventGrid: React.FC<EventGridProps> = ({ events, onJoinEvent }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`
      ${isMobile 
        ? 'flex flex-col gap-4'
        : 'grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6'}
    `}>
      {events.map((event) => (
        isMobile ? (
          <MobileEventCard 
            key={event.id} 
            event={event} 
            onJoin={onJoinEvent ? () => onJoinEvent(event.id) : undefined}
          />
        ) : (
          <EventCard 
            key={event.id} 
            event={event} 
            onJoin={onJoinEvent ? () => onJoinEvent(event.id) : undefined}
          />
        )
      ))}
    </div>
  );
};
