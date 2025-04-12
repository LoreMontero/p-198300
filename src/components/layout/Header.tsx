
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";

export const Header: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  const MobileNav = () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-4 pb-8 pt-0">
        <div className="flex justify-end py-2">
          <DrawerClose asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </DrawerClose>
        </div>
        <nav className="flex flex-col items-center gap-6">
          <Link 
            to="/events" 
            className="text-lg font-medium hover:text-[#FF4D9F] transition-colors w-full text-center py-3 border-b border-gray-200"
          >
            Discover
          </Link>
          <button 
            className="text-lg font-medium hover:text-[#FF4D9F] transition-colors w-full text-center py-3 border-b border-gray-200"
          >
            Following
          </button>
          <Link 
            to="/leaderboard" 
            className="text-lg font-medium hover:text-[#FF4D9F] transition-colors w-full text-center py-3 border-b border-gray-200"
          >
            Leaderboard
          </Link>
          <Button className="text-white bg-[#FF4D9F] hover:bg-[#FF3385] px-4 py-2 rounded-[5px] border-2 border-solid border-black shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] transition-all w-full mt-4">
            Your Events
          </Button>
        </nav>
      </DrawerContent>
    </Drawer>
  );

  const MobileSearch = () => (
    <Button 
      variant="ghost" 
      size="icon" 
      className="md:hidden" 
      onClick={() => setSearchOpen(!searchOpen)}
    >
      <Search className="h-6 w-6" />
      <span className="sr-only">Search</span>
    </Button>
  );

  return (
    <header className="flex justify-between items-center p-5 border-b-2 border-b-black border-solid bg-white sticky top-0 z-30">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D9F] to-[#FF8DB4]">
          GATHERU
        </Link>
      </div>

      {isMobile ? (
        <div className="flex items-center gap-3">
          <MobileSearch />
          <MobileNav />
          <div className="w-8 h-8 bg-[#4D9FFD] rounded-[50%] border-2 border-solid border-black" />
        </div>
      ) : (
        <div className="flex items-center gap-5">
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
      )}

      {isMobile && searchOpen && (
        <div className="fixed top-[71px] left-0 right-0 bg-white p-4 border-b-2 border-b-black border-solid z-20 animate-fade-in">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-[5px] border-2 border-solid border-black"
            autoFocus
          />
        </div>
      )}
    </header>
  );
};
