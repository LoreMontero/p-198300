
import React from "react";
import { Link } from "react-router-dom";
import { EventCard } from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";
import { PointsSystemInfo } from "@/components/points/PointsSystemInfo";
import { Event } from "@/types/event";
import { CalendarCheck, Users, Award, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-[#FCFCFC]">
      {/* Header */}
      <header className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto z-10 relative">
        <div className="flex items-center gap-3">
          <div className="bg-[#FF4D9F] p-2 rounded-xl rotate-3 border-4 border-black shadow-[6px_6px_0_#000]">
            <span className="text-3xl font-black text-white">
              GATHERU
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" asChild className="border-4 border-black rounded-xl px-6 font-bold hover:bg-[#f0f0f0] hover:-translate-y-1 transition-all duration-200 text-lg">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild className="bg-[#4D9FFD] hover:bg-[#3a8ce9] text-white border-4 border-black rounded-xl px-8 shadow-[6px_6px_0_#000] hover:shadow-[3px_3px_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section with Asymmetric Elements */}
      <section className="py-10 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD166] rounded-full -translate-x-20 -translate-y-20 border-8 border-black"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4D9FFD] rounded-full translate-x-10 translate-y-10 border-8 border-black"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="z-10">
              <h1 className="text-5xl md:text-7xl font-black mb-8 relative text-left leading-tight">
                <span className="inline-block bg-[#FFD166] py-3 px-6 -rotate-2 border-4 border-black shadow-[8px_8px_0_#000] mb-4">
                  The Hub for
                </span>
                <br />
                <span className="inline-block bg-[#FF4D9F] py-3 px-6 text-white rotate-1 border-4 border-black shadow-[8px_8px_0_#000]">
                  University Club
                </span>
                <br />
                <span className="inline-block bg-[#4D9FFD] py-3 px-6 text-white -rotate-1 mt-4 border-4 border-black shadow-[8px_8px_0_#000]">
                  Events
                </span>
              </h1>
              
              <div className="mt-10 z-10 relative">
                <Button className="w-full sm:w-auto py-8 px-10 text-xl bg-black hover:bg-gray-800 text-white rounded-xl border-4 border-[#FFD166] shadow-[8px_8px_0_#FF4D9F] hover:shadow-[4px_4px_0_#FF4D9F] hover:-translate-y-1 transition-all duration-200 font-black uppercase tracking-wider flex items-center gap-4">
                  Join Now <ArrowRight size={24} className="animate-bounce-x" />
                </Button>
              </div>
            </div>
            
            {/* Tilted Cards Stack */}
            <div className="relative h-[450px] hidden md:block">
              {featuredEvents.map((event, index) => (
                <div 
                  key={event.id} 
                  className="absolute top-0 left-0 right-0 transition-all duration-300 hover:-translate-y-2 hover:-rotate-0"
                  style={{ 
                    transform: `rotate(${index === 0 ? '-6deg' : index === 1 ? '0deg' : '6deg'}) 
                                translateY(${index * 20}px)`,
                    zIndex: 3 - index
                  }}
                >
                  <div className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0_#000]">
                    <EventCard event={event} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Bold Geometry */}
      <section className="py-16 px-6 bg-[#FFFAEC] border-y-8 border-black mt-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center relative inline-block bg-white py-4 px-8 rotate-1 border-4 border-black shadow-[6px_6px_0_#000] mx-auto">Why Join GatherU?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl border-4 border-black shadow-[8px_8px_0_#000] hover:-translate-y-2 transition-all duration-300 transform-gpu">
              <div className="bg-[#4D9FFD] w-20 h-20 rounded-xl flex items-center justify-center mb-6 border-4 border-black -rotate-3 shadow-[4px_4px_0_#000]">
                <CalendarCheck className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black mb-4">Discover Events</h3>
              <p className="text-lg">Find and join exciting university events tailored to your interests</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border-4 border-black shadow-[8px_8px_0_#000] hover:-translate-y-2 transition-all duration-300 transform-gpu md:translate-y-6">
              <div className="bg-[#FF4D9F] w-20 h-20 rounded-xl flex items-center justify-center mb-6 border-4 border-black rotate-3 shadow-[4px_4px_0_#000]">
                <Users className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black mb-4">Build Community</h3>
              <p className="text-lg">Connect with peers who share your passions and build your network</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border-4 border-black shadow-[8px_8px_0_#000] hover:-translate-y-2 transition-all duration-300 transform-gpu">
              <div className="bg-[#FFD166] w-20 h-20 rounded-xl flex items-center justify-center mb-6 border-4 border-black -rotate-6 shadow-[4px_4px_0_#000]">
                <Award className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black mb-4">Earn Points</h3>
              <p className="text-lg">Attend events to earn points and climb the leaderboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-6 bg-[#FF4D9F] border-b-8 border-black relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFD166] rounded-full border-4 border-black"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#4D9FFD] rounded-full border-4 border-black opacity-40"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black text-white mb-6 inline-block bg-black py-4 px-8 -rotate-1">Ready to Join?</h2>
          <p className="text-xl text-white font-bold mb-10 bg-black/75 p-4 inline-block">Create your account now and start discovering amazing events!</p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button className="py-6 px-10 text-xl bg-[#FFD166] hover:bg-[#e6bc5c] text-black border-4 border-black rounded-xl shadow-[8px_8px_0_#000] hover:shadow-[4px_4px_0_#000] hover:-translate-y-1 transition-all duration-200 font-black">
              Create Account
            </Button>
            <Button variant="outline" className="py-6 px-10 text-xl bg-white hover:bg-gray-100 border-4 border-black rounded-xl shadow-[8px_8px_0_#000] hover:shadow-[4px_4px_0_#000] hover:-translate-y-1 transition-all duration-200 font-black">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Points System with Quirky Design */}
      <section className="py-20 px-6 bg-[#FCFCFC]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black rounded-xl p-8 shadow-[12px_12px_0_#000] relative">
            <div className="absolute -top-6 -right-6 bg-[#FFD166] w-20 h-20 rotate-12 flex items-center justify-center rounded-xl border-4 border-black">
              <Award className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black mb-8 bg-[#4D9FFD] text-white inline-block py-2 px-4 -rotate-1 border-2 border-black">Points System</h2>
            <PointsSystemInfo />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 border-t-8 border-[#FF4D9F]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-3xl font-black bg-[#FF4D9F] py-2 px-4 rounded-lg rotate-2">GATHERU</div>
            <div className="flex flex-wrap gap-8 justify-center">
              <Link to="/" className="text-lg font-bold hover:text-[#FF4D9F] transition-colors underline underline-offset-4">Home</Link>
              <Link to="/events" className="text-lg font-bold hover:text-[#FF4D9F] transition-colors underline underline-offset-4">Events</Link>
              <Link to="/leaderboard" className="text-lg font-bold hover:text-[#FF4D9F] transition-colors underline underline-offset-4">Leaderboard</Link>
              <Link to="/about" className="text-lg font-bold hover:text-[#FF4D9F] transition-colors underline underline-offset-4">About</Link>
            </div>
            <div className="text-md text-gray-400">© 2025 GatherU. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
