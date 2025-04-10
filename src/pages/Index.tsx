
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CategoryFilter } from "@/components/events/CategoryFilter";
import { EventGrid } from "@/components/events/EventGrid";
import { Category, Event } from "@/types/event";

const categories: Category[] = [
  { id: "all", name: "All", active: true },
  { id: "programming", name: "Programming" },
  { id: "health", name: "Health" },
  { id: "entertainment", name: "Entertainment" },
  { id: "events", name: "Events" },
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

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(mockEvents);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category.id);
    
    if (category.id === "all") {
      setFilteredEvents(mockEvents);
    } else {
      setFilteredEvents(mockEvents.filter(event => event.category === category.id));
    }
  };

  return (
    <Layout>
      <CategoryFilter
        categories={categories.map((cat) => ({
          ...cat,
          active: cat.id === selectedCategory,
        }))}
        onSelect={handleCategorySelect}
      />
      <EventGrid events={filteredEvents} />
    </Layout>
  );
};

export default Index;
