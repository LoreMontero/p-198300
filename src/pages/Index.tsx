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
    image: "https://placehold.co/170x99/4D9FFD/4D9FFD",
  },
  {
    id: "2",
    title: "Technical Interview Prep",
    date: "Aug 25",
    time: "9pm",
    organizer: "Hwah Wei",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "closed",
    image: "https://placehold.co/170x99/4D9FFD/4D9FFD",
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
    image: "https://placehold.co/170x99/4D9FFD/4D9FFD",
  },
  {
    id: "4",
    title: "Miami AI Hub Gathering",
    date: "MAR 19",
    time: "6pm",
    organizer: "Beats",
    location: "The Lab Miami",
    attendees: 79,
    status: "closed",
    image: "https://placehold.co/170x99/4D9FFD/4D9FFD",
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
    image: "https://placehold.co/170x99/4D9FFD/4D9FFD",
  },
  {
    id: "6",
    title: "GPT Tuesdays",
    date: "Aug 25",
    time: "9pm",
    organizer: "Starbucks",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "closed",
    image: "https://placehold.co/170x99/4D9FFD/4D9FFD",
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
    image: "https://placehold.co/170x99/4D9FFD/4D9FFD",
  },
  {
    id: "8",
    title: "FlagOps Event",
    date: "Aug 25",
    time: "9pm",
    organizer: "P&G",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "closed",
    image: "https://placehold.co/170x99/4D9FFD/4D9FFD",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(mockEvents);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category.id);
    // In a real application, this would filter based on actual category data
    setFilteredEvents(mockEvents);
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
