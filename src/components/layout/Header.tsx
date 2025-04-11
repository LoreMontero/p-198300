
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-5 border-b-2 border-b-black border-solid bg-white max-sm:flex-col max-sm:gap-5">
      <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D9F] to-[#FF8DB4]">
        GATHERU
      </Link>
      <div className="flex items-center gap-5 max-sm:flex-wrap max-sm:justify-center">
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/events" className="text-base hover:text-[#FF4D9F] transition-colors">Discover</Link>
            </li>
            <li>
              <button className="text-base hover:text-[#FF4D9F] transition-colors">Following</button>
            </li>
            <li>
              <Link to="/leaderboard" className="text-base hover:text-[#FF4D9F] transition-colors">Leaderboard</Link>
            </li>
          </ul>
        </nav>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-[5px] border-2 border-solid border-black"
          />
        </div>
        <Button className="text-white bg-[#FF4D9F] hover:bg-[#FF3385] px-4 py-2 rounded-[5px] border-2 border-solid border-black shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] transition-all">
          Your Events
        </Button>
        <div className="w-10 h-10 bg-[#4D9FFD] rounded-[50%] border-2 border-solid border-black" />
      </div>
    </header>
  );
};
