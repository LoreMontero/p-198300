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
}

export interface Category {
  id: string;
  name: string;
  active?: boolean;
}
