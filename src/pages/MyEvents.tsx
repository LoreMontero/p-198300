
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { EventGrid } from "@/components/events/EventGrid";
import { Event } from "@/types/event";
import { Button } from "@/components/ui/button";
import { UserPointsDisplay } from "@/components/points/UserPointsDisplay";

// Mock data - in a real app this would come from an API
const mockEvents: Event[] = [
  {
    id: "1",
    title: "FlagOps: Bootcamp",
    date: "Mar 21",
    time: "3:30 PM",
    organizer: "INIT FIU",
    location: "PG5 116",
    attendees: 45,
    status: "open",
    image: "https://placehold.co/400x200/4D9FFD/FFFFFF?text=FlagOps",
    pointsForAttending: 100
  },
  {
    id: "2",
    title: "Build: Mid-Semester Hackathon",
    date: "Mar 7",
    time: "5:00 PM",
    organizer: "INIT FIU",
    location: "PG5-155",
    attendees: 97,
    status: "open",
    image: "https://placehold.co/400x200/FF4D9F/FFFFFF?text=Hackathon",
    pointsForAttending: 200
  }
];

const MyEvents = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const currentPoints = 980; // Mock data - would come from user context/API

  return (
    <Layout>
      <div className="px-1 py-6">
        <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
          <h1 className="text-3xl font-bold">My Events</h1>
          <UserPointsDisplay points={currentPoints} />
        </div>

        <div className="flex gap-2 mb-6">
          <Button
            variant={activeTab === "upcoming" ? "default" : "outline"}
            onClick={() => setActiveTab("upcoming")}
            className={`font-medium ${
              activeTab === "upcoming" 
                ? "bg-[#FF4D9F] hover:bg-[#FF3385] text-white border-2 border-black shadow-[2px_2px_0_#000]" 
                : "border-2 border-black shadow-[2px_2px_0_#000]"
            }`}
          >
            Upcoming
          </Button>
          <Button
            variant={activeTab === "past" ? "default" : "outline"}
            onClick={() => setActiveTab("past")}
            className={`font-medium ${
              activeTab === "past" 
                ? "bg-[#FF4D9F] hover:bg-[#FF3385] text-white border-2 border-black shadow-[2px_2px_0_#000]" 
                : "border-2 border-black shadow-[2px_2px_0_#000]"
            }`}
          >
            Past
          </Button>
        </div>

        <EventGrid 
          events={activeTab === "upcoming" ? mockEvents : []} 
        />

        {activeTab === "upcoming" && mockEvents.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            You haven't RSVPed to any upcoming events yet.
          </div>
        )}

        {activeTab === "past" && (
          <div className="text-center py-12 text-gray-500">
            No past events to show.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MyEvents;
