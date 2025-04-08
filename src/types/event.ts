
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
}

export interface Category {
  id: string;
  name: string;
  active?: boolean;
}
