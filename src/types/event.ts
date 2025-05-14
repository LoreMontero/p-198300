
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  organizer: string;
  location: string;
  attendees: number;
  status: "open" | "closed";
  image: string;
  category?: string;
  pointsForAttending?: number;
}

export interface Category {
  id: string;
  name: string;
  active?: boolean;
}

export interface User {
  id: string;
  name: string;
  points: number;
  avatar: string;
  rank?: number;
  eventsAttended?: string[]; // IDs of events the user has attended
}

export interface Club {
  id: string;
  name: string;
  description: string;
  members: number;
  logo: string;
  category: string;
}
