import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CategoryFilter } from "@/components/events/CategoryFilter";
import { EventGrid } from "@/components/events/EventGrid";
import { FeaturedClubsSection } from "@/components/events/FeaturedClubsSection";
import { UpcomingEventsSection } from "@/components/events/UpcomingEventsSection";
import { ClubCategoriesSection } from "@/components/clubs/ClubCategoriesSection";
import { Category, Event } from "@/types/event";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const categories: Category[] = [
  { id: "all", name: "All", active: true },
  { id: "programming", name: "Programming" },
  { id: "health", name: "Health" },
  { id: "entertainment", name: "Entertainment" },
  { id: "events", name: "Events" },
];

// Mock club categories data
const clubCategories = [
  {
    id: "tech",
    name: "Technology",
    description: "Clubs focused on software, AI, and emerging technologies",
    iconColor: "#4D9FFD",
    backgroundColor: "#E5DEFF",
    count: 15
  },
  {
    id: "health",
    name: "Health & Wellness",
    description: "Fitness, nutrition, and mental health focused groups",
    iconColor: "#33C3F0",
    backgroundColor: "#D3E4FD",
    count: 8
  },
  {
    id: "creative",
    name: "Creative Arts",
    description: "Music, design, photography, and other creative pursuits",
    iconColor: "#FF4D9F",
    backgroundColor: "#FFDEE2",
    count: 12
  },
  {
    id: "business",
    name: "Business",
    description: "Entrepreneurship, finance, and professional development",
    iconColor: "#F97316",
    backgroundColor: "#FEC6A1",
    count: 10
  },
  {
    id: "social",
    name: "Social Impact",
    description: "Community service and volunteer organizations",
    iconColor: "#7E69AB",
    backgroundColor: "#F1F0FB",
    count: 6
  },
  {
    id: "academic",
    name: "Academic",
    description: "Study groups and academic interest organizations",
    iconColor: "#D946EF",
    backgroundColor: "#E5DEFF",
    count: 9
  }
];

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Intro To Product Development",
    date: "Aug 25",
    time: "9pm",
    organizer: "McDonalds",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "closed",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=250",
    category: "programming",
    pointsForAttending: 15,
  },
  {
    id: "2",
    title: "Technical Interview Prep",
    date: "Aug 25",
    time: "9pm",
    organizer: "Hwah Wei",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "open",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=250",
    category: "programming",
    pointsForAttending: 20,
  },
  {
    id: "3",
    title: "🧠 AI Beginner Workshop",
    date: "Aug 25",
    time: "9pm",
    organizer: "Spring",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "closed",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&h=250",
    category: "programming",
    pointsForAttending: 25,
  },
  {
    id: "4",
    title: "Miami AI Hub Gathering",
    date: "MAR 19",
    time: "6pm",
    organizer: "Beats",
    location: "The Lab Miami",
    attendees: 79,
    status: "open",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&h=250",
    category: "entertainment",
    pointsForAttending: 10,
  },
  {
    id: "5",
    title: "Just Building in Miami",
    date: "Aug 25",
    time: "9pm",
    organizer: "North Face",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "closed",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&h=250",
    category: "events",
    pointsForAttending: 15,
  },
  {
    id: "6",
    title: "GPT Tuesdays",
    date: "Aug 25",
    time: "9pm",
    organizer: "Starbucks",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "open",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=250",
    category: "programming",
    pointsForAttending: 20,
  },
  {
    id: "7",
    title: "INIT BUILD Hackathon",
    date: "Aug 25",
    time: "9pm",
    organizer: "Panda Express",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "closed",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=250",
    category: "health",
    pointsForAttending: 30,
  },
  {
    id: "8",
    title: "FlagOps Event",
    date: "Aug 25",
    time: "9pm",
    organizer: "P&G",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "open",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&h=250",
    category: "events",
    pointsForAttending: 15,
  },
];

const featuredClubs = [
  {
    id: "club1",
    name: "AI Pioneers",
    description: "Exploring artificial intelligence frontiers",
    members: 234,
    logo: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=200&h=200",
    category: "programming",
  },
  {
    id: "club2",
    name: "HealthTech",
    description: "Innovation in healthcare technology",
    members: 156,
    logo: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=200&h=200",
    category: "health",
  },
  {
    id: "club3",
    name: "Creative Minds",
    description: "For artists and creative thinkers",
    members: 312,
    logo: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=200&h=200",
    category: "entertainment",
  },
  {
    id: "club4",
    name: "Tech Meetups",
    description: "Regular technology networking events",
    members: 189,
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=200&h=200",
    category: "events",
  },
];

const upcomingEvents = mockEvents.filter(event => event.status === "open").slice(0, 3);

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(mockEvents);
  const isMobile = useIsMobile();

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category.id);
    
    if (category.id === "all") {
      setFilteredEvents(mockEvents);
    } else {
      setFilteredEvents(mockEvents.filter(event => event.category === category.id));
    }
  };

  const handleJoinEvent = (eventId: string) => {
    toast({
      title: "Joined event!",
      description: "You've successfully joined this event.",
    });
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black tracking-tight">
            <span className="bg-[#FF4D9F] text-white px-2 py-1 rotate-1 inline-block transform">
              DISCOVER
            </span> EVENTS
          </h1>
          <p className="text-gray-600 max-w-xl">
            Find the best tech events and communities in your area
          </p>
        </div>
        
        {/* Featured Clubs Section */}
        <FeaturedClubsSection clubs={featuredClubs} />
        
        {/* Club Categories Section */}
        <ClubCategoriesSection categories={clubCategories} />
        
        {/* Upcoming Events Section */}
        <UpcomingEventsSection events={upcomingEvents} onJoinEvent={handleJoinEvent} />
        
        {/* All Events Section */}
        <div className="pt-4">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl font-bold">Browse All Events</h2>
            <button className="text-[#FF4D9F] text-sm font-medium">View all</button>
          </div>
          
          <CategoryFilter
            categories={categories.map((cat) => ({
              ...cat,
              active: cat.id === selectedCategory,
            }))}
            onSelect={handleCategorySelect}
          />
          
          <div className="mt-6">
            <EventGrid events={filteredEvents} onJoinEvent={handleJoinEvent} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
