import React from "react";
import { Event } from "@/types/event";
import { EventCard } from "./EventCard";

interface EventGridProps {
  events: Event[];
}

export const EventGrid: React.FC<EventGridProps> = ({ events }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-5 max-md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] max-sm:grid-cols-[1fr]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};
