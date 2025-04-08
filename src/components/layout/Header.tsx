
import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-5 border-b-2 border-b-black border-solid max-sm:flex-col max-sm:gap-5">
      <Link to="/" className="text-2xl font-bold">GATHERU</Link>
      <div className="flex items-center gap-5 max-sm:flex-wrap max-sm:justify-center">
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/" className="text-base">Discover</Link>
            </li>
            <li>
              <button className="text-base">Following</button>
            </li>
            <li>
              <Link to="/leaderboard" className="text-base">Leaderboard</Link>
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
        <button className="text-white bg-[#FF4D9F] px-4 py-2 rounded-[5px] border-2 border-solid border-black">
          Your Events
        </button>
        <div className="w-10 h-10 bg-[#4D9FFD] rounded-[50%] border-2 border-solid border-black" />
      </div>
    </header>
  );
};
