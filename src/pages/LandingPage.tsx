
import React from "react";
import { Link } from "react-router-dom";
import { EventCard } from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";
import { PointsSystemInfo } from "@/components/points/PointsSystemInfo";
import { Event } from "@/types/event";
import { CalendarCheck, Users, Award } from "lucide-react";

const featuredEvents: Event[] = [
  {
    id: "1",
    title: "Intro To Product Development",
    date: "Aug 25",
    time: "9pm",
    organizer: "McDonalds",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "open",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=250",
    category: "programming",
    pointsForAttending: 15,
  },
  {
    id: "3",
    title: "🧠 AI Beginner Workshop",
    date: "Aug 25",
    time: "9pm",
    organizer: "Spring",
    location: "FIU, PG6 116",
    attendees: 79,
    status: "open",
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
];

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFAFD] to-[#FFF5FA]">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D9F] to-[#FF8DB4]">
            GATHERU
          </span>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" asChild className="border-2 border-black rounded-full px-6 hover:bg-[#f0f0f0]">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild className="bg-[#FF4D9F] hover:bg-[#FF3385] text-white border-2 border-black rounded-full px-6 shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] transition-all duration-200">
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 relative">
            <span className="inline-block animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700 py-2 px-4 border-[3px] border-black rounded-lg shadow-[4px_4px_0_#000]">
              The Hub for University Club
            </span>
          </h1>
          
          <h2 className="text-5xl md:text-6xl font-bold mt-12 mb-16 text-[#FF4D9F] drop-shadow-md animate-bounce">
            Events
          </h2>
          
          {/* Featured Events */}
          <div className="relative my-20">
            <div className="flex justify-center items-center gap-4 perspective-[1000px]">
              {featuredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`transform ${
                    index === 0 ? "-rotate-6 -translate-y-4" : 
                    index === 2 ? "rotate-6 -translate-y-4" : ""
                  } transition-all duration-300 hover:rotate-0 hover:translate-y-0 hover:z-10`}
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 items-center justify-center mt-16 max-w-md mx-auto">
            <Button className="w-full py-6 text-xl bg-[#FF4D9F] hover:bg-[#FF3385] text-white border-2 border-black rounded-lg shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] transition-all duration-200">
              Create Event
            </Button>
            <Button variant="outline" className="w-full py-6 text-xl border-2 border-black rounded-lg shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] transition-all duration-200 hover:bg-[#f0f0f0]">
              Join Event
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white border-t-2 border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join GatherU?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F9F5FF] p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all duration-200">
              <div className="bg-[#4D9FFD] w-12 h-12 rounded-full flex items-center justify-center mb-4 border-2 border-black">
                <CalendarCheck className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Discover Events</h3>
              <p className="text-gray-700">Find and join exciting university events tailored to your interests</p>
            </div>
            
            <div className="bg-[#FFF5FA] p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all duration-200">
              <div className="bg-[#FF4D9F] w-12 h-12 rounded-full flex items-center justify-center mb-4 border-2 border-black">
                <Users className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build Community</h3>
              <p className="text-gray-700">Connect with peers who share your passions and build your network</p>
            </div>
            
            <div className="bg-[#FFFAEC] p-6 rounded-lg border-2 border-black shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] transition-all duration-200">
              <div className="bg-[#FFD166] w-12 h-12 rounded-full flex items-center justify-center mb-4 border-2 border-black">
                <Award className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Earn Points</h3>
              <p className="text-gray-700">Attend events to earn points and climb the leaderboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Points System Info */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <PointsSystemInfo />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">GATHERU</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-[#FF4D9F] transition-colors">Home</Link>
            <Link to="/events" className="hover:text-[#FF4D9F] transition-colors">Events</Link>
            <Link to="/leaderboard" className="hover:text-[#FF4D9F] transition-colors">Leaderboard</Link>
            <Link to="/about" className="hover:text-[#FF4D9F] transition-colors">About</Link>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-400">© 2025 GatherU. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
