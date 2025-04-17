
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Event } from "@/types/event";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, MapPin } from "lucide-react";

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

  return (
    <Layout>
      <div className="px-4 py-6 max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-6">My Events</h1>
          <div className="flex gap-2">
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
        </div>

        <div className="space-y-6">
          {activeTab === "upcoming" && mockEvents.map((event, index) => (
            <div 
              key={event.id}
              className="relative pl-8 pb-8 last:pb-0 border-l-2 border-[#FF4D9F] last:border-transparent"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#FF4D9F] border-2 border-black" />
              
              {/* Event card */}
              <div className="bg-white rounded-[10px] border-2 border-black shadow-[2px_2px_0_#000] hover:shadow-[4px_4px_0_#000] transition-all duration-200 overflow-hidden transform hover:-translate-y-1">
                <div className="md:flex">
                  <div className="w-full md:w-[200px] h-[120px] md:h-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover border-b-2 md:border-b-0 md:border-r-2 border-black"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

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
      </div>
    </Layout>
  );
};

export default MyEvents;
